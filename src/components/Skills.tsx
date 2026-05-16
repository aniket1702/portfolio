import { skills, marqueeItems } from '../data/portfolio'

const colorMap: Record<string, string> = {
  'Automation & Testing': 'var(--accent)',
  'Programming & Data': 'var(--accent2)',
  'API & Messaging': 'var(--accent3)',
  'DevOps & CI/CD': 'var(--accent)',
  'Reporting & Management': 'var(--accent2)',
}

export function Skills() {
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <section id="skills" className="py-32 px-6 md:px-14 bg-bg">
      <div className="font-mono text-[0.65rem] tracking-[3px] text-accent uppercase mb-4 flex items-center gap-4">
        02 — Skills
        <div className="flex-1 h-px bg-accent/10" />
      </div>
      <h2
        className="font-syne font-extrabold leading-tight mb-16 rev"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
      >
        Technical{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Arsenal
        </span>
      </h2>

      {/* Marquee */}
      <div className="overflow-hidden -mx-6 md:-mx-14 mb-16 py-2 whitespace-nowrap rev">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="font-mono text-[0.7rem] tracking-wider text-muted px-4 py-1.5 border border-accent/10 rounded-sm whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Skill categories */}
      <div className="flex flex-col gap-10">
        {Object.entries(skills).map(([category, tags]) => (
          <div key={category} className="rev">
            <div
              className="font-mono text-[0.72rem] tracking-[2px] uppercase mb-4"
              style={{ color: colorMap[category] || 'var(--accent3)' }}
            >
              {category}
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.72rem] px-4 py-2 rounded-sm border border-accent/10 text-muted transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/5 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
