import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/layout/CookieConsent'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { ClientsCarousel } from '@/components/sections/ClientsCarousel'
import { Services } from '@/components/sections/Services'
import { WhyUs } from '@/components/sections/WhyUs'
import { Process } from '@/components/sections/Process'
import { Quoter } from '@/components/sections/Quoter'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <Stats />
        <ClientsCarousel />
        <Services />
        <WhyUs />
        <Process />
        <Quoter />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
