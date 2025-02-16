import { nanoid } from 'nanoid'
import { ReactNode } from 'react'
import HeadingWithUnderline from '@/components/custom/atoms/HeadingWIthUnderline'
import { Badge } from '@/components/ui/badge'

type PriceBoxProps = {
  title: string
  badges: Array<string>
  desc: ReactNode
  children: ReactNode
}

export default function PriceBox({
  title,
  badges,
  desc,
  children,
}: PriceBoxProps) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-lg bg-white p-4">
      <HeadingWithUnderline title={title} />
      <div className="flex gap-2">
        {badges.map((badge) => {
          const id = nanoid()
          return (
            <Badge key={id} variant="default">
              {badge}
            </Badge>
          )
        })}
      </div>
      <p className="w-full">{desc}</p>
      {children}
    </div>
  )
}
