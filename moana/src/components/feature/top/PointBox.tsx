import Image from 'next/image'
import { ReactNode } from 'react'

type PointBoxProps = {
  index: number
  title: string
  desc: ReactNode
  imageUrl: string
  children: ReactNode
}

export default function PointBox({
  index,
  title,
  desc,
  imageUrl,
  children,
}: PointBoxProps) {
  return (
    <div className="md:flex md:flex-row-reverse md:items-start md:gap-8 md:bg-white md:p-4 md:rounded-lg">
      <div className="w-full aspect-[3/2] relative md:w-[40%] md:shrink-0 md:max-w-[500px] md:border-brand-primary md:border-2 md:rounded-lg md:overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain md:object-cover"
        />
      </div>
      <div className="relative mt-[-40] z-[2] grid gap-4 md:mt-[-56]">
        <h3 className="flex items-baseline leading-none text-[22px] font-bold gap-4 md:text-2xl">
          <span className="text-brand-primary text-[86px] text-outline-white leading-none">
            {index}
          </span>
          {title}
        </h3>
        <p>{desc}</p>
        {children}
      </div>
    </div>
  )
}
