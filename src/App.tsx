import React, { useEffect } from "react";
import "@/App.css";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

function App() {
  useEffect(() => {
    // Smooth scroll with native Lenis-lite approach
    let lenis: any;
    const initLenis = async () => {
      try {
        const { default: Lenis } = await import("lenis");
        lenis = new Lenis({ lerp: 0.08 });
        const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
        requestAnimationFrame(raf);
      } catch {
        // Lenis not critical
      }
    };
    initLenis();
    return () => { if (lenis) lenis.destroy(); };
  }, []);

  return (
    <div className="App font-body min-h-screen bg-bg text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;