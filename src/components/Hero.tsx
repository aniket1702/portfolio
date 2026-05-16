import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { HeroCanvas } from './HeroCanvas'

const roles = ['QA AUTOMATION', 'SDET', 'FRAMEWORK BUILDER', 'QUALITY ENGINEER']

export function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollProgress = useRef(0)
  const [textAlpha, setTextAlpha] = useState(0)
  const [canvasOpacity, setCanvasOpacity] = useState(1)
  const [scrollIndOpacity, setScrollIndOpacity] = useState(0)
  const [roleIdx, setRoleIdx] = useState(0)
  const [roleVisible, setRoleVisible] = useState(true)

  useEffect(() => {
    // Fade in text after mount
    const t = setTimeout(() => {
      setTextAlpha(1)
      setScrollIndOpacity(1)
    }, 400)
    return () => clearTimeout(t)
  }, [])

  // Role typer
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false)
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % roles.length)
        setRoleVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const spaceEl = scrollRef.current
    if (!spaceEl) return

    const onScroll = () => {
      const totalH = spaceEl.offsetHeight - window.innerHeight
      const p = Math.min(Math.max(window.scrollY / totalH, 0), 1)
      scrollProgress.current = p

      let tAlpha: number
      if (p < 0.15) tAlpha = p / 0.15
      else if (p > 0.65) tAlpha = Math.max(0, 1 - (p - 0.65) / 0.23)
      else tAlpha = 1

      setTextAlpha(tAlpha)
      setScrollIndOpacity(p < 0.08 ? 1 - p / 0.08 : 0)

      const endFade = p > 0.78 ? Math.max(0, 1 - (p - 0.78) / 0.22) : 1
      setCanvasOpacity(endFade)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={scrollRef} id="hero-scroll-space" style={{ height: '450vh', position: 'relative' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <HeroCanvas scrollProgress={scrollProgress} opacity={canvasOpacity} />

        {/* Glow */}
        <div
          className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[5]"
          style={{
            width: 'min(55vw, 580px)',
            height: 'min(55vw, 580px)',
            background: 'radial-gradient(circle, rgba(0,229,255,.07) 0%, rgba(168,85,247,.04) 40%, transparent 70%)',
            opacity: canvasOpacity,
          }}
        />

        {/* Left text */}
        <div
          className="absolute left-6 md:left-14 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
          style={{ opacity: textAlpha, transition: 'opacity 0.5s' }}
        >
          <div className="font-mono text-xs tracking-[3px] text-accent uppercase mb-2">Hello! I'm</div>
          <h1
            className="font-syne font-extrabold leading-[0.95]"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              background: 'linear-gradient(160deg, #fff 30%, rgba(255,255,255,.45))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ANIKET<br />MAURYA
          </h1>
        </div>

        {/* Right text */}
        <div
          className="absolute right-6 md:right-14 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-right"
          style={{ opacity: textAlpha, transition: 'opacity 0.5s' }}
        >
          <div className="font-mono text-xs tracking-[3px] text-muted uppercase mb-2">6+ Years of Experience</div>
          <div
            className="font-syne font-extrabold leading-[0.95] text-accent"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            <span
              className="block text-accent/30 transition-opacity duration-300"
              style={{ opacity: roleVisible ? 1 : 0 }}
            >
              {roles[roleIdx]}
            </span>
            <span>ENGINEER</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 font-mono text-[0.6rem] tracking-[2px] text-muted z-20"
          style={{
            opacity: scrollIndOpacity,
            transition: 'opacity 0.4s',
            animation: 'bob 2s ease-in-out infinite',
          }}
        >
          <div className="w-px h-9" style={{ background: 'linear-gradient(var(--accent), transparent)' }} />
          <span>scroll</span>
        </div>

        {/* Bottom bar */}
        <div
          className="absolute bottom-10 left-0 right-0 px-6 md:px-14 z-20 flex justify-between items-center flex-wrap gap-4"
          style={{ opacity: textAlpha, transition: 'opacity 0.5s' }}
        >
          <Link
            to="contact"
            smooth
            duration={800}
            offset={-80}
            className="font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-sm cursor-pointer font-bold transition-all duration-300"
            style={{
              background: 'var(--accent)',
              color: '#000',
              border: '1px solid var(--accent)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'transparent'
              el.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--accent)'
              el.style.color = '#000'
            }}
          >
            Get In Touch
          </Link>
          <div className="font-mono text-[0.68rem] tracking-wider text-muted max-w-[260px] text-center leading-relaxed hidden md:block">
            Building scalable automation frameworks & quality-driven engineering
          </div>
          <Link
            to="projects"
            smooth
            duration={800}
            offset={-80}
            className="font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-sm cursor-pointer transition-all duration-300 text-muted"
            style={{ border: '1px solid rgba(255,255,255,.15)' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--accent)'
              el.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(255,255,255,.15)'
              el.style.color = 'var(--muted)'
            }}
          >
            View Work ↓
          </Link>
        </div>
      </div>
    </div>
  )
}
