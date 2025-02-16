import CvButton from '@/components/custom/atoms/CvButton'
import TextLink from '@/components/custom/atoms/TextLink'
import PageHeading from '@/components/custom/molecules/PageHeading'
import PriceTableRow from '@/components/custom/molecules/PriceTableRow'
import PriceTable from '@/components/custom/organisms/PriceTable'
import ZeroBanner from '@/components/custom/organisms/ZeroBanner'
import BenefitBox from '@/components/feature/price/BenefitBox'
import PriceBox from '@/components/feature/price/PriceBox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { IoChevronForward, IoPeopleSharp, IoPersonSharp } from 'react-icons/io5'

export default function Price() {
  return (
    <>
      <PageHeading title="料金案内" subtitle="Price" />
      <div className="grid gap-10">
        <p className="max-w-[660px] mx-auto md:text-center">
          モアナの料金システムはとっても簡単。
          <br />
          お支払いいただくのは、トレーニングの利用料金だけで、わかりづらい手数料や解約金はありません。
        </p>
        <ZeroBanner />
        <div className="grid gap-6">
          <h2 className="text-2xl font-bold text-center">料金詳細</h2>
          <p className="md:text-center">
            お一人様はもちろん、お二人での参加も可能です。お友達やご夫婦でお気軽にご参加ください。
          </p>
        </div>
        <Tabs defaultValue="personal">
          <TabsList>
            <TabsTrigger value="personal">
              <IoPersonSharp className="mr-1" />
              パーソナル(1人)
            </TabsTrigger>
            <TabsTrigger value="pair">
              <IoPeopleSharp className="mr-1" /> ペア(2人)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personal" className="grid gap-10">
            <PriceBox
              title="パーソナルトレーニング"
              badges={['週1', '60分/回', 'マンツーマン', '初心者']}
              desc={
                <>
                  週1回60分のペースでトレーニングいただくコースです。
                  <br />
                  お仕事でお忙しい方、運動初心者の方におすすめです。
                </>
              }
            >
              <PriceTable notes={['1回60分間のトレーニングとなります。']}>
                <PriceTableRow
                  th={
                    <>
                      1ヶ月コース
                      <br />
                      (計4回)
                    </>
                  }
                  price={22000}
                />
                <PriceTableRow
                  th={
                    <>
                      2ヶ月コース
                      <br />
                      (計8回)
                    </>
                  }
                  price={42240}
                  oldPrice={44000}
                />
                <PriceTableRow
                  th={
                    <>
                      3ヶ月コース
                      <br />
                      (計12回)
                    </>
                  }
                  price={60720}
                  oldPrice={66000}
                />
              </PriceTable>
            </PriceBox>
            <PriceBox
              title="パーソナル集中トレーニング"
              badges={['週2', '60分/回', 'マンツーマン', '集中']}
              desc={
                <>
                  週2回60分のペースでトレーニングいただくコースです。
                  <br />
                  集中して取り組みたい方や運動を習慣化させたい方におすすめです。
                </>
              }
            >
              <PriceTable notes={['1回60分間のトレーニングとなります。']}>
                <PriceTableRow
                  th={
                    <>
                      1ヶ月コース
                      <br />
                      (計8回)
                    </>
                  }
                  price={42240}
                  oldPrice={44000}
                />
                <PriceTableRow
                  th={
                    <>
                      2ヶ月コース
                      <br />
                      (計16回)
                    </>
                  }
                  price={80960}
                  oldPrice={88000}
                />
                <PriceTableRow
                  th={
                    <>
                      3ヶ月コース
                      <br />
                      (計24回)
                    </>
                  }
                  price={116160}
                  oldPrice={132000}
                />
              </PriceTable>
            </PriceBox>
            <PriceBox
              title="体験トレーニング"
              badges={['1回限り', '45分/回', '体験']}
              desc={
                <>
                  初回のみ45分間体験トレーニングをご利用いただけます。
                  <br />
                  体験だけのご参加でも全く問題ありませんので、ぜひお気軽にご利用ください。
                </>
              }
            >
              <PriceTable
                notes={[
                  'セッション前後の体組成計の測定・カウンセリングなどの時間を含んでおります。',
                ]}
              >
                <PriceTableRow
                  th={<>45分 ×1</>}
                  price={2800}
                  oldPrice={3300}
                  campaign="OPENキャンペーン (~3/31)"
                />
              </PriceTable>
            </PriceBox>
          </TabsContent>
          <TabsContent value="pair" className="grid gap-10">
            <PriceBox
              title="ペアパーソナルトレーニング"
              badges={['週1', '60分/回', 'ペア', '初心者']}
              desc={
                <>
                  週1回60分のペースでトレーニングいただくコースです。
                  <br />
                  お仕事でお忙しい方、運動初心者の方におすすめです。
                </>
              }
            >
              <PriceTable
                notes={[
                  '1人あたりの金額です。',
                  '1回60分間のトレーニングとなります。',
                ]}
              >
                <PriceTableRow
                  th={
                    <>
                      1ヶ月コース
                      <br />
                      (計4回)
                    </>
                  }
                  price={17600}
                />
                <PriceTableRow
                  th={
                    <>
                      2ヶ月コース
                      <br />
                      (計8回)
                    </>
                  }
                  price={33440}
                  oldPrice={35200}
                />
                <PriceTableRow
                  th={
                    <>
                      3ヶ月コース
                      <br />
                      (計12回)
                    </>
                  }
                  price={47520}
                  oldPrice={52800}
                />
              </PriceTable>
            </PriceBox>
            <PriceBox
              title="ペアパーソナル集中トレーニング"
              badges={['週2', '60分/回', 'ペア', '集中']}
              desc={
                <>
                  週2回60分のペースでトレーニングいただくコースです。
                  <br />
                  集中して取り組みたい方や運動を習慣化させたい方におすすめです。
                </>
              }
            >
              <PriceTable
                notes={[
                  '※1人あたりの金額です。',
                  '1回60分間のトレーニングとなります。',
                ]}
              >
                <PriceTableRow
                  th={
                    <>
                      1ヶ月コース
                      <br />
                      (計8回)
                    </>
                  }
                  price={33440}
                  oldPrice={35200}
                />
                <PriceTableRow
                  th={
                    <>
                      2ヶ月コース
                      <br />
                      (計16回)
                    </>
                  }
                  price={63360}
                  oldPrice={70400}
                />
                <PriceTableRow
                  th={
                    <>
                      3ヶ月コース
                      <br />
                      (計24回)
                    </>
                  }
                  price={89760}
                  oldPrice={105600}
                />
              </PriceTable>
            </PriceBox>
            <PriceBox
              title="ペア体験トレーニング"
              badges={['1回限り', '45分/回', '体験']}
              desc={
                <>
                  初回のみ45分間体験トレーニングをご利用いただけます。
                  <br />
                  体験だけのご参加でも全く問題ありませんので、ぜひお気軽にご利用ください。
                </>
              }
            >
              <PriceTable
                notes={[
                  '※1人あたりの金額です。',
                  'セッション前後の体組成計の測定・カウンセリングなどの時間を含んでおります。',
                ]}
              >
                <PriceTableRow
                  th={<>60分 ×1</>}
                  price={3900}
                  oldPrice={4400}
                  campaign="OPENキャンペーン (~3/31)"
                />
              </PriceTable>
            </PriceBox>
          </TabsContent>
        </Tabs>
        <PriceBox
          title="InBody測定"
          badges={['体組成計', '測定のみ', '体験']}
          desc={
            <>
              高機能体組成「InBody」による、お身体の測定のみとなります。
              <br />
              測定結果はその場ですぐにプリントしてお渡しいたします。
              <span className="block text-right mt-1">
                <TextLink href="https://inbody.co.jp/" openInNew>
                  <IoChevronForward />
                  InBodyについて詳しく
                </TextLink>
              </span>
            </>
          }
        >
          <PriceTable>
            <PriceTableRow th={<>1回</>} price={550} />
          </PriceTable>
        </PriceBox>
        <div className="grid gap-4 mt-10">
          <h2 className="text-2xl font-bold text-center text-brand-accent">
            60歳以上の方限定！
          </h2>
          <div className="flex flex-col gap-4 md:flex-row justify-center">
            <BenefitBox index={1} iconName="pig">
              毎回<strong className="text-2xl">500円割引</strong>
            </BenefitBox>
            <BenefitBox index={2} iconName="car">
              (初回のみ)<strong className="text-2xl">送迎無料</strong>
            </BenefitBox>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <CvButton />
      </div>
    </>
  )
}
