import Link from 'next/link'
import Logo from '../../atoms/Logo'
import Contact from '../Contact'
import SnsIconList from '../../molecules/SnsIconList'
import { menuItems } from '@/constants/menuItems'

export default function Footer() {
  return (
    <footer className="bg-white px-4">
      <ul className="md: flex items-center justify-center divide-x border-b border-brand-primary py-8">
        {menuItems
          .filter((item) => !item.headerOnly)
          .map((item) => (
            <li
              key={item.id}
              className="border-brand-primary px-4 leading-[14px] first:pl-0 last:pr-0"
            >
              <Link
                href={item.href}
                className="text-sm font-bold hover:text-brand-primary"
              >
                {item.text}
              </Link>
            </li>
          ))}
      </ul>
      <div className="mx-auto grid max-w-[660px] gap-8 py-8">
        <div className="flex justify-center">
          <Logo section="footer" />
        </div>
        <Contact />
        <div className="flex items-center justify-center gap-6">
          <SnsIconList />
        </div>
        <span className="text-center text-[10px] text-gray-500">
          Copyright © MOANA Personal Training Gym All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
