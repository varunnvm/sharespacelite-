"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        className="absolute left-1/2 top-[-30%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full bg-[rgba(145,94,255,0.14)] blur-3xl"
        animate={{
          filter: ["blur(22px)", "blur(30px)", "blur(22px)"],
          opacity: [0.55, 0.85, 0.55],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_25%,rgba(0,245,255,0.22),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(145,94,255,0.24),transparent_45%)]"
        animate={{
          opacity: [0.5, 0.9, 0.55],
          transform: ["translate3d(0,0,0) scale(1)", "translate3d(0,-1.2%,0) scale(1.02)", "translate3d(0,0,0) scale(1)"],
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scanlines */}
      <motion.div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(0,245,255,0.55), rgba(0,245,255,0) 2px, rgba(145,94,255,0.0) 6px)",
          mixBlendMode: "screen",
        }}
        animate={{
          backgroundPositionY: ["0px", "22px"],
        }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(5,8,22,0),rgba(5,8,22,0.85)_70%)]" />
    </div>
  );
}

