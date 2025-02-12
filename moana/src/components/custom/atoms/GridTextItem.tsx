type GridTextItemProps = {
  text: string
  bg: 'accent' | 'white'
}

export default function GridTextItem({ text, bg }: GridTextItemProps) {
  return (
    <li
      className={`rounded-xs text-center font-bold ${
        bg === 'accent'
          ? 'bg-brand-accent text-white'
          : 'bg-white text-brand-accent'
      }`}
    >
      {text}
    </li>
  )
}
