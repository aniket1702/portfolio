import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  value: number
  label: string
  suffix?: string
}

export function StatCounter({ value, label, suffix = '+' }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let cur = 0
          const inc = value / 60
          const iv = setInterval(() => {
            cur = Math.min(cur + inc, value)
            setCount(Math.round(cur))
            if (cur >= value) clearInterval(iv)
          }, 18)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value])

  return (
    <div
      ref={ref}
      className="bg-panel border border-accent/10 p-6 rounded-sm relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent2))' }}
      />
      <div
        className="text-4xl font-extrabold font-syne"
        style={{
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {count}{suffix}
      </div>
      <div className="font-mono text-[0.65rem] text-muted tracking-wider mt-1">{label}</div>
    </div>
  )
}
