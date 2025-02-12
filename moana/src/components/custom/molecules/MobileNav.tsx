'use client'

// MobileNav.tsx
import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { TiWaves } from 'react-icons/ti'
import Link from 'next/link'
import { IoChevronForward } from 'react-icons/io5'
import Image from 'next/image'
import Logo from '../atoms/Logo'
import SnsIconList from './SnsIconList'

type MobileNavProps = {
  menuItems: Array<{
    id: number
    text: string
    href: string
  }>
}

export default function MobileNav({ menuItems }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-0 md:hidden">
          <TiWaves size={32} />
        </Button>
      </SheetTrigger>

      <SheetContent side="top" className="px-4 pt-0 pb-6 bg-white">
        <SheetTitle className="py-3">
          <Link href="/">
            <Logo section="header" />
          </Link>
        </SheetTitle>
        <SheetDescription className="sr-only">メニュー</SheetDescription>
        <div className="relative">
          <Image
            src="/images/logo-circle.svg"
            alt="モアナロゴ"
            width={200}
            height={200}
            className="absolute bottom-[-16px] right-0 z-[-1] opacity-15"
          />
          <div className="flex flex-col items-start divide-y">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 border-[--brand-color-primary] w-full"
              >
                <Link href={item.href} className="text-xl font-bold">
                  {item.text}
                </Link>
                <IoChevronForward size={20} />
              </div>
            ))}
          </div>
          <div className="flex items-center px-4 mt-6 gap-6">
            <SnsIconList />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
