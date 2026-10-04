import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Vision } from './sections/Vision'
import { Theme } from './sections/Theme'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Ministries } from './sections/Ministries'
import { Missions } from './sections/Missions'
import { News } from './sections/News'
import { Verse } from './sections/Verse'
import { Leadership } from './sections/Leadership'
import { Resources } from './sections/Resources'
import { Cta } from './sections/Cta'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Vision />
        <Theme />
        <About />
        <Services />
        <Ministries />
        <Missions />
        <News />
        <Verse />
        <Leadership />
        <Resources />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
