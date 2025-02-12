import { menuItems } from '@/constants/menuItems'
import Link from 'next/link'
import Logo from '../../atoms/Logo'
import Contact from '../Contact'
import SnsIconList from '../../molecules/SnsIconList'

export default function Footer() {
  return (
    <footer className="bg-white px-4">
      <ul className="flex items-center justify-center divide-x py-8 border-b border-brand-primary">
        {menuItems
          .filter((item) => !item.headerOnly)
          .map((item) => (
            <li
              key={item.id}
              className="border-brand-primary px-4 leading-[14px]"
            >
              <Link href={item.href} className="text-sm font-bold">
                {item.text}
              </Link>
            </li>
          ))}
      </ul>
      <div className="grid gap-8 py-8">
        <div className="flex justify-center">
          <Logo section="footer" />
        </div>
        <Contact />
        <div className="flex items-center justify-center gap-6">
          <SnsIconList />
        </div>
        <span className="text-[10px] text-gray-500 text-center">
          Copyright © MOANA Personal Training Gym All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
