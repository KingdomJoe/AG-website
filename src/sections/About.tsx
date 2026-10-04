import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { SITE } from '../data/site'

const stats = [
  { v: '1931', k: 'AG in Ghana since' },
  { v: '16', k: 'Fundamental Truths' },
  { v: '4', k: 'Weekly gatherings' },
  { v: '8+', k: 'Active ministries' },
]

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="container-x py-24 lg:py-32">
        <SectionHeader
          eyebrow="Who We Are"
          title="A Christ-centred Pentecostal church on McCarthy Hill"
          description={`${SITE.fullName} belongs to the ${SITE.parent} — one of the largest Pentecostal fellowships in the country. We believe the Word of God, pursue the presence of the Holy Spirit, and love our neighbours in practical ways.`}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="overflow-hidden rounded-3xl">
              <img src="/images/worship.jpg" alt="Worship at Faith Chapel" className="aspect-[4/3] w-full object-cover md:aspect-[16/10]" loading="lazy" />
            </div>
          </Reveal>
          <div className="grid gap-5 md:col-span-5">
            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-3xl">
                <img src="/images/church-building.jpg" alt="Faith Chapel AG building" className="aspect-[16/10] w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={0.14} className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.k} className="rounded-2xl border border-line p-5">
                  <div className="font-display text-3xl font-extrabold text-blue-700">{s.v}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-muted">{s.k}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
