"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const features = [
    "فحم نشارة خشب 100% طبيعي",
    "بدون مواد كيميائية أو روائح",
    "حرارة ثابتة لمدة 5-6 ساعات",
    "صديق للبيئة ومستدام",
  ];

  return (
    <section className="relative bg-black-700 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom py-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange text-lg font-medium mb-2 block">
            شاهد الفرق
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            تجربة فحم Glow Coal
          </h2>
          <div className="underline-red mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Frame Border */}
              <div className="absolute inset-0 rounded-2xl border border-orange/20 pointer-events-none z-10" />

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-orange rounded-tr-2xl pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-orange rounded-bl-2xl pointer-events-none z-10" />

              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
                onClick={togglePlay}
              >
                <source src="/videos/glowcoal-promo.mp4" type="video/mp4" />
              </video>

              {/* Play/Pause Overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-all duration-300 cursor-pointer group"
                onClick={togglePlay}
              >
                <div className={`w-16 h-16 rounded-full bg-orange/90 flex items-center justify-center transform transition-all duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100' : 'opacity-100 scale-100'}`}>
                  {isPlaying ? (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Gradient overlays for depth */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black-700/60 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 -left-4 lg:-left-8 bg-orange text-white px-6 py-3 rounded-xl shadow-lg z-20"
            >
              <span className="font-bold text-lg">صناعة سورية</span>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              اكتشف جودة الفحم الفاخر
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              شاهد كيف يوفر فحم Glow Coal تجربة شواء استثنائية. فحم نشارة الخشب
              المضغوط يقدم حرارة متساوية ومستدامة، بدون دخان أو روائح مزعجة،
              مما يجعله الخيار الأمثل للمطاعم والمنازل على حد سواء.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-orange text-center">
                اطلب الآن
              </a>
              <a href="#services" className="btn-outline-orange text-center">
                تعرف على منتجاتنا
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange/50 to-transparent" />
    </section>
  );
}
