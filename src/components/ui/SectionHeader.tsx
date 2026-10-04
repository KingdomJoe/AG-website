import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}

export function SectionHeader({ eyebrow, title, description, align = 'left', tone = 'light' }: Props) {
  const center = align === 'center'
  const dark = tone === 'dark'
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <span className={`eyebrow ${dark ? 'text-gold-400' : 'text-blue-700'} ${center ? 'justify-center' : ''}`}>{eyebrow}</span>
      <h2 className={`mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/70' : 'text-ink-muted'}`}>{description}</p>
      )}
    </Reveal>
  )
}
