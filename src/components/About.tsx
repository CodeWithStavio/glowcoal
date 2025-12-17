"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-navy-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80"
                alt="فحم طبيعي"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-gold p-6 rounded-xl shadow-2xl"
            >
              <div className="text-navy text-center">
                <span className="text-4xl font-bold block">100%</span>
                <span className="text-sm font-medium">طبيعي</span>
              </div>
            </motion.div>

            {/* Border Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold text-lg font-medium mb-2 block">
              من نحن
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              جلو كول
              <span className="text-gold"> للفحم المضغوط</span>
            </h2>
            <div className="w-24 h-1 bg-gold mb-8" />

            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                نحن شركة رائدة في مجال إنتاج وتصدير الفحم المضغوط عالي الجودة.
                نستخدم أحدث التقنيات وأفضل المواد الخام لتقديم منتج يلبي أعلى
                معايير الجودة العالمية.
              </p>
              <p>
                فحمنا مصنوع من نشارة الخشب الطبيعية 100% بدون أي إضافات كيميائية،
                مما يجعله الخيار الأمثل للمطاعم والفنادق وعشاق الشواء.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { icon: "🌿", title: "طبيعي 100%", desc: "بدون مواد كيميائية" },
                { icon: "🔥", title: "حرارة عالية", desc: "احتراق متساوي" },
                { icon: "⏱️", title: "مدة طويلة", desc: "احتراق يصل لـ 4 ساعات" },
                { icon: "🌍", title: "صديق للبيئة", desc: "رماد قليل وأبيض" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h4 className="text-white font-bold">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-10"
            >
              <a href="#contact" className="btn-gold inline-block">
                تعرف علينا أكثر
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
