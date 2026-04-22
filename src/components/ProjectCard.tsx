"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export default function ProjectCard({ title, description, tech, repoUrl, demoUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-[90vw] max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,240,255,0.1)]"
    >
      <h2 className="text-4xl font-display font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {tech.map((t, i) => (
          <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-neural-cyan border border-white/5">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-neural-cyan transition-colors">
            <Github size={20} />
            <span className="font-mono text-sm">SOURCE</span>
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-neural-purple transition-colors">
            <ExternalLink size={20} />
            <span className="font-mono text-sm">LIVE_SYSTEM</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}