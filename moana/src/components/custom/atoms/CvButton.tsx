import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CvButton() {
  return (
    <Button asChild>
      <Link href="#" className="font-bold">
        無料カウンセリングを申し込む
      </Link>
    </Button>
  )
}
