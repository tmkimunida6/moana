type PageHeadingProps = {
  title: string
  subtitle: string
}

export default function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <div className="flex flex-col items-center bg-white mx-[calc(50%-50vw)] mb-10 py-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <span className="font-moana text-brand-primary text-3xl">{subtitle}</span>
    </div>
  )
}
