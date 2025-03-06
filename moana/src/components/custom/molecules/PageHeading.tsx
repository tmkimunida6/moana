type PageHeadingProps = {
  title: string
  subtitle: string
}

export default function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <div className="mx-[calc(50%-50vw)] mb-10 flex flex-col items-center gap-6 bg-white pt-10 md:mb-16">
      <h1 className="text-4xl font-bold">{title}</h1>
      <span className="font-moana text-3xl text-brand-primary">{subtitle}</span>
      <div className="relative h-[20px] w-full">
        <div className="absolute h-full w-full max-w-[none] animate-wave bg-[url(/images/wave.png)] bg-[auto_100%] bg-left md:animate-wave-md"></div>
      </div>
    </div>
  )
}
