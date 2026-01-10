"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Logo from "./Logo";

export default function HeroSlider() {
  const t = useTranslations("hero");

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

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="-mb-12 md:-mb-16 lg:-mb-20"
            >
              <Logo className="h-72 md:h-96 lg:h-[32rem] w-auto mx-auto" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-0"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-orange mt-4 mb-6 max-w-2xl mx-auto"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#services" className="btn-red">
                {t("discoverProducts")}
              </a>
              <a href="#contact" className="btn-outline-orange">
                {t("contactUs")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Depth strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="depth-strip"></div>
      </div>

    </section>
  );
}
