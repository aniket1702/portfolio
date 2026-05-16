import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/portfolio'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-6 md:px-14 py-5 transition-all duration-300 ${
          scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-accent/10' : ''
        }`}
      >
        <div
          className="text-sm font-extrabold tracking-[3px] font-syne"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ANIKET.M
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-12 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                smooth
                duration={800}
                offset={-80}
                className="font-mono text-[0.7rem] tracking-[2px] text-muted uppercase cursor-pointer hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted hover:text-accent transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[64px] left-0 right-0 z-[199] bg-surface/95 backdrop-blur-md border-b border-accent/10 py-6 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                smooth
                duration={800}
                offset={-80}
                className="font-mono text-sm tracking-widest text-muted uppercase cursor-pointer hover:text-accent transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
