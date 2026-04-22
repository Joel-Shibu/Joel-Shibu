"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logs = [
  "INITIALIZING SYSTEM CORE...",
  "LOADING AI MODULES... [OK]",
  "ESTABLISHING ROS CONNECTION... [OK]",
  "MOUNTING NEURAL NETWORK... [OK]",
  "CALIBRATING SENSORS... [OK]",
  "SYSTEM ONLINE."
];

export default function BootSequenceLoader({ onComplete }: { onComplete: () => void }) {
  const [currentLog, setCurrentLog] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setCurrentLog((prev) => {
        if (prev < logs.length - 1) return prev + 1;
        return prev;
      });
    }, 300);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500); // Small delay before hiding
          return 100;
        }
        return prev + 5; // Fast progression
      });
    }, 100);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col justify-end p-8 bg-black text-neural-cyan font-mono text-sm sm:text-base pointer-events-none"
    >
      <div className="flex flex-col gap-1 opacity-80">
        {logs.slice(0, currentLog + 1).map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4">
        <div className="w-full max-w-md h-1 bg-white/10 overflow-hidden">
          <div 
            className="h-full bg-neural-cyan transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-white">{progress}%</span>
      </div>
    </motion.div>
  );
}