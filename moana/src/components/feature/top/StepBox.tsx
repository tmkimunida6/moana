import BoxWithArrow from '@/components/custom/atoms/BoxWithArrow'
import { ReactNode } from 'react'

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
    <div>
      <span className="text-brand-accent font-bold">STEP{index}</span>
      <BoxWithArrow bg="white" noArrow={noArrow}>
        <h3 className="font-bold text-center text-brand-accent">{title}</h3>
        {desc && <p className="text-base">{desc}</p>}
        {children || <></>}
      </BoxWithArrow>
    </div>
  )
}
