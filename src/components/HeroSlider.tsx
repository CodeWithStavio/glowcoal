"use client";

import { useEffect, useState } from "react";
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
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    title: "فحم نشارة خشب طبيعي 100%",
    subtitle: "جودة عالية للشواء والمطاعم",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80",
    title: "بدون دخان، بدون رائحة",
    subtitle: "تجربة شواء نظيفة ومميزة",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1920&q=80",
    title: "احتراق طويل وحرارة ثابتة",
    subtitle: "الخيار الأمثل للمحترفين",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="home" className="relative h-screen w-full">
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
              {/* Background Image with Zoom Effect */}
              <div
                className={`absolute inset-0 ${
                  activeIndex === index ? "animate-slow-zoom" : ""
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-navy/70" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container-custom">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-content-box max-w-2xl mx-auto text-center"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-xl md:text-2xl text-gold mb-8"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                      <a href="#services" className="btn-gold">
                        اكتشف منتجاتنا
                      </a>
                      <a href="#contact" className="btn-outline">
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
      <div className="custom-pagination absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
