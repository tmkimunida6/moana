import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      src="/images/logo.svg"
      alt="パーソナルトレーニングジム「モアナ」"
      width={175}
      height={40}
    />
  )
}
