import Link from 'next/link'
import MainNav from '../../molecules/MainNav'
import MobileNav from '../../molecules/MobileNav'
import Logo from '../../atoms/Logo'
import { menuItems } from '@/constants/menuItems'

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="flex h-14 items-center px-5 py-3 justify-between">
        <Link href="/">
          <Logo section="header" />
        </Link>
        <MainNav menuItems={menuItems} />
        <MobileNav menuItems={menuItems} />
      </div>
    </header>
  )
}
