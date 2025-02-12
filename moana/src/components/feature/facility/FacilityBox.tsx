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
      className={`flex flex-col gap-6 w-fit ${position === 'left' ? 'items-start' : 'items-end'}`}
    >
      <FacilityImage src={image} alt={title} position={position} />
      <div>
        <HeadingWithUnderline title={title} />
        <p className="leading-[1.8] mt-4">{children}</p>
      </div>
    </div>
  )
}
