import * as TSA from 'ts-simple-ast'
import * as util from 'util'
import * as Stylis from 'stylis'
import * as fs from 'fs-extra'
import * as path from 'path'
import * as watch from 'glob-watcher'
const tsconfigFile = process.argv.find(arg => arg.endsWith('.json') && arg.includes('tsconfig')) as string

function fatalError(...args: any[]) {
  console.error(...args)
  process.exit(0)
}
if (!tsconfigFile) {
  fatalError('You forgot to provide tsconfig.json!')
}

const tsConfig = eval(`(${fs.readFileSync(tsconfigFile)})`)
const tsxFiles = [] as string[]
tsConfig.include.forEach((file: string) => {
  if(file.endsWith('.ts')) {
    tsxFiles.push(file.replace(/\.ts$/, '.tsx'))
  } else if (file.endsWith('.tsx')) {
    tsxFiles.push(file)
  } else {
    tsxFiles.push(path.join(file, '**', '*.tsx'))
  }
})
// initialize
const tsa = new TSA.default({
  tsConfigFilePath: tsconfigFile,
  addFilesFromTsConfig: true
})

tsa.addExistingSourceFiles(tsxFiles)

function slug(name: string) {
  return name.replace(/([A-Z])/g, (_, g) => '-' + g.toLowerCase())
}
function deSlug(name: string) {
  return name.replace(/-([a-z])/g, (_, g) => g.toUpperCase())
}

function prettyPrint(x: any) {
  let opts = { depth: null, colors: true }
  let s = util.inspect(x, opts)
  console.log(s)
}
function compileStyle(style: string) {
  style = trimBrace(Stylis('', style))
  style = style.replace(/-ms-[^;]+(?:;|$)/g, '')
  return style
}

function findByKind(node: TSA.Node, kind: TSA.SyntaxKind) {
  function find(node: TSA.Node, acc: TSA.Node[]) {
    if (node.getKind() === kind) {
      acc.push(node)
    } else {
      for (const child of node.getChildren()) {
        find(child, acc)
      }
    }
  }
  let acc = [] as TSA.Node[]
  find(node, acc)
  return acc
}

function findOneByKind(node: TSA.Node, kind: TSA.SyntaxKind) {
  function find(node: TSA.Node): TSA.Node | void {
    if (node.getKind() === kind) {
      return node
    } else {
      for (const child of node.getChildren()) {
        const ret = find(child)
        if (ret) {
          return ret
        }
      }
    }
  }
  return find(node)
}

function iterNode(node: TSA.Node, fn: ((n: TSA.Node) => void)) {
  fn(node)
  node.getChildren().forEach(node => iterNode(node, fn))
}

function trimBrace(text: string) {
  return text.replace(/^\{+|\}+$/g, '')
}

function prettyError(str: string, node: TSA.Node, root: TSA.Node) {
  console.error(
    new Error(`JSXCompileError: line:${node.getStartLineNumber()}  message: ${str}`),
    node.compilerNode.getFullText()
  )
  process.exit(1)
}

interface Module {
  importName: string
  realName: string
  file: string
  type: 'default' | 'namespace' | 'named'
}

type ValueExprType = 'object' | 'any'

class JsxCompiler {
  private _root: TSA.JsxElement
  private _modules: Module[]
  private _propName: string
  private _usedModules: Module[] = []
  constructor(node: TSA.JsxElement, modules: Module[], propName: string) {
    this._root = node
    this._modules = modules
    this._propName = propName
  }

  getText() {
    return this._root.getText()
  }

  getUseModules() {
    return this._usedModules
  }

