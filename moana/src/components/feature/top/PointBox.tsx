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
    <div className="md:flex md:flex-row-reverse md:items-start md:gap-8 md:rounded-lg md:bg-white md:p-4">
      <div className="relative aspect-[3/2] w-full md:w-[40%] md:max-w-[500px] md:shrink-0 md:overflow-hidden md:rounded-lg md:border-2 md:border-brand-primary">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain md:object-cover"
        />
      </div>
      <div className="relative z-[2] -mt-10 grid gap-4 md:mt-[-56]">
        <h3 className="flex items-baseline gap-4 text-[22px] font-bold leading-none md:text-2xl">
          <span className="text-[86px] leading-none text-brand-primary text-outline-white">
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
