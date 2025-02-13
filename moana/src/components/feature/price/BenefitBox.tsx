import { ReactNode } from 'react'
import { IoCar } from 'react-icons/io5'
import { TbPigMoney } from 'react-icons/tb'

type BenefitBoxProps = {
  index: number
  iconName: 'pig' | 'car'
  children: ReactNode
}

export default function BenefitBox({
  index,
  iconName,
  children,
}: BenefitBoxProps) {
  const icon =
    iconName === 'pig' ? (
      <TbPigMoney size={32} className="text-brand-accent" />
    ) : (
      <IoCar size={32} className="text-brand-accent" />
    )

  return (
    <div className="bg-white rounded-md p-4 flex items-center gap-6 max-w-[400px] mx-auto w-full">
      <span className="text-md font-bold relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-[4px] after:bg-[var(--brand-color-primary-50)]">
        特典
        <span className="text-brand-primary text-[40px] text-outline-white leading-none">
          {index}
        </span>
      </span>
      <div className="flex items-center gap-2 text-md font-bold">
        {icon}
        <span className="flex items-baseline gap-1">{children}</span>
      </div>
    </div>
  )
}
