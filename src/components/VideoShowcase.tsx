"use client";

import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="relative py-24 lg:py-32 bg-black-700 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black-700 via-black-600/50 to-black-700" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4"
          >
            شاهد الجودة بنفسك
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            فحم <span className="text-orange">جلو كول</span> في العمل
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            اكتشف سر التميز في كل قطعة فحم - جودة استثنائية تتحدث عن نفسها
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border border-orange/20 rounded-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-red/20 rounded-2xl" />

          {/* Main Video Card */}
          <div className="relative group">
            {/* Ambient glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange/20 via-red/20 to-orange/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Video Frame */}
            <div className="relative bg-gradient-to-br from-black-600 to-black-700 rounded-2xl p-2 shadow-2xl">
              {/* Inner border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange/10 via-transparent to-red/10 pointer-events-none" />

              {/* Video wrapper */}
              <div className="relative rounded-xl overflow-hidden bg-black">
                {/* Aspect ratio container */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1558030006-450675393462?w=1920&q=80"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/glowcoal-promo.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {[
              { icon: "🔥", label: "احتراق 6 ساعات" },
              { icon: "✨", label: "بدون دخان" },
              { icon: "💎", label: "جودة فائقة" },
              { icon: "🌱", label: "صديق للبيئة" },
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 bg-black-600/80 backdrop-blur-sm border border-white/5 px-5 py-3 rounded-full"
              >
                <span className="text-lg">{feature.icon}</span>
                <span className="text-white/90 text-sm font-medium">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange to-red text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange/20 hover:shadow-orange/40 transition-shadow"
          >
            <span>اطلب عينة مجانية</span>
            <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          <p className="text-gray-500 text-sm mt-4">
            توصيل مجاني للطلبات الكبيرة
          </p>
        </motion.div>
      </div>
    </section>
  );
}
