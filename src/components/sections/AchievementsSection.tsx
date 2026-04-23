"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const achievements = [
  { 
    id: 1, 
    title: "NEURAL LINK", 
    subtitle: "ESTABLISHED", 
    desc: "Browser ML Pioneer",
    icon: "🧠",
    color: "#00FF88"
  },
  { 
    id: 2, 
    title: "PRIVACY", 
    subtitle: "GUARDIAN", 
    desc: "On-device Processing",
    icon: "🔒",
    color: "#00D4FF"
  },
  { 
    id: 3, 
    title: "REAL-TIME", 
    subtitle: "RESPONDER", 
    desc: "WebSocket Architecture",
    icon: "⚡",
    color: "#FFD700"
  },
  { 
    id: 4, 
    title: "MULTI-AGENT", 
    subtitle: "MASTER", 
    desc: "Agentic AI Systems",
    icon: "🤖",
    color: "#FF6B35"
  },
  { 
    id: 5, 
    title: "AUTONOMOUS", 
    subtitle: "NAVIGATOR", 
    desc: "IoT + AI Integration",
    icon: "🚁",
    color: "#8B5CF6"
  }
];

export default function AchievementsSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: ['#00FF88', '#00D4FF', '#FFD700', '#FF6B35']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: ['#00FF88', '#00D4FF', '#FFD700', '#FF6B35']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <section className="min-h-[80vh] w-full py-24 px-4 md:px-8 bg-gradient-to-b from-black via-primary/5 to-black flex flex-col items-center justify-center">
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.div
          animate={{ 
            textShadow: ["0 0 10px #FFD700", "0 0 20px #FFD700", "0 0 10px #FFD700"]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-6xl mb-4"
        >
          🎉
        </motion.div>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-2">
          MISSION COMPLETE
        </h2>
        <p className="font-mono text-primary text-sm">
          ★ YOU&apos;VE UNLOCKED ACHIEVEMENTS ★
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl w-full mb-12">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.15,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/5 border border-white/10 rounded-xl p-4 text-center group"
            style={{ 
              borderColor: achievement.color + "30",
              boxShadow: `0 0 20px ${achievement.color}10`
            }}
          >
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ 
                background: `radial-gradient(circle at center, ${achievement.color}15 0%, transparent 70%)` 
              }}
            />

            <div className="relative z-10">
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
                className="text-4xl mb-2"
              >
                {achievement.icon}
              </motion.div>
              <div 
                className="font-bold text-sm"
                style={{ color: achievement.color }}
              >
                {achievement.title}
              </div>
              <div className="font-mono text-[10px] text-white/80">
                {achievement.subtitle}
              </div>
              <div className="text-[10px] text-muted mt-2">
                {achievement.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="px-8 py-3 bg-primary/10 border border-primary text-primary font-mono text-sm rounded-full hover:bg-primary/20 transition-colors"
      >
        [ 🔄 RESTART JOURNEY ]
      </motion.button>
    </section>
  );
}