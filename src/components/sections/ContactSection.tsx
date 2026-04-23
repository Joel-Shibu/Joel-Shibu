"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "OPEN COMM LINK", icon: "📧", href: "mailto:joelshibuadoor@email.com", desc: "Direct Email" },
  { name: "SYNC PROFILE", icon: "💼", href: "https://linkedin.com/in/joel-shibu-b6bb54352", desc: "LinkedIn" },
  { name: "ACCESS REPO", icon: "💻", href: "https://github.com/Joel-Shibu", desc: "GitHub" },
  { name: "DOWNLOAD DOSSIER", icon: "📄", href: "#", desc: "Resume PDF" }
];

export default function ContactSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="contact" className="min-h-screen w-full py-24 px-4 md:px-8 bg-black/40 flex flex-col items-center justify-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          COMMUNICATION CONSOLE
        </h2>
        <p className="font-mono text-muted text-sm">
          [ ESTABLISHING CONNECTION... ]
        </p>
      </motion.div>

      {/* Signal Waves Animation */}
      <div className="relative w-64 h-32 mb-12 flex items-center justify-center overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-48 border border-primary/20 rounded-full"
            animate={{
              scale: [1, 2],
              opacity: [0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut"
            }}
          />
        ))}
        <div className="text-4xl">📡</div>
      </div>

      {/* Status */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-mono text-sm text-muted mb-8 flex items-center gap-2"
      >
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        AWAITING RESPONSE...
      </motion.p>

      {/* Contact Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl w-full">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target={link.name === "OPEN COMM LINK" ? undefined : "_blank"}
            rel={link.name === "OPEN COMM LINK" ? undefined : "noopener noreferrer"}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative bg-white/5 border border-white/10 hover:border-primary/50 rounded-xl p-6 text-center group cursor-pointer"
          >
            {/* Glow Effect on Hover */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-primary/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
            />

            <div className="relative z-10">
              <span className="text-3xl mb-2 block">{link.icon}</span>
              <div className="font-mono text-xs text-white mb-1">{link.name}</div>
              <div className="text-[10px] text-muted">{link.desc}</div>
            </div>

            {/* Hover Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-primary/0"
              animate={{
                borderColor: hoveredIndex === index ? "rgba(0, 255, 136, 0.5)" : "rgba(255, 255, 255, 0)"
              }}
            />
          </motion.a>
        ))}
      </div>

      {/* Footer Status */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <p className="font-mono text-[10px] text-muted/50">
          © 2026 JOEL SHIBU // ALL RIGHTS RESERVED
        </p>
      </motion.div>
    </section>
  );
}