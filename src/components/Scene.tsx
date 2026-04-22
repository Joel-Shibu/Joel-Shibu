"use client";

import { useRef, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scene() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const groupRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (!cameraRef.current) return;

    // The scroll-linked camera dive
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth catch-up
      }
    });

    // Move camera forward on Z axis
    tl.to(cameraRef.current.position, {
      z: -50,
      ease: "none"
    });
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} fov={75} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment preset="city" />

      <group ref={groupRef}>
        {/* Placeholder Box for testing */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#8A2BE2" wireframe />
        </mesh>
        <mesh position={[0, 0, -20]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#00F0FF" wireframe />
        </mesh>
      </group>
    </>
  );
}