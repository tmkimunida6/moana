import Image from 'next/image'
import BoxWithArrow from '../atoms/BoxWithArrow'
import GridTextItem from '../atoms/GridTextItem'

export default function ZeroBanner() {
  return (
    <div className="mx-auto flex w-full max-w-[400px] flex-col items-center gap-4">
      <div className="w-full">
        <BoxWithArrow bg="accent">
          <ul className="grid grid-cols-[repeat(2,minmax(136px,1fr))] gap-1">
            <GridTextItem text="入会金" bg="white" />
            <GridTextItem text="月会費" bg="white" />
            <GridTextItem text="登録手数料" bg="white" />
            <GridTextItem text="解約金" bg="white" />
          </ul>
        </BoxWithArrow>
      </div>
      <div className="relative aspect-[3/2] w-[70vw] max-w-[250px]">
        <Image
          src="/images/price/zero.png"
          alt="すべて￥0"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}
