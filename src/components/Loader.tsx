import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
  'Initializing systems...',
  'Loading frameworks...',
  'Compiling experience...',
  'Running tests...',
  'All systems go.',
]

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [msgIdx, setMsgIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    let p = 0
    let lastTime = performance.now()

    const tick = (now: number) => {
      const dt = now - lastTime
      lastTime = now
      p = Math.min(p + dt * 0.05, 100)
      setProgress(p)
      setMsgIdx(Math.min(Math.floor((p / 100) * messages.length), messages.length - 1))

      if (p < 100) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setVisible(false)
          setTimeout(onDone, 600)
        }, 300)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9000] bg-bg flex flex-col items-center justify-center gap-8"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="text-4xl font-extrabold tracking-[6px] font-syne"
            style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AM
          </div>
          <div className="w-64 h-px bg-white/8 relative overflow-hidden">
            <div
              className="h-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
              }}
            />
          </div>
          <p className="font-mono text-xs tracking-widest text-muted">{messages[msgIdx]}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
