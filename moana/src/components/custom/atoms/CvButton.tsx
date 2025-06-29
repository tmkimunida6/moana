import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CvButton() {
  return (
    <Button asChild>
      <Link href="mailto:moanapersonalgym@gmail.com" className="font-bold">
        無料カウンセリングを申し込む
      </Link>
    </Button>
  )
}
