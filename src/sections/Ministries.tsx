import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Users, Flower2, Flame, Baby, Compass, Music2, BookOpen, Globe2, type LucideIcon } from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { MINISTRIES } from '../data/site'

const ICONS: Record<string, LucideIcon> = { Users, Flower2, Flame, Baby, Compass, Music2, BookOpen, Globe2 }

export function Ministries() {
  const track = useRef<HTMLDivElement>(null)
  const scrollBy = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })

  return (
    <section id="ministries" className="bg-white">
      <div className="container-x pt-24 lg:pt-32">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader eyebrow="Departments & Ministries" title="There is a place for you" description="Our departments follow the national structure of Assemblies of God, Ghana, so every member — from children to seniors — is discipled and deployed." />
          <div className="hidden shrink-0 gap-2 md:flex">
            <button type="button" onClick={() => scrollBy(-1)} className="inline-flex size-11 items-center justify-center rounded-full border border-line transition-colors hover:border-blue-700 hover:text-blue-700" aria-label="Scroll left"><ArrowLeft className="size-4" /></button>
            <button type="button" onClick={() => scrollBy(1)} className="inline-flex size-11 items-center justify-center rounded-full border border-line transition-colors hover:border-blue-700 hover:text-blue-700" aria-label="Scroll right"><ArrowRight className="size-4" /></button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll track with snap — edge-to-edge */}
      <Reveal delay={0.1}>
        <div ref={track} className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-24 sm:px-8 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:pb-32">
          {MINISTRIES.map((m) => {
            const Icon = ICONS[m.icon]
            return (
              <article key={m.name} className="group relative flex w-[280px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-line bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-out-quart)] hover:-translate-y-1 hover:border-blue-200 hover:shadow-lift sm:w-[320px]">
                <div>
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-gold-400">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{m.blurb}</p>
                </div>
                <a href="#contact" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">Get involved <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></a>
              </article>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
