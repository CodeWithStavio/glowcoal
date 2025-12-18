"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/images/hero-charcoal-1.jpg",
    title: "فحم نشارة خشب طبيعي 100%",
    subtitle: "بدون مواد كيميائية، بدون دخان، بدون رائحة",
  },
  {
    id: 2,
    image: "/images/hero-charcoal-2.jpg",
    title: "تجربة شواء غير تقليدية",
    subtitle: "حرارة مستقرة وعالية لمدة 5-6 ساعات",
  },
  {
    id: 3,
    image: "/images/hero-charcoal-3.jpg",
    title: "الثورة البيئية والاقتصادية",
    subtitle: "فحم صديق للبيئة مصنوع من نفايات الخشب المُعاد تدويرها",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="home" className="relative hero-constrained h-screen max-h-[900px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image - Constrained */}
              <div className="hero-image-container">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Dark Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black-700/60 via-black-700/40 to-black-700/80" />

              {/* Subtle ambient glow */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-red-600/8 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-orange-600/8 rounded-full blur-[80px]" />
              </div>

              {/* Content - Premium Card Overlay */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="container-custom">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="hero-card max-w-3xl mx-auto text-center"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-xl md:text-2xl text-orange mb-8"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination absolute bottom-20 left-0 right-0 flex justify-center gap-3 z-10" />

      {/* Depth strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="depth-strip"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-orange/60 rounded-full flex justify-center backdrop-blur-sm"
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
