import type { Metadata } from 'next'
import { IoChevronForward } from 'react-icons/io5'
import CvButton from '@/components/custom/atoms/CvButton'
import TextLink from '@/components/custom/atoms/TextLink'
import PageHeading from '@/components/custom/molecules/PageHeading'
import FacilityBox from '@/components/feature/facility/FacilityBox'

export const metadata: Metadata = {
  title:
    '施設紹介 | MOANA Personal Training Gym（モアナ） | 姫路のパーソナルトレーニングジム',
  description:
    'モアナのトレーニングスペースはハワイをイメージした落ち着いた雰囲気になっています。また、オリンピック選手や一流アスリートも活用している体組成計「Inbody」など、最新のトレーニングマシンを設置しています。普通のジムとは一味違う、ハワイのようなゆったりとした雰囲気の中で、私たちと運動を始めてみませんか？',
  keywords:
    'ジム,トレーニング,パーソナル,姫路,モアナ,Moana Personal Traing Gym,施設紹介',
}

export default function Facility() {
  return (
    <>
      <PageHeading title="施設紹介" subtitle="Facility" />
      <div className="grid gap-16 gap-y-10 md:grid md:grid-cols-[repeat(2,1fr)] md:gap-x-6">
        <FacilityBox
          title="トレーニングスペース"
          image="training-space.png"
          position="right"
        >
          モアナのトレーニングスペースはハワイをイメージした落ち着いた雰囲気になっています。
          <br />
          最新マシンも完備しているほか、ヨガやエアロビクスができるスペースもあります。
        </FacilityBox>
        <FacilityBox title="外装" image="exterior.png" position="left">
          白い建物にモアナの青いロゴが目印！駐車場も完備しているほか、お車でお気軽にお越しいただけます。
          <br />
          送迎も承っておりますので、お気軽にお問い合わせください。
        </FacilityBox>
        <FacilityBox title="受付" image="counter.png" position="right">
          トレーニングスペース脇に併設されている受付カウンターです。
          <br />
          カウンセリングや各種手続きを行う際はこちらで行います。
        </FacilityBox>
        <FacilityBox title="MOANAロゴ" image="wall-logo.png" position="left">
          受付の壁に描かれているモアナのロゴです。
          <br />
          ハワイの海をイメージした素敵なロゴでとても気に入っています！
        </FacilityBox>
        <FacilityBox
          title="InBody（体組成計）"
          image="inbody.png"
          position="right"
        >
          <>
            モアナでは、オリンピック選手や一流アスリートも活用している体組成計を設置しています。
            <br />
            部位ごとに筋肉量・体脂肪量を測定でき、日々のトレーニングの効果を確認いただけます。
            <br />
            測定のみのご利用も可能ですので、お気軽にお問い合わせください。
            <span className="mt-4 block text-right">
              <TextLink href="https://inbody.co.jp/learn/" openInNew>
                <IoChevronForward />
                InBodyについて詳しく
              </TextLink>
            </span>
          </>
        </FacilityBox>
      </div>
      <div className="mt-16 text-center">
        <CvButton />
      </div>
    </>
  )
}
