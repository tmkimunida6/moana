import HeadingWithUnderline from '@/components/custom/atoms/HeadingWIthUnderline'
import FacilityImage from './FacilityImage'
import { ReactNode } from 'react'

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
      className={`flex flex-col gap-6 w-full ${position === 'left' ? 'items-start' : 'items-end'} md:bg-white md:p-4`}
    >
      <FacilityImage src={image} alt={title} position={position} />
      <div className="w-full">
        <HeadingWithUnderline title={title} />
        <p className="mt-2">{children}</p>
      </div>
    </div>
  )
}
