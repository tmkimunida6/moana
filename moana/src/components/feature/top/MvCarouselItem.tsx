import { CSSProperties, ReactNode } from 'react'
import { CarouselItem } from '@/components/ui/carousel'

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
        className={`relative h-[430px] w-full bg-[image:var(--image-url)] bg-[auto_100%] bg-[top_center] bg-no-repeat md:h-[530px]`}
      >
        {children}
      </div>
    </CarouselItem>
  )
}
