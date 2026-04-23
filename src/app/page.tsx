"use client";

import { useState, useEffect } from "react";
import { registerGSAP } from "@/lib/animations/gsap-setup";
import BootSequenceLoader from "@/components/BootSequenceLoader";
import HeroSection from "@/components/sections/HeroSection";
import MissionSelect from "@/components/sections/MissionSelect";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    registerGSAP();
  }, []);

  return (
    <main className="relative bg-background min-h-screen selection:bg-primary/30 selection:text-primary">
      {/* Boot Sequence */}
      {(!bootComplete) && (
        <BootSequenceLoader onComplete={() => setBootComplete(true)} />
      )}

      {/* Main Content */}
      {bootComplete && (
        <div id="smooth-wrapper" className="relative z-10 w-full">
          <div id="smooth-content">
            <HeroSection />
            
            <MissionSelect />

            {/* More sections will be added here */}
            <SkillsSection />

            <section className="min-h-[50vh] flex items-center justify-center border-t border-white/5">
              <p className="font-mono text-muted">[ABOUT DATA LOADING]</p>
            </section>

            <section className="min-h-[50vh] flex items-center justify-center border-t border-white/5">
              <p className="font-mono text-muted">[CONTACT LINK ESTABLISHING]</p>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}