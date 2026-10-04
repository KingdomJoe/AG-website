import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown, Menu, X, MapPin, Phone, ArrowUpRight, Tv } from 'lucide-react'
import { NAV, SITE, type NavItem } from '../data/site'

function isExternal(href: string) {
  return href.startsWith('http')
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobile])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setMobile(false) } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar — wine, per brand direction */}
      <div className={`bg-wine-800 text-white/85 transition-[max-height,opacity] duration-300 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
        <div className="container-x flex h-9 items-center justify-between text-[12px]">
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-1.5 sm:inline-flex"><MapPin className="size-3.5 text-gold-400" />{SITE.branch}, Accra</span>
            <span className="inline-flex items-center gap-1.5"><Phone className="size-3.5 text-gold-400" />{SITE.phone}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={SITE.external.agtv} className="hidden items-center gap-1.5 hover:text-white sm:inline-flex"><Tv className="size-3.5 text-gold-400" />Watch AGTV</a>
            <a href={SITE.external.agGhana} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">Assemblies of God, Ghana <ArrowUpRight className="size-3" /></a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`relative transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled ? 'bg-white/90 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-xl' : 'bg-white'
        }`}
        onMouseLeave={() => setOpen(null)}
      >
        <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Primary">
          <a href="#top" className="flex items-center gap-3">
            <img src="/images/ag-logo.png" alt="Assemblies of God logo" className="h-11 w-auto" />
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-extrabold tracking-tight text-blue-800">{SITE.name}</span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">{SITE.branch}</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <li key={item.label} className="relative" onMouseEnter={() => setOpen(item.children ? item.label : null)}>
                {item.children ? (
                  <button
                    type="button"
                    aria-expanded={open === item.label}
                    onClick={() => setOpen(open === item.label ? null : item.label)}
                    className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${open === item.label ? 'bg-blue-50 text-blue-700' : 'text-ink hover:text-blue-700'}`}
                  >
                    {item.label}
                    <ChevronDown className={`size-3.5 transition-transform duration-200 ${open === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a href={item.href} className="inline-flex rounded-full px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:text-blue-700">{item.label}</a>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <a href={SITE.external.locations} target="_blank" rel="noreferrer" className="btn-outline py-2">Find a Church</a>
            <a href={SITE.external.giving} target="_blank" rel="noreferrer" className="btn-gold py-2">Give</a>
          </div>

          <button type="button" onClick={() => setMobile(true)} className="inline-flex size-10 items-center justify-center rounded-full border border-line lg:hidden" aria-label="Open menu">
            <Menu className="size-5" />
          </button>
        </nav>

        {/* Mega dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              key={open}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-x-0 top-full hidden border-t border-line bg-white shadow-lift lg:block"
            >
              <Dropdown item={NAV.find((n) => n.label === open)!} onNavigate={() => setOpen(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobile && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm lg:hidden" onClick={() => setMobile(false)} />
            <motion.aside
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 38 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col bg-white lg:hidden"
              aria-label="Mobile menu"
            >
              <div className="flex h-[72px] items-center justify-between border-b border-line px-5">
                <div className="flex items-center gap-2.5">
                  <img src="/images/ag-logo.png" alt="" className="h-9 w-auto" />
                  <span className="font-display text-sm font-extrabold text-blue-800">{SITE.name}</span>
                </div>
                <button type="button" onClick={() => setMobile(false)} className="inline-flex size-10 items-center justify-center rounded-full border border-line" aria-label="Close menu"><X className="size-5" /></button>
              </div>
              <div className="flex-1 overflow-y-auto px-2 py-3">
                {NAV.map((item) => (
                  <div key={item.label} className="border-b border-line/70 last:border-0">
                    {item.children ? (
                      <>
                        <button type="button" onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)} className="flex w-full items-center justify-between px-3 py-3.5 text-left font-display text-[15px] font-semibold">
                          {item.label}
                          <ChevronDown className={`size-4 text-ink-muted transition-transform ${mobileOpen === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileOpen === item.label && (
                            <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden pb-2">
                              {item.children.map((c) => (
                                <li key={c.label}>
                                  <a href={c.href} onClick={() => setMobile(false)} target={isExternal(c.href) ? '_blank' : undefined} rel="noreferrer" className="block rounded-lg px-3 py-2 text-sm text-ink-muted hover:bg-blue-50 hover:text-blue-700">{c.label}</a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a href={item.href} onClick={() => setMobile(false)} className="block px-3 py-3.5 font-display text-[15px] font-semibold">{item.label}</a>
                    )}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 border-t border-line p-4">
                <a href={SITE.external.locations} className="btn-outline">Find a Church</a>
                <a href={SITE.external.giving} className="btn-gold">Give</a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

function Dropdown({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const children = item.children ?? []
  return (
    <div className="container-x grid grid-cols-[260px_1fr] gap-10 py-8">
      <div className="border-r border-line pr-8">
        <span className="eyebrow text-blue-700">{item.label}</span>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {item.label === 'Departments' && 'Ministries serving every age and stage at Faith Chapel, aligned with Assemblies of God, Ghana.'}
          {item.label === 'Agencies' && 'National agencies of Assemblies of God, Ghana serving the church and the nation.'}
          {item.label === 'Associations' && 'Fellowships connecting AG members by vocation and calling.'}
          {item.label === 'Resources' && 'Sermons, documents and media to help you grow.'}
          {item.label === 'About' && 'A Christ-centred Pentecostal church at McCarthy Hill, Accra.'}
        </p>
        <a href="#about" onClick={onNavigate} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 link-underline">Learn more <ArrowUpRight className="size-3.5" /></a>
      </div>
      <ul className="grid grid-cols-2 gap-x-8 gap-y-1 xl:grid-cols-3">
        {children.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              onClick={onNavigate}
              target={isExternal(c.href) ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-blue-50"
            >
              <span>
                <span className="block text-sm font-semibold text-ink group-hover:text-blue-700">{c.label}</span>
                {c.description && <span className="mt-0.5 block text-xs text-ink-muted">{c.description}</span>}
              </span>
              {isExternal(c.href) && <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-ink-muted opacity-0 transition-opacity group-hover:opacity-100" />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
