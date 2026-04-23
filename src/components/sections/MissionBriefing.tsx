"use client";

import { motion } from "framer-motion";

interface MissionBriefingProps {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  description: string;
  objectives: string[];
  tech: string[];
  metrics: Record<string, string | number>;
  achievements?: string[];
}

export default function MissionBriefing({ 
  id, title, subtitle, icon, color, description, objectives, tech, metrics, achievements 
}: MissionBriefingProps) {
  return (
    <section id={id} className="min-h-screen w-full py-24 px-4 md:px-8 bg-black/60">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{icon}</span>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                {title}
              </h2>
              <p className="font-mono text-sm text-muted">{subtitle}</p>
            </div>
          </div>
          
          {/* Status Bar */}
          <div 
            className="h-1 rounded-full"
            style={{ background: color, boxShadow: `0 0 20px ${color}50` }}
          />
        </motion.div>

        {/* Brief Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Description & Objectives */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="font-mono text-xs text-primary mb-4">[ BRIEFING ]</h3>
              <p className="text-white/90 leading-relaxed">{description}</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-mono text-xs text-info mb-4">[ OBJECTIVES ]</h3>
              <ul className="space-y-3">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-white/80 text-sm">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Metrics & Tech */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(metrics).map(([key, value], i) => (
                <div 
                  key={key}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
                >
                  <div 
                    className="text-2xl font-bold font-display"
                    style={{ color }}
                  >
                    {value}
                  </div>
                  <div className="text-xs font-mono text-muted uppercase mt-1">
                    {key}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-mono text-xs text-warning mb-4">[ TECH LOADOUT ]</h3>
              <div className="flex flex-wrap gap-2">
                {tech.map((t, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-white/10 rounded text-xs font-mono text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ 
                background: `${color}20`, 
                border: `1px solid ${color}40` 
              }}
            >
              <span className="text-lg">✓</span>
              <span className="font-mono text-sm text-white">
                {achievements[0]}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}