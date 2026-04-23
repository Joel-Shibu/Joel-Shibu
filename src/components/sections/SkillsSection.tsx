"use client";

import { motion } from "framer-motion";

const skillTree = {
  ultimate: {
    name: "LLM ORCHESTRATION",
    color: "#FFD700",
    description: "Multi-agent systems & tool orchestration"
  },
  tiers: [
    {
      name: "AGENTIC AI",
      color: "#00FF88",
      skills: [
        { name: "Prompt Engineering", level: 90, description: "Vertex AI certified" },
        { name: "Multi-Agent Systems", level: 85, description: "LLM orchestration" },
        { name: "Tool Use", level: 80, description: "Function calling" }
      ]
    },
    {
      name: "HEALTHCARE ML",
      color: "#00D4FF",
      skills: [
        { name: "TensorFlow.js", level: 92, description: "Browser ML" },
        { name: "CNNs", level: 88, description: "Deep learning" },
        { name: "On-Device Inference", level: 85, description: "Privacy-first" }
      ]
    },
    {
      name: "AUTONOMOUS SYS",
      color: "#FF6B35",
      skills: [
        { name: "ROS", level: 75, description: "Robot OS" },
        { name: "IoT Integration", level: 82, description: "ESP32, sensors" },
        { name: "Computer Vision", level: 80, description: "OpenCV" }
      ]
    }
  ],
  production: [
    { name: "Docker", level: 90 },
    { name: "FastAPI", level: 88 },
    { name: "WebSocket", level: 85 },
    { name: "Real-time ML", level: 82 },
    { name: "React", level: 88 },
    { name: "Flutter", level: 80 },
    { name: "GCP", level: 78 },
    { name: "CI/CD", level: 85 }
  ]
};

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen w-full py-24 px-4 md:px-8 bg-black/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            SKILLS UNLOCKED
          </h2>
          <p className="font-mono text-muted text-sm">
            [ ABILITY GRID - LEVEL UP YOUR KNOWLEDGE ]
          </p>
        </motion.div>

        {/* Ultimate Skill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div 
            className="relative px-8 py-4 rounded-full border-2"
            style={{ 
              background: `linear-gradient(135deg, ${skillTree.ultimate.color}20, transparent)`,
              borderColor: skillTree.ultimate.color,
              boxShadow: `0 0 30px ${skillTree.ultimate.color}40`
            }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 bg-black">
              <span className="text-xs font-mono text-yellow-400">[ ULTIMATE ]</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              {skillTree.ultimate.name}
            </h3>
            <p className="text-xs text-center text-muted mt-1">
              {skillTree.ultimate.description}
            </p>
          </div>
        </motion.div>

        {/* Skill Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillTree.tiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Tier Header */}
              <div 
                className="text-center mb-6 pb-4 border-b"
                style={{ borderColor: tier.color + "40" }}
              >
                <h3 
                  className="font-display text-xl font-bold"
                  style={{ color: tier.color }}
                >
                  {tier.name}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {tier.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: tierIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-white">{skill.name}</span>
                      <span className="text-xs font-mono" style={{ color: tier.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: tierIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ background: tier.color }}
                      />
                    </div>
                    <p className="text-[10px] text-muted mt-1">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Production Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="font-mono text-xs text-muted text-center mb-6">
            [ PRODUCTION TOOLS ]
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillTree.production.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 hover:text-primary hover:border-primary/50 transition-colors cursor-default"
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}