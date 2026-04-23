"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { Particles } from "@/components/ui/particles";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const scrollToMissions = () => {
    const missionsSection = document.getElementById("missions");
    if (missionsSection) {
      missionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Layer 0: Background Grid */}
      <div className="absolute inset-0">
        <InteractiveGridPattern 
          className="opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" 
        />
      </div>
      
      {/* Layer 1: Particles */}
      <Particles 
        className="opacity-50" 
        color="#00D4FF" 
        quantity={100}
        ease={80}
      />
      
      {/* Layer 2: Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)]" />
      
      {/* Layer 3: Main Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Cockpit Frame */}
        <div className="relative border border-white/10 bg-black/60 backdrop-blur-md p-8 md:p-16 rounded-2xl">
          {/* Corner Accents */}
          <div className="absolute -top-px -left-px w-8 h-8 border-l-2 border-t-2 border-primary" />
          <div className="absolute -top-px -right-px w-8 h-8 border-r-2 border-t-2 border-primary" />
          <div className="absolute -bottom-px -left-px w-8 h-8 border-l-2 border-b-2 border-primary" />
          <div className="absolute -bottom-px -right-px w-8 h-8 border-r-2 border-b-2 border-primary" />
          
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white text-center mb-6"
          >
            JOEL SHIBU
          </motion.h1>
          
          {/* Subtitle / Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-mono text-sm md:text-base mb-8 space-y-2 text-center"
          >
            <p className="text-primary">&gt; AI SYSTEMS ENGINEER_</p>
            <p className="text-info">&gt; HEALTHCARE AI SPECIALIST_</p>
            <p className="text-warning">&gt; AUTONOMOUS SYSTEMS PILOT_</p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1 }}
            className="text-muted text-lg md:text-xl max-w-lg text-center mb-12"
          >
            Building Next-Generation AI Systems. Advancing Agentic Capabilities.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToMissions}
            className="px-8 py-4 bg-primary/10 border border-primary text-primary font-mono text-sm uppercase tracking-widest rounded transition-all hover:bg-primary/20"
          >
            [ VIEW MISSIONS ]
          </motion.button>
        </div>
      </motion.div>

      {/* Scan Line Effect */}
      <div className="scan-line" />
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}