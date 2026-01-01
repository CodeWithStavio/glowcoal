"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative section-layered">
      {/* Full-width Black Content Section */}
      <div className="bg-black-700 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange text-lg font-medium mb-2 block">
                {t("sectionLabel")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {t("title")}
              </h2>
              <div className="underline-red mb-8" />

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>{t("paragraph1")}</p>
                <p>{t("paragraph2")}</p>
              </div>
            </motion.div>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 border-r-4 border-red bg-black-600/50 backdrop-blur-sm rounded-lg shadow-lg"
            >
              <h4 className="text-orange font-bold text-2xl mb-4">
                {t("highlightTitle")}
              </h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t("highlightText")}
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black-700/60 p-4 rounded-lg text-center">
                  <span className="text-3xl font-bold text-orange block">{t("stat1Value")}</span>
                  <span className="text-white/80 text-sm">{t("stat1Label")}</span>
                </div>
                <div className="bg-black-700/60 p-4 rounded-lg text-center">
                  <span className="text-3xl font-bold text-orange block">{t("stat2Value")}</span>
                  <span className="text-white/80 text-sm">{t("stat2Label")}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Black Section with Company Info */}
      <div className="bg-black-700 py-16 border-t-4 border-orange">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-orange mb-6">
              {t("companyTitle")}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t("companyDescription")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
