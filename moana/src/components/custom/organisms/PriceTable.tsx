import { nanoid } from 'nanoid'
import { ReactNode } from 'react'

type PriceTableProps = {
  notes?: Array<string>
  children: ReactNode
}

export default function PriceTable({ notes, children }: PriceTableProps) {
  return (
    <div className="grid w-full gap-1">
      <table>
        <tbody>{children}</tbody>
      </table>
      {notes &&
        notes.length &&
        notes.map((note) => {
          const id = nanoid()
          return (
            <p key={id} className="text-sm md:text-base">
              ※{note}
            </p>
          )
        })}
    </div>
  )
}
