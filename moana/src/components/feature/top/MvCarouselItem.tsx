import { CarouselItem } from '@/components/ui/carousel'
import { ReactNode } from 'react'

type MvCarouselItemProps = {
  image: string
  children: ReactNode
}

export default function MvCarouselItem({
  image,
  children,
}: MvCarouselItemProps) {
  return (
    <CarouselItem className="max-w-[928px]">
      <div
        className={`w-full h-[400px] md:h-[500px] relative bg-[url(/images/top/${image})] bg-[auto_100%] bg-[top_center] bg-no-repeat`}
      >
        {children}
      </div>
    </CarouselItem>
  )
}
