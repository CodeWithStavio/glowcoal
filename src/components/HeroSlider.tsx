"use client";

import { motion } from "framer-motion";

export default function HeroSlider() {
  return (
    <section id="home" className="relative h-screen max-h-[900px] min-h-[600px] bg-black-700 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            {/* Logo placeholder for future */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              {/* Future logo will go here */}
              <span className="text-6xl md:text-8xl font-bold">
                <span className="text-orange">Glow</span>
                <span className="text-white">Coal</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              الثورة البيئية والاقتصادية
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-orange mb-12 max-w-2xl mx-auto"
            >
              فحم صديق للبيئة مصنوع من نفايات الخشب المُعاد تدويرها
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#services" className="btn-red">
                اكتشف منتجاتنا
              </a>
              <a href="#contact" className="btn-outline-orange">
                تواصل معنا
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Depth strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="depth-strip"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-orange/60 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-orange rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
