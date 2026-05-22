import React from "react";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";

export const Education = () => {
  return (
    <section id="education" data-testid="education-section" className="relative py-32 md:py-44 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal className="mb-14 max-w-3xl">
          <div className="font-mono-tag text-pass mb-4">06 / EDUCATION</div>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.05]">
            Where it all{" "}
            <span className="text-pass">compiled.</span>
          </h2>
        </ScrollReveal>

        <StaggerChildren stagger={0.1} className="grid md:grid-cols-2 gap-4 md:gap-5">
          {education.map((e, i) => (
            <StaggerItem key={e.school}>
              <div
                className="bento-card p-7 md:p-8"
                data-testid={`edu-item-${i}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-pass/10 border border-pass/20 flex items-center justify-center" aria-hidden="true">
                    <GraduationCap size={18} className="text-pass" />
                  </div>
                  {e.period && (
                    <span className="font-mono text-xs text-ink-dim">{e.period}</span>
                  )}
                </div>
                <h3 className="text-lg md:text-xl text-ink font-medium leading-snug">{e.school}</h3>
                <div className="mt-2 text-ink-muted">{e.degree}</div>
                <div className="mt-5 font-mono text-pass text-sm">{e.score}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
