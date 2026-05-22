import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { TypingText } from "@/components/ui/TypingText";

const TYPING_PHRASES = [
  "Testing APIs before production does.",
  "Destroying flaky tests professionally.",
  "Automation Engineer by day. Bug hunter by night.",
  "Turning chaos into CI/CD confidence.",
  "I automate things humans should never repeat.",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

export const Hero = () => {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-28 pb-24 sm:pt-32 sm:pb-28"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 noise opacity-[0.025] mix-blend-overlay pointer-events-none" aria-hidden="true" />

      {/* Glow blobs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-pass/8 blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 -left-60 w-[400px] h-[400px] rounded-full bg-pass/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: main content */}
        <div className="lg:col-span-7 xl:col-span-8">
          {/* Status badge */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-10">
            <span className="dot-blink" aria-hidden="true" />
            <span className="font-mono-tag text-pass">
              &gt; RUNNING_TEST_SUITE: QA_ENGINEER
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.9] tracking-[-0.04em] text-ink"
          >
            Aniket
            <br />
            <span className="text-ink-muted">Maurya.</span>
          </motion.h1>

          {/* Typing subtitle */}
          <motion.div
            {...fadeUp(0.25)}
            className="mt-8 font-mono text-pass text-base sm:text-lg min-h-[2rem]"
            aria-live="polite"
          >
            <TypingText phrases={TYPING_PHRASES} speed={50} />
          </motion.div>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.35)}
            className="mt-6 max-w-2xl text-base sm:text-lg text-ink-muted leading-[1.75]"
          >
            <span className="text-ink font-medium">SDET / QA Engineer</span> with{" "}
            <span className="text-pass font-mono">6+ years</span> engineering test
            automation across web &amp; API platforms. I build frameworks that turn
            flaky suites into trustworthy release signals — across BFSI, retail and
            supply-chain.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.45)}
            className="mt-10 flex flex-wrap gap-3 items-center"
          >
            <a
              data-testid="hero-download-cv"
              href={profile.cv}
              download
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-pass text-bg font-semibold text-sm transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(198,244,50,0.4)] focus:outline-none focus:ring-2 focus:ring-pass focus:ring-offset-2 focus:ring-offset-bg"
            >
              <Download size={16} strokeWidth={2.5} aria-hidden="true" />
              Download CV
              <span className="font-mono text-xs opacity-60">.pdf</span>
            </a>

            <a
              data-testid="hero-view-work"
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-ink hover:border-pass/40 hover:text-pass transition-all text-sm focus:outline-none focus:ring-2 focus:ring-pass"
            >
              View work
              <ArrowDown size={14} aria-hidden="true" />
            </a>

            <div className="ml-1 flex items-center gap-2 text-ink-muted text-sm">
              <MapPin size={14} className="text-pass" aria-hidden="true" />
              <span className="font-mono text-xs">{profile.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Right: stat strip */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 xl:col-span-4 lg:pl-8 lg:border-l lg:border-white/5"
        >
          <div className="space-y-7">
            <div>
              <div className="font-mono-tag text-ink-dim mb-2">// STATUS</div>
              <div className="flex items-center gap-2">
                <span className="dot-blink" aria-hidden="true" />
                <span className="text-ink">Available for new roles</span>
              </div>
            </div>
            <div>
              <div className="font-mono-tag text-ink-dim mb-2">// CURRENT</div>
              <div className="text-ink">Persistent Systems</div>
              <div className="text-ink-dim text-sm font-mono">Mastercard · BFSI</div>
            </div>
            <div>
              <div className="font-mono-tag text-ink-dim mb-2">// FOCUS</div>
              <div className="text-ink leading-relaxed text-sm">
                Automation · API · Performance · CI/CD
              </div>
            </div>
            <div className="pt-6 border-t border-white/5">
              <div className="font-mono-tag text-ink-dim mb-4">// SIGNALS</div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "98%", label: "execution stability" },
                  { val: "90%", label: "tests automated" },
                  { val: "6+", label: "years shipping" },
                  { val: "99%", label: "XPath accuracy" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-mono text-3xl font-bold text-pass leading-none">{s.val}</div>
                    <div className="text-xs text-ink-dim mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-dim"
        aria-hidden="true"
      >
        <span className="font-mono-tag">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-ink-dim to-transparent"
        />
      </motion.div>
    </section>
  );
};
