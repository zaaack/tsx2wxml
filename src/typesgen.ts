import axios from 'axios'
import * as fs from 'fs-extra'

const outDir = process.argv.slice(2)[0] || process.cwd()

interface Attrs {
  name: string;
  type: Type;
  desc: string[];
  defaultValue?: string;
  since?: string;
  enum?: Enum[];
  extras?: Extras[];
  subAttrs?: SubAttrs[];
}

interface Attrs1 {
  name: string;
  type: Returns;
  desc: string[];
  since?: string;
  defaultValue?: string;
}

interface Enum {
  value: string;
  desc: string;
}

interface Extras {
  key: string;
  value: string;
}

interface RelateApis {
  name: string;
  link: string;
}

interface Returns {
  name: string;
}

interface ComponentMeta {
  desc: string[];
  attrs: Attrs[];
  tips?: string[];
  demoImages: string[];
  name: string;
  docLink: string;
  notices: string[];
  since: string;
  bugs?: string[];
  relateApis?: RelateApis[];
  authorize?: RelateApis;
}

interface SubAttrs {
  equal: string;
  attrs: Attrs1[];
}

interface Type {
  name: string;
  returns: Returns;
}

export interface CustomAttr {
  name: string
  desc?: string[]
  type?: string
  since?: string
  addBrace?: boolean // 是否加上 {{}}
}

export const BASE_ATTRS: CustomAttr[] = [
  {name: 'id'},
  {name: 'class'},
  {name: 'style', desc: ['组件的内联样式']},
  {name: 'hidden', desc: ['组件是否隐藏'], type: 'boolean'},
  // {name: 'data-'},
]

export const EVENT_ATTRS: CustomAttr[] = [
  {name: 'touchstart'},
  {name: 'touchmove'},
  {name: 'touchcancel'},
  {name: 'touchend'},
  {name: 'tap'},
  {name: 'longpress', since: '1.5.0'},
  {name: 'longtap'},
  {name: 'transitionend'},
  {name: 'animationstart'},
  {name: 'animationiteration'},
  {name: 'animationend'},
]

export const CTRL_ATTRS: CustomAttr[] = [
  {name: 'if', addBrace: true, type: 'boolean'},
  {name: 'elif', addBrace: true, type: 'boolean'},
  {name: 'else', addBrace: true, type: 'boolean'},
  {name: 'for', addBrace: true, type: 'Array<F>'},
  {name: 'key', type: 'string'},
  {name: 'for-item', type: 'F'},
  {name: 'for-index', type: 'number'},
]

interface MyAttr {
  name: string
  type: string
  required?: boolean
  desc?: string
  default?: string
  since?: string
  link?: string
}

function upperFirst(name: string) {
  return name[0].toUpperCase() + name.slice(1)
}

function deSlug(name: string) {
  return name.replace(/-([a-z])/g, (_, g) => g.toUpperCase())
}

function mapType(type: string) {
  console.log('mapType', type)
  switch (type) {
    case 'function':
      return 'Function'
    case 'ArrayObject':
      return 'Array<any>'
    default:
      return type
  }
}
function propTypeName(comp: ComponentMeta) {
  const name = deSlug(comp.name)
  return `I${upperFirst(name)}Props`
}

function eventAttrs(): MyAttr[] {
  return EVENT_ATTRS.map(e => ({
    name: `bind${deSlug(e.name)}`,
    type: `${e.type || 'Function'}`,
  })).concat(EVENT_ATTRS.map(e => ({
    name: `catch${deSlug(e.name)}`,
    type: `${e.type || 'Function'}`,
  })))
}

function baseAttrs(): MyAttr[] {
  return BASE_ATTRS.map(e => ({
    name:  `${deSlug(e.name)}`,
    type: e.type || 'string',
  }))
}

function ctrlAttrs(): MyAttr[] {
  return CTRL_ATTRS.map(e => ({
    name:  `wx${upperFirst(deSlug(e.name))}`,
    type: e.type || 'any',
  }))
}
function getType(attr: Attrs) {
  if (attr.enum && attr.enum.length) {
    if (attr.enum[0].value === 'groupName') {
      return 'string'
    }
    return `"${attr.enum.map(e => e.value).join('" | "')}"`
  } else {
    return mapType(attr.type.name)
  }
}
const metaData: ComponentMeta[] = require('./components.json')

async function main() {
  let jsxTypes = ''
  metaData.forEach(comp => {
    let name = deSlug(comp.name)
    let attrs = baseAttrs().concat(eventAttrs()).concat(ctrlAttrs())
      .concat((comp.attrs || []).map(attr => ({
        name: deSlug(attr.name),
        type: getType(attr),
        desc: (attr.desc || []).join('\n\n'),
        default: attr.defaultValue,
        since: attr.since,
      })))
    let names = new Set()
    attrs = attrs.filter(a => {
      let unique = !names.has(a.name)
      names.add(a.name)
      return unique
    })
    jsxTypes += `
  interface ${propTypeName(comp)}<F=any> {
    ${attrs.map(attr => `
      /**
       * ${attr.desc || ''}
       * ${attr.default ? `default: ${attr.default}` : ''}
       * ${attr.since ? `@since: ${attr.default}` : ''}
       * ${attr.link ? `@see: ${attr.link}` : ''}
       */
      ${attr.name}?: ${attr.type}
    `).join('')}
  }
`
  })

  jsxTypes = `

declare namespace JSX {
  export type Element = { __tsTag: 'JSX.Element' }

  ${jsxTypes}

  interface IntrinsicElements {
    ${metaData.map(comp => {
      let name = deSlug(comp.name)
      return `
    /**
     * ${(comp.desc || []).join('\n\n')}
     * ${(comp.tips || []).join('\n\n')}
     * ${comp.bugs ? `@bugs: ${comp.bugs.join('\n\n')}` : ''}
     * @see: ${comp.docLink}
     * ${comp.relateApis ? `@relative: ${comp.relateApis.map(a => `
     * ${a.name}: ${a.link}
     * `)}` : ''}
     */
    ${name}: ${propTypeName(comp)}`
    })}
  }

}
  `

  fs.outputFileSync(`${outDir}/jsx-types.d.ts`, jsxTypes, 'utf-8')

}

main().catch(console.error)
