"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface MissionCardProps {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  description: string;
  tech: string[];
  className?: string;
}

export function MissionCard({
  title,
  subtitle,
  icon,
  color,
  description,
  tech,
  className
}: MissionCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = (e.clientX - centerX) / rect.width;
    const mouseY = (e.clientY - centerY) / rect.height;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
        borderColor: color + "30"
      }}
      className={cn(
        "relative group bg-white/5 border border-white/10 rounded-xl p-6 cursor-pointer overflow-hidden",
        className
      )}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at 50% 50%, ${color}15 0%, transparent 70%)` 
        }}
      />

      <div style={{ transform: isHovered ? "translateZ(20px)" : "translateZ(0)" }}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl">{icon}</span>
          <motion.span
            animate={{ 
              color: isHovered ? color : "#888",
              scale: isHovered ? 1.1 : 1 
            }}
            transition={{ duration: 0.2 }}
            className="font-mono text-xs px-2 py-1 rounded"
            style={{ 
              border: `1px solid ${color}40`,
              background: `${color}10`
            }}
          >
            ACTIVE
          </motion.span>
        </div>

        <h3 className="font-display text-2xl font-bold text-white mb-1">
          {title}
        </h3>
        <p className="font-mono text-xs text-muted mb-4">
          {subtitle}
        </p>

        <p className="text-sm text-white/80 mb-6 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span 
              key={t}
              className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/60"
            >
              {t.toUpperCase()}
            </span>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 font-mono text-xs border border-white/20 hover:border-white text-white/80 hover:text-white transition-all rounded"
        >
          [ ENTER MISSION ]
        </motion.button>
      </div>
    </motion.div>
  );
}