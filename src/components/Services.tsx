"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "فحم للمطاعم",
    description:
      "فحم مضغوط عالي الجودة مصمم خصيصاً للمطاعم والفنادق. يوفر حرارة ثابتة واحتراق طويل لضمان أفضل نتائج الطهي.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    icon: "🍽️",
  },
  {
    id: 2,
    title: "فحم للشواء",
    description:
      "الخيار المثالي لعشاق الشواء. فحم نظيف بدون دخان أو رائحة، يمنح طعامك نكهة مميزة وطبيعية.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    icon: "🔥",
  },
  {
    id: 3,
    title: "فحم بالجملة",
    description:
      "نوفر كميات كبيرة من الفحم المضغوط للموزعين والتجار بأسعار تنافسية وجودة ثابتة.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    icon: "📦",
  },
  {
    id: 4,
    title: "فحم للتصدير",
    description:
      "نصدر منتجاتنا إلى جميع أنحاء العالم مع الالتزام بأعلى معايير الجودة والتغليف.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    icon: "🌍",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #f7be79 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-lg font-medium mb-2 block">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            منتجاتنا المميزة
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            نقدم مجموعة متنوعة من منتجات الفحم المضغوط عالي الجودة لتلبية
            احتياجاتكم المختلفة
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="service-card group relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-navy/60 transition-opacity duration-300 group-hover:bg-navy/40" />

              {/* Gold Gradient Overlay */}
              <div className="card-overlay absolute inset-0" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {[
            "بدون مواد كيميائية",
            "بدون دخان",
            "بدون رائحة",
            "احتراق طويل",
            "حرارة ثابتة",
            "رماد أبيض قليل",
            "صديق للبيئة",
          ].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-navy-400/30 border border-gold/20 rounded-lg p-4 text-center hover:border-gold/50 transition-colors duration-300"
            >
              <span className="text-gold text-2xl mb-2 block">✓</span>
              <span className="text-white text-sm">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
