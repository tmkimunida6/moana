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
    <div>
      <div className="w-full aspect-[3/2] relative">
        <Image src={imageUrl} alt={title} fill className="object-contain" />
      </div>
      <div className="relative mt-[-40] z-[2] grid gap-4">
        <h3 className="flex items-baseline leading-none text-[22px] font-bold gap-4">
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
