import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CvButton() {
  return (
    <Button asChild>
      <Link href="#" className="font-bold" target="_blank" rel="noopener">
        無料カウンセリングを申し込む
      </Link>
    </Button>
  )
}
