import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Arsenal" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Impact" },
  { id: "contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // track active section
      const sections = links.map(l => document.getElementById(l.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].getBoundingClientRect().top <= 120) {
          setActive(links[i].id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      data-testid="main-nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          <span className="dot-blink" />
          <span className="font-mono-tag text-ink/80 group-hover:text-pass transition-colors">
            AM_<span className="text-pass">/</span>QA
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => handleClick(l.id)}
              className={`px-4 py-2 text-sm transition-colors relative group ${
                active === l.id ? "text-pass" : "text-ink-muted hover:text-ink"
              }`}
            >
              {l.label}
              <span
                className={`absolute left-4 right-4 -bottom-0.5 h-px bg-pass origin-left transition-transform ${
                  active === l.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          ))}
        </nav>

        <a
          data-testid="nav-cv-btn"
          href={profile.cv}
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pass/40 text-pass hover:bg-pass hover:text-bg transition-all text-sm font-mono"
        >
          <Download size={14} strokeWidth={2.2} />
          Resume
        </a>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="space-y-1.5" aria-hidden="true">
            <span className={`block w-6 h-px bg-ink transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-6 h-px bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-ink transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleClick(l.id)}
                  className="text-left py-3 text-ink-muted hover:text-pass transition-colors flex items-center justify-between"
                >
                  {l.label}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              ))}
              <a
                href={profile.cv}
                download
                className="mt-3 inline-flex items-center gap-2 px-4 py-3 rounded-full border border-pass/40 text-pass justify-center text-sm font-mono"
              >
                <Download size={14} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
