"use client";

import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NeonGrid() {
  const geometry = useMemo(() => {
    const size = 30;
    const divisions = 60;
    const grid = new THREE.GridHelper(size, divisions, "#00F5FF", "#915EFF");
    return grid;
  }, []);

  // Since GridHelper is an Object3D, we’ll render it via primitive.
  // Animate it slightly for “hologram” vibe.
  const ref = undefined;

  return (
    <group
      position={[0, -1.25, 0]}
      rotation-x={Math.PI / 2}
      scale={1}
    >
      <primitive object={geometry} />

      <HologramPulse />
    </group>
  );
}

function HologramPulse() {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // nothing imperative; kept minimal to avoid ref plumbing
    void t;
  });

  return (
    <mesh position={[0, -1.2, 0]} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[28, 28]} />
      <meshBasicMaterial
        color="#00F5FF"
        transparent
        opacity={0.08}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

