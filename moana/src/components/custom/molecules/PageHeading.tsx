type PageHeadingProps = {
  title: string
  subtitle: string
}

export default function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <div className="mx-[calc(50%-50vw)] mb-10 flex flex-col items-center gap-6 bg-white py-10 md:mb-16">
      <h1 className="text-4xl font-bold">{title}</h1>
      <span className="font-moana text-3xl text-brand-primary">{subtitle}</span>
    </div>
  )
}
