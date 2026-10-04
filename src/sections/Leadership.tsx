import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Quote } from 'lucide-react'

export function Leadership() {
  return (
    <section id="leadership" className="bg-white">
      <div className="container-x py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gold-100" />
              <img src="/images/pastor.jpg" alt="Senior Pastor" className="aspect-[4/5] w-full rounded-3xl object-cover" loading="lazy" />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="From the Senior Pastor" title="You are welcome home" />
            <Reveal delay={0.08}>
              <div className="relative mt-8">
                <Quote className="absolute -left-2 -top-3 size-10 text-gold-400/60" />
                <p className="relative text-lg leading-relaxed text-ink-muted">
                  At Faith Chapel we are convinced that the faith that sustained our fathers is the same faith that will carry
                  this generation. Our calling is simple: to raise disciples for heavenly glory — believers whose love for
                  Christ is passionate, and whose lives spread His love across McCarthy Hill and the nations. Whether you
                  are exploring faith for the first time or returning after years away, there is room for you here.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-10 bg-blue-700" />
                <div>
                  <div className="font-display font-bold">Rev. Dr. Senior Pastor</div>
                  <div className="text-sm text-ink-muted">Senior Pastor, Faith Chapel AG, McCarthy Hill</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
