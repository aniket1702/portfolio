import { AboutCanvas } from './AboutCanvas'
import { StatCounter } from './StatCounter'
import { stats } from '../data/portfolio'

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-14 bg-surface">
      <div className="font-mono text-[0.65rem] tracking-[3px] text-accent uppercase mb-4 flex items-center gap-4">
        01 — About
        <div className="flex-1 h-px bg-accent/10" />
      </div>
      <h2
        className="font-syne font-extrabold leading-tight mb-16 rev"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
      >
        The Engineer<br />Behind the{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Quality
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
        <div className="rev">
          <p className="text-muted leading-relaxed text-[0.95rem] mb-6">
            I'm a <strong className="text-text">SDET / QA Engineer with 6+ years of experience</strong> designing and
            building automation frameworks that scale. My expertise spans web, API, and database testing with a
            foundation in Java, Playwright, Selenium, and Karate BDD.
          </p>
          <p className="text-muted leading-relaxed text-[0.95rem] mb-6">
            I've delivered quality engineering for <strong className="text-text">Mastercard (BFSI/Payment)</strong>,{' '}
            <strong className="text-text">The Kroger Co. (Retail)</strong>, and{' '}
            <strong className="text-text">OMP (Supply Chain)</strong> — working in fast-paced Agile environments where
            quality is non-negotiable.
          </p>
          <p className="text-muted leading-relaxed text-[0.95rem] mb-10">
            My approach blends strategic test planning with hands-on framework engineering — reducing manual effort,
            accelerating releases, and building confidence in every deployment.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
            ))}
          </div>
        </div>

        <div
          className="h-96 glass-card rev"
          style={{ borderRadius: '12px', overflow: 'hidden' }}
        >
          <AboutCanvas />
        </div>
      </div>
    </section>
  )
}
