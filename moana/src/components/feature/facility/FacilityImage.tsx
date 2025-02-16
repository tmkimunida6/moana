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
      className={`w-[80vw] aspect-[3/2] relative border-brand-primary border-y-2 overflow-hidden max-w-[600px] md:border-2 ${position === 'left' ? 'rounded-r-lg ml-[calc(50%-50vw-3px)] border-r-2' : 'rounded-l-lg mr-[calc(50%-50vw)]'} md:m-0 md:rounded-lg md:w-full border-y-2 border-l-2`}
    >
      <Image src={`/images/facility/${src}`} alt={alt} fill className="cover" />
    </div>
  )
}
