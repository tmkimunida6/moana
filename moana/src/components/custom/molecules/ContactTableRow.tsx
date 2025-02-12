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
    <li className="flex items-top">
      <h4 className="font-bold text-left min-w-[90px] align-top">{title}</h4>
      {children}
    </li>
  )
}
