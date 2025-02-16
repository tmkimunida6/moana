type HeadingWithUnderlineProps = {
  title: string
}

export default function HeadingWithUnderline({
  title,
}: HeadingWithUnderlineProps) {
  return (
    <h3 className="inline-block text-xl font-bold relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-[4px] after:bg-[var(--brand-color-primary-50)] md:text-2xl">
      {title}
    </h3>
  )
}
