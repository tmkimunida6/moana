import type { Metadata } from 'next'
import Image from 'next/image'
import CvButton from '@/components/custom/atoms/CvButton'
import HeadingWithUnderline from '@/components/custom/atoms/HeadingWIthUnderline'
import PageHeading from '@/components/custom/molecules/PageHeading'

export const metadata: Metadata = {
  title:
    'トレーナー紹介 | MOANA Personal Training Gym（モアナ） | 姫路のパーソナルトレーニングジム',
  description:
    'プロのトレーナーがお客様ひとりひとりに適した運動メニューを考えます。何から始めれば良いかわからないという方もまずはお気軽にご相談ください。モアナのトレーナーが皆様の目標達成を全力でサポートいたします。',
  keywords:
    'ジム,トレーニング,パーソナル,姫路,モアナ,Moana Personal Traing Gym,トレーナー紹介',
}

export default function Trainer() {
  return (
    <>
      <PageHeading title="トレーナー紹介" subtitle="Trainer" />
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        <div className="relative aspect-[4/5] w-[70vw] max-w-[300px] overflow-hidden rounded-lg border border-2 border-brand-primary md:shrink-0">
          <Image
            src="/images/trainer/miki.png"
            alt="パーソナルトレーナー MIKI"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="mx-auto mb-10 w-full max-w-[300px] md:mx-0">
            <span>パーソナルトレーナー</span>
            <h2 className="text-3xl font-bold">MIKI</h2>
          </div>
          <HeadingWithUnderline title="メッセージ" />
          <p className="mt-4">
            はじめまして。モアナパーソナルトレーナーのMIKIと申します。
            <br />
            お客様のお悩みを大切にお伺いして、お一人おひとりに合ったブログラムを考え解決できるように、自らの経験を活かしサポートしていきます。ダイエット、肩こり、腰痛、ひざが痛い方是非お待ちしております。
          </p>
        </div>
      </div>
      <div className="mt-16 text-center">
        <CvButton />
      </div>
    </>
  )
}
