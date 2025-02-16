import { ReactNode } from 'react'

type ContactTableRowProps = {
  title: string
  children: ReactNode
}

export default function ContactTableRow({
  title,
  children,
}: ContactTableRowProps) {
  return (
    <li className="items-top flex">
      <h4 className="min-w-[90px] text-left align-top font-bold">{title}</h4>
      {children}
    </li>
  )
}