  compileJsxExpression(exp: TSA.JsxExpression): { value: string, type: ValueExprType } {
    let value = exp.getText().slice(1, -1)
    let m = value.match(/^\`(.*)\`$/)
    let type = 'any' as ValueExprType
    if (m) { // es6 template string
      return {
        value: value.slice(1, -1).replace(/\$\{(.*?)\}/g, `{{$1}}`),
        type,
      }
    } else { // expression
      value = value
        .replace(/^this\./, '')
        .replace(/^this\.data\./, '')
      if (this._propName) {
        value = value.replace(new RegExp('^' + this._propName + '.'), '')
      }
      if (value[0] === '{' && value.slice(-1) === '}') { // object literal
        value = value.slice(1, -1)
        type = 'object'
      }
    }
    if (value.includes('`')) {
      console.error(
        new Error(`JSXExpression cannot contains '\`' in sub code: ${exp.getText()}`),
        TSA.printNode(this._root as any)
      )
      process.exit(1)
    }
    return {
      value: `{{${value}}}`,
      type
    }
  }

  importedCompContainsChildError(node: TSA.JsxOpeningElement | TSA.JsxSelfClosingElement) {
    if (TSA.TypeGuards.isJsxOpeningElement(node)) {
      prettyError(
        `Imported component cannot contains children: ${node.getTagName().getText()}`,
        node,
        this._root
      )
    }
  }

  compileJsxAttr(attr: TSA.JsxAttribute, events: string[]): [string, string, ValueExprType] {
    let initer = attr.getInitializer()
    let value = ''
    let type = 'any' as ValueExprType
    if (!initer) {
      // empty
      value = '{{true}}'
    } else if (TSA.TypeGuards.isStringLiteral(initer)) {
      // string
      value = initer.getText().slice(1, -1)
    } else {
      // expression
      const result = this.compileJsxExpression(initer)
      value = result.value
      type = result.type
    }
    if (value.indexOf('"') >= 0) {
      prettyError(`Attribute expression cannot contains '"': ${attr.getText()}`, attr, this._root)
    }
    let name = attr
      .getName()
      .replace(/^wx([A-Z])/, (_, g) => `wx:${g.toLowerCase()}`)
      .replace(/^(on|bind)([A-Z])/, (_, g) => `bind${g.toLowerCase()}`)
      .replace(/^(catch)([A-Z])/, (_, g) => `catch${g.toLowerCase()}`)
    name = slug(name)
    if (name === 'className') {
      name = 'class'
    }
    if (name.startsWith('bind') || name.startsWith('catch')) {
      value = 'handlerWidgetsEvent'
      events.push(`event: '${name.slice(4)}', key: __parentKey, handler: '${value}' `)
    } else if (name === 'style') {
      value = compileStyle(value.replace(/\{\{(.*?)\}\}/g, '__$1__'))
      value = value.replace(/__(.*?)__/g, '{{$1}}')
    } else if (name === 'class') {
      const classMatch = value.match(/^\{\{(.*?)\}\}$/)
      if (classMatch) {
        value = classMatch[1].replace(/^[^\.]*\./, '')
      }
    } else if (name === 'wx:for-item') {
      value = trimBrace(value)
    }
    return [name, value, type]
  }

  compileSubCompAttrs(attrs: TSA.JsxAttributeLike[]) {
    let attrsStr = ''
    let events = [] as string[]
    let attr = attrs[0]
    if (!attr) {
      return ''
    }
    attrs.forEach(attr => {
      if (TSA.TypeGuards.isJsxAttribute(attr)) {
        let [name, value, type] = this.compileJsxAttr(attr, events)
        value = trimBrace(value)
        if (type === 'object') {
          value = value.slice(1, -1)
        } else {
          value = value.replace(/\{\{(.*?)\}\}/g, `' + $1 + '`)
        }
        attrsStr += `${name}: ${value}, `
      } else if (TSA.TypeGuards.isJsxSpreadAttribute(attr)) {
        attrsStr += `...${attr.getExpression().getText()}, `
      }
    })
    if (events.length) {
      const [name, value] = this.getEventsAttr(events)
      attrsStr += `${name}: ${value},`
    }
    return attrsStr.trim().replace(/,$/, '')
  }

