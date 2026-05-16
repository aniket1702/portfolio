import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { projects } from '../data/portfolio'
import { motion } from 'framer-motion'

export function Projects() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            gsap.to(e.target, { opacity: 1, y: 0, duration: 0.6, delay: (i % 3) * 0.1 })
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    cardRefs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 px-6 md:px-14 bg-bg">
      <div className="font-mono text-[0.65rem] tracking-[3px] text-accent uppercase mb-4 flex items-center gap-4">
        04 — Projects
        <div className="flex-1 h-px bg-accent/10" />
      </div>
      <h2
        className="font-syne font-extrabold leading-tight mb-16 rev"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
      >
        Featured{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Work
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            ref={(el) => { cardRefs.current[i] = el }}
            className="proj-card bg-panel border border-accent/10 rounded-sm overflow-hidden"
            whileHover={{ y: -5, borderColor: 'rgba(0,229,255,0.25)' }}
            transition={{ duration: 0.3 }}
            style={{ boxShadow: 'none' }}
          >
            {/* Top banner */}
            <div
              className="h-36 flex items-center justify-center relative"
              style={{
                background: 'linear-gradient(135deg, rgba(0,229,255,.04), rgba(168,85,247,.06))',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, var(--accent), var(--accent2))` }}
              />
              <span className="text-5xl opacity-70">{proj.emoji}</span>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="font-bold text-base mb-1">{proj.name}</div>
              <div className="font-mono text-[0.6rem] tracking-wider text-accent3 uppercase mb-3">{proj.domain}</div>
              <p className="text-[0.83rem] text-muted leading-relaxed mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.6rem] px-2 py-0.5 rounded-sm"
                    style={{
                      color: 'var(--accent)',
                      border: '1px solid rgba(0,229,255,0.12)',
                      background: 'rgba(0,229,255,0.05)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
