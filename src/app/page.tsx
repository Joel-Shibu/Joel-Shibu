"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BootSequenceLoader from "@/components/BootSequenceLoader";

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence>
        {!bootComplete && <BootSequenceLoader onComplete={() => setBootComplete(true)} />}
      </AnimatePresence>

      {/* Placeholder for 3D Canvas */}
      {bootComplete && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter text-white">
            JOEL SHIBU
          </h1>
        </div>
      )}
    </main>
  );
}