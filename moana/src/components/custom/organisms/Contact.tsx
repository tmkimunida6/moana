import TextLink from '../atoms/TextLink'
import ContactTableRow from '../molecules/ContactTableRow'

export default function Contact() {
  return (
    <ul className="grid gap-2">
      <ContactTableRow title="住所">
        <TextLink href="https://maps.app.goo.gl/9Asa5GeZQUcLCwoo8" openInNew>
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
      <ContactTableRow title="Eメール">
        <TextLink href="mailto:moanapersonalgym@gmail.com" openInNew>
          <span className="break-all">moanapersonalgym@gmail.com</span>
        </TextLink>
      </ContactTableRow>
      <ContactTableRow title="TEL">
        <TextLink href="tel:079-290-9070" openInNew>
          079-290-9070
        </TextLink>
      </ContactTableRow>
    </ul>
  )
}
