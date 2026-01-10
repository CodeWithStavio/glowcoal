"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function HeroSlider() {
  return (
    <section id="home" className="relative h-screen max-h-[900px] min-h-[600px] bg-black-700 overflow-hidden">
      {/* Arch gradient from bottom reaching up to logo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] rounded-t-full blur-[80px]"
          style={{
            background: 'radial-gradient(ellipse at bottom, rgba(220, 38, 38, 0.2) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Content - Logo Only */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Logo className="h-72 md:h-96 lg:h-[32rem] w-auto mx-auto" />
        </motion.div>
      </div>

      {/* Depth strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="depth-strip"></div>
      </div>
    </section>
  );
}
