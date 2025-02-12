import { ReactNode } from 'react'

type PriceTableProps = {
  children: ReactNode
}

export default function PriceTable({ children }: PriceTableProps) {
  return (
    <table>
      <tbody className="divide-y">{children}</tbody>
    </table>
  )
}
