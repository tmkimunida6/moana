import HeadingWithUnderline from '@/components/custom/atoms/HeadingWIthUnderline'
import { Badge } from '@/components/ui/badge'
import { nanoid } from 'nanoid'
import { ReactNode } from 'react'

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
    <div className="flex flex-col items-start gap-4">
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
      <p>{desc}</p>
      {children}
    </div>
  )
}
