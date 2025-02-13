import { nanoid } from 'nanoid'
import { ReactNode } from 'react'

type PriceTableProps = {
  notes?: Array<string>
  children: ReactNode
}

export default function PriceTable({ notes, children }: PriceTableProps) {
  return (
    <div className="grid gap-1 w-full">
      <table>
        <tbody className="divide-y">{children}</tbody>
      </table>
      {notes &&
        notes.length &&
        notes.map(() => {
          const id = nanoid()
          return (
            <p key={id} className="text-sm">
              ※{notes}
            </p>
          )
        })}
    </div>
  )
}
