import type { Metadata } from 'next'
import CvButton from '@/components/custom/atoms/CvButton'
import HeadingWithUnderline from '@/components/custom/atoms/HeadingWIthUnderline'
import PageHeading from '@/components/custom/molecules/PageHeading'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'トレーナー紹介 | MOANA Personal Training Gym',
  description:
    'プロのトレーナーがお客様ひとりひとりに適した運動メニューを考えます。何から始めれば良いかわからないという方もまずはお気軽にご相談ください。モアナのトレーナーが皆様の目標達成を全力でサポートいたします。',
}

export default function Trainer() {
  return (
    <>
      <PageHeading title="トレーナー紹介" subtitle="Trainer" />
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        <div className="w-[70vw] aspect-[4/5] relative border border-brand-primary border-2 rounded-lg overflow-hidden max-w-[300px] md:shrink-0">
          <Image
            src="/images/trainer/miki.png"
            alt="パーソナルトレーナー MIKI"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="w-full max-w-[300px] mx-auto md:mx-0 mb-10">
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
      <div className="text-center mt-16">
        <CvButton />
      </div>
    </>
  )
}
