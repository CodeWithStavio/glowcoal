"use client";

import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="relative py-20 bg-black-700">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-orange text-lg font-medium mb-2 block">
            شاهد منتجاتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            فحم جلو كول في العمل
          </h2>
          <div className="underline-red mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-red/20">
            {/* Aspect ratio container for 16:9 video */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1558030006-450675393462?w=1280&q=80"
                preload="metadata"
              >
                <source src="/videos/glowcoal-promo.mp4" type="video/mp4" />
                {/* Fallback message */}
                <p className="text-white text-center p-8">
                  المتصفح لا يدعم تشغيل الفيديو.
                  <a
                    href="https://www.facebook.com/share/v/1D3NYRu8wn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange hover:underline mr-2"
                  >
                    شاهد على فيسبوك
                  </a>
                </p>
              </video>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red/20 via-orange/20 to-red/20 rounded-2xl blur-xl -z-10" />
          </div>

          {/* Video caption */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-gray-400 mt-6 text-lg"
          >
            اكتشف جودة فحم جلو كول المضغوط - الخيار الأمثل للشواء الاحترافي
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
