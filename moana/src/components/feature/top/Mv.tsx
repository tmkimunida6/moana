'use client'

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Logo from '@/components/custom/atoms/Logo'
import MvCarouselItem from './MvCarouselItem'
import ZeroBanner from '@/components/custom/organisms/ZeroBanner'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export default function Mv() {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="mx-[calc(50%-50vw)]"
    >
      <CarouselContent>
        <MvCarouselItem index={1}>
          <div className="absolute top-[88px] left-[50%] -translate-x-1/2 max-w-[400px] mx-auto pl-[120px] flex flex-col gap-6 items-end">
            <Logo section="mv" />
            <p className="text-xl font-bold text-white leading-[2] whitespace-nowrap">
              一緒だから目指せる、
              <br />
              完全プライベート空間で
              <br />
              安心・安全の身体づくり
            </p>
          </div>
        </MvCarouselItem>
        <MvCarouselItem index={2}>
          <div className="flex flex-col items-center gap-4 pt-6 px-4">
            <span className="text-xl font-bold text-brand-primary text-outline-white">
              <span className="font-moana text-[28px] leading-none">MOANA</span>
              なら
            </span>
            <ZeroBanner />
            <p className="text-sm">
              無理な勧誘等は一切ございませんので、
              <br />
              どうぞお気軽にお問い合わせくださいませ。
            </p>
          </div>
        </MvCarouselItem>
        <MvCarouselItem index={3}>
          <div className="flex flex-col items-center gap-4 pt-6 px-4">
            <div className="w-full max-w-[500px]">
              <div className="bg-brand-primary px-4 py-2 rounded-sm text-white text-sm font-bold relative w-fit">
                いつまでも心身共に健康な
                <br />
                カラダづくりを応援します！
                <div className="bg-brand-primary absolute top-[100%] left-[20%] -translate-x-1/2 w-[32px] h-[16px] [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-bold text-brand-accent text-outline-white">
                60歳以上の方限定
              </span>
              <span className="text-xl font-bold text-brand-primary text-outline-white">
                <span className="font-moana text-[28px] leading-none">
                  MOANA
                </span>
                シニアコース
              </span>
              <span className="text-lg font-bold">
                いつでも毎回500円割引に！
              </span>
            </div>
            <div className="w-full aspect-[358/138] max-w-[400px] relative">
              <Image
                src="/images/top/coupon.png"
                alt="プラチナムパスポート 毎回500円割引（60歳以上限定）"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </MvCarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
