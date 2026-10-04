import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { EVENTS } from '../data/site'
import { ArrowUpRight } from 'lucide-react'

function fmt(d: string) {
  return new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function News() {
  return (
    <section id="news" className="bg-white">
      <div className="container-x py-24 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Trending News & Events" title="What’s happening at Faith Chapel" />
          <a href="#" className="btn-outline">View all</a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={0.06 * i}>
              <a href="#" className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <img src={e.image} alt="" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover:scale-[1.04]" loading="lazy" />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-gold-100 px-2.5 py-1 font-semibold text-blue-800">{e.tag}</span>
                  <time dateTime={e.date} className="text-ink-muted">{fmt(e.date)}</time>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug group-hover:text-blue-700">
                  {e.title}
                  <ArrowUpRight className="ml-1 inline size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">{e.summary}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
