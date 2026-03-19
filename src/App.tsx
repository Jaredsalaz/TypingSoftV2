import { useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from '@hooks'
import { LoadingScreen } from '@components/LoadingScreen'
import { Navbar } from '@components/Navbar'
import { Hero } from '@components/Hero'
import { Services } from '@components/Services'
import { Innovation } from '@components/Innovation'
import { About } from '@components/About'
import { Contact } from '@components/Contact'
import { Footer } from '@components/Footer'
import { TechnologiesModal } from '@components/TechnologiesModal'
import { CountriesModal } from '@components/CountriesModal'
import { OrgChartModal } from '@components/OrgChartModal'
import '@styles/globals.css'
import './app.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [showTechnologiesModal, setShowTechnologiesModal] = useState(false)
  const [showCountriesModal, setShowCountriesModal] = useState(false)
  const [showOrgChartModal, setShowOrgChartModal] = useState(false)
  useSmoothScroll()

  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Services />
      <Innovation />
      <About 
        onOpenTechnologies={() => setShowTechnologiesModal(true)}
        onOpenCountries={() => setShowCountriesModal(true)}
        onOpenOrgChart={() => setShowOrgChartModal(true)}
      />
      <Contact />
      <Footer />

      {/* Modals */}
      <TechnologiesModal isOpen={showTechnologiesModal} onClose={() => setShowTechnologiesModal(false)} />
      <CountriesModal isOpen={showCountriesModal} onClose={() => setShowCountriesModal(false)} />
      <OrgChartModal isOpen={showOrgChartModal} onClose={() => setShowOrgChartModal(false)} />
    </>
  )
}

export default App

