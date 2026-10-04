import { Reveal } from '../components/ui/Reveal'
import { SITE } from '../data/site'
import { MapPin, Search, HandCoins, ArrowRight } from 'lucide-react'

export function Cta() {
  return (
    <section id="contact" className="bg-white">
      <div className="container-x py-24 lg:py-32">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Locate — mirrors AG Ghana “Locate churches nearby you” */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl bg-blue-700 p-8 text-white sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full border-[28px] border-gold-400/20" />
              <MapPin className="size-9 text-gold-400" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-3xl font-bold leading-tight">Locate churches nearby you</h3>
              <p className="mt-3 max-w-md text-white/75">As a Bible-believing church, we desire to fellowship with you and grow together in our understanding of God’s Word. Find an Assemblies of God church near you.</p>
              <a href={SITE.external.locations} target="_blank" rel="noreferrer" className="btn mt-8 bg-white text-blue-800 hover:bg-gold-100">Search for a church <Search className="size-4" /></a>
            </div>
          </Reveal>
          {/* Give */}
          <Reveal delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-line bg-cream p-8 sm:p-10">
              <HandCoins className="size-9 text-wine-600" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-3xl font-bold leading-tight text-ink">Give to Faith Chapel</h3>
              <p className="mt-3 max-w-md text-ink-muted">Your tithes and offerings fuel discipleship, missions and care in McCarthy Hill. Give securely online, or via mobile money at the service.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={SITE.external.giving} target="_blank" rel="noreferrer" className="btn bg-wine-700 text-white hover:bg-wine-600 shadow-soft">Give online <ArrowRight className="size-4" /></a>
                <a href={`mailto:${SITE.email}`} className="btn-outline bg-white">Contact us</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
