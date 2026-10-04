import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Share2, RefreshCw, Check } from 'lucide-react'
import { VERSES } from '../data/site'

/** Verse of the Day: deterministic per calendar day, with a manual “next” for exploring. */
export function Verse() {
  const todayIdx = useMemo(() => {
    const d = new Date()
    const day = Math.floor((d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 86_400_000)
    return day % VERSES.length
  }, [])
  const [idx, setIdx] = useState(todayIdx)
  const [copied, setCopied] = useState(false)
  const v = VERSES[idx]

  const share = async () => {
    const text = `“${v.text}” — ${v.ref}`
    try {
      if (navigator.share) await navigator.share({ title: 'Verse of the Day', text })
      else { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1600) }
    } catch { /* user cancelled */ }
  }

  return (
    <section id="verse" className="relative isolate overflow-hidden bg-wine-800 text-white">
      <div className="pointer-events-none absolute -left-32 top-1/2 size-[520px] -translate-y-1/2 rounded-full bg-wine-500/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 size-[420px] rounded-full bg-brown-500/30 blur-3xl" />
      <div className="container-x relative py-24 text-center lg:py-32">
        <span className="eyebrow justify-center text-gold-400">Verse of the Day</span>
        <AnimatePresence mode="wait">
          <motion.div key={v.ref} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}>
            <h3 className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{v.ref}</h3>
            <p className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-[1.2] sm:text-4xl lg:text-[3.25rem]">“{v.text}”</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-10 flex items-center justify-center gap-3">
          <button type="button" onClick={share} className="btn-ghost">
            {copied ? <Check className="size-4" /> : <Share2 className="size-4" />} {copied ? 'Copied' : 'Share'}
          </button>
          <button type="button" onClick={() => setIdx((i) => (i + 1) % VERSES.length)} className="btn bg-white/10 text-white hover:bg-white/15">
            <RefreshCw className="size-4" /> Another verse
          </button>
        </div>
      </div>
    </section>
  )
}
