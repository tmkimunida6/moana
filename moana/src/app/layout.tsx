import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import TypekitLoader from '@/lib/TypekitLoader'
import Header from '@/components/custom/organisms/layout/Header'
import Footer from '@/components/custom/organisms/layout/Footer'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <TypekitLoader />
      <body className={`${notoSansJP.className} overflow-x-hidden text-[18px]`}>
        <Header />
        <div className="mx-auto max-w-5xl px-4 pb-16 leading-[1.8] md:px-12">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
