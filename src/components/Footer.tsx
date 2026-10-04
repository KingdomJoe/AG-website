import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { FacebookIcon, InstagramIcon, YoutubeIcon, XIcon } from './ui/Social'
import { NAV, SITE } from '../data/site'

export function Footer() {
  const cols = NAV.filter((n) => n.children)
  return (
    <footer className="bg-wine-900 text-white/80">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">Stay connected</h3>
            <p className="mt-1 text-sm text-white/60">Weekly updates, events and the Verse of the Day in your inbox.</p>
          </div>
          <form className="flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" type="email" required placeholder="you@example.com" className="h-11 flex-1 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none" />
            <button type="submit" className="btn-gold h-11">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="container-x grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <img src="/images/ag-logo.png" alt="Assemblies of God" className="h-12 w-auto" />
            <div>
              <div className="font-display text-lg font-extrabold text-white">{SITE.name}</div>
              <div className="text-xs uppercase tracking-[0.14em] text-white/55">{SITE.branch} · {SITE.parent}</div>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">{SITE.tagline}. {SITE.vision}</p>
          <ul className="mt-6 space-y-2.5 text-sm">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" />{SITE.address}</li>
            <li className="flex gap-2.5"><Phone className="size-4 shrink-0 text-gold-400" />{SITE.phone}</li>
            <li className="flex gap-2.5"><Mail className="size-4 shrink-0 text-gold-400" /><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
          </ul>
          <div className="mt-6 flex gap-2">
            {[{ I: FacebookIcon, h: SITE.socials.facebook, l: 'Facebook' }, { I: InstagramIcon, h: SITE.socials.instagram, l: 'Instagram' }, { I: YoutubeIcon, h: SITE.socials.youtube, l: 'YouTube' }, { I: XIcon, h: SITE.socials.x, l: 'X' }].map(({ I, h, l }) => (
              <a key={l} href={h} aria-label={l} className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-400 hover:text-gold-400"><I className="size-4" /></a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
          {cols.map((c) => (
            <div key={c.label}>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">{c.label}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.children!.slice(0, 6).map((l) => (
                  <li key={l.label}><a href={l.href} className="text-sm text-white/65 transition-colors hover:text-gold-300">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {SITE.fullName}. A local assembly of the {SITE.parent}. Prototype — not the official site.</p>
          <div className="flex gap-5">
            <a href={SITE.external.agGhana} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">agghana.org <ArrowUpRight className="size-3" /></a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#top" className="hover:text-white">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
