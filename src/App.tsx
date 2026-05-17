import { useState, useCallback, useEffect, useRef } from 'react'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { SocialBar } from './components/SocialBar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { RobotCompanion } from './components/RobotCompanion'
import { useLenis } from './hooks/useLenis'
import { useCursor } from './hooks/useCursor'
import { useReveal } from './hooks/useReveal'

function PortfolioContent() {
  useLenis()
  useCursor()
  useReveal()

  const [heroScrolled, setHeroScrolled] = useState(false)
  const [robotOpacity, setRobotOpacity] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const heroSpace = document.getElementById('hero-scroll-space')
      if (!heroSpace) return
      const heroBottom = heroSpace.offsetTop + heroSpace.offsetHeight
      const scrolled = window.scrollY > heroBottom - window.innerHeight * 0.5
      setHeroScrolled(scrolled)
      if (scrolled) {
        const fadeStart = heroBottom - window.innerHeight * 0.5
        const fadeEnd = heroBottom
        const prog = Math.min(Math.max((window.scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1)
        setRobotOpacity(prog)
      } else {
        setRobotOpacity(0)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      <div className="grid-bg" />
      <Navbar />
      <SocialBar />
      <RobotCompanion opacity={robotOpacity} />
      <main>
        <Hero />
        <div id="content" className="relative z-20 bg-bg">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const onDone = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Loader onDone={onDone} />
      {loaded && <PortfolioContent />}
    </>
  )
}
