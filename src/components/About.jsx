import React from "react";
import { profile } from "@/data/portfolio";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

const MARQUEE_1 = [
  "AUTOMATION ENGINEER",
  "BREAKING BUGS SINCE DAY ONE",
  "LESS BUGS · MORE CONFIDENCE",
  "I TEST THEREFORE I AM",
];

export const About = () => {
  return (
    <>
      {/* Marquee strip between Hero → About */}
      <div className="py-10 overflow-hidden border-y border-white/5">
        <MarqueeStrip texts={MARQUEE_1} opacity={0.07} fontSize="clamp(2.5rem,6vw,5.5rem)" />
      </div>

      <section id="about" data-testid="about-section" className="relative py-32 md:py-44">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="sticky top-32">
                <div className="font-mono-tag text-pass mb-5">01 / ABOUT</div>
                <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.05]">
                  Quality is a{" "}
                  <span className="text-pass">first-class</span>{" "}
                  engineering problem.
                </h2>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8 space-y-8 text-[1.1rem] md:text-xl text-ink-muted leading-[1.8]">
            <ScrollReveal delay={0.1}>
              <p data-testid="about-paragraph">{profile.summary}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                I&apos;ve led frameworks built on{" "}
                <span className="font-mono text-ink">Selenium</span>,{" "}
                <span className="font-mono text-ink">Playwright</span>, and{" "}
                <span className="font-mono text-ink">Karate</span> — covering
                UI, API, Kafka-based messaging, performance under peak load, and
                resilience under chaos conditions. The throughline: making test
                suites that developers actually trust at 2am.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                Currently testing payment platforms at{" "}
                <span className="text-ink">Persistent Systems</span> for{" "}
                <span className="text-ink">Mastercard</span>. Previously at{" "}
                <span className="text-ink">TCS</span> (Kroger) and{" "}
                <span className="text-ink">L&amp;T</span> (supply-chain OMP).
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};
