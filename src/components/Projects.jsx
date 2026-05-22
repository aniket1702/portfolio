import React from "react";
import { Github, ArrowUpRight, FolderGit2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

const MARQUEE_PROJECTS = [
  "PROOF I ACTUALLY SHIP STUFF",
  "DEPLOY FIRST · PANIC LATER",
  "THINGS I BROKE PROFESSIONALLY",
  "MAKING QA LOOK EXPENSIVE",
];

export const Projects = () => {
  return (
    <>
      <div className="py-10 overflow-hidden border-y border-white/5">
        <MarqueeStrip texts={MARQUEE_PROJECTS} opacity={0.065} fontSize="clamp(2rem,5vw,4.5rem)" />
      </div>

      <section id="projects" data-testid="projects-section" className="relative py-32 md:py-44 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal className="mb-16 md:mb-20 max-w-3xl">
            <div className="font-mono-tag text-pass mb-4">05 / PROJECTS</div>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.05]">
              Things I Broke{" "}
              <span className="text-pass">Professionally.</span>
            </h2>
          </ScrollReveal>

          <StaggerChildren stagger={0.1} className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
            {projects.map((p, i) => (
              <StaggerItem key={p.name} className="lg:col-span-8">
                <a
                  data-testid={`project-${i}`}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bento-card group block p-8 md:p-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pass"
                  aria-label={`${p.name} — opens on GitHub`}
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-pass/10 border border-pass/20 flex items-center justify-center" aria-hidden="true">
                        <FolderGit2 size={18} className="text-pass" />
                      </div>
                      <span className="font-mono-tag text-ink-dim">{p.tag}</span>
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="text-ink-dim group-hover:text-pass group-hover:rotate-45 transition-all"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl text-ink mb-4">{p.name}</h3>
                  <p className="text-ink-muted text-base md:text-lg leading-[1.7] max-w-2xl">
                    {p.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                </a>
              </StaggerItem>
            ))}

            {/* GitHub callout */}
            <StaggerItem className="lg:col-span-4">
              <a
                data-testid="github-callout"
                href="https://github.com/aniket1702"
                target="_blank"
                rel="noreferrer"
                className="bento-card group flex flex-col justify-between p-8 h-full min-h-[200px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-pass"
                aria-label="More projects on GitHub"
              >
                <div>
                  <Github size={28} className="text-pass mb-6" aria-hidden="true" />
                  <h3 className="font-display text-2xl text-ink mb-2">More on GitHub</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    Additional frameworks, scripts and automation experiments.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="font-mono text-sm text-ink">@aniket1702</span>
                  <ArrowUpRight
                    size={20}
                    className="text-ink-dim group-hover:text-pass group-hover:rotate-45 transition-all"
                    aria-hidden="true"
                  />
                </div>
              </a>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>
    </>
  );
};
