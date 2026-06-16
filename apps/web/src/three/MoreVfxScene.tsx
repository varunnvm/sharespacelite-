"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function AiOrb() {
  const orbRef = useRef<THREE.Mesh | null>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!orbRef.current) return;
    orbRef.current.position.y = Math.sin(t * 1.1) * 0.15;
    orbRef.current.rotation.y += 0.008;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.25}>
      <mesh ref={orbRef}>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshStandardMaterial
          color="#915EFF"
          emissive="#00F5FF"
          emissiveIntensity={1.1}
          roughness={0.25}
          metalness={0.18}
        />
      </mesh>

      {/* Neon rim */}
      <mesh>
        <sphereGeometry args={[1.15, 64, 64]} />
        <meshBasicMaterial
          color="#00F5FF"
          transparent
          opacity={0.10}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

function MarketplaceShards() {
  const shards = useMemo(() => {
    const arr: Array<{
      pos: [number, number, number];
      rot: [number, number, number];
      scale: number;
      color: string;
    }> = [];

    for (let i = 0; i < 26; i++) {
      const angle = (i / 26) * Math.PI * 2;
      const radius = 5.2 + Math.random() * 2.2;
      arr.push({
        pos: [Math.cos(angle) * radius, (Math.random() - 0.5) * 2.2, Math.sin(angle) * radius],
        rot: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        scale: 0.22 + Math.random() * 0.45,
        color: i % 2 === 0 ? "#00F5FF" : "#915EFF",
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // subtle overall drift handled by parent group
    void t;
  });

  return (
    <group>
      {shards.map((s, idx) => (
        <mesh
          key={idx}
          position={s.pos}
          rotation={s.rot}
          scale={s.scale}
        >
          <boxGeometry args={[0.8, 0.25, 0.45]} />
          <meshStandardMaterial
            color={s.color}
            emissive={s.color}
            emissiveIntensity={0.28}
            metalness={0.25}
            roughness={0.5}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
    </group>
  );
}

function AnimatedStars() {
  return (
    <Sparkles
      count={220}
      speed={1.2}
      size={2}
      opacity={0.55}
      color="#00F5FF"
      scale={[10, 10, 10]}
      position={[0, 1, -4]}
    />
  );
}

export default function MoreVfxScene() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="h-full w-full"
    >
      <Canvas
        camera={{ position: [0, 0.8, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.22} />
        <directionalLight intensity={1.05} position={[3.5, 4.2, 2.4]} />
        <Environment preset="night" />

        {/* Hologram particles */}
        <AnimatedStars />

        {/* Core orb */}
        <AiOrb />

        {/* Floating “objects” */}
        <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.1}>
          <MarketplaceShards />
        </Float>

        {/* Controls */}
        <OrbitControls enableZoom={false} enablePan={false} />

        {/* Fog to blend */}
        <fog attach="fog" args={[new THREE.Color("#050816"), 5.2, 18]} />
      </Canvas>
    </motion.div>
  );
}

