"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function StatsBenefits() {
  const t = useTranslations("stats");

  const benefits = [
    {
      title: t("benefits.health.title"),
      description: t("benefits.health.description"),
    },
    {
      title: t("benefits.energy.title"),
      description: t("benefits.energy.description"),
    },
    {
      title: t("benefits.economy.title"),
      description: t("benefits.economy.description"),
    },
    {
      title: t("benefits.quality.title"),
      description: t("benefits.quality.description"),
    },
  ];

  return (
    <div className="split-panel relative">
      {/* Orange Panel with benefits - transparent to show wrapper's map */}
      <div className="py-16 px-8 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {t("title")}
          </h3>
          <div className="underline-orange mb-8" />

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <motion.span
                  className="inline-flex items-center justify-center w-7 h-7 bg-orange text-white rounded-full text-sm font-bold flex-shrink-0 mt-1 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  ✓
                </motion.span>
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-orange transition-colors">{benefit.title}</h4>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Black Panel - Overlapping with premium shadow */}
      <motion.div
        className="bg-black-700 py-16 px-8 lg:px-16 lg:-mr-24 relative z-10 flex items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          boxShadow: '-40px 0 80px rgba(0, 0, 0, 0.4), -10px 0 30px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="text-center lg:text-right">
          <h3 className="text-2xl md:text-3xl font-bold text-red mb-6">
            {t("panelTitle")}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {t("panelDescription1")}
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {t("panelDescription2")}
          </p>

          <motion.a
            href="#contact"
            className="btn-orange inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("orderNow")}
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
