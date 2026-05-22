import React from "react";
import { achievements } from "@/data/portfolio";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";

export const Achievements = () => {
  return (
    <section id="achievements" data-testid="achievements-section" className="relative py-32 md:py-44 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pass/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal className="mb-16 md:mb-20 max-w-3xl">
          <div className="font-mono-tag text-pass mb-4">04 / IMPACT</div>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.05]">
            Numbers that{" "}
            <span className="text-pass">moved the needle.</span>
          </h2>
          <p className="mt-4 text-ink-muted">
            Metrics collected across BFSI, retail, and supply-chain engagements.
          </p>
        </ScrollReveal>

        <StaggerChildren stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {achievements.map((a, i) => (
            <StaggerItem key={a.value}>
              <div
                data-testid={`achievement-${i}`}
                className={`bento-card p-8 md:p-10 ${i === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-mono font-bold tracking-tighter text-pass ${
                      i === 0
                        ? "text-[clamp(4rem,12vw,8rem)]"
                        : "text-[clamp(3.5rem,9vw,6rem)]"
                    }`}
                  >
                    {a.value}
                  </span>
                </div>
                <p className={`mt-4 text-ink-muted leading-relaxed ${i === 0 ? "text-xl max-w-md" : "text-base"}`}>
                  {a.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
