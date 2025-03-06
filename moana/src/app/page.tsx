import Image from 'next/image'
import Link from 'next/link'
import { IoCall, IoChevronForward, IoMail } from 'react-icons/io5'
import CvButton from '@/components/custom/atoms/CvButton'
import GridTextItem from '@/components/custom/atoms/GridTextItem'
import TextLink from '@/components/custom/atoms/TextLink'
import PriceTableRow from '@/components/custom/molecules/PriceTableRow'
import Contact from '@/components/custom/organisms/Contact'
import PriceTable from '@/components/custom/organisms/PriceTable'
import HighlightedText from '@/components/feature/top/HighlightedText'
import PointBox from '@/components/feature/top/PointBox'
import SectionHeading from '@/components/feature/top/SectionHeading'
import StepBox from '@/components/feature/top/StepBox'
import Mv from '@/components/feature/top/Mv'

export default function Home() {
  return (
    <>
      <section className="relative mb-20">
        <Mv />
        <div className="absolute bottom-0 left-0 mx-[calc(50%-50vw)] h-[20px] w-[100vw]">
          <div className="absolute h-full w-full max-w-[none] animate-wave bg-[url(/images/wave.png)] bg-[auto_100%] bg-left md:animate-wave-md"></div>
        </div>
      </section>
      <div className="grid gap-20">
        <section>
          <SectionHeading subtext="about">
            <span className="font-moana text-[38px] leading-none text-brand-primary">
              MOANA
            </span>
            について
          </SectionHeading>
          <div className="mx-auto max-w-[660px]">
            <p className="mt-8 flex flex-col gap-2 md:mt-10 md:items-center">
              <HighlightedText>
                <span className="text-brand-primary">運動が苦手な方</span>や
                <span className="text-brand-primary">ご高齢の方</span>も大歓迎！
              </HighlightedText>
              <HighlightedText>
                <span className="text-brand-primary">お客様ひとりひとり</span>
                に寄り添う
                <span className="hidden md:inline">
                  パーソナルトレーニングジムです。
                </span>
              </HighlightedText>
              <span className="md:hidden">
                <HighlightedText>
                  パーソナルトレーニングジムです。
                </HighlightedText>
              </span>
            </p>
            <p className="mt-4 md:mt-8">
              モアナは、運動が苦手な方やご高齢の方にこそぴったりなトレーニングジム。
              <br />
              お客様ひとりひとりに合わせた最適なメニューを提案し、お客様の健康と目標達成を全力でサポートします。
              <br />
              普通のジムとは一味違う、ハワイのようなゆったりとした雰囲気の中で、私たちと運動を始めてみませんか？
            </p>
          </div>
          <div className="mt-16 text-center">
            <CvButton />
          </div>
        </section>

        <section>
          <SectionHeading subtext="point">
            <span className="text-[86px] leading-none text-brand-primary text-outline-white">
              3
            </span>
            つのポイント
          </SectionHeading>
          <div className="grid gap-16 md:gap-10">
            <PointBox
              index={1}
              title="わかりやすい料金体系"
              desc={
                <>
                  お支払いいただくのは、トレーニングの利用料金だけで、わかりづらい手数料や解約金もありません。
                  <br />
                  決まった回数通う必要もないので、ご自身のペースで続けていただけます。
                </>
              }
              imageUrl="/images/top/point1.png"
            >
              <PriceTable
                notes={[
                  'パーソナルトレーニング1ヶ月コース契約の場合の1回あたりの料金',
                ]}
              >
                <PriceTableRow th={<>60分 ×1</>} price={5500} />
              </PriceTable>
              <p className="font-bold text-red-500">
                今ならお得な体験キャンペーンも実施中！
                <br className="md:hidden" />
                詳しくは
                <Link
                  href="/price"
                  className="text-brand-link underline hover:opacity-70"
                >
                  料金詳細
                </Link>
                をご覧ください。
              </p>
            </PointBox>
            <PointBox
              index={2}
              title="あなた専用の運動メニュー"
              desc={
                <>
                  プロのトレーナーがひとりひとりに適した運動メニューを考えます。
                  <br />
                  何から始めれば良いかわからないという方もまずはお気軽にご相談ください。
                </>
              }
              imageUrl="/images/top/point2.png"
            >
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2">
                <GridTextItem text="ボディメイク" bg="accent" />
                <GridTextItem text="ダイエット" bg="accent" />
                <GridTextItem text="筋力UP" bg="accent" />
                <GridTextItem text="痛み施術" bg="accent" />
                <GridTextItem text="姿勢矯正" bg="accent" />
                <GridTextItem text="身体分析" bg="accent" />
              </ul>
              <div className="text-right">
                <TextLink href="/trainer">
                  <IoChevronForward size="1em" />
                  トレーナー紹介
                </TextLink>
              </div>
            </PointBox>
            <PointBox
              index={3}
              title="完全プライベート空間"
              desc={
                <>
                  施設内は、ハワイをイメージした作りになっており、落ち着いた雰囲気のなかでトレーニングを行っていただけます。
                  <br />
                  完全予約制ですので、人目を気にすることなく運動に集中できます。
                </>
              }
              imageUrl="/images/facility/training-space.png"
            >
              <div className="text-right">
                <TextLink href="/facility">
                  <IoChevronForward size="1em" />
                  施設紹介
                </TextLink>
              </div>
            </PointBox>
          </div>
        </section>

        <section>
          <SectionHeading subtext="flow">入会までの流れ</SectionHeading>
          <div className="grid gap-6 md:grid-cols-[repeat(2,1fr)] md:gap-10">
            <StepBox
              index={1}
              title="お問い合わせ"
              desc={
                <>
                  お問い合わせフォーム、またはLINE、お電話よりお気軽にお問い合わせください。
                </>
              }
            >
              <ul className="mt-2 grid gap-1 text-base">
                <li>
                  <TextLink href="#">
                    <IoMail size={24} className="text-brand-primary" />
                    お問い合わせフォームはこちら
                  </TextLink>
                </li>
                <li>
                  <TextLink href="#">
                    <Image
                      src="/images/line.svg"
                      alt="モアナ公式ライン"
                      width={24}
                      height={24}
                    />
                    LINEはこちら
                  </TextLink>
                </li>
                <li>
                  <TextLink href="tel:079-290-9070">
                    <IoCall size={24} className="text-brand-primary" />
                    079-290-9070
                  </TextLink>
                </li>
              </ul>
            </StepBox>
            <StepBox
              index={2}
              title="無料カウンセリング・施設のご案内"
              desc={
                <>
                  ご希望の日時にご来店いただき、トレーナーよりお客様のお悩みを伺い、一人一人に適した運動メニューをご提案させていただきます。
                  <br />
                  ご不安な点があればお気軽にご相談ください。
                </>
              }
            />
            <StepBox
              index={3}
              title="入会手続き"
              desc={
                <>
                  料金の案内や予約の取り方など詳しく説明させていただきます。
                  <br />
                  無理な勧誘は一切しませんのでご安心ください。
                </>
              }
            />
            <StepBox index={4} title="ご利用開始" noArrow />
          </div>
        </section>

        <section>
          <SectionHeading subtext="instagram">
            <span className="flex items-center justify-center gap-4">
              <Image
                src="/images/instagram.svg"
                alt="モアナ公式インスタグラム"
                width={32}
                height={32}
                className="pt-1"
              />
              最新情報
            </span>
          </SectionHeading>
          <p>
            InstagramのMoana公式アカウントでは、日々最新の情報や実際のトレーニングの様子を発信しています。
            <br />
            ぜひフォローしていただけると嬉しいです！
          </p>
          <div className="text-right">
            <TextLink href="tel:079-290-9070">
              <IoChevronForward size="1em" />
              もっと投稿を見る
            </TextLink>
          </div>
        </section>

        <section>
          <SectionHeading subtext="contact">お問い合わせ</SectionHeading>
          <div className="mx-auto grid max-w-[660px] gap-8 md:rounded-lg md:bg-white md:px-10 md:py-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo-circle.svg"
                alt="モアナロゴ"
                width={72}
                height={63}
              />
              <h3 className="font-bold md:text-xl">
                MOANA パーソナルトレーニングジム
              </h3>
            </div>
            <Contact />
            <div>
              <p>
                LINEまたはお問い合わせフォームからのお問い合わせも受け付けております。
                <br />
                お気軽にお問い合わせください。
              </p>
              <ul className="mt-2 grid gap-1 text-base">
                <li>
                  <TextLink href="#">
                    <IoMail size={24} className="text-brand-primary" />
                    お問い合わせフォームはこちら
                  </TextLink>
                </li>
                <li>
                  <TextLink href="#">
                    <Image
                      src="/images/line.svg"
                      alt="モアナ公式ライン"
                      width={24}
                      height={24}
                    />
                    LINEはこちら
                  </TextLink>
                </li>
              </ul>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.6824330145155!2d134.6472396!3d34.864206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e1e413d52713%3A0xcb3541d250ab516!2zTU9BTkEg44OR44O844K944OK44Or44OI44Os44O844OL44Oz44Kw44K444Og!5e0!3m2!1sja!2sjp!4v1739275154702!5m2!1sja!2sjp"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="mt-10 h-[300px] w-full md:h-[400px]"
          ></iframe>
        </section>
      </div>
    </>
  )
}
