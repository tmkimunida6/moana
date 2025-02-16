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
      className={`relative aspect-[3/2] w-[80vw] max-w-[600px] overflow-hidden border-y-2 border-brand-primary md:border-2 ${position === 'left' ? 'ml-[calc(50%-50vw-3px)] rounded-r-lg border-r-2' : 'mr-[calc(50%-50vw)] rounded-l-lg'} border-y-2 border-l-2 md:m-0 md:w-full md:rounded-lg`}
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
