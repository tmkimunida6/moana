import Image from 'next/image'
import Link from 'next/link'

export default function SnsIconList() {
  return (
    <>
      <Link href="https://www.instagram.com/moana_personal_gym?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <Image
          src="/images/instagram.svg"
          alt="モアナ公式インスタグラム"
          width={40}
          height={40}
        />
      </Link>
      <Link href="https://lin.ee/8BhsvPu">
        <Image
          src="/images/line.svg"
          alt="モアナ公式ライン"
          width={40}
          height={40}
        />
      </Link>
    </>
  )
}
