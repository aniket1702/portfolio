import { useState } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [feedback, setFeedback] = useState<{ msg: string; ok: boolean } | null>(null)

  const handleSend = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({ msg: 'Please fill all fields.', ok: false })
      return
    }
    setFeedback({ msg: "✓ Message sent! I'll get back to you soon.", ok: true })
    setName('')
    setEmail('')
    setMessage('')
    setTimeout(() => setFeedback(null), 5000)
  }

  const inputClass =
    'w-full bg-panel border border-accent/10 text-text px-4 py-3 rounded-sm font-mono text-[0.82rem] outline-none transition-colors focus:border-accent resize-none'

  return (
    <section id="contact" className="py-32 px-6 md:px-14 bg-bg">
      <div className="font-mono text-[0.65rem] tracking-[3px] text-accent uppercase mb-4 flex items-center gap-4">
        06 — Contact
        <div className="flex-1 h-px bg-accent/10" />
      </div>
      <h2
        className="font-syne font-extrabold leading-tight mb-16 rev"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
      >
        Let's{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Connect
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        {/* Info */}
        <div className="rev">
          <h3 className="text-xl font-bold mb-5">Open to New Opportunities</h3>
          <p className="text-muted leading-relaxed text-[0.9rem] mb-8">
            Whether you need a senior SDET, help building an automation framework, or want to discuss QA strategy — I'd
            love to connect.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { icon: '✉', label: 'aniketmaurya1702@gmail.com', href: 'mailto:aniketmaurya1702@gmail.com' },
              { icon: 'in', label: 'linkedin.com/in/aniketmaurya1702', href: 'https://www.linkedin.com/in/aniketmaurya1702/', target: '_blank' },
              { icon: '☎', label: '+91 77383 06641', href: 'tel:+917738306641' },
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.target}
                rel={link.target ? 'noreferrer' : undefined}
                className="flex items-center gap-3 font-mono text-[0.78rem] text-muted no-underline px-4 py-3 border border-accent/10 rounded-sm transition-all duration-300 hover:border-accent hover:text-accent"
                whileHover={{ x: 4 }}
              >
                <span className="w-4 text-center shrink-0">{link.icon}</span>
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4 rev">
          <div>
            <label className="font-mono text-[0.65rem] tracking-[1.5px] text-muted uppercase block mb-1.5">Name</label>
            <input
              className={inputClass}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="font-mono text-[0.65rem] tracking-[1.5px] text-muted uppercase block mb-1.5">Email</label>
            <input
              className={inputClass}
              placeholder="your@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="font-mono text-[0.65rem] tracking-[1.5px] text-muted uppercase block mb-1.5">Message</label>
            <textarea
              className={`${inputClass} min-h-[110px]`}
              placeholder="What are you looking for..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <motion.button
            onClick={handleSend}
            className="w-full font-mono text-[0.75rem] tracking-[2px] uppercase py-4 rounded-sm font-bold text-black transition-opacity hover:opacity-80"
            style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))' }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message →
          </motion.button>

          {feedback && (
            <p
              className="font-mono text-[0.72rem] mt-1"
              style={{ color: feedback.ok ? 'var(--accent)' : 'var(--accent3)' }}
            >
              {feedback.msg}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
