import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { SERVICES, SITE } from '../data/site'
import { Clock, MapPin, Navigation } from 'lucide-react'

export function Services() {
  return (
    <section id="services" className="bg-blue-800 text-white">
      <div className="container-x py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader tone="dark" eyebrow="Plan Your Visit" title="Join us this week" description="Every service is open to everyone. Come as you are — there is a seat with your name on it." />
            <Reveal delay={0.1} className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-gold-400" />
                <div>
                  <div className="font-semibold">{SITE.fullName}</div>
                  <div className="mt-1 text-sm text-white/70">{SITE.address}</div>
                </div>
              </div>
              <a href="https://maps.google.com/?q=McCarthy+Hill+Accra" target="_blank" rel="noreferrer" className="btn-gold mt-5 w-full sm:w-auto"><Navigation className="size-4" /> Get directions</a>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {SERVICES.map((s) => (
                  <li key={s.name} className="group grid grid-cols-[88px_1fr_auto] items-center gap-4 py-6 sm:grid-cols-[120px_1fr_auto]">
                    <div className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gold-400">{s.day}</div>
                    <div>
                      <div className="font-display text-xl font-bold sm:text-2xl">{s.name}</div>
                      <div className="mt-1 text-sm text-white/60">{s.note}</div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/85 sm:text-sm">
                      <Clock className="size-3.5" /> {s.time}
                    </div>
                  </li>
              ))}
            </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
