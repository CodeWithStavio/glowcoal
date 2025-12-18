"use client";

import { motion } from "framer-motion";

const videoFeatures = [
  {
    icon: "🔥",
    title: "احتراق طويل",
    description: "حتى 6 ساعات متواصلة",
  },
  {
    icon: "💨",
    title: "بدون دخان",
    description: "نظيف وصحي للبيئة",
  },
  {
    icon: "⚡",
    title: "حرارة عالية",
    description: "مثالي للشواء الاحترافي",
  },
];

export default function VideoShowcase() {
  return (
    <section className="relative overflow-hidden">
      {/* Split Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Video Panel - Left */}
        <div className="relative bg-black-700 p-8 lg:p-12 flex items-center justify-center order-2 lg:order-1">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-xl"
          >
            {/* Video Frame */}
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red via-orange to-red rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />

              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-orange/30 shadow-2xl">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-orange rounded-tl-xl z-10" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-orange rounded-tr-xl z-10" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-orange rounded-bl-xl z-10" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-orange rounded-br-xl z-10" />

                {/* Aspect Ratio Container */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <video
                    className="absolute inset-0 w-full h-full object-cover bg-black-600"
                    controls
                    poster="https://images.unsplash.com/photo-1558030006-450675393462?w=1280&q=80"
                    preload="metadata"
                    playsInline
                  >
                    <source src="/videos/glowcoal-promo.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black-700/80 to-transparent pointer-events-none" />
              </div>

              {/* Play indicator badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                شاهد الفيديو
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Content Panel - Right */}
        <div className="relative bg-gradient-to-br from-red to-red/90 p-8 lg:p-12 flex items-center order-1 lg:order-2">
          {/* Decorative circles */}
          <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-48 h-48 border border-white/10 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl" />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full"
          >
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              شاهد منتجاتنا
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              فحم جلو كول
              <br />
              <span className="text-orange-200">في العمل</span>
            </h2>

            <p className="text-white/80 text-lg mb-8 max-w-md">
              شاهد كيف يتميز فحم جلو كول المضغوط بجودته العالية وأدائه الاستثنائي في الشواء الاحترافي
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {videoFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-colors"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="text-white font-bold">{feature.title}</h4>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-white text-red font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <span>اطلب الآن</span>
              <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
