"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const missions = [
  {
    id: "neurosight",
    title: "NEUROSIGHT",
    subtitle: "Browser-Based Neurological Screening",
    category: "HEALTHCARE AI",
    icon: "🧠",
    color: "#00FF88",
    status: "ACTIVE",
    description: "Privacy-first AI platform for eye-movement analysis using TensorFlow.js",
    tech: ["TensorFlow.js", "React", "FastAPI", "On-Device ML"],
    metrics: { accuracy: "94%", latency: "47ms", privacy: "100%", platforms: 3 }
  },
  {
    id: "resp-ai",
    title: "RESP-AI",
    subtitle: "Real-Time Respiratory Monitoring",
    category: "REAL-TIME ML",
    icon: "💨",
    color: "#00D4FF",
    status: "ACTIVE",
    description: "CNN-based acoustic analysis with 2-stage cascade architecture",
    tech: ["Flutter", "WebSocket", "CNN", "Python"],
    metrics: { accuracy: "97.3%", latency: "94ms", platforms: 2 }
  },
  {
    id: "airguardian",
    title: "AIRGUARDIAN",
    subtitle: "Autonomous Drone Systems",
    category: "AUTONOMOUS",
    icon: "🚁",
    color: "#FF6B35",
    status: "ACTIVE",
    description: "AI-powered indoor environmental intelligence with IoT integration",
    tech: ["Python", "ESP32", "OpenCV", "INAV"],
    metrics: { coverage: "500m²", altitude: "50m", sensors: 8 }
  }
];

export default function MissionSelect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <section 
      ref={containerRef}
      id="missions"
      className="min-h-screen w-full py-24 px-4 md:px-8 bg-black/40"
    >
      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              MISSION SELECT
            </h2>
            <p className="font-mono text-muted text-sm">
              [ SELECT A MISSION TO VIEW BRIEFING ]
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {missions.map((mission, index) => (
            <MissionCard key={mission.id} mission={mission} index={index} />
          ))}
        </div>

        <motion.div 
          className="flex justify-center gap-4 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {["ABOUT", "SKILLS", "CONTACT", "RESUME"].map((tab) => (
            <button
              key={tab}
              className="px-6 py-2 font-mono text-xs text-muted border border-white/10 hover:border-primary/50 hover:text-primary transition-colors rounded"
            >
              [{tab}]
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function MissionCard({ mission, index }: { mission: typeof missions[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative group bg-white/5 border border-white/10 hover:border-white/30 rounded-xl p-6 cursor-pointer overflow-hidden"
      style={{ borderColor: mission.color + "30" }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${mission.color}20 0%, transparent 70%)` }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl">{mission.icon}</span>
          <span 
            className="font-mono text-xs px-2 py-1 rounded"
            style={{ 
              color: mission.color, 
              border: `1px solid ${mission.color}40`,
              background: `${mission.color}10`
            }}
          >
            [{mission.status}]
          </span>
        </div>

        <h3 className="font-display text-2xl font-bold text-white mb-1">
          {mission.title}
        </h3>
        <p className="font-mono text-xs text-muted mb-4">
          {mission.subtitle}
        </p>

        <span className="inline-block font-mono text-xs text-white/60 mb-4">
          {mission.category}
        </span>

        <p className="text-sm text-white/80 mb-6 line-clamp-2">
          {mission.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {mission.tech.slice(0, 3).map((t) => (
            <span 
              key={t}
              className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/60"
            >
              {t.toUpperCase()}
            </span>
          ))}
        </div>

        <button 
          className="w-full py-3 font-mono text-xs border border-white/20 hover:border-white text-white/80 hover:text-white transition-all rounded group-hover:bg-white/5"
        >
          [ ENTER MISSION ]
        </button>
      </div>
    </motion.div>
  );
}