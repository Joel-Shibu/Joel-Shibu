"use client";

import { useState, useEffect } from "react";
import { registerGSAP } from "@/lib/animations/gsap-setup";
import HeroSection from "@/components/sections/HeroSection";
import MissionSelect from "@/components/sections/MissionSelect";
import MissionBriefing from "@/components/sections/MissionBriefing";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import AchievementsSection from "@/components/sections/AchievementsSection";

export default function Home() {
  const [selectedMission, setSelectedMission] = useState<string | null>(null);

  useEffect(() => {
    registerGSAP();
  }, []);

  const handleMissionSelect = (missionId: string) => {
    setSelectedMission(missionId);
  };

  const handleBack = () => {
    setSelectedMission(null);
    setTimeout(() => {
      const el = document.getElementById("missions");
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    }, 100);
  };

  return (
    <main className="relative bg-background min-h-screen selection:bg-primary/30 selection:text-primary">
      {selectedMission ? (
        <MissionBriefing missionId={selectedMission} onBack={handleBack} />
      ) : (
        <>
          <HeroSection onMissionSelect={handleMissionSelect} />
          <MissionSelect onMissionSelect={handleMissionSelect} />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
          <AchievementsSection />
        </>
      )}
    </main>
  );
}