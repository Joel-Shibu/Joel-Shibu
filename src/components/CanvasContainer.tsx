"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function CanvasContainer() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}