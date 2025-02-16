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
    <div className="mx-auto flex w-full max-w-[400px] items-center gap-6 rounded-md bg-white p-4 md:mx-0">
      <span className="text-md relative font-bold after:absolute after:bottom-1 after:left-0 after:h-[4px] after:w-full after:bg-[var(--brand-color-primary-50)]">
        特典
        <span className="text-[40px] leading-none text-brand-primary text-outline-white">
          {index}
        </span>
      </span>
      <div className="text-md flex items-center gap-2 font-bold">
        {icon}
        <span className="flex items-baseline gap-1">{children}</span>
      </div>
    </div>
  )
}
