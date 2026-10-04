import { motion } from 'motion/react'
import { ArrowRight, Play, CalendarDays } from 'lucide-react'
import { SITE } from '../data/site'

const ease = [0.25, 1, 0.5, 1] as const

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-wine-900 text-white">
      {/* Annual theme artwork — the focal point */}
      <img
        src="/images/faith-of-the-fathers.jpg"
        alt={`${SITE.theme.title} — ${SITE.theme.year} annual theme`}
        className="absolute inset-0 size-full object-cover object-[65%_center]"
        fetchPriority="high"
      />
      {/* Complementary wine/brown wash so copy stays legible without fighting the art */}
      <div className="absolute inset-0 bg-gradient-to-r from-wine-900/95 via-wine-900/70 to-wine-900/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-wine-900/90 via-transparent to-wine-900/30" />

      <div className="container-x relative flex min-h-[92svh] flex-col justify-end pb-16 pt-44 sm:pb-20 lg:min-h-[94svh]">
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-md"
        >
          <span className="size-1.5 rounded-full bg-gold-400" />
          {SITE.theme.year} Annual Theme · {SITE.theme.scripture}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mt-6 max-w-3xl text-[2.75rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl"
        >
          Raising Disciples for <span className="text-gold-400">Heavenly Glory</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Welcome to {SITE.fullName} — a Christ-centred, Spirit-filled family of the Assemblies of God, Ghana.
          This year we are rediscovering the <em className="font-serif italic text-gold-100 text-[1.15em]">Faith of the Fathers</em>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24, ease }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#services" className="btn-gold">Plan your visit <ArrowRight className="size-4" /></a>
          <a href="#theme" className="btn-ghost backdrop-blur-sm"><Play className="size-4 fill-current" /> Explore the theme</a>
        </motion.div>

        {/* Quick-glance strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.34, ease }}
          className="mt-14 grid max-w-3xl grid-cols-1 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {[
            { k: 'Sunday Service', v: '8:00 AM' },
            { k: 'Bible Study', v: 'Tuesdays · 6:30 PM' },
            { k: 'Location', v: 'McCarthy Hill, Accra' },
          ].map((s) => (
            <div key={s.k} className="flex items-center gap-3 px-5 py-4">
              <CalendarDays className="size-4 shrink-0 text-gold-400" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-white/55">{s.k}</div>
                <div className="text-sm font-semibold">{s.v}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
