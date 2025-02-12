import GridTextItem from '@/components/custom/atoms/GridTextItem'
import TextLink from '@/components/custom/atoms/TextLink'
import ContactTableRow from '@/components/custom/molecules/ContactTableRow'
import PriceTableRow from '@/components/custom/molecules/PriceTableRow'
import PriceTable from '@/components/custom/organisms/PriceTable'
import HighlightedText from '@/components/feature/top/HighlightedText'
import PointBox from '@/components/feature/top/PointBox'
import SectionHeading from '@/components/feature/top/SectionHeading'
import StepBox from '@/components/feature/top/StepBox'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { IoCall, IoChevronForward, IoMail } from 'react-icons/io5'

export default function Home() {
  return (
    <>
      <section>
        <SectionHeading subtext="about">
          <span className="font-moana text-brand-primary text-[38px]">
            Moana
          </span>
          について
        </SectionHeading>
        <p className="flex flex-col gap-2 mt-8">
          <HighlightedText>
            <span className="text-brand-primary">運動が苦手な方</span>や
            <span className="text-brand-primary">ご高齢の方</span>も大歓迎！
          </HighlightedText>
          <HighlightedText>
            <span className="text-brand-primary">お客様ひとりひとり</span>
            に寄り添う
          </HighlightedText>
          <HighlightedText>パーソナルトレーニングジムです。</HighlightedText>
        </p>
        <p className="mt-4 leading-[1.8]">
          モアナは、運動が苦手な方やご高齢の方にこそぴったりなトレーニングジム。
          <br />
          お客様ひとりひとりに合わせた最適なメニューを提案し、お客様の健康と目標達成を全力でサポートします。
          <br />
          普通のジムとは一味違う、ハワイのようなゆったりとした雰囲気の中で、私たちと運動を始めてみませんか？
        </p>
        <div className="text-center mt-16">
          <Button asChild>
            <Link href="#">無料カウンセリングを申し込む</Link>
          </Button>
        </div>
      </section>

      <section>
        <SectionHeading subtext="point">
          <span className="text-brand-primary text-[86px] text-outline-white">
            3
          </span>
          つのポイント
        </SectionHeading>
        <div className="grid gap-16">
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
            imageUrl="/images/top/point2.jpg"
          >
            <div className="grid gap-1">
              <PriceTable>
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
              <p className="text-sm">※1回60分間のトレーニングとなります。</p>
            </div>
            <p className="text-red-500 font-bold">
              今ならお得な体験キャンペーンも実施中！
              <br />
              詳しくは
              <Link href="/price" className="text-brand-link underline">
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
            imageUrl="/images/top/point2.jpg"
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
            imageUrl="/images/top/point3.jpg"
          >
            <div className="text-right">
              <TextLink href="/trainer">
                <IoChevronForward size="1em" />
                施設紹介
              </TextLink>
            </div>
          </PointBox>
        </div>
      </section>

      <section>
        <SectionHeading subtext="flow">入会までの流れ</SectionHeading>
        <div className="grid gap-6">
          <StepBox
            index={1}
            title="お問い合わせ"
            desc={
              <>
                お問い合わせフォーム、またはLINE、お電話よりお気軽にお問い合わせください。
              </>
            }
          >
            <ul className="text-base grid gap-1">
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
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-circle.svg"
              alt="モアナロゴ"
              width={72}
              height={63}
            />
            <h3 className="font-bold ">MOANA パーソナルトレーニングジム</h3>
          </div>
          <ul className="grid gap-1">
            <ContactTableRow title="住所">
              <TextLink
                href="https://maps.app.goo.gl/9Asa5GeZQUcLCwoo8"
                openInNew
              >
                〒671-2245 兵庫県姫路市町田214-1-3
              </TextLink>
            </ContactTableRow>
            <ContactTableRow title="営業時間">
              <span>
                10:00 〜 21:00
                <br />
                <span className="text-base">
                  ※トレーナーは常駐していないため、恐れ入りますがご来店の際にはご予約をお願いいたします。
                </span>
              </span>
            </ContactTableRow>
            <ContactTableRow title="Email">
              <TextLink href="email:moanapersonalgym@gmail.com" openInNew>
                moanapersonalgym@gmail.com
              </TextLink>
            </ContactTableRow>
            <ContactTableRow title="TEL">
              <TextLink href="tel:079-290-9070" openInNew>
                079-290-9070
              </TextLink>
            </ContactTableRow>
          </ul>
          <div>
            <p>
              LINEまたはお問い合わせフォームからのお問い合わせも受け付けております。お気軽にお問い合わせください。
            </p>
            <ul className="text-base grid gap-1 mt-2">
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
        ></iframe>
      </section>
    </>
  )
}
