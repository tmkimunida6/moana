import CvButton from '@/components/custom/atoms/CvButton'
import HeadingWithUnderline from '@/components/custom/atoms/HeadingWIthUnderline'
import PageHeading from '@/components/custom/molecules/PageHeading'
import Image from 'next/image'

export default function Trainer() {
  return (
    <>
      <PageHeading title="トレーナー紹介" subtitle="Trainer" />
      <div className="flex flex-col items-center gap-10">
        <div className="inline-flex flex-col items-center gap-6 w-fit">
          <div className="w-[70vw] aspect-[4/5] relative border border-brand-primary border-2 rounded-lg overflow-hidden max-w-[300px]">
            <Image
              src="/images/trainer/miki.jpg"
              alt="パーソナルトレーナー MIKI"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full">
            <span>パーソナルトレーナー</span>
            <h2 className="text-3xl font-bold">MIKI</h2>
          </div>
        </div>
        <div>
          <HeadingWithUnderline title="メッセージ" />
          <p className="leading-[1.8] mt-4">
            はじめまして。モアナパーソナルトレーナーのMIKIと申します。
            <br />
            お客様のお悩みを大切にお伺いして、お一人おひとりに合ったブログラムを考え解決できるように、自らの経験を活かしサポートしていきます。ダイエット、肩こり、腰痛、ひざが痛い方是非お待ちしております。
          </p>
        </div>
        <div className="text-center">
          <CvButton />
        </div>
      </div>
    </>
  )
}
