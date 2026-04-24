"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="contact" className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center py-32">
      {/* Cinematic Background */}
      <div className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2500&auto=format&fit=crop" 
          alt="Server Room" 
          className="w-full h-full object-cover grayscale opacity-40 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black" />
        
        {/* Animated Radar/Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.1)_0%,transparent_70%)] animate-pulse pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 text-center mix-blend-exclusion">
        <p className="font-mono text-sm tracking-[0.4em] text-[#FF6B35] mb-6 uppercase">
          [ Comm Link Establishment ]
        </p>
        <h2 className="font-display text-6xl md:text-8xl lg:text-[8rem] font-black text-white tracking-tighter leading-none mb-16">
          INITIATE<br/>CONTACT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          <a 
            href="mailto:joelshibuadoor@email.com"
            className="group relative flex flex-col items-center justify-center p-12 border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden transition-all hover:scale-[1.02] hover:border-[#00FF88]/50"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#00FF88]/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] text-white/50 group-hover:text-white transition-colors mb-4">
              SECURE CHANNEL
            </span>
            <span className="relative z-10 font-display text-3xl text-white group-hover:text-[#00FF88] transition-colors">
              EMAIL
            </span>
          </a>

          <a 
            href="https://linkedin.com/in/joel-shibu-b6bb54352"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center p-12 border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden transition-all hover:scale-[1.02] hover:border-[#00D4FF]/50"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#00D4FF]/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] text-white/50 group-hover:text-white transition-colors mb-4">
              PROFESSIONAL NETWORK
            </span>
            <span className="relative z-10 font-display text-3xl text-white group-hover:text-[#00D4FF] transition-colors">
              LINKEDIN
            </span>
          </a>

          <a 
            href="https://github.com/Joel-Shibu"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center p-12 border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden transition-all hover:scale-[1.02] hover:border-white/50"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] text-white/50 group-hover:text-white transition-colors mb-4">
              CODE REPOSITORY
            </span>
            <span className="relative z-10 font-display text-3xl text-white transition-colors">
              GITHUB
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-4 text-white/40 font-mono text-xs tracking-[0.3em]">
            <span className="w-3 h-3 rounded-full bg-[#00FF88] animate-pulse shadow-[0_0_10px_#00FF88]" />
            SYSTEM STANDBY // READY TO RECEIVE
          </div>
          <div className="w-px h-24 bg-gradient-to-b from-white/20 to-transparent mt-8" />
        </div>
      </div>
    </section>
  );
}