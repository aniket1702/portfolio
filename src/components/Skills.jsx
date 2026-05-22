import React from "react";
import { Terminal, GitBranch, Database, ClipboardCheck, Layers } from "lucide-react";
import { skillGroups, methodologies } from "@/data/portfolio";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";

const icons = {
  "Automation & Languages": Terminal,
  "Frameworks": Layers,
  "CI/CD & Version Control": GitBranch,
  "Databases": Database,
  "Test & Defect Management": ClipboardCheck,
};

export const Skills = () => {
  return (
    <section id="skills" data-testid="skills-section" className="relative py-32 md:py-44 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal className="mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="font-mono-tag text-pass mb-4">02 / ARSENAL</div>
              <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.05] max-w-xl">
                Weapons of Mass{" "}
                <span className="text-pass">Debugging.</span>
              </h2>
            </div>
            <p className="text-ink-muted md:max-w-sm text-base md:text-lg leading-relaxed">
              Six years of frameworks, languages and platforms — the things I
              reach for when builds are on fire.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <StaggerChildren stagger={0.07} className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.title] || Terminal;
            return (
              <StaggerItem
                key={g.title}
                className={`bento-card p-6 md:p-7 ${g.span} ${i === 0 ? "row-span-2 lg:min-h-[360px]" : ""}`}
              >
                <div
                  data-testid={`skill-card-${i}`}
                  className="h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-pass/10 border border-pass/20 flex items-center justify-center" aria-hidden="true">
                        <Icon size={16} className="text-pass" strokeWidth={2} />
                      </div>
                      <div className="font-mono-tag text-ink-dim">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-4">{g.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span key={it} className="pill" data-testid={`skill-pill-${it}`}>
                        {it}
                      </span>
                    ))}
                  </div>
                  {i === 0 && (
                    <div className="mt-8 pt-6 border-t border-white/5 flex-1">
                      <div className="font-mono-tag text-ink-dim mb-3">Testing methodologies</div>
                      <div className="flex flex-wrap gap-2">
                        {methodologies.map((m) => (
                          <span key={m} className="pill">{m}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
};
