import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { FUNDAMENTALS } from '../data/site'
import { PlayCircle, FileText, Images, BookMarked, ArrowUpRight } from 'lucide-react'

const tiles = [
  { icon: PlayCircle, title: 'Sermons & Messages', text: 'Catch up on Sunday messages and the Faith of the Fathers series.' },
  { icon: FileText, title: 'Constitution & Forms', text: 'AG Ghana constitution, bylaws and membership documents.' },
  { icon: Images, title: 'Gallery', text: 'Photos and videos from services, outreaches and camps.' },
  { icon: BookMarked, title: 'Discipleship Materials', text: 'New believers’ class notes and Bible study guides.' },
]

export function Resources() {
  return (
    <section id="resources" className="bg-cream">
      <div className="container-x py-24 lg:py-32">
        <SectionHeader align="center" eyebrow="Resources" title="Tools to help you grow" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={0.05 * i}>
              <a href="#" className="card group flex h-full flex-col p-6 transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-quart)] hover:-translate-y-1 hover:shadow-lift">
                <t.icon className="size-6 text-blue-700" />
                <h3 className="mt-5 font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{t.text}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">Open <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Statement of Faith marquee — horizontal motion, gentle */}
        <Reveal delay={0.1} className="mt-16">
          <div className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Our 16 Fundamental Truths</div>
          <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
              {[...FUNDAMENTALS, ...FUNDAMENTALS].map((f, i) => (
                <span key={i} className="whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-sm text-ink">{f}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
