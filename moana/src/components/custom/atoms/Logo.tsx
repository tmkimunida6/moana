import Image from 'next/image'

type LogoProps = {
  section: 'header' | 'footer' | 'mv'
}

export default function Logo({ section }: LogoProps) {
  return (
    <Image
      src={section === 'mv' ? '/images/logo-white.svg' : '/images/logo.svg'}
      alt="パーソナルトレーニングジム「モアナ」"
      width={section === 'header' ? 175 : 262}
      height={section === 'header' ? 40 : 65}
    />
  )
}
