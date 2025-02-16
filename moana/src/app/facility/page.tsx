import CvButton from '@/components/custom/atoms/CvButton'
import TextLink from '@/components/custom/atoms/TextLink'
import PageHeading from '@/components/custom/molecules/PageHeading'
import FacilityBox from '@/components/feature/facility/FacilityBox'
import { IoChevronForward } from 'react-icons/io5'

export default function Facility() {
  return (
    <>
      <PageHeading title="施設紹介" subtitle="Facility" />
      <div className="grid gap-16 md:grid md:grid-cols-[repeat(2,1fr)] md:gap-x-6 gap-y-10">
        <FacilityBox
          title="トレーニングスペース"
          image="training-space.jpg"
          position="right"
        >
          トレーニングスペースの説明が入ります。トレーニングスペースの説明が入ります。トレーニングスペースの説明が入ります。
        </FacilityBox>
        <FacilityBox title="外装" image="training-space.jpg" position="left">
          外装の説明が入ります。外装の説明が入ります。外装の説明が入ります。
        </FacilityBox>
        <FacilityBox title="受付" image="training-space.jpg" position="right">
          受付の説明が入ります。受付の説明が入ります。受付の説明が入ります。
        </FacilityBox>
        <FacilityBox
          title="MOANAロゴ"
          image="training-space.jpg"
          position="left"
        >
          MOANAロゴの説明が入ります。MOANAロゴの説明が入ります。MOANAロゴの説明が入ります。
        </FacilityBox>
        <FacilityBox
          title="InBody（体組成計）"
          image="training-space.jpg"
          position="right"
        >
          <>
            "モアナでは、オリンピック選手や一流アスリートも活用している体組成計を設置しています。
            <br />
            部位ごとに筋肉量・体脂肪量を測定でき、日々のトレーニングの効果を確認いただけます。
            <br />
            測定のみのご利用も可能ですので、お気軽にお問い合わせください。
            <span className="block text-right mt-4">
              <TextLink href="https://inbody.co.jp/" openInNew>
                <IoChevronForward />
                InBodyについて詳しく
              </TextLink>
            </span>
          </>
        </FacilityBox>
      </div>
      <div className="text-center mt-16">
        <CvButton />
      </div>
    </>
  )
}
