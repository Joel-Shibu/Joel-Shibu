"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillCategories = [
  {
    title: "AGENTIC AI",
    subtitle: "MULTI-AGENT SYSTEMS",
    skills: ["Prompt Engineering", "LLM Orchestration", "Tool Use", "Function Calling"],
    color: "#00FF88",
  },
  {
    title: "HEALTHCARE ML",
    subtitle: "ON-DEVICE INFERENCE",
    skills: ["TensorFlow.js", "CNNs", "Privacy-First ML", "Deep Learning"],
    color: "#00D4FF",
  },
  {
    title: "AUTONOMOUS",
    subtitle: "ROBOTICS & VISION",
    skills: ["ROS", "IoT Integration", "Computer Vision", "OpenCV", "ESP32"],
    color: "#FF6B35",
  }
];

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax background
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

    // Content fade in
    gsap.fromTo(contentRef.current, 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-black overflow-hidden flex items-center py-32">
      {/* Background Image Parallax Container */}
      <div className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2500&auto=format&fit=crop" 
          alt="AI Circuitry" 
          className="w-full h-full object-cover grayscale opacity-30 object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12">
        <div className="mb-20">
          <p className="font-mono text-sm tracking-[0.3em] text-white/50 mb-4">
            [ CAPABILITIES ]
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            TECHNICAL<br/>ARSENAL
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-4 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-lg" />
              <div className="relative">
                <div 
                  className="w-12 h-1 mb-6 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="font-display text-3xl font-bold text-white mb-2 uppercase tracking-tight">
                  {category.title}
                </h3>
                <p className="font-mono text-xs tracking-widest text-white/50 mb-8 uppercase">
                  {category.subtitle}
                </p>
                
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-4 group/skill">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/skill:scale-150 transition-all duration-300" style={{ backgroundColor: category.color }} />
                      <span className="font-mono text-sm text-white/80 group-hover/skill:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Production Stack */}
        <div className="mt-32 pt-16 border-t border-white/10">
          <p className="font-mono text-xs tracking-[0.2em] text-white/40 mb-8 text-center">
            PRODUCTION ENVIRONMENT STACK
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["Docker", "FastAPI", "React", "GCP", "CI/CD", "WebSocket"].map((tech) => (
              <span key={tech} className="font-mono text-sm md:text-base text-white/60 px-6 py-3 border border-white/10 rounded-full hover:border-white/50 hover:text-white transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}