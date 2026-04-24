"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

interface HeroSectionProps {
  onMissionSelect?: (id: string) => void;
}

export default function HeroSection({ onMissionSelect }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", // Pin for 200% of viewport height
        scrub: 1.5, // Smooth scrubbing
        pin: true,
      }
    });

    // Zoom the image dramatically and darken it
    tl.to(imageRef.current, {
      scale: 1.8,
      transformOrigin: "center center",
      ease: "power2.inOut"
    }, 0);

    tl.to(overlayRef.current, {
      opacity: 0.9,
      ease: "power2.inOut"
    }, 0);

    // Text spreads / fades and moves up
    tl.to(textRef.current, {
      scale: 1.3,
      opacity: 0,
      y: -150,
      ease: "power2.inOut"
    }, 0);

    tl.to(subtextRef.current, {
      opacity: 0,
      y: 100,
      ease: "power2.inOut"
    }, 0);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Cinematic Background Image */}
      <div 
        ref={imageWrapperRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2500&auto=format&fit=crop" 
          alt="Cinematic AI Robot" 
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-[2000ms] cursor-default"
        />
        {/* Film grain and dark overlay */}
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black opacity-60 pointer-events-none" />
      </div>

      {/* Foreground Typography */}
      <div className="relative z-10 text-center pointer-events-none mix-blend-exclusion">
        <h1 ref={textRef} className="text-[12vw] font-black tracking-tighter text-white leading-[0.8] whitespace-nowrap will-change-transform">
          JOEL<br/>SHIBU
        </h1>
        <div ref={subtextRef} className="mt-8 flex flex-col items-center will-change-transform">
          <p className="font-mono text-xl md:text-2xl tracking-[0.5em] text-[#00FF88]">AI OPERATIVE</p>
          <div className="w-px h-32 bg-gradient-to-b from-[#00FF88] to-transparent mt-8" />
          <p className="font-mono text-xs text-white/50 tracking-widest mt-4">SCROLL TO INITIATE</p>
        </div>
      </div>
    </section>
  );
}