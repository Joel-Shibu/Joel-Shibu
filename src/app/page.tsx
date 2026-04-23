"use client";

import { useState, useEffect } from "react";
import { registerGSAP } from "@/lib/animations/gsap-setup";
import BootSequenceLoader from "@/components/BootSequenceLoader";
import HeroSection from "@/components/sections/HeroSection";

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
            
            {/* Placeholder for Mission Select */}
            <section 
              id="missions" 
              className="min-h-screen flex items-center justify-center border-t border-white/5 bg-black/40"
            >
              <div className="text-center">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                  MISSION SELECT
                </h2>
                <p className="font-mono text-muted">
                  [SELECT A MISSION TO BEGIN]
                </p>
              </div>
            </section>

            {/* More sections will be added here */}
            <section className="min-h-[50vh] flex items-center justify-center border-t border-white/5">
              <p className="font-mono text-muted">[MORE MISSIONS COMING SOON]</p>
            </section>

            <section className="min-h-[50vh] flex items-center justify-center border-t border-white/5">
              <p className="font-mono text-muted">[SKILLS DATA LOADING]</p>
            </section>

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