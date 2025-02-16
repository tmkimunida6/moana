'use client'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import MvCarouselItem from './MvCarouselItem'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Logo from '@/components/custom/atoms/Logo'
import ZeroBanner from '@/components/custom/organisms/ZeroBanner'

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
        <MvCarouselItem image="mv1.jpg">
          <div className="absolute left-[50%] top-[88px] mx-auto flex max-w-[400px] -translate-x-1/2 flex-col items-end gap-6 pl-[120px]">
            <Logo section="mv" />
            <p className="whitespace-nowrap text-xl font-bold leading-[2] text-white">
              一緒だから目指せる、
              <br />
              完全プライベート空間で
              <br />
              安心・安全の身体づくり
            </p>
          </div>
        </MvCarouselItem>
        <MvCarouselItem image="mv2.jpg">
          <div className="flex flex-col items-center gap-4 px-4 pt-6">
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
        <MvCarouselItem image="mv3.jpg">
          <div className="flex flex-col items-center gap-4 px-4 pt-6">
            <div className="w-full max-w-[500px]">
              <div className="relative w-fit rounded-sm bg-brand-primary px-4 py-2 text-sm font-bold text-white">
                いつまでも心身共に健康な
                <br />
                カラダづくりを応援します！
                <div className="absolute left-[20%] top-[100%] h-[16px] w-[32px] -translate-x-1/2 bg-brand-primary [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
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
            <div className="relative aspect-[358/138] w-full max-w-[400px]">
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
