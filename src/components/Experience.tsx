import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { experience } from '../data/portfolio'

const colorVars: Record<string, string> = {
  accent: 'var(--accent)',
  accent2: 'var(--accent2)',
  accent3: 'var(--accent3)',
}

export function Experience() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            gsap.to(e.target, { opacity: 1, x: 0, duration: 0.7, delay: i * 0.08 })
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    itemRefs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" className="py-32 px-6 md:px-14 bg-surface">
      <div className="font-mono text-[0.65rem] tracking-[3px] text-accent uppercase mb-4 flex items-center gap-4">
        03 — Experience
        <div className="flex-1 h-px bg-accent/10" />
      </div>
      <h2
        className="font-syne font-extrabold leading-tight mb-16 rev"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
      >
        Career{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Timeline
        </span>
      </h2>

      <div
        className="relative pl-10"
        style={{ borderLeft: '1px solid', borderImage: 'linear-gradient(var(--accent), var(--accent2), transparent) 1' }}
      >
        {experience.map((exp, i) => {
          const color = colorVars[exp.color]
          return (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el }}
              className="tl-item relative mb-14"
            >
              {/* Dot */}
              <div
                className="absolute -left-10 top-2.5 w-2.5 h-2.5 rounded-full border-2 border-bg"
                style={{
                  background: color,
                  boxShadow: `0 0 12px ${color}`,
                  transform: 'translateX(-4px)',
                }}
              />

              {/* Card */}
              <div
                className="bg-panel border border-accent/10 p-8 rounded-sm transition-all duration-300 hover:border-accent/25 hover:translate-x-1"
              >
                <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
                  <div>
                    <div className="text-xl font-bold mb-0.5">{exp.company}</div>
                    <div className="font-mono text-[0.78rem] mb-0.5" style={{ color: colorVars.accent3 }}>
                      {exp.role}
                    </div>
                    <div className="font-mono text-[0.65rem] text-muted tracking-wider">{exp.domain}</div>
                  </div>
                  <div
                    className="font-mono text-[0.65rem] tracking-wider px-3 py-1 rounded-sm border"
                    style={{
                      color,
                      borderColor: color + '33',
                      background: color + '11',
                    }}
                  >
                    {exp.period}
                  </div>
                </div>

                <ul className="flex flex-col gap-2 mb-5">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-muted text-[0.88rem] leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-0.5 text-accent text-[0.65rem]">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: pt.replace(/<strong>(.*?)<\/strong>/g, '<strong class="text-text">$1</strong>') }} />
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[0.6rem] px-2 py-0.5 rounded-sm border"
                      style={{
                        color: 'var(--accent2)',
                        borderColor: 'rgba(168,85,247,0.2)',
                        background: 'rgba(168,85,247,0.08)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
