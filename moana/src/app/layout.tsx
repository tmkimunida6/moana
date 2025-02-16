import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import TypekitLoader from '@/lib/TypekitLoader'
import Header from '@/components/custom/organisms/layout/Header'
import Footer from '@/components/custom/organisms/layout/Footer'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'MOANA Personal Training Gym',
  description:
    'モアナは、運動が苦手な方やご高齢の方にこそぴったりなトレーニングジム。お客様ひとりひとりに合わせた最適なメニューを提案し、お客様の健康と目標達成を全力でサポートします。普通のジムとは一味違う、ハワイのようなゆったりとした雰囲気の中で、私たちと運動を始めてみませんか？',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <TypekitLoader />
      <body className={`${notoSansJP.className} text-[18px] overflow-x-hidden`}>
        <Header />
        <div className="px-4 pb-16 max-w-5xl mx-auto md:px-12 leading-[1.8]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
