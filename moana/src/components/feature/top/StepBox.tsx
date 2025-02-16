import { ReactNode } from 'react'
import BoxWithArrow from '@/components/custom/atoms/BoxWithArrow'

type StepBoxProps = {
  index: number
  title: string
  desc?: ReactNode
  noArrow?: boolean
  children?: ReactNode
}

export default function StepBox({
  index,
  title,
  desc,
  noArrow = false,
  children,
}: StepBoxProps) {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-brand-accent">STEP{index}</span>
      <BoxWithArrow bg="white" noArrow={noArrow}>
        <h3 className="text-center font-bold text-brand-accent md:text-xl">
          {title}
        </h3>
        {desc && <p className="text-base md:text-lg">{desc}</p>}
        {children || null}
      </BoxWithArrow>
    </div>
  )
}
