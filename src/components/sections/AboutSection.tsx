"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax background
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Content animation
    const elements = contentRef.current?.querySelectorAll('.stagger-elem');
    if (elements) {
      gsap.fromTo(elements, 
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "center center",
            scrub: 1,
          }
        }
      );
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-black overflow-hidden flex items-center py-32">
      {/* Background Image Parallax Container */}
      <div className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2500&auto=format&fit=crop" 
          alt="Cybernetic Structure" 
          className="w-full h-full object-cover grayscale opacity-40 object-[70%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Text Details */}
        <div className="space-y-12 mix-blend-exclusion">
          <div className="stagger-elem">
            <p className="font-mono text-sm tracking-[0.3em] text-[#00D4FF] mb-4">
              [ PROFILE DATA ]
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              THE<br/>ENGINEER
            </h2>
            <p className="font-mono text-lg text-white/80 leading-relaxed max-w-xl">
              I am a 3rd-year AI Engineering student at APJ Abdul Kalam Technological University, specializing in bridging the gap between theoretical machine learning and production-ready autonomous systems.
            </p>
          </div>

          <div className="stagger-elem grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
            <div>
              <p className="font-mono text-xs tracking-widest text-white/40 mb-2 uppercase">Role Focus</p>
              <p className="font-display text-xl text-white font-bold tracking-tight">AI Systems Engineer</p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest text-white/40 mb-2 uppercase">Base Location</p>
              <p className="font-display text-xl text-white font-bold tracking-tight">Kerala, India</p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest text-white/40 mb-2 uppercase">Core Interest</p>
              <p className="font-display text-xl text-[#00FF88] font-bold tracking-tight">Autonomous AI</p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest text-white/40 mb-2 uppercase">Status</p>
              <p className="font-display text-xl text-[#00D4FF] font-bold tracking-tight">Available</p>
            </div>
          </div>
        </div>

        {/* Visual Dossier Element */}
        <div className="stagger-elem flex flex-col justify-center items-end hidden lg:flex">
          <div className="relative w-full max-w-md aspect-[3/4] border border-white/10 p-4 bg-white/5 backdrop-blur-sm group overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white/40" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white/40" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white/40" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white/40" />
            
            {/* Holographic Image */}
            <div className="w-full h-full overflow-hidden bg-black relative">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1500&auto=format&fit=crop" 
                alt="Abstract AI Code" 
                className="w-full h-full object-cover grayscale contrast-150 opacity-80 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[3000ms]"
              />
              <div className="absolute inset-0 bg-[#00FF88] mix-blend-overlay opacity-20" />
              
              {/* Scanline overlay */}
              <div 
                className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none" 
              />
              
              {/* HUD Elements */}
              <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[#00FF88] tracking-widest">
                DATASTREAM_ACTIVE<br/>
                LOC: 09.9312° N, 76.2673° E<br/>
                T_DELTA: 0.0014s
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}