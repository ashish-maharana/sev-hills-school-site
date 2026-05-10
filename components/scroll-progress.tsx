"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 20, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[70] h-1.5 w-full origin-left bg-gradient-to-r from-[#1a6b3a] via-[#f59e0b] to-[#38bdf8]"
      style={{ scaleX }}
    />
  );
}
