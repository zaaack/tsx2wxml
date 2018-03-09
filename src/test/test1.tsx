export default function Test1({ aa, bb }: { aa: string, bb: Function}) {
  return (
    <view class={aa} bindtap={bb}>
      cc dd {aa}
    </view>
  )
}
