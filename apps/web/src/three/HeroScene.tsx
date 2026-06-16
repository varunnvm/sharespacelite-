"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";

function Orb() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
      <Sphere args={[1.15, 64, 64]}>
        <meshStandardMaterial
          color="#915EFF"
          emissive="#00F5FF"
          emissiveIntensity={0.8}
          roughness={0.35}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-full w-full"
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[3, 4, 2]} intensity={1.2} />
        <Environment preset="night" />
        <Orb />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </motion.div>
  );
}

