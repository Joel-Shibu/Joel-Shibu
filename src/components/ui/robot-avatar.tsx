"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface RobotAvatarProps {
  className?: string;
  size?: number;
}

export function RobotAvatar({ className = "", size = 200 }: RobotAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const eyeX = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), springConfig);
  const eyeY = useSpring(useTransform(mouseY, [-100, 100], [-6, 6]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Robot head */}
      <div className="relative w-full h-full">
        {/* Main head shape */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 0 20px rgba(0, 255, 136, 0.3))" }}
        >
          {/* Head background */}
          <defs>
            <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="50%" stopColor="#0f0f1a" />
              <stop offset="100%" stopColor="#1a1a2e" />
            </linearGradient>
            <linearGradient id="visorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00FF88" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Head outline */}
          <path
            d="M100 20 
               C140 20 170 50 180 90 
               L185 130 
               C185 160 165 185 100 185 
               C35 185 15 160 15 130 
               L20 90 
               C30 50 60 20 100 20 Z"
            fill="url(#headGradient)"
            stroke="#00FF88"
            strokeWidth="2"
            opacity="0.9"
          />

          {/* Face plate lines */}
          <path
            d="M40 100 L60 100 M140 100 L160 100"
            stroke="#00FF8840"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Antenna */}
          <line x1="100" y1="20" x2="100" y2="5" stroke="#00FF88" strokeWidth="2" />
          <circle cx="100" cy="5" r="4" fill="#00FF88" filter="url(#glow)">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Left eye */}
          <g>
            <motion.g style={{ x: eyeX, y: eyeY }}>
              {/* Eye socket */}
              <ellipse cx="70" cy="85" rx="22" ry="18" fill="#0a0a0a" stroke="#00FF8840" strokeWidth="1" />
              {/* Eye glow */}
              <ellipse cx="70" cy="85" rx="15" ry="12" fill="url(#visorGradient)" filter="url(#glow)" opacity="0.9">
                <animate
                  attributeName="opacity"
                  values="0.9;1;0.9"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </ellipse>
              {/* Eye highlight */}
              <ellipse cx="65" cy="80" rx="5" ry="4" fill="white" opacity="0.4" />
            </motion.g>
          </g>

          {/* Right eye */}
          <g>
            <motion.g style={{ x: eyeX, y: eyeY }}>
              {/* Eye socket */}
              <ellipse cx="130" cy="85" rx="22" ry="18" fill="#0a0a0a" stroke="#00FF8840" strokeWidth="1" />
              {/* Eye glow */}
              <ellipse cx="130" cy="85" rx="15" ry="12" fill="url(#visorGradient)" filter="url(#glow)" opacity="0.9">
                <animate
                  attributeName="opacity"
                  values="0.9;1;0.9"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </ellipse>
              {/* Eye highlight */}
              <ellipse cx="125" cy="80" rx="5" ry="4" fill="white" opacity="0.4" />
            </motion.g>
          </g>

          {/* Mouth / Speaker grill */}
          <g>
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="70 + i * 15"
                y1="130"
                x2="70 + i * 15"
                y2="145"
                stroke="#00FF8860"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ))}
          </g>

          {/* Side LEDs */}
          <circle cx="30" cy="70" r="3" fill="#FF6B35">
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="170" cy="70" r="3" fill="#00D4FF">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
          </circle>

          {/* Neck lights */}
          <rect x="60" y="175" width="10" height="5" rx="2" fill="#00FF88" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
          </rect>
          <rect x="85" y="175" width="30" height="5" rx="2" fill="#00FF8880" opacity="0.5" />
          <rect x="130" y="175" width="10" height="5" rx="2" fill="#00FF88" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>

      {/* Floating animation wrapper */}
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}