"use client";

import { motion } from "framer-motion";

const stats = {
  intelligence: 85,
  creativity: 70,
  leadership: 80,
  technical: 95
};

const certifications = [
  { name: "Google Cloud", badge: "Prompt Design", color: "#4285F4" },
  { name: "Johnson & Johnson", badge: "Robotics & Controls", color: "#FF6B35" },
  { name: "Electronic Arts", badge: "Software Engineering", color: "#00FF88" }
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen w-full py-24 px-4 md:px-8 bg-black/60">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            PERSONNEL FILE
          </h2>
          <p className="font-mono text-muted text-sm">
            [ CLASSIFIED - CLEARANCE LEVEL 5 ]
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Photo & Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              {/* Photo Frame */}
              <div className="relative mb-6">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 via-info/20 to-warning/20 overflow-hidden flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
                {/* Scan Lines Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,136,0.03)_50%,transparent_50%)] bg-[length:100%_4px]" />
                </div>
                {/* Corner Brackets */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-primary" />
                <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-primary" />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-primary" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-primary" />
              </div>

              {/* Info */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-muted">NAME:</span>
                  <span className="text-white font-bold">JOEL SHIBU</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-muted">ROLE:</span>
                  <span className="text-primary">AI SYSTEMS ENGINEER</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-muted">CLEARANCE:</span>
                  <span className="text-warning">ENGINEER LEVEL 5</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-muted">LOCATION:</span>
                  <span className="text-white/80">Adoor, Kerala, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Character Stats */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-mono text-xs text-info mb-4">[ CHARACTER STATS ]</h3>
              <div className="space-y-4">
                {Object.entries(stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white capitalize">{key}</span>
                      <span className="font-mono text-primary">{value}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${value}%` }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-info"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-mono text-xs text-warning mb-4">[ CERTIFICATIONS ]</h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}` }}
                    >
                      <span className="text-lg">✓</span>
                    </div>
                    <div>
                      <div className="text-sm text-white font-bold">{cert.name}</div>
                      <div className="text-xs text-muted font-mono">— {cert.badge}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}