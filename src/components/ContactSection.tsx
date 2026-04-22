"use client";

import MagneticButton from "./MagneticButton";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative h-screen w-full bg-black flex flex-col items-center justify-center z-20 px-4">
      {/* Radar rings background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border border-neural-cyan rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border border-neural-purple rounded-full" />
      </div>

      <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-12 text-center uppercase">
        Initialize<br/>Sequence
      </h2>

      <MagneticButton onClick={() => window.location.href = "mailto:joelshibuadoor@email.com"}>
        Initiate Contact
      </MagneticButton>

      <div className="mt-20 flex gap-8">
        <a href="https://github.com/Joel-Shibu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Github size={32} />
        </a>
        <a href="https://www.linkedin.com/in/joel-shibu-b6bb54352" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neural-cyan transition-colors">
          <Linkedin size={32} />
        </a>
        <a href="mailto:joelshibuadoor@email.com" className="text-gray-400 hover:text-white transition-colors">
          <Mail size={32} />
        </a>
      </div>
    </section>
  );
}