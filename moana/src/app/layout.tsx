import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import TypekitLoader from '@/lib/TypekitLoader'
import Header from '@/components/custom/organisms/layout/Header'
import Footer from '@/components/custom/organisms/layout/Footer'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_FRONT_BASE_URL}`),
  title:
    'MOANA Personal Training Gym（モアナ） | 姫路のパーソナルトレーニングジム',
  description:
    '姫路市町田にあるモアナは、運動苦手な方やご高齢の方にこそおすすめなパーソナルトレーニングジム。入会金、解約金、各種手数料全て0円。無料カウンセリングも実施中！一人一人に最適なメニューと完全プライベートな空間でお客様の健康と目標達成をサポートします。',
  keywords:
    'ジム,トレーニング,パーソナル,姫路,モアナ,Moana Personal Traing Gym',
  openGraph: {
    title:
      'MOANA Personal Training Gym（モアナ） | 姫路のパーソナルトレーニングジム',
    description:
      '姫路市町田にあるモアナは、運動苦手な方やご高齢の方にこそおすすめなパーソナルトレーニングジム。入会金、解約金、各種手数料全て0円。無料カウンセリングも実施中！一人一人に最適なメニューと完全プライベートな空間でお客様の健康と目標達成をサポートします。',
    url: 'https://www.moana-personalgym.f5.si/',
    siteName: 'MOANA Personal Training Gym',
    type: 'website',
  },
  twitter: {
    title:
      'MOANA Personal Training Gym（モアナ） | 姫路のパーソナルトレーニングジム',
    description:
      '姫路市町田にあるモアナは、運動苦手な方やご高齢の方にこそおすすめなパーソナルトレーニングジム。入会金、解約金、各種手数料全て0円。無料カウンセリングも実施中！一人一人に最適なメニューと完全プライベートな空間でお客様の健康と目標達成をサポートします。',
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.moana-personalgym.f5.si/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics gaId="G-RL2NE0GFRL" />
        <TypekitLoader />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="MOANA" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HealthAndBeautyBusiness',
              name: 'MOANA Personal Training Gym',
              url: 'https://www.moana-personalgym.f5.si/',
              logo: 'https://www.moana-personalgym.f5.si/favicons/favicon-96x96.png',
              image: 'https://www.moana-personalgym.f5.si/opengraph-image.png',
              description:
                '姫路市町田にあるモアナは、運動苦手な方やご高齢の方にこそおすすめなパーソナルトレーニングジム。',
              address: {
                '@type': 'PostalAddress',
                addressLocality: '姫路市町田',
                addressRegion: '兵庫県',
                postalCode: '671-2217',
                streetAddress: '214-1-3',
              },
              telephone: '079-290-9070',
              openingHours: 'Mo-Su 09:00-21:00',
            }),
          }}
        />
      </head>
      <body className={`${notoSansJP.className} overflow-x-hidden text-[18px]`}>
        <Header />
        <div className="mx-auto max-w-5xl flex-1 px-4 pb-16 leading-[1.8] md:px-12">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
