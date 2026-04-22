"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BootSequenceLoader from "@/components/BootSequenceLoader";
import CanvasContainer from "@/components/CanvasContainer";

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <main className="relative bg-background min-h-screen">
      <AnimatePresence>
        {!bootComplete && <BootSequenceLoader onComplete={() => setBootComplete(true)} />}
      </AnimatePresence>

      {/* Fixed 3D Background */}
      {bootComplete && <CanvasContainer />}

      {/* Scrollable Overlay Area */}
      {bootComplete && (
        <div id="scroll-container" className="relative z-10 w-full h-[500vh]">
          {/* Hero Section */}
          <section className="h-screen w-full flex items-center justify-center pointer-events-none">
            <motion.h1 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-9xl font-black tracking-tighter text-white mix-blend-difference"
            >
              JOEL SHIBU
            </motion.h1>
          </section>

          {/* We will map HTML overlays to scroll positions later */}
        </div>
      )}
    </main>
  );
}