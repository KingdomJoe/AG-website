import { Reveal } from '../components/ui/Reveal'
import { SITE } from '../data/site'
import { Heart, Users, Sparkles, ArrowRight } from 'lucide-react'

const pillars = [
  { icon: Heart, title: 'Passionate Believers', text: 'Worship that is wholehearted, prayer that is fervent, and a hunger for the Word.' },
  { icon: Users, title: 'Committed Community', text: 'A family where every person is known, discipled and released into their calling.' },
  { icon: Sparkles, title: 'Spreading Christ’s Love', text: 'Evangelism, missions and social action that carry the Gospel to McCarthy Hill and beyond.' },
]

export function Vision() {
  return (
    <section id="vision" className="bg-white">
      <div className="container-x py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow text-blue-700">Our Vision</span>
              <h2 className="mt-5 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
                “{SITE.vision}”
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-ink-muted leading-relaxed">
                {SITE.fullName} is a local assembly of the {SITE.parent}, a Pentecostal church dedicated to embracing the
                entirety of the Gospel — <span className="font-semibold text-ink">All the Gospel</span>, to all people.
              </p>
              <a href="#about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 link-underline">Read our story <ArrowRight className="size-4" /></a>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-1 lg:pl-10">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.06 * i}>
                <div className="group flex gap-5 rounded-2xl border border-line p-6 transition-[border-color,box-shadow] hover:border-blue-200 hover:shadow-soft">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-blue-700 transition-colors group-hover:bg-gold-400">
                    <p.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
