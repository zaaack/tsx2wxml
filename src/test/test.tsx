import Test1 from './test1'

export default function Test({ aa, bb }: { aa: string, bb: Function}) {
  return (
    <view class={aa} bindtap={bb}>
      cc dd {aa}
      <Test1 aa={'aaa'} bb={bb} />
    </view>
  )
}
