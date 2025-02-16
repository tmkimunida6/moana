import { CarouselItem } from '@/components/ui/carousel'
import { CSSProperties, ReactNode } from 'react'

type MvCarouselItemProps = {
  image: string
  children: ReactNode
}

export default function MvCarouselItem({
  image,
  children,
}: MvCarouselItemProps) {
  const cssProperties = {
    '--image-url': `url(/images/top/${image})`,
  } as CSSProperties

  return (
    <CarouselItem className="max-w-[928px]">
      <div
        style={cssProperties}
        className={`w-full h-[400px] md:h-[500px] relative bg-[image:var(--image-url)] bg-[auto_100%] bg-[top_center] bg-no-repeat`}
      >
        {children}
      </div>
    </CarouselItem>
  )
}
