import Link from 'next/link'

type MainNavProps = {
  menuItems: Array<{
    id: number
    text: string
    href: string
  }>
}

export default function MainNav({ menuItems }: MainNavProps) {
  return (
    <div className="hidden gap-4 md:flex">
      {menuItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="text-md hover:text-brand-primary"
        >
          {item.text}
        </Link>
      ))}
    </div>
  )
}
