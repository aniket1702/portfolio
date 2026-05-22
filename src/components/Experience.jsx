import React from "react";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

const MARQUEE_EXP = [
  "PRODUCTION DIDN'T CRASH. YOU'RE WELCOME.",
  "BATTLE SCARS FROM QA WARFARE",
  "YEARS OF ARGUING WITH BUGS",
  "CERTIFIED BUG WHISPERER",
];

export const Experience = () => {
  return (
    <>
      <div className="py-10 overflow-hidden border-y border-white/5">
        <MarqueeStrip texts={MARQUEE_EXP} reverse opacity={0.06} fontSize="clamp(2rem,5vw,4.5rem)" />
      </div>

      <section id="experience" data-testid="experience-section" className="relative py-32 md:py-44 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal className="mb-20 md:mb-24 max-w-3xl">
            <div className="font-mono-tag text-pass mb-4">03 / EXPERIENCE</div>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.05]">
              Battle Scars from{" "}
              <span className="text-pass">QA Warfare.</span>
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              Each role is a node — domains, stacks and outcomes that shaped how I
              ship quality today.
            </p>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-0 md:left-[180px] top-2 bottom-2 w-px bg-gradient-to-b from-pass via-white/10 to-transparent"
              aria-hidden="true"
            />

            <StaggerChildren stagger={0.1} className="space-y-16 md:space-y-20">
              {experience.map((exp, i) => (
                <StaggerItem key={exp.company}>
                  <div
                    data-testid={`exp-item-${i}`}
                    className="relative grid md:grid-cols-[180px_1fr] gap-6 md:gap-14 pl-8 md:pl-0"
                  >
                    <span className="timeline-node md:left-[175px]" aria-hidden="true" />

                    {/* Date column */}
                    <div className="md:text-right md:pr-12 shrink-0">
                      <div className="font-mono text-sm text-pass">{exp.period}</div>
                      <div className="font-mono text-xs text-ink-dim mt-1">{exp.location}</div>
                    </div>

                    {/* Content */}
                    <div className="md:pl-12 md:border-l md:border-white/5">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase size={14} className="text-ink-dim" aria-hidden="true" />
                        <span className="font-mono-tag text-ink-dim">// COMPANY</span>
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                        {exp.company}
                      </h3>
                      <div className="mt-2 text-base md:text-lg text-ink-muted">{exp.role}</div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.stack.map((s) => (
                          <span key={s} className="pill">{s}</span>
                        ))}
                      </div>

                      <ul className="mt-6 space-y-3 text-ink-muted" role="list">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx} className="flex gap-3 leading-[1.7]">
                            <span className="text-pass font-mono mt-1 shrink-0" aria-hidden="true">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>
    </>
  );
};
