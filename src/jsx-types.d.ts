

declare namespace JSX {
  export type Element = { __tsTag: 'JSX.Element' }

  
  interface IViewProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果
       * default: none
       * 
       * 
       */
      hoverClass?: string
    
      /**
       * 指定是否阻止本节点的祖先节点出现点击态
       * default: false
       * @since: false
       * 
       */
      hoverStopPropagation?: boolean
    
      /**
       * 按住后多久出现点击态，单位毫秒
       * default: 50
       * 
       * 
       */
      hoverStartTime?: number
    
      /**
       * 手指松开后点击态保留时间，单位毫秒
       * default: 400
       * 
       * 
       */
      hoverStayTime?: number
    
  }

  interface IScrollViewProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 允许横向滚动
       * default: false
       * 
       * 
       */
      scrollX?: boolean
    
      /**
       * 允许纵向滚动
       * default: false
       * 
       * 
       */
      scrollY?: boolean
    
      /**
       * 距顶部/左边多远时（单位px），触发 scrolltoupper 事件
       * default: 50
       * 
       * 
       */
      upperThreshold?: number
    
      /**
       * 距底部/右边多远时（单位px），触发 scrolltolower 事件
       * default: 50
       * 
       * 
       */
      lowerThreshold?: number
    
      /**
       * 设置竖向滚动条位置
       * 
       * 
       * 
       */
      scrollTop?: number
    
      /**
       * 设置横向滚动条位置
       * 
       * 
       * 
       */
      scrollLeft?: number
    
      /**
       * 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
       * 
       * 
       * 
       */
      scrollIntoView?: string
    
      /**
       * 在设置滚动条位置时使用动画过渡
       * default: false
       * 
       * 
       */
      scrollWithAnimation?: boolean
    
      /**
       * iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向
       * default: false
       * 
       * 
       */
      enableBackToTop?: boolean
    
      /**
       * 滚动到顶部/左边，会触发 scrolltoupper 事件
       * 
       * 
       * 
       */
      bindscrolltoupper?: Function
    
      /**
       * 滚动到底部/右边，会触发 scrolltolower 事件
       * 
       * 
       * 
       */
      bindscrolltolower?: Function
    
      /**
       * 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}
       * 
       * 
       * 
       */
      bindscroll?: Function
    
  }

  interface ISwiperProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 是否显示面板指示点
       * default: false
       * 
       * 
       */
      indicatorDots?: boolean
    
      /**
       * 指示点颜色
       * default: rgba(0, 0, 0, .3)
       * @since: rgba(0, 0, 0, .3)
       * 
       */
      indicatorColor?: string
    
      /**
       * 当前选中的指示点颜色
       * default: #000000
       * @since: #000000
       * 
       */
      indicatorActiveColor?: string
    
      /**
       * 是否自动切换
       * default: false
       * 
       * 
       */
      autoplay?: boolean
    
      /**
       * 当前所在滑块的 index
       * default: 0
       * 
       * 
       */
      current?: number
    
      /**
       * 当前所在滑块的 item-id ，不能与 current 被同时指定
       * 
       * @since: undefined
       * 
       */
      currentItemId?: string
    
      /**
       * 自动切换时间间隔
       * default: 5000
       * 
       * 
       */
      interval?: number
    
      /**
       * 滑动动画时长
       * default: 500
       * 
       * 
       */
      duration?: number
    
      /**
       * 是否采用衔接滑动
       * default: false
       * 
       * 
       */
      circular?: boolean
    
      /**
       * 滑动方向是否为纵向
       * default: false
       * 
       * 
       */
      vertical?: boolean
    
      /**
       * 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
       * default: 0px
       * @since: 0px
       * 
       */
      previousMargin?: string
    
      /**
       * 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
       * default: 0px
       * @since: 0px
       * 
       */
      nextMargin?: string
    
      /**
       * 同时显示的滑块数量
       * default: 1
       * @since: 1
       * 
       */
      displayMultipleItems?: number
    
      /**
       * 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
       * default: false
       * @since: false
       * 
       */
      skipHiddenItemLayout?: boolean
    
      /**
       * current 改变时会触发 change 事件，event.detail = {current: current, source: source}
       * 
       * 
       * 
       */
      bindchange?: Function
    
      /**
       * 动画结束时会触发 animationfinish 事件，event.detail 同上
       * 
       * @since: undefined
       * 
       */
      bindanimationfinish?: Function
    
  }

  interface ISwiperItemProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 该 swiper-item 的标识符
       * 
       * @since: undefined
       * 
       */
      itemId?: string
    
  }

  interface IMovableAreaProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
  }

  interface IMovableViewProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * movable-view的移动方向，属性值有all、vertical、horizontal、none
       * default: none
       * 
       * 
       */
      direction?: string
    
      /**
       * movable-view是否带有惯性
       * default: false
       * 
       * 
       */
      inertia?: boolean
    
      /**
       * 超过可移动区域后，movable-view是否还可以移动
       * default: false
       * 
       * 
       */
      outOfBounds?: boolean
    
      /**
       * 定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画
       * 
       * 
       * 
       */
      x?: number
    
      /**
       * 定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画
       * 
       * 
       * 
       */
      y?: number
    
      /**
       * 阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快
       * default: 20
       * 
       * 
       */
      damping?: number
    
      /**
       * 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值
       * default: 2
       * 
       * 
       */
      friction?: number
    
  }

  interface ICoverViewProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
  }

  interface ICoverImageProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 图标路径，支持临时路径、网络地址（1.6.0起支持）。暂不支持base64格式。
       * 
       * 
       * 
       */
      src?: string
    
  }

  interface IIconProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear
       * 
       * 
       * 
       */
      type?: string
    
      /**
       * icon的大小，单位px
       * default: 23
       * 
       * 
       */
      size?: number
    
      /**
       * icon的颜色，同css的color
       * 
       * 
       * 
       */
      color?: string
    
  }

  interface ITextProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 文本是否可选
       * default: false
       * @since: false
       * 
       */
      selectable?: boolean
    
      /**
       * 显示连续空格
       * default: false
       * @since: false
       * 
       */
      space?: "ensp" | "emsp" | "nbsp"
    
      /**
       * 是否解码
       * default: false
       * @since: false
       * 
       */
      decode?: boolean
    
  }

  interface IRichTextProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 节点列表 / HTML String
       * 
       * @since: undefined
       * 
       */
      nodes?: any[] | string
    
  }

  interface IProgressProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 百分比0~100
       * default: 无
       * 
       * 
       */
      percent?: number
    
      /**
       * 在进度条右侧显示百分比
       * default: false
       * 
       * 
       */
      showInfo?: boolean
    
      /**
       * 进度条线的宽度，单位px
       * default: 6
       * 
       * 
       */
      strokeWidth?: number
    
      /**
       * 进度条颜色 （请使用 activeColor）
       * default: #09BB07
       * 
       * 
       */
      color?: string
    
      /**
       * 已选择的进度条的颜色
       * 
       * 
       * 
       */
      activeColor?: string
    
      /**
       * 未选择的进度条的颜色
       * 
       * 
       * 
       */
      backgroundColor?: string
    
      /**
       * 进度条从左往右的动画
       * default: false
       * 
       * 
       */
      active?: boolean
    
      /**
       * backwards: 动画从头播；forwards：动画从上次结束点接着播
       * default: backwards
       * @since: backwards
       * 
       */
      activeMode?: string
    
  }

  interface IButtonProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 按钮的大小
       * default: default
       * 
       * 
       */
      size?: "default" | "mini"
    
      /**
       * 按钮的样式类型
       * default: default
       * 
       * 
       */
      type?: "primary" | "default" | "warn"
    
      /**
       * 按钮是否镂空，背景色透明
       * default: false
       * 
       * 
       */
      plain?: boolean
    
      /**
       * 是否禁用
       * default: false
       * 
       * 
       */
      disabled?: boolean
    
      /**
       * 名称前是否带 loading 图标
       * default: false
       * 
       * 
       */
      loading?: boolean
    
      /**
       * 用于 `<form/>` 组件，点击分别会触发 `<form/>` 组件的 submit/reset 事件
       * 
       * 
       * 
       */
      formType?: "submit" | "reset"
    
      /**
       * 微信开放能力
       * 
       * @since: undefined
       * 
       */
      openType?: "contact" | "share" | "getUserInfo" | "getPhoneNumber" | "launchApp"
    
      /**
       * 打开 APP 时，向 APP 传递的参数
       * 
       * @since: undefined
       * 
       */
      appParameter?: string
    
      /**
       * 指定按钮按下去的样式类。当 `hover-class="none"` 时，没有点击态效果
       * default: button-hover
       * 
       * 
       */
      hoverClass?: string
    
      /**
       * 指定是否阻止本节点的祖先节点出现点击态
       * default: false
       * @since: false
       * 
       */
      hoverStopPropagation?: boolean
    
      /**
       * 按住后多久出现点击态，单位毫秒
       * default: 20
       * 
       * 
       */
      hoverStartTime?: number
    
      /**
       * 手指松开后点击态保留时间，单位毫秒
       * default: 70
       * 
       * 
       */
      hoverStayTime?: number
    
      /**
       * 用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同[wx.getUserInfo](https://mp.weixin.qq.com/debug/wxadoc/dev/api/open.html#wxgetuserinfoobject)
       * 
       * @since: undefined
       * 
       */
      bindgetuserinfo?: Function
    
      /**
       * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。
       * default: en
       * @since: en
       * 
       */
      lang?: string
    
      /**
       * 会话来源
       * 
       * @since: undefined
       * 
       */
      sessionFrom?: string
    
      /**
       * 会话内消息卡片标题
       * default: 当前标题
       * @since: 当前标题
       * 
       */
      sendMessageTitle?: string
    
      /**
       * 会话内消息卡片点击跳转小程序路径
       * default: 当前分享路径
       * @since: 当前分享路径
       * 
       */
      sendMessagePath?: string
    
      /**
       * 会话内消息卡片图片
       * default: 截图
       * @since: 截图
       * 
       */
      sendMessageImg?: string
    
      /**
       * 显示会话内消息卡片
       * default: false
       * @since: false
       * 
       */
      showMessageCard?: boolean
    
      /**
       * 客服消息回调
       * 
       * @since: undefined
       * 
       */
      bindcontact?: Function
    
      /**
       * 获取用户手机号回调
       * 
       * @since: undefined
       * 
       */
      bindgetphonenumber?: Function
    
      /**
       * 当使用开放能力时，发生错误的回调
       * 
       * @since: undefined
       * 
       */
      binderrror?: Function
    
  }

  interface ICheckboxGroupProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * `<checkbox-group/>`中选中项发生改变是触发 change 事件，detail = {value:\[选中的checkbox的value的数组\]}
       * 
       * 
       * 
       */
      bindchange?: Function
    
  }

  interface ICheckboxProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * `<checkbox/>`标识，选中时触发`<checkbox-group/>`的 change 事件，并携带 `<checkbox/>` 的 value
       * 
       * 
       * 
       */
      value?: string
    
      /**
       * 是否禁用
       * default: false
       * 
       * 
       */
      disabled?: boolean
    
      /**
       * 当前是否选中，可用来设置默认选中
       * default: false
       * 
       * 
       */
      checked?: boolean
    
      /**
       * checkbox的颜色，同css的color
       * 
       * 
       * 
       */
      color?: string
    
  }

  interface IFormProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 是否返回 formId 用于发送[模板消息](https://mp.weixin.qq.com/debug/wxadoc/dev/api/notice.html)
       * 
       * 
       * 
       */
      reportSubmit?: boolean
    
      /**
       * 携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}
       * 
       * 
       * 
       */
      bindsubmit?: Function
    
      /**
       * 表单重置时会触发 reset 事件
       * 
       * 
       * 
       */
      bindreset?: Function
    
  }

  interface IInputProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 输入框的初始内容
       * 
       * 
       * 
       */
      value?: string
    
      /**
       * input 的类型
       * default: text
       * 
       * 
       */
      type?: "text" | "number" | "idcard" | "digit"
    
      /**
       * 是否是密码类型
       * default: false
       * 
       * 
       */
      password?: boolean
    
      /**
       * 输入框为空时占位符
       * 
       * 
       * 
       */
      placeholder?: string
    
      /**
       * 指定 placeholder 的样式
       * 
       * 
       * 
       */
      placeholderStyle?: string
    
      /**
       * 指定 placeholder 的样式类
       * default: input-placeholder
       * 
       * 
       */
      placeholderClass?: string
    
      /**
       * 是否禁用
       * default: false
       * 
       * 
       */
      disabled?: boolean
    
      /**
       * 最大输入长度，设置为 -1 的时候不限制最大长度
       * default: 140
       * 
       * 
       */
      maxlength?: number
    
      /**
       * 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
       * default: 0
       * 
       * 
       */
      cursorSpacing?: number
    
      /**
       * (即将废弃，请直接使用 focus )自动聚焦，拉起键盘
       * default: false
       * 
       * 
       */
      autoFocus?: boolean
    
      /**
       * 获取焦点
       * default: false
       * 
       * 
       */
      focus?: boolean
    
      /**
       * 设置键盘右下角按钮的文字
       * default: done
       * @since: done
       * 
       */
      confirmType?: "send" | "search" | "next" | "go" | "done"
    
      /**
       * 点击键盘右下角按钮时是否保持键盘不收起
       * default: false
       * @since: false
       * 
       */
      confirmHold?: boolean
    
      /**
       * 指定focus时的光标位置
       * 
       * @since: undefined
       * 
       */
      cursor?: number
    
      /**
       * 光标起始位置，自动聚集时有效，需与selection-end搭配使用
       * default: -1
       * @since: -1
       * 
       */
      selectionStart?: number
    
      /**
       * 光标结束位置，自动聚集时有效，需与selection-start搭配使用
       * default: -1
       * @since: -1
       * 
       */
      selectionEnd?: number
    
      /**
       * 当键盘输入时，触发input事件，event.detail = {value, cursor}，处理函数可以直接 return 一个字符串，将替换输入框的内容。
       * 
       * 
       * 
       */
      bindinput?: Function
    
      /**
       * 输入框聚焦时触发，event.detail = {value: value}
       * 
       * 
       * 
       */
      bindfocus?: Function
    
      /**
       * 输入框失去焦点时触发，event.detail = {value: value}
       * 
       * 
       * 
       */
      bindblur?: Function
    
      /**
       * 点击完成按钮时触发，event.detail = {value: value}
       * 
       * 
       * 
       */
      bindconfirm?: Function
    
  }

  interface ILabelProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 绑定控件的 id
       * 
       * 
       * 
       */
      for?: string
    
  }

  interface IPickerProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 选择器的类型
       * default: selector
       * 
       * 
       */
      mode?: string
    
  }

  interface IPickerViewProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。
       * 
       * 
       * 
       */
      value?: number[]
    
      /**
       * 设置选择器中间选中框的样式
       * 
       * 
       * 
       */
      indicatorStyle?: string
    
      /**
       * 设置选择器中间选中框的类名
       * 
       * @since: undefined
       * 
       */
      indicatorClass?: string
    
      /**
       * 设置蒙层的样式
       * 
       * @since: undefined
       * 
       */
      maskStyle?: string
    
      /**
       * 设置蒙层的类名
       * 
       * @since: undefined
       * 
       */
      maskClass?: string
    
      /**
       * 当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）
       * 
       * 
       * 
       */
      bindchange?: Function
    
  }

  interface IPickerViewColumnProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
  }

  interface IRadioGroupProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * `<radio-group/>` 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value}
       * 
       * 
       * 
       */
      bindchange?: Function
    
  }

  interface IRadioProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * `<radio/>` 标识。当该`<radio/>` 选中时，`<radio-group/>` 的 change 事件会携带`<radio/>`的value
       * 
       * 
       * 
       */
      value?: string
    
      /**
       * 当前是否选中
       * default: false
       * 
       * 
       */
      checked?: boolean
    
      /**
       * 是否禁用
       * default: false
       * 
       * 
       */
      disabled?: boolean
    
      /**
       * radio的颜色，同css的color
       * 
       * 
       * 
       */
      color?: string
    
  }

  interface ISliderProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 最小值
       * default: 0
       * 
       * 
       */
      min?: number
    
      /**
       * 最大值
       * default: 100
       * 
       * 
       */
      max?: number
    
      /**
       * 步长，取值必须大于 0，并且可被(max - min)整除
       * default: 1
       * 
       * 
       */
      step?: number
    
      /**
       * 是否禁用
       * default: false
       * 
       * 
       */
      disabled?: boolean
    
      /**
       * 当前取值
       * default: 0
       * 
       * 
       */
      value?: number
    
      /**
       * 背景条的颜色（请使用 backgroundColor）
       * default: #e9e9e9
       * 
       * 
       */
      color?: string
    
      /**
       * 已选择的颜色（请使用 activeColor）
       * default: #1aad19
       * 
       * 
       */
      selectedColor?: string
    
      /**
       * 已选择的颜色
       * default: #1aad19
       * 
       * 
       */
      activeColor?: string
    
      /**
       * 背景条的颜色
       * default: #e9e9e9
       * 
       * 
       */
      backgroundColor?: string
    
      /**
       * 滑块的大小，取值范围为 12 - 28
       * default: 28
       * @since: 28
       * 
       */
      blockSize?: number
    
      /**
       * 滑块的颜色
       * default: #ffffff
       * @since: #ffffff
       * 
       */
      blockColor?: string
    
      /**
       * 是否显示当前 value
       * default: false
       * 
       * 
       */
      showValue?: boolean
    
      /**
       * 完成一次拖动后触发的事件，event.detail = {value: value}
       * 
       * 
       * 
       */
      bindchange?: Function
    
      /**
       * 拖动过程中触发的事件，event.detail = {value: value}
       * 
       * @since: undefined
       * 
       */
      bindchanging?: Function
    
  }

  interface ISwitchProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 是否选中
       * default: false
       * 
       * 
       */
      checked?: boolean
    
      /**
       * 样式，有效值：switch, checkbox
       * default: switch
       * 
       * 
       */
      type?: string
    
      /**
       * checked 改变时触发 change 事件，event.detail={ value:checked}
       * 
       * 
       * 
       */
      bindchange?: Function
    
      /**
       * switch 的颜色，同 css 的 color
       * 
       * 
       * 
       */
      color?: string
    
  }

  interface ITextareaProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 输入框的内容
       * 
       * 
       * 
       */
      value?: string
    
      /**
       * 输入框为空时占位符
       * 
       * 
       * 
       */
      placeholder?: string
    
      /**
       * 指定 placeholder 的样式
       * 
       * 
       * 
       */
      placeholderStyle?: string
    
      /**
       * 指定 placeholder 的样式类
       * default: textarea-placeholder
       * 
       * 
       */
      placeholderClass?: string
    
      /**
       * 是否禁用
       * default: false
       * 
       * 
       */
      disabled?: boolean
    
      /**
       * 最大输入长度，设置为 -1 的时候不限制最大长度
       * default: 140
       * 
       * 
       */
      maxlength?: number
    
      /**
       * 自动聚焦，拉起键盘。
       * default: false
       * 
       * 
       */
      autoFocus?: boolean
    
      /**
       * 获取焦点
       * default: false
       * 
       * 
       */
      focus?: boolean
    
      /**
       * 是否自动增高，设置auto-height时，style.height不生效
       * default: false
       * 
       * 
       */
      autoHeight?: boolean
    
      /**
       * 如果 textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true
       * default: false
       * 
       * 
       */
      fixed?: boolean
    
      /**
       * 指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
       * default: 0
       * 
       * 
       */
      cursorSpacing?: number
    
      /**
       * 指定focus时的光标位置
       * 
       * @since: undefined
       * 
       */
      cursor?: number
    
      /**
       * 是否显示键盘上方带有”完成“按钮那一栏
       * default: true
       * @since: true
       * 
       */
      showConfirmBar?: boolean
    
      /**
       * 光标起始位置，自动聚集时有效，需与selection-end搭配使用
       * default: -1
       * @since: -1
       * 
       */
      selectionStart?: number
    
      /**
       * 光标结束位置，自动聚集时有效，需与selection-start搭配使用
       * default: -1
       * @since: -1
       * 
       */
      selectionEnd?: number
    
      /**
       * 输入框聚焦时触发，event.detail = {value: value}
       * 
       * 
       * 
       */
      bindfocus?: Function
    
      /**
       * 输入框失去焦点时触发，event.detail = {value, cursor}
       * 
       * 
       * 
       */
      bindblur?: Function
    
      /**
       * 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}
       * 
       * 
       * 
       */
      bindlinechange?: Function
    
      /**
       * 当键盘输入时，触发 input 事件，event.detail = {value, cursor}， **bindinput 处理函数的返回值并不会反映到 textarea 上**
       * 
       * 
       * 
       */
      bindinput?: Function
    
      /**
       * 点击完成时， 触发 confirm 事件，event.detail = {value: value}
       * 
       * 
       * 
       */
      bindconfirm?: Function
    
  }

  interface INavigatorProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 应用内的跳转链接
       * 
       * 
       * 
       */
      url?: string
    
      /**
       * 跳转方式
       * default: navigate
       * 
       * 
       */
      openType?: "navigate" | "redirect" | "switchTab" | "reLaunch" | "navigateBack"
    
      /**
       * 当 open-type 为 'navigateBack' 时有效，表示回退的层数
       * 
       * 
       * 
       */
      delta?: number
    
      /**
       * 指定点击时的样式类，当`hover-class="none"`时，没有点击态效果
       * default: navigator-hover
       * 
       * 
       */
      hoverClass?: string
    
      /**
       * 指定是否阻止本节点的祖先节点出现点击态
       * default: false
       * @since: false
       * 
       */
      hoverStopPropagation?: boolean
    
      /**
       * 按住后多久出现点击态，单位毫秒
       * default: 50
       * 
       * 
       */
      hoverStartTime?: number
    
      /**
       * 手指松开后点击态保留时间，单位毫秒
       * default: 600
       * 
       * 
       */
      hoverStayTime?: number
    
  }

  interface IAudioProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 要播放音频的资源地址
       * 
       * 
       * 
       */
      src?: string
    
      /**
       * 是否循环播放
       * default: false
       * 
       * 
       */
      loop?: boolean
    
      /**
       * 是否显示默认控件
       * default: false
       * 
       * 
       */
      controls?: boolean
    
      /**
       * 默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效
       * 
       * 
       * 
       */
      poster?: string
    
      /**
       * 默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效
       * default: 未知音频
       * 
       * 
       */
      name?: string
    
      /**
       * 默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效
       * default: 未知作者
       * 
       * 
       */
      author?: string
    
      /**
       * 当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}

MediaError.code: {1 => "获取资源被用户禁止"; 2 => "网络错误"; 3 => "解码错误"; 4 => "不合适资源"}
       * 
       * 
       * 
       */
      binderror?: Function
    
      /**
       * 当开始/继续播放时触发play事件
       * 
       * 
       * 
       */
      bindplay?: Function
    
      /**
       * 当暂停播放时触发 pause 事件
       * 
       * 
       * 
       */
      bindpause?: Function
    
      /**
       * 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}
       * 
       * 
       * 
       */
      bindtimeupdate?: Function
    
      /**
       * 当播放到末尾时触发 ended 事件
       * 
       * 
       * 
       */
      bindended?: Function
    
  }

  interface IImageProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 图片资源地址
       * 
       * 
       * 
       */
      src?: string
    
      /**
       * 图片裁剪、缩放的模式
       * default: 'scaleToFill'
       * 
       * 
       */
      mode?: "scaleToFill" | "aspectFit" | "aspectFill" | "widthFix" | "top" | "bottom" | "center" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right"
    
      /**
       * 图片懒加载。只针对page与scroll-view下的image有效
       * default: false
       * @since: false
       * 
       */
      lazyLoad?: boolean
    
      /**
       * 当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'}
       * 
       * 
       * 
       */
      binderror?: Function
    
      /**
       * 当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}
       * 
       * 
       * 
       */
      bindload?: Function
    
  }

  interface IVideoProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 要播放视频的资源地址
       * 
       * 
       * 
       */
      src?: string
    
      /**
       * 指定视频初始播放位置
       * 
       * @since: undefined
       * 
       */
      initialTime?: number
    
      /**
       * 指定视频时长
       * 
       * @since: undefined
       * 
       */
      duration?: number
    
      /**
       * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
       * default: true
       * 
       * 
       */
      controls?: boolean
    
      /**
       * 弹幕列表
       * 
       * 
       * 
       */
      danmuList?: Array<any>
    
      /**
       * 是否显示弹幕按钮，只在初始化时有效，不能动态变更
       * default: false
       * 
       * 
       */
      danmuBtn?: boolean
    
      /**
       * 是否展示弹幕，只在初始化时有效，不能动态变更
       * default: false
       * 
       * 
       */
      enableDanmu?: boolean
    
      /**
       * 是否自动播放
       * default: false
       * 
       * 
       */
      autoplay?: boolean
    
      /**
       * 是否循环播放
       * default: false
       * @since: false
       * 
       */
      loop?: boolean
    
      /**
       * 是否静音播放
       * default: false
       * @since: false
       * 
       */
      muted?: boolean
    
      /**
       * 在非全屏模式下，是否开启亮度与音量调节手势
       * default: false
       * @since: false
       * 
       */
      pageGesture?: boolean
    
      /**
       * 设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）
       * 
       * @since: undefined
       * 
       */
      direction?: number
    
      /**
       * 若不设置，宽度大于240时才会显示
       * default: true
       * @since: true
       * 
       */
      showProgress?: boolean
    
      /**
       * 是否显示全屏按钮
       * default: true
       * @since: true
       * 
       */
      showFullscreenBtn?: boolean
    
      /**
       * 是否显示视频底部控制栏的播放按钮
       * default: true
       * @since: true
       * 
       */
      showPlayBtn?: boolean
    
      /**
       * 是否显示视频中间的播放按钮
       * default: true
       * @since: true
       * 
       */
      showCenterPlayBtn?: boolean
    
      /**
       * 是否开启控制进度的手势
       * default: true
       * @since: true
       * 
       */
      enableProgressGesture?: boolean
    
      /**
       * 当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖
       * default: contain
       * 
       * 
       */
      objectFit?: string
    
      /**
       * 视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效
       * 
       * 
       * 
       */
      poster?: string
    
      /**
       * 当开始/继续播放时触发play事件
       * 
       * 
       * 
       */
      bindplay?: Function
    
      /**
       * 当暂停播放时触发 pause 事件
       * 
       * 
       * 
       */
      bindpause?: Function
    
      /**
       * 当播放到末尾时触发 ended 事件
       * 
       * 
       * 
       */
      bindended?: Function
    
      /**
       * 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次
       * 
       * 
       * 
       */
      bindtimeupdate?: Function
    
      /**
       * 当视频进入和退出全屏是触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal
       * 
       * @since: undefined
       * 
       */
      bindfullscreenchange?: Function
    
      /**
       * 视频出现缓冲时触发
       * 
       * @since: undefined
       * 
       */
      bindwaiting?: Function
    
      /**
       * 视频播放出错时触发
       * 
       * @since: undefined
       * 
       */
      binderror?: Function
    
  }

  interface ICameraProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 前置或后置，值为front, back
       * default: back
       * 
       * 
       */
      devicePosition?: string
    
      /**
       * 闪光灯，值为auto, on, off
       * default: auto
       * 
       * 
       */
      flash?: string
    
      /**
       * 摄像头在非正常终止时触发，如退出后台等情况
       * 
       * 
       * 
       */
      bindstop?: Function
    
      /**
       * 用户不允许使用摄像头时触发
       * 
       * 
       * 
       */
      binderror?: Function
    
  }

  interface ILivePlayerProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 音视频地址。目前仅支持 flv, rtmp 格式
       * 
       * 
       * 
       */
      src?: string
    
      /**
       * live（直播），RTC（实时通话）
       * default: live
       * 
       * 
       */
      mode?: string
    
      /**
       * 自动播放
       * default: false
       * 
       * 
       */
      autoplay?: boolean
    
      /**
       * 是否静音
       * default: false
       * 
       * 
       */
      muted?: boolean
    
      /**
       * 画面方向，可选值有 vertical，horizontal
       * default: vertical
       * 
       * 
       */
      orientation?: string
    
      /**
       * 填充模式，可选值有 contain，fillCrop
       * default: contain
       * 
       * 
       */
      objectFit?: string
    
      /**
       * 进入后台时是否静音
       * default: false
       * 
       * 
       */
      backgroundMute?: boolean
    
      /**
       * 最小缓冲区，单位s
       * default: 1
       * 
       * 
       */
      minCache?: number
    
      /**
       * 最大缓冲区，单位s
       * default: 3
       * 
       * 
       */
      maxCache?: number
    
      /**
       * 播放状态变化事件，detail = {code}

code: {2001 => "已经连接服务器"; 2002 => "已经连接服务器,开始拉流"; 2003 => "网络接收到首个视频数据包(IDR)"; 2004 => "视频播放开始"; 2005 => "视频播放进度"; 2006 => "视频播放结束"; 2007 => "视频播放Loading"; 2008 => "解码器启动"; 2009 => "视频分辨率改变"; -2301 => "网络断连，且经多次重连抢救无效，更多重试请自行重启播放"; -2302 => "获取加速拉流地址失败"; 2101 => "当前视频帧解码失败"; 2102 => "当前音频帧解码失败"; 2103 => "网络断连, 已启动自动重连"; 2104 => "网络来包不稳：可能是下行带宽不足，或由于主播端出流不均匀"; 2105 => "当前视频播放出现卡顿"; 2106 => "硬解启动失败，采用软解"; 2107 => "当前视频帧不连续，可能丢帧"; 2108 => "当前流硬解第一个I帧失败，SDK自动切软解"; 3001 => "RTMP -DNS解析失败"; 3002 => "RTMP服务器连接失败"; 3003 => "RTMP服务器握手失败"; 3005 => "RTMP 读/写失败"}
       * 
       * 
       * 
       */
      bindstatechange?: Function
    
      /**
       * 全屏变化事件，detail = {direction, fullScreen}
       * 
       * 
       * 
       */
      bindfullscreenchange?: Function
    
      /**
       * 网络状态通知，detail = {info}

info: {videoBitrate => "当前视频编/码器输出的比特率，单位 kbps"; audioBitrate => "当前音频编/码器输出的比特率，单位 kbps"; videoFPS => "当前视频帧率"; videoGOP => "当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s"; netSpeed => "当前的发送/接收速度"; netJitter => "网络抖动情况，抖动越大，网络越不稳定"; videoWidth => "视频画面的宽度"; videoHeight => "视频画面的高度"}
       * 
       * @since: undefined
       * 
       */
      bindnetstatus?: Function
    
  }

  interface ILivePusherProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 推流地址。目前仅支持 flv, rtmp 格式
       * 
       * 
       * 
       */
      url?: string
    
      /**
       * SD（标清）, HD（高清）, FHD（超清）, RTC（实时通话）
       * default: RTC
       * 
       * 
       */
      mode?: string
    
      /**
       * 自动推流
       * default: false
       * 
       * 
       */
      autopush?: boolean
    
      /**
       * 是否静音
       * default: false
       * 
       * 
       */
      muted?: boolean
    
      /**
       * 开启摄像头
       * default: true
       * 
       * 
       */
      enableCamera?: boolean
    
      /**
       * 自动聚集
       * default: true
       * 
       * 
       */
      autoFocus?: boolean
    
      /**
       * vertical，horizontal
       * default: vertical
       * 
       * 
       */
      orientation?: string
    
      /**
       * 美颜
       * default: 0
       * 
       * 
       */
      beauty?: number
    
      /**
       * 美白
       * default: 0
       * 
       * 
       */
      whiteness?: number
    
      /**
       * 宽高比，可选值有 3:4, 9:16
       * default: 9:16
       * 
       * 
       */
      aspect?: string
    
      /**
       * 最小码率
       * default: 200
       * 
       * 
       */
      minBitrate?: number
    
      /**
       * 最大码率
       * default: 1000
       * 
       * 
       */
      maxBitrate?: number
    
      /**
       * 进入后台时推流的等待画面
       * 
       * 
       * 
       */
      waitingImage?: string
    
      /**
       * 等待画面资源的MD5值
       * 
       * 
       * 
       */
      waitingImageMd5?: string
    
      /**
       * 进入后台时是否静音
       * default: false
       * 
       * 
       */
      backgroundMute?: boolean
    
      /**
       * 状态变化事件，detail = {code}

code: {1001 => "已经连接推流服务器"; 1002 => "已经与服务器握手完毕,开始推流"; 1003 => "打开摄像头成功"; 1004 => "录屏启动成功"; 1005 => "推流动态调整分辨率"; 1006 => "推流动态调整码率"; 1007 => "首帧画面采集完成"; 1008 => "编码器启动"; -1301 => "打开摄像头失败"; -1302 => "打开麦克风失败"; -1303 => "视频编码失败"; -1304 => "音频编码失败"; -1305 => "不支持的视频分辨率"; -1306 => "不支持的音频采样率"; -1307 => "网络断连，且经多次重连抢救无效，更多重试请自行重启推流"; -1308 => "开始录屏失败，可能是被用户拒绝"; -1309 => "录屏失败，不支持的Android系统版本，需要5.0以上的系统"; -1310 => "录屏被其他应用打断了"; -1311 => "Android Mic打开成功，但是录不到音频数据"; -1312 => "录屏动态切横竖屏失败"; 1101 => "网络状况不佳：上行带宽太小，上传数据受阻"; 1102 => "网络断连, 已启动自动重连"; 1103 => "硬编码启动失败,采用软编码"; 1104 => "视频编码失败"; 1105 => "新美颜软编码启动失败，采用老的软编码"; 1106 => "新美颜软编码启动失败，采用老的软编码"; 3001 => "RTMP -DNS解析失败"; 3002 => "RTMP服务器连接失败"; 3003 => "RTMP服务器握手失败"; 3004 => "RTMP服务器主动断开，请检查推流地址的合法性或防盗链有效期"; 3005 => "RTMP 读/写失败"}
       * 
       * 
       * 
       */
      bindstatechange?: Function
    
      /**
       * 网络状态通知，detail = {info}

info: {videoBitrate => "当前视频编/码器输出的比特率，单位 kbps"; audioBitrate => "当前音频编/码器输出的比特率，单位 kbps"; videoFPS => "当前视频帧率"; videoGOP => "当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s"; netSpeed => "当前的发送/接收速度"; netJitter => "网络抖动情况，抖动越大，网络越不稳定"; videoWidth => "视频画面的宽度"; videoHeight => "视频画面的高度"}
       * 
       * @since: undefined
       * 
       */
      bindnetstatus?: Function
    
  }

  interface IMapProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 中心经度
       * 
       * 
       * 
       */
      longitude?: number
    
      /**
       * 中心纬度
       * 
       * 
       * 
       */
      latitude?: number
    
      /**
       * 缩放级别，取值范围为5-18
       * default: 16
       * 
       * 
       */
      scale?: number
    
      /**
       * 标记点
       * 
       * 
       * 
       */
      markers?: Object
    
      /**
       * **即将移除，请使用 markers**
       * 
       * 
       * 
       */
      covers?: any[]
    
      /**
       * 路线
       * 
       * 
       * 
       */
      polyline?: Object
    
      /**
       * 圆
       * 
       * 
       * 
       */
      circles?: Object
    
      /**
       * 控件
       * 
       * 
       * 
       */
      controls?: Object
    
      /**
       * 缩放视野以包含所有给定的坐标点
       * 
       * 
       * 
       */
      includePoints?: any[]
    
      /**
       * 显示带有方向的当前定位点
       * 
       * 
       * 
       */
      showLocation?: boolean
    
      /**
       * 点击标记点时触发
       * 
       * 
       * 
       */
      bindmarkertap?: Function
    
      /**
       * 点击标记点对应的气泡时触发
       * 
       * @since: undefined
       * 
       */
      bindcallouttap?: Function
    
      /**
       * 点击控件时触发
       * 
       * 
       * 
       */
      bindcontroltap?: Function
    
      /**
       * 视野发生变化时触发
       * 
       * 
       * 
       */
      bindregionchange?: Function
    
      /**
       * 在地图渲染更新完成时触发
       * 
       * @since: undefined
       * 
       */
      bindupdated?: Function
    
  }

  interface ICanvasProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * canvas 组件的唯一标识符
       * 
       * 
       * 
       */
      canvasId?: string
    
      /**
       * 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新
       * default: false
       * 
       * 
       */
      disableScroll?: boolean
    
      /**
       * 当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}
       * 
       * 
       * 
       */
      binderror?: Function
    
  }

  interface IOpenDataProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 开放数据类型
       * 
       * 
       * 
       */
      type?: string
    
      /**
       * 当 type="groupName" 时生效, 群id
       * 
       * 
       * 
       */
      openGid?: string
    
  }

  interface IWebViewProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * webview 指向网页的链接。需登录[小程序管理后台](https://mp.weixin.qq.com/)配置域名白名单。
       * 
       * 
       * 
       */
      src?: string
    
      /**
       * 网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }
       * 
       * 
       * 
       */
      bindmessage?: Function
    
  }

  interface ISlotProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 
       * 
       * 
       * 
       */
      name?: string
    
  }

  interface ITemplateProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 
       * 
       * 
       * 
       */
      name?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      is?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      data?: any
    
  }

  interface IBlockProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
  }

  interface IImportProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 
       * 
       * 
       * 
       */
      src?: string
    
  }

  interface IIncludeProps<F=any> {
    
      /**
       * 
       * 
       * 
       * 
       */
      id?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      class?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      style?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      hidden?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      bindanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchmove?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchcancel?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtouchend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongpress?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchlongtap?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchtransitionend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationstart?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationiteration?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      catchanimationend?: Function
    
      /**
       * 
       * 
       * 
       * 
       */
      wxIf?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElif?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxElse?: boolean
    
      /**
       * 
       * 
       * 
       * 
       */
      wxFor?: Array<F>
    
      /**
       * 
       * 
       * 
       * 
       */
      wxKey?: string
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForItem?: F
    
      /**
       * 
       * 
       * 
       * 
       */
      wxForIndex?: number
    
      /**
       * 
       * 
       * 
       * 
       */
      src?: string
    
  }


  interface IntrinsicElements {
    
    /**
     * 视图容器。
     * 如果需要使用滚动视图，请使用 [scroll-view](https://mp.weixin.qq.com/debug/wxadoc/dev/component/scroll-view.html)
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/view.html
     * 
     */
    view: IViewProps,
    /**
     * 可滚动视图区域。

使用竖向滚动时，需要给`<scroll-view/>`一个固定高度，通过 WXSS 设置 height。
     * 请勿在 `scroll-view` 中使用 `textarea`、`map`、`canvas`、`video` 组件

`scroll-into-view` 的优先级高于 `scroll-top`

在滚动 `scroll-view` 时会阻止页面回弹，所以在 `scroll-view` 中滚动，是无法触发 `onPullDownRefresh`

若要使用下拉刷新，请使用页面的滚动，而不是 `scroll-view` ，这样也能通过点击顶部状态栏回到页面顶部
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/scroll-view.html
     * 
     */
    scrollView: IScrollViewProps,
    /**
     * 滑块视图容器。

从 [1.4.0](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。") 开始，`change`事件返回`detail`中包含一个`source`字段，表示导致变更的原因，可能值如下：

*   `autoplay` 自动播放导致swiper变化；
*   `touch` 用户划动引起swiper变化；
*   其他原因将用空字符串表示。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/swiper.html
     * 
     */
    swiper: ISwiperProps,
    /**
     * 仅可放置在`<swiper/>`组件中，宽高自动设置为100%。
     * 如果在 `bindchange` 的事件回调函数中使用 `setData` 改变 `current` 值，则有可能导致 `setData` 被不停地调用，因而通常情况下请在改变 `current` 值前检测 `source` 字段来判断是否是由于用户触摸引起。
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/swiper.html
     * 
     */
    swiperItem: ISwiperItemProps,
    /**
     * `movable-view` 的可移动区域
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/movable-view.html
     * 
     */
    movableArea: IMovableAreaProps,
    /**
     * 可移动的视图容器，在页面中可以拖拽滑动
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/movable-view.html
     * 
     */
    movableView: IMovableViewProps,
    /**
     * 覆盖在原生组件之上的文本视图，可覆盖的原生组件包括`map`、`video`、`canvas`、`camera`，只支持嵌套`cover-view`、`cover-image`。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/cover-view.html
     * 
     */
    coverView: ICoverViewProps,
    /**
     * 覆盖在原生组件之上的图片视图，可覆盖的原生组件同`cover-view`，支持嵌套在cover-view里。
     * 基础库 1.6.0 起支持css transition动画，`transition-property`只支持`transform (translateX, translateY)`与`opacity`。

基础库 1.6.0 起支持css opacity。

基础库 1.9.0 起支持插在 `view` 等标签下。在此之前只可嵌套在原生组件`map`、`video`、`canvas`、`camera`内，避免嵌套在其他组件内。

事件模型遵循冒泡模型，但不会冒泡到原生组件。

文本建议都套上cover-view标签，避免排版错误。

只支持基本的定位、布局、文本样式。不支持设置`单边的border`、`background-image`、`shadow`、`overflow`等。

建议子节点不要溢出父节点

默认设置的样式有：`white-space: nowrap;` `line-height: 1.2;` `display: block;`
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/cover-view.html
     * 
     */
    coverImage: ICoverImageProps,
    /**
     * 图标。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/icon.html
     * 
     */
    icon: IIconProps,
    /**
     * 文本。
     * decode可以解析的有 `&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;`

各个操作系统的空格标准并不一致。

`<text/>` 组件内只支持 `<text/>` 嵌套。

除了文本节点以外的其他节点都无法长按选中。
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/text.html
     * 
     */
    text: ITextProps,
    /**
     * 富文本。

支持默认事件，包括：`tap`、`touchstart`、`touchmove`、`touchcancel`、`touchend`和`longtap`
     * nodes 不推荐使用 String 类型，性能会有所下降。

`rich-text` 组件内屏蔽所有节点的事件。

attrs 属性不支持 id ，支持 class 。

name 属性大小写不敏感。

如果使用了不受信任的HTML节点，该节点及其所有子节点将会被移除。

img 标签仅支持网络图片。

如果在自定义组件中使用 `rich-text` 组件，那么仅自定义组件的 wxss 样式对 `rich-text` 中的 class 生效。
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/rich-text.html
     * 
     */
    richText: IRichTextProps,
    /**
     * 进度条。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/progress.html
     * 
     */
    progress: IProgressProps,
    /**
     * 按钮。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html
     * 
     */
    button: IButtonProps,
    /**
     * 多项选择器，内部由多个`checkbox`组成。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/checkbox.html
     * 
     */
    checkboxGroup: ICheckboxGroupProps,
    /**
     * 多选项目。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/checkbox.html
     * 
     */
    checkbox: ICheckboxProps,
    /**
     * 表单，将组件内的用户输入的`<switch/>` `<input/>` `<checkbox/>` `<slider/>` `<radio/>` `<picker/>` 提交。

当点击 `<form/>` 表单中 formType 为 submit 的 `<button/>` 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/form.html
     * 
     */
    form: IFormProps,
    /**
     * 输入框。
     * input 组件是一个 native 组件，字体是系统字体，所以无法设置 font-family；

在 input 聚焦期间，避免使用 css 动画；
     * @bugs: 微信版本 `6.3.30`, focus 属性设置无效；

微信版本 `6.3.30`, placeholder 在聚焦时出现重影问题；
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/input.html
     * 
     */
    input: IInputProps,
    /**
     * 用来改进表单组件的可用性，使用`for`属性找到对应的`id`，或者将控件放在该标签下，当点击时，就会触发对应的控件。

`for`优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。

目前可以绑定的控件有：`<button/>`, `<checkbox/>`, `<radio/>`, `<switch/>`。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/label.html
     * 
     */
    label: ILabelProps,
    /**
     * 从底部弹起的滚动选择器，现支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/picker.html
     * 
     */
    picker: IPickerProps,
    /**
     * 嵌入页面的滚动选择器
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/picker-view.html
     * 
     */
    pickerView: IPickerViewProps,
    /**
     * 仅可放置于`<picker-view />`中，其孩子节点的高度会自动设置成与picker-view的选中框的高度一致
     * 滚动时在iOS自带振动反馈，可在系统设置 -> 声音与触感 -> 系统触感反馈中关闭
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/picker-view.html
     * 
     */
    pickerViewColumn: IPickerViewColumnProps,
    /**
     * 单项选择器，内部由多个`<radio/>`组成。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/radio.html
     * 
     */
    radioGroup: IRadioGroupProps,
    /**
     * 单选项目
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/radio.html
     * 
     */
    radio: IRadioProps,
    /**
     * 滑动选择器。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/slider.html
     * 
     */
    slider: ISliderProps,
    /**
     * 开关选择器。
     * switch类型切换时在iOS自带振动反馈，可在系统设置 -> 声音与触感 -> 系统触感反馈中关闭
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/switch.html
     * 
     */
    switch: ISwitchProps,
    /**
     * 多行输入框。
     * `textarea` 的 `blur` 事件会晚于页面上的 `tap` 事件，如果需要在 `button` 的点击事件获取 `textarea`，可以使用 `form` 的 `bindsubmit`。

不建议在多行文本上对用户的输入进行修改，所以 `textarea` 的 `bindinput` 处理函数并不会将返回值反映到 `textarea` 上。

`textarea` 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。

请勿在 `scroll-view`、`swiper`、`picker-view`、`movable-view` 中使用 `textarea` 组件。

`css` 动画对 `textarea` 组件无效。
     * @bugs: 微信版本 `6.3.30`，`textarea` 在列表渲染时，新增加的 `textarea` 在自动聚焦时的位置计算错误。
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/textarea.html
     * 
     */
    textarea: ITextareaProps,
    /**
     * 页面链接。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/navigator.html
     * 
     */
    navigator: INavigatorProps,
    /**
     * 音频。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/audio.html
     * @relative: 
     * wx.createAudioContext: https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-audio.html
     * 
     */
    audio: IAudioProps,
    /**
     * 图片。
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/image.html
     * 
     */
    image: IImageProps,
    /**
     * 视频。

`<video />` 默认宽度300px、高度225px，可通过wxss设置宽高。
     * `video` 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。

请勿在 `scroll-view`、`swiper`、`picker-view`、`movable-view` 中使用 `video` 组件。

`css` 动画对 `video` 组件无效。
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/video.html
     * @relative: 
     * wx.createVideoContext: https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-video.html
     * 
     */
    video: IVideoProps,
    /**
     * 系统相机。
     * `camera` 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。可使用 `cover-view` `cover-image`覆盖在上面。

同一页面只能插入一个 `camera` 组件。

请勿在 `scroll-view`、`swiper`、`picker-view`、`movable-view` 中使用 `camera` 组件。
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/camera.html
     * @relative: 
     * wx.createCameraContext: https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-camera.html
     * 
     */
    camera: ICameraProps,
    /**
     * 实时音视频播放。

暂只针对如下类目开放，需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。

{社交 => "直播"; 教育 => "在线教育"; 医疗 => "互联网医院，公立医院"; 政务民生 => "所有二级类目"; 金融 =\> "基金、信托、保险、银行、证券/期货、非金融机构自营小额贷款、征信业务、消费金融"}
     * `live-player` 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。可使用 `cover-view` `cover-image`覆盖在上面。

请勿在 `scroll-view`、`swiper`、`picker-view`、`movable-view` 中使用 `live-player` 组件。

`css` 动画对 `live-player` 组件无效。
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/live-player.html
     * 
     */
    livePlayer: ILivePlayerProps,
    /**
     * 实时音视频录制。

暂只针对如下类目开放，需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。

{社交 => "直播"; 教育 => "在线教育"; 医疗 => "互联网医院，公立医院"; 政务民生 => "所有二级类目"; 金融 =\> "基金、信托、保险、银行、证券/期货、非金融机构自营小额贷款、征信业务、消费金融"}
     * `live-pusher` 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。可使用 `cover-view` `cover-image`覆盖在上面。

请勿在 `scroll-view`、`swiper`、`picker-view`、`movable-view` 中使用 `live-pusher` 组件。

`css` 动画对 `live-pusher` 组件无效。
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/live-pusher.html
     * 
     */
    livePusher: ILivePusherProps,
    /**
     * 地图。
     * `map` 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。

请勿在 `scroll-view`、`swiper`、`picker-view`、`movable-view` 中使用 `map` 组件。

`css` 动画对 `map` 组件无效。

`map` 组件使用的经纬度是火星坐标系，调用 `wx.getLocation` 接口需要指定 `type` 为 `gcj02`
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/map.html
     * @relative: 
     * wx.createMapContext: https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-map.html
     * 
     */
    map: IMapProps,
    /**
     * 画布。
     * `canvas` 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。

请勿在 `scroll-view`、`swiper`、`picker-view`、`movable-view` 中使用 `canvas` 组件。

`css` 动画对 `canvas` 组件无效。
     * @bugs: 避免设置过大的宽高，在安卓下会有crash的问题
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/canvas.html
     * @relative: 
     * wx.createCanvasContext: https://mp.weixin.qq.com/debug/wxadoc/dev/api/canvas/create-canvas-context.html
     * 
     */
    canvas: ICanvasProps,
    /**
     * 用于展示微信开放的数据。
     *  只有当前用户在此群内才能拉取到群名称

 关于open-gid的获取请查看 [转发](https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxgetshareinfoobject)
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/open-data.html
     * 
     */
    openData: IOpenDataProps,
    /**
     * web-view 组件是一个可以用来承载网页的容器，会自动铺满整个小程序页面。**个人类型与海外类型的小程序暂不支持使用。**
     * 网页内iframe的域名也需要配置到域名白名单。

开发者工具上，可以在 `<web-view/>` 组件上通过右键 \- 调试，打开 `<web-view/>` 组件的调试。

每个页面只能有一个`<web-view/>`，`<web-view/>`会自动铺满整个页面，并覆盖其他组件。

`<web-view/>`网页与小程序之间不支持除JSSDK提供的接口之外的通信。

在iOS中，若存在JSSDK接口调用无响应的情况，可在`<web-view/>`的src后面加个#wechat_redirect解决。
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/component/web-view.html
     * 
     */
    webView: IWebViewProps,
    /**
     * 用于承载组件使用者提供的wxml结构
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6wxml%E7%9A%84slot
     * 
     */
    slot: ISlotProps,
    /**
     * 
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/template.html
     * 
     */
    template: ITemplateProps,
    /**
     * 
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/conditional.html#block-wxif
     * 
     */
    block: IBlockProps,
    /**
     * import 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件 import 的 template
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/import.html#import
     * 
     */
    import: IImportProps,
    /**
     * include 可以将目标文件除了 <template/> <wxs/> 外的整个代码引入，相当于是拷贝到 include 位置
     * 
     * 
     * @see: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/import.html#include
     * 
     */
    include: IIncludeProps
  }

}
  