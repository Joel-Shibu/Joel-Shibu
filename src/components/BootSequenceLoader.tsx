"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootSequenceLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [currentLog, setCurrentLog] = useState(0);

  const logs = [
    "INITIALIZING SYSTEM CORE...",
    "LOADING AI MODULES... [OK]",
    "ESTABLISHING NEURAL LINK... [OK]",
    "CALIBRATING SENSORS... [OK]",
    "SYSTEM ONLINE"
  ];

  useEffect(() => {
    // Log progression
    const logInterval = setInterval(() => {
      setCurrentLog((prev) => {
        if (prev < logs.length - 1) return prev + 1;
        return prev;
      });
    }, 400);

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsReady(true), 500);
          setTimeout(onComplete, 1500);
          return 100;
        }
        return p + Math.floor(Math.random() * 12) + 8;
      });
    }, 150);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: isReady ? 0 : 1,
            scale: isReady ? 1.5 : 1 
          }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          {/* Circuit Pattern Background */}
          <svg 
            viewBox="0 0 200 200" 
            className="absolute inset-0 w-full h-full opacity-10"
          >
            <path 
              d="M20 100 L60 100 L80 60 L120 140 L140 100 L180 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              className="text-primary"
            />
            <path 
              d="M40 60 L80 60 M160 140 L180 140" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              className="text-primary"
            />
          </svg>

          {/* Main Panel */}
          <div className="relative w-full max-w-md mx-4 p-8">
            {/* Animated Border */}
            <div className="absolute inset-0 border border-primary/30 rounded-lg animate-pulse" />
            
            {/* Corner Brackets */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-primary" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-primary" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-primary" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-primary" />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Loading Spinner */}
              <div className="w-16 h-16 mb-8 relative">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full" />
                <div className="absolute inset-0 border-2 border-transparent border-t-primary rounded-full animate-spin" />
                <div className="absolute inset-2 border border-primary/30 rounded-full animate-pulse" />
              </div>
              
              {/* Log Output */}
              <div className="font-mono text-primary text-xs md:text-sm mb-6 w-full text-left space-y-1">
                {logs.slice(0, currentLog + 1).map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {i === currentLog && i < logs.length - 1 ? (
                      <span className="flex items-center">
                        {log}
                        <span className="ml-2 inline-block w-2 h-3 bg-primary animate-pulse" />
                      </span>
                    ) : (
                      log
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Progress Bar */}
              <div className="w-full mb-2">
                <div className="flex justify-between text-xs font-mono text-muted mb-1">
                  <span>LOADING SYSTEM</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>

              {/* Status Text */}
              <motion.p 
                className="text-xs font-mono text-muted"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {progress < 50 ? "ASSEMBLING NEURAL NETWORK..." : 
                 progress < 80 ? "CALIBRATING AI SYSTEMS..." : 
                 "ESTABLISHING CONNECTION..."}
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}