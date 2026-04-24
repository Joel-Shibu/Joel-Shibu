/**
 * 3D Neural Brain Particle System
 * 
 * Renders thousands of glowing particles in a spherical formation
 * that rotate over time, creating a living neural network effect.
 * 
 * @param count - Number of particles to render (default: 2000)
 */
"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NeuralBrain({ count = 2000 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  // Generate random positions in a sphere-like shape
  const [particles] = useState(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      temp[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      temp[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      temp[i * 3 + 2] = r * Math.cos(phi);
    }
    return temp;
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#00F0FF" 
        transparent 
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}