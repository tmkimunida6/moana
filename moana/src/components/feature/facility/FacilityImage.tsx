import Image from 'next/image'

type FacilityImageProps = {
  src: string
  alt: string
  position: 'left' | 'right'
}

export default function FacilityImage({
  src,
  alt,
  position,
}: FacilityImageProps) {
  return (
    <div
      className={`w-[80vw] aspect-[4/3] relative border border-brand-primary border-2 overflow-hidden max-w-[600px] ${position === 'left' ? 'rounded-r-lg ml-[calc(50%-50vw-3px)]' : 'rounded-l-lg mr-[calc(50%-50vw-3px)]'} md:m-0 md:rounded-lg md:w-full`}
    >
      <Image
        src={`/images/facility/${src}`}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  )
}
