"use client";

import { useRef, useMemo } from "react";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NeuralBrain from "./NeuralBrain";

/** Registers GSAP plugins for scroll-triggered animations. */
gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * 3D Scene component with scroll-linked camera animation.
 * 
 * Animates the camera along the Z-axis as the user scrolls,
 * creating the "dive through neural tunnel" effect.
 */
export default function Scene() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useGSAP(() => {
    if (!cameraRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Fly through the Z axis
    tl.to(cameraRef.current.position, {
      z: -100, // Travel deep into the tunnel
      ease: "none"
    });
  });

  // Tunnel rings - memoized to prevent recreation on every render
  const rings = useMemo(() => Array.from({ length: 20 }).map((_, i) => (
    <mesh key={i} position={[0, 0, -i * 5 - 10]}>
      <torusGeometry args={[8, 0.05, 16, 100]} />
      <meshBasicMaterial color="#8A2BE2" transparent opacity={1 - (i * 0.05)} wireframe />
    </mesh>
  )), []);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} fov={75} />
      <ambientLight intensity={0.2} />
      <Environment preset="city" />

      <group position={[0, 0, 0]}>
        <NeuralBrain count={3000} />
      </group>
      
      {/* The Tunnel */}
      {rings}
    </>
  );
}