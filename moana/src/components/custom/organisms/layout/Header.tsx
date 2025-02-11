import Link from 'next/link'
import MainNav from '../../molecules/MainNav'
import MobileNav from '../../molecules/MobileNav'
import Logo from '../../atoms/Logo'

export default function Header() {
  const menuItems = [
    {
      id: 1,
      text: 'TOP',
      href: '/',
    },
    {
      id: 2,
      text: 'トレーナー紹介',
      href: '/trainer',
    },
    {
      id: 3,
      text: '施設紹介',
      href: '/facility',
    },
    {
      id: 4,
      text: '料金案内',
      href: '/price',
    },
    {
      id: 5,
      text: '無料カウンセリング',
      href: '/',
    },
  ]

  return (
    <header className="w-full border-b">
      <div className="flex h-14 items-center px-5 py-3 justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <MainNav menuItems={menuItems} />
        <MobileNav menuItems={menuItems} />
      </div>
    </header>
  )
}
