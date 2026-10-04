import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Check, ArrowRight, Globe2, Home } from 'lucide-react'

const local = ['Door-to-door evangelism around McCarthy Hill, Mallam & Gbawe', 'Community medical & school-supplies outreach', 'Discipleship & leadership training (Sender’s Camp)', 'Support for church planting in the district']
const foreign = ['Monthly giving to AG Ghana foreign missionaries', 'Prayer partnership with unreached people groups', 'Short-term missions trips', 'Humanitarian aid alongside evangelism']

export function Missions() {
  return (
    <section id="missions" className="bg-cream">
      <div className="container-x py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader eyebrow="Missions & Evangelism" title="A two-fold mandate: local and foreign" description="Like the wider Assemblies of God, our missions engage both our community and the nations — to fulfil the Great Commission and bring the Gospel to every people." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Reveal>
                <div className="card h-full p-6">
                  <Home className="size-5 text-blue-700" />
                  <h3 className="mt-4 font-display text-lg font-bold">Local Missions</h3>
                  <ul className="mt-4 space-y-2.5">{local.map((t) => <li key={t} className="flex gap-2.5 text-sm text-ink-muted"><Check className="mt-0.5 size-4 shrink-0 text-gold-600" />{t}</li>)}</ul>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="card h-full p-6">
                  <Globe2 className="size-5 text-blue-700" />
                  <h3 className="mt-4 font-display text-lg font-bold">Foreign Missions</h3>
                  <ul className="mt-4 space-y-2.5">{foreign.map((t) => <li key={t} className="flex gap-2.5 text-sm text-ink-muted"><Check className="mt-0.5 size-4 shrink-0 text-gold-600" />{t}</li>)}</ul>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.1} className="relative">
            <div className="sticky top-28 overflow-hidden rounded-3xl">
              <img src="/images/outreach.jpg" alt="Community outreach" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/90 to-transparent p-7 text-white">
                <div className="text-[11px] uppercase tracking-[0.16em] text-gold-400">Next outreach</div>
                <div className="mt-1 font-display text-xl font-bold">McCarthy Hill Medical Outreach · 18 Oct</div>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 link-underline">Volunteer <ArrowRight className="size-4" /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