  getEventsAttr(events: string[]): [string, string] {
    return ['data-jsxevents', `{{${events.join(',')}}}`]
  }

  compileOpenTag(open: TSA.JsxOpeningElement | TSA.JsxSelfClosingElement, node: TSA.JsxElement | TSA.JsxSelfClosingElement) {
    const tag = open.getTagName().getText()
    const attrs = open.getAttributes()
    let importedName = undefined as string | undefined
    let importedModule = undefined as Module | undefined

    if (tag.includes('.')) {
      const [namespace, widget] = tag.split('.')
      importedModule = this._modules.find(mod => mod.type === 'namespace' && mod.importName === namespace)
      importedName = widget
    } else if (/[A-Z]/.test(tag[0])) {
      importedModule = this._modules.find(mod =>
        (mod.type === 'named' || mod.type === 'default') &&
        mod.importName === tag)
      importedName = importedModule ? importedModule.realName : tag
    }
    if (importedName) {
      this.importedCompContainsChildError(open)
      if (importedModule) {
        this._usedModules.push(importedModule)
        let attrsStr = this.compileSubCompAttrs(attrs)
        if (attrsStr) {
          attrsStr = ` data="{{${attrsStr}}}"`
        }
        node.replaceWithText(`<template is="${importedName}"${attrsStr} />`)
        return
      } else {
        prettyError(`Cannot find imported component: ${tag}`, open, this._root)
      }
    }
    let attrsStrList = [] as string[]
    let events = [] as string[]
    attrs.forEach(attr => {
      if (TSA.TypeGuards.isJsxAttribute(attr)) {
        const [name, value] = this.compileJsxAttr(attr, events)
        attrsStrList.push(`${name}="${value}"`)
      } else if (TSA.TypeGuards.isJsxSpreadAttribute(attr)) {
        prettyError(`Cannot contains spread attr: ${attr.getText()}`, attr, this._root)
      }
    })
    if (events.length) {
      const [name, value] = this.getEventsAttr(events)
      attrsStrList.push(`${name}="${value}"`)
    }
    let attrsStr = attrsStrList.length ? ' ' + attrsStrList.join(' ') + ' ' : ''
    let text = `<${slug(open.getTagName().getText())}${attrsStr}`
    if (TSA.TypeGuards.isJsxSelfClosingElement(open)) {
      text += '/>'
    } else {
      text += '>'
    }
    open.replaceWithText(text)
    return this
  }

  compileJsxElement(node: TSA.JsxElement) {
    const open = node.getOpeningElement()
    this.compileOpenTag(open, node)
    // JsxText | JsxExpression | JsxElement | JsxSelfClosingElement | JsxFragment;
    for (const child of node.getJsxChildren()) {
      this.compileJsxNode(child)
    }
    return this
  }

  compileJsxNode(node: TSA.Node): this {
    if (TSA.TypeGuards.isJsxExpression(node)) {
      const { value, type } = this.compileJsxExpression(node)
      node.replaceWithText(value)
    } else if (TSA.TypeGuards.isJsxElement(node)) {
      this.compileJsxElement(node)
    } else if (TSA.TypeGuards.isJsxSelfClosingElement(node)) {
      this.compileOpenTag(node, node)
    } else if (TSA.TypeGuards.isJsxFragment(node)) {
      for (const child of node.getJsxChildren()) {
        this.compileJsxNode(child)
      }
    }
    return this
  }
}

