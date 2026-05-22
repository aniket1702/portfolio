import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/ScrollReveal";

const items = [
  { icon: Mail, label: "Email", value: "aniketmaurya1702@gmail.com", href: `mailto:${profile.email}`, key: "email" },
  { icon: Phone, label: "Phone", value: "+91 77383 06641", href: `tel:${profile.phone}`, key: "phone" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aniketmaurya1702", href: profile.linkedin, key: "linkedin" },
  { icon: Github, label: "GitHub", value: "github.com/aniket1702", href: profile.github, key: "github" },
  { icon: MapPin, label: "Location", value: profile.location, href: null, key: "location" },
];

export const Contact = () => {
  return (
    <section id="contact" data-testid="contact-section" className="relative pt-32 md:pt-44 pb-16 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-pass/8 blur-[130px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="font-mono-tag text-pass mb-6">07 / CONTACT</div>
        </ScrollReveal>

        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-[-0.04em] text-ink"
        >
          Summon the<br />
          <span className="text-pass">QA Engineer_</span>
        </motion.h2>

        <ScrollReveal delay={0.2} className="mt-8 max-w-2xl">
          <p className="text-base md:text-xl text-ink-muted leading-[1.75]">
            Got a flaky suite to stabilise, a framework to architect, or a release
            you want to ship with confidence? Pick a channel — I respond fast.
          </p>
        </ScrollReveal>

        <StaggerChildren stagger={0.07} delay={0.1} className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => {
            const Icon = it.icon;
            const isLink = !!it.href;
            const Tag = isLink ? "a" : "div";
            return (
              <StaggerItem key={it.key}>
                <Tag
                  data-testid={`contact-${it.key}`}
                  {...(isLink
                    ? {
                        href: it.href,
                        target: it.href?.startsWith("http") ? "_blank" : undefined,
                        rel: "noreferrer",
                        "aria-label": `${it.label}: ${it.value}`,
                      }
                    : {})}
                  className={`bento-card p-6 flex items-center justify-between ${isLink ? "group cursor-pointer focus:outline-none focus:ring-2 focus:ring-pass" : ""}`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 shrink-0 rounded-lg bg-pass/10 border border-pass/20 flex items-center justify-center" aria-hidden="true">
                      <Icon size={18} className="text-pass" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono-tag text-ink-dim">{it.label}</div>
                      <div className="text-ink truncate text-sm">{it.value}</div>
                    </div>
                  </div>
                  {isLink && (
                    <ArrowUpRight
                      size={18}
                      className="text-ink-dim group-hover:text-pass group-hover:rotate-45 transition-all shrink-0 ml-3"
                      aria-hidden="true"
                    />
                  )}
                </Tag>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <ScrollReveal delay={0.3} className="mt-14">
          <a
            data-testid="contact-download-cv"
            href={profile.cv}
            download
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-pass text-bg font-semibold transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(198,244,50,0.4)] focus:outline-none focus:ring-2 focus:ring-pass focus:ring-offset-2 focus:ring-offset-bg"
          >
            <Download size={18} strokeWidth={2.5} aria-hidden="true" />
            Download full CV
            <span className="font-mono text-xs opacity-60">.pdf</span>
          </a>
        </ScrollReveal>

        <footer className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-dim">
            <span className="dot-blink" aria-hidden="true" />
            <span>BUILD_2025 · CRAFTED_WITH_PRECISION · ZERO_FLAKY_TESTS</span>
          </div>
          <div className="font-mono text-xs text-ink-dim">
            © {new Date().getFullYear()} ANIKET_MAURYA. ALL_RIGHTS_RESERVED.
          </div>
        </footer>
      </div>
    </section>
  );
};
