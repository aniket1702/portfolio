import { useState, useCallback } from 'react'
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
import { useLenis } from './hooks/useLenis'
import { useCursor } from './hooks/useCursor'
import { useReveal } from './hooks/useReveal'

function PortfolioContent() {
  useLenis()
  useCursor()
  useReveal()

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      <div className="grid-bg" />
      <Navbar />
      <SocialBar />
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
