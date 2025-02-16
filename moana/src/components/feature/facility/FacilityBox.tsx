import { ReactNode } from 'react'
import FacilityImage from './FacilityImage'
import HeadingWithUnderline from '@/components/custom/atoms/HeadingWIthUnderline'

type FacilityBoxProps = {
  title: string
  image: string
  position: 'left' | 'right'
  children: ReactNode
}

export default function FacilityBox({
  title,
  image,
  children,
  position,
}: FacilityBoxProps) {
  return (
    <div
      className={`flex w-full flex-col gap-6 ${position === 'left' ? 'items-start' : 'items-end'} md:bg-white md:p-4`}
    >
      <FacilityImage src={image} alt={title} position={position} />
      <div className="w-full">
        <HeadingWithUnderline title={title} />
        <p className="mt-2">{children}</p>
      </div>
    </div>
  )
}
