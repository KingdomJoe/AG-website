import { Reveal } from '../components/ui/Reveal'
import { SITE } from '../data/site'
import { ArrowRight, Download } from 'lucide-react'

export function Theme() {
  return (
    <section id="theme" className="bg-cream">
      <div className="container-x py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-brown-300/30">
              <img src="/images/faith-of-the-fathers.jpg" alt={`${SITE.theme.title} artwork`} className="aspect-[16/11] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-quart)] hover:scale-[1.02]" />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-blue-700 px-5 py-4 text-white shadow-lift sm:block lg:-right-8">
              <div className="text-[11px] uppercase tracking-[0.16em] text-gold-400">Anchor Text</div>
              <div className="mt-1 font-display text-lg font-bold">{SITE.theme.scripture}</div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow text-wine-600">{SITE.theme.year} Annual Theme</span>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] text-wine-800 sm:text-5xl">{SITE.theme.title}</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <blockquote className="mt-6 border-l-2 border-gold-500 pl-5 font-serif text-xl italic leading-relaxed text-brown-700 sm:text-2xl">
                “{SITE.theme.verse}”
                <footer className="mt-2 font-sans text-sm not-italic text-ink-muted">— {SITE.theme.scripture} (NIV)</footer>
              </blockquote>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-ink-muted leading-relaxed">
                Through the year we are walking in the footsteps of Abraham, Isaac, Jacob and the heroes of Hebrews 11 —
                learning a faith that obeys, waits, sacrifices and overcomes. Join us every Sunday and Tuesday as we
                unpack the series together.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#news" className="btn bg-wine-700 text-white hover:bg-wine-600 shadow-soft">Teaching series <ArrowRight className="size-4" /></a>
                <a href="/images/faith-of-the-fathers.jpg" download className="btn-outline bg-white"><Download className="size-4" /> Download artwork</a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
