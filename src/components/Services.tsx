import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { services } from '../data/portfolio'
import { motion } from 'framer-motion'

export function Services() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            gsap.to(e.target, { opacity: 1, y: 0, duration: 0.6, delay: (i % 4) * 0.08 })
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
    <section id="services" className="py-32 px-6 md:px-14 bg-surface">
      <div className="font-mono text-[0.65rem] tracking-[3px] text-accent uppercase mb-4 flex items-center gap-4">
        05 — Services
        <div className="flex-1 h-px bg-accent/10" />
      </div>
      <h2
        className="font-syne font-extrabold leading-tight mb-16 rev"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
      >
        What I{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Deliver
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((svc, i) => (
          <motion.div
            key={i}
            ref={(el) => { cardRefs.current[i] = el }}
            className="svc-card bg-panel border border-accent/10 p-7 rounded-sm"
            whileHover={{ y: -3, borderColor: 'rgba(0,229,255,0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-3xl block mb-4">{svc.icon}</span>
            <div className="font-bold text-[0.95rem] mb-2">{svc.name}</div>
            <div className="text-[0.8rem] text-muted leading-relaxed">{svc.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
