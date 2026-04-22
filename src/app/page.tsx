"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BootSequenceLoader from "@/components/BootSequenceLoader";
import CanvasContainer from "@/components/CanvasContainer";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";

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
          {/* Hero Section - 100vh */}
          <section className="h-screen w-full flex flex-col items-center justify-center pointer-events-none">
            <motion.h1 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-9xl font-black tracking-tighter text-white"
            >
              JOEL SHIBU
            </motion.h1>
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.2, duration: 1 }}
               className="font-mono text-neural-cyan tracking-widest mt-4"
            >
              AI SYSTEMS & ROBOTICS ENGINEER
            </motion.p>
          </section>

          {/* Project 1 - 100vh spacer before it */}
          <section className="h-[150vh] w-full flex items-center justify-center px-4">
            <div className="sticky top-1/2 -translate-y-1/2">
              <ProjectCard 
                title="NeuroSight" 
                description="AI-powered medical intelligence system for healthcare data analysis. Built to process massive datasets rapidly using advanced deep learning architectures."
                tech={["Python", "PyTorch", "FastAPI", "React"]}
                repoUrl="https://github.com/MedBotix/NeuroSight"
              />
            </div>
          </section>

          {/* Project 2 */}
          <section className="h-[150vh] w-full flex items-center justify-center px-4">
            <div className="sticky top-1/2 -translate-y-1/2">
              <ProjectCard 
                title="RESP-AI" 
                description="AI respiratory health monitoring platform designed for intelligent breathing pattern analysis using sensor telemetry."
                tech={["ROS", "C++", "Python", "TensorFlow"]}
                repoUrl="https://github.com/MedTechHealth/RESP-AI"
              />
            </div>
          </section>
          
          <div className="h-screen" /> {/* Spacer for final camera zoom out */}
        </div>
      )}

      {/* Final Contact Section */}
      {bootComplete && <ContactSection />}
    </main>
  );
}