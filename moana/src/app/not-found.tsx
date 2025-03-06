import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Error() {
  return (
    <div className="flex min-h-[calc(100dvh-685px)] flex-col items-center gap-10 pb-8 pt-20">
      <h1 className="text-center text-2xl font-bold md:text-4xl">
        <span className="mb-4 block text-6xl text-brand-primary md:text-7xl">
          404
        </span>
        ページが存在しません
      </h1>
      <Button variant="outline" className="group">
        <Link href="/" className="font-bold group-hover:text-white">
          TOPへ戻る
        </Link>
      </Button>
    </div>
  )
}
