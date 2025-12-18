"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "التصنيع",
    description:
      "فحم مضغوط مصنع من أجود أنواع الخشب الصلب ذو محتوى كربوني عالي ووقت احتراق طويل.",
    icon: (
      <svg className="w-8 h-8 text-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    image: "/images/service-quality.jpg",
  },
  {
    id: 2,
    title: "التوريد",
    description:
      "نستورد مختلف أنواع الفحم المضغوط من أفضل الشركات العالمية بكميات كبيرة وثابتة.",
    icon: (
      <svg className="w-8 h-8 text-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    image: "/images/service-delivery.jpg",
  },
  {
    id: 3,
    title: "الجودة",
    description:
      "الكربون الثابت العالي (أكثر من 90%) يضمن حرارة قوية ومتناسقة مع رماد منخفض.",
    icon: (
      <svg className="w-8 h-8 text-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    image: "/images/service-support.jpg",
  },
  {
    id: 4,
    title: "التصدير",
    description:
      "نصدر منتجاتنا إلى جميع أنحاء العالم مع الالتزام بأعلى معايير الجودة والتغليف.",
    icon: (
      <svg className="w-8 h-8 text-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "/images/about-factory.jpg",
  },
];

const products = [
  {
    id: 1,
    title: "فحم للشواء",
    subtitle: "حرارة عالية ومستقرة",
    image: "/images/product-bbq.jpg",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "فحم للمطاعم",
    subtitle: "الخيار المفضل للمحترفين",
    image: "/images/product-restaurant.jpg",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "فحم للتصدير",
    subtitle: "شحن عالمي موثوق",
    image: "/images/product-export.jpg",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8,
    },
  },
};

const productCardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative">
      {/* Hero Image Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/hero-charcoal-1.jpg"
          alt="منتجاتنا"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-700/80 via-black-700/60 to-black-700/90" />

        {/* Animated background particles */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              animate={{ textShadow: ["0 0 20px rgba(249,115,22,0)", "0 0 40px rgba(249,115,22,0.5)", "0 0 20px rgba(249,115,22,0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              منتجاتنا
            </motion.h2>
            <motion.p
              className="text-orange text-xl md:text-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              فحم مضغوط عالي الجودة
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid Section with Vertical Text */}
      <div className="relative bg-white">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Vertical Text Sidebar - Black */}
          <div className="hidden lg:flex w-[180px] bg-black-700 items-center justify-center relative min-h-[800px]">
            <div className="vertical-text">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
                className="space-y-2"
              >
                {["تمكين", "إنتاجك", "بحلول", "متكاملة", "ومبتكرة", "وموثوقة"].map((text, i) => (
                  <motion.span
                    key={text}
                    className={`text-4xl font-bold block ${
                      i % 3 === 0 ? "text-red" : i % 3 === 1 ? "text-white" : "text-orange"
                    }`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
                    whileHover={{ scale: 1.1, textShadow: "0 0 20px currentColor" }}
                  >
                    {text}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Overlapping Image - ON TOP of cards */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 60 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="overlap-image left-full top-1/4 w-[350px] h-[450px] -translate-x-1/2 overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/about-factory.jpg"
                alt="فحم مضغوط"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-700/80 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4">
                <motion.span
                  className="bg-red text-white px-3 py-1 rounded text-sm font-bold inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  جودة عالية
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Services Cards Grid - White background */}
          <div className="flex-1 py-16 px-8 lg:px-16 lg:pr-[200px] bg-gradient-to-l from-white via-white to-gray-50">
            <div className="max-w-4xl">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="mb-12"
              >
                <motion.span
                  className="text-red text-lg font-medium mb-2 block"
                  whileHover={{ x: 10 }}
                >
                  خدماتنا
                </motion.span>
                <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-4">
                  نستورد مختلف أنواع الفحم المضغوط
                </h2>
                <motion.div
                  className="underline-orange"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>

              {/* Cards Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={cardVariants}
                    whileHover={{
                      y: -15,
                      scale: 1.03,
                      transition: { duration: 0.3 },
                    }}
                    className="glass-card rounded-xl p-6 cursor-pointer border border-gray-100 relative overflow-hidden"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-10">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="service-icon"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {service.icon}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-black-700 mb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Read More Link */}
                      <motion.a
                        href="#contact"
                        className="text-red font-medium text-sm inline-flex items-center gap-2"
                        whileHover={{ x: -10, gap: "12px" }}
                      >
                        اقرأ أكثر
                        <motion.span
                          animate={{ x: [0, -5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          ◄
                        </motion.span>
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Product Cards - SHARP EDGES, NO GAPS */}
        <div className="bg-white">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={productCardVariants}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative h-[320px] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-black-700/50 group-hover:bg-black-700/30 transition-colors duration-500"
                  whileHover={{ opacity: 0.3 }}
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    className="w-12 h-12 bg-red/30 flex items-center justify-center mb-3"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {product.icon}
                  </motion.div>
                  <motion.h4
                    className="text-white font-bold text-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    {product.title}
                  </motion.h4>
                  <p className="text-gray-200 text-sm mt-2">{product.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Strip - Red 20% */}
      <div className="bg-red py-8 overflow-hidden">
        <div className="container-custom">
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              "بدون مواد كيميائية",
              "بدون دخان",
              "بدون رائحة",
              "احتراق طويل",
              "حرارة ثابتة",
              "رماد أبيض قليل",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { delay: index * 0.1, type: "spring" },
                  },
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-2 text-white font-medium cursor-default"
              >
                <motion.span
                  className="w-5 h-5 bg-white text-red rounded-full flex items-center justify-center text-xs"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ✓
                </motion.span>
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