function compileJsxFn(fn: TSA.FunctionDeclaration | TSA.MethodDeclaration, modules: Module[]): JsxCompiler | void {
  const returnState = findOneByKind(fn, TSA.SyntaxKind.ReturnStatement)
  let param = findOneByKind(fn, TSA.SyntaxKind.Parameter)
  let rootName = ''
  if (param) {
    param = param.getChildAtIndex(0)
    if (TSA.TypeGuards.isIdentifier(param)) {
      rootName = param.getText()
    }
  }
  if (!returnState) {
    return
  }
  const jsx = findOneByKind(returnState, TSA.SyntaxKind.JsxElement)
  if (jsx) {
    return new JsxCompiler(jsx as any, modules, rootName)
      .compileJsxNode(jsx)
  }
}
type WxmlType = 'page' | 'widget'
function compileWidgetsFile(file: TSA.SourceFile) {
  const content = file.getText()
  const fns: (TSA.FunctionDeclaration | TSA.MethodDeclaration | undefined)[] = file.getFunctions()
  const renderMethod =
    file
    .getClasses()
    .map(cls => cls.getInstanceMethod('render'))

  fns.push(...renderMethod)
  const imports = file.getImportDeclarations()
  const modules = [] as Module[]
  imports.forEach(ipt => {
    const file = ipt.getModuleSpecifier()
    ipt.getNamedImports().forEach(im => {
      const aliasIdt = im.getAliasIdentifier()
      let alias = aliasIdt && aliasIdt.getText()
      modules.push({
        importName: alias ? alias : im.getName(),
        realName: im.getName(),
        file,
        type: 'named'
      })
    })
    const namespace = ipt.getNamespaceImport()
    if (namespace) {
      modules.push({
        importName: namespace.getText(),
        realName: namespace.getText(),
        file,
        type: 'namespace'
      })
    }
    const defaults = ipt.getDefaultImport()
    if (defaults) {
      modules.push({
        importName: defaults.getText(),
        realName: path.basename(file, '.tsx'),
        file,
        type: 'default'
      })
    }
  })
  let usedImports = [] as string[]
  const widgets = fns.map(fn => {
    if (!fn) return ''
    const compiler = compileJsxFn(fn, modules)
    if (!compiler) {
      return ''
    }
    usedImports = usedImports.concat(
      compiler.getUseModules().map(
        mod => `<import src="${mod.file.replace(/.tsx$/, '') + '.wxml'}" />`
      )
    )
    if (TSA.TypeGuards.isMethodDeclaration(fn)) {
      return compiler.getText()
    } else if (TSA.TypeGuards.isFunctionDeclaration(fn)) {
      return `
<template name="${fn.getName()}">
  ${compiler.getText()}
</template>
`
    } else {
      console.error(`Unknown function node: ${(fn as TSA.Node).getKindName()}`, file.getFilePath())
      return ''
    }
  })
  fns.forEach(fn => fn && fn.replaceWithText(''))
  // file.forget()
  fs.writeFile(
    file.getFilePath().replace(/.tsx$/, '.wxml'),
    `
<!-- This file is generated, please don't edit it!!! -->
${usedImports.join('\n')}

${widgets.join('\n')}
    `,
    'utf-8',
    err => err && console.error(err)
  )
  console.log(`compiled: ${file.getFilePath()}`)
}

const files = tsa.getSourceFiles()
Promise.all(files.map(compileWidgetsFile))

const watcher = watch([tsxFiles], {
  ignoreInitial: true,
  delay: 300,
})

function catchAsync(fn: Function) {
  return (...args: any[]) => fn(...args).catch(console.error)
}

watcher.on('change', catchAsync(async (path: string, stat: fs.Stats) => {
  const file = tsa.getSourceFile(path)
  if (file) {
    await file.refreshFromFileSystem()
    compileWidgetsFile(file)
  } else {
    console.log(`Changed file not found: ${path}`)
  }
}))

// Listen for other events
// No async completion available because this is the raw chokidar instance
watcher.on('add', catchAsync(async (path: string, stat: fs.Stats) => {
  const file = tsa.addExistingSourceFile(path)
  compileWidgetsFile(file)
}))

watcher.on('unlink', catchAsync(async (path: string, stat: fs.Stats) => {
  const file = tsa.getSourceFile(path)
  if (file) {
    tsa.removeSourceFile(file)
  }
}))
