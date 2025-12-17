"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "فحم للمطاعم",
    description:
      "مثالي للمطاعم والفنادق - حرارة مستقرة وعالية، بدون تدخين، بدون رائحة، بدون شرار. يُفضله الشيفات لنقائه.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    id: 2,
    title: "فحم للشواء",
    description:
      "رفيق الشواء الدائم - حرارة تدوم طويلاً لمدة 5-6 ساعات، احتراق نظيف، محتوى رماد منخفض أبيض ونظيف.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  },
  {
    id: 3,
    title: "فحم بالجملة",
    description:
      "أسعار مستقرة على المدى الطويل وجودة ثابتة. نوفر كميات كبيرة للموزعين والتجار بتغليف عالي الجودة.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: 4,
    title: "فحم للتصدير",
    description:
      "نمثل كبرى شركات إنتاج الفحم المضغوط العالمية. فحم صلب 100% ذو محتوى كربوني عالي.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
  },
];

const features = [
  "بدون مواد كيميائية",
  "بدون دخان",
  "بدون رائحة",
  "بدون شرار",
  "احتراق طويل",
  "حرارة ثابتة",
  "رماد أبيض قليل",
  "صديق للبيئة",
];

export default function Services() {
  return (
    <section id="services" className="relative">
      {/* Navy Section - 65% */}
      <div className="bg-navy py-20 relative">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-lg font-medium mb-2 block">
              منتجاتنا
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              نستورد مختلف أنواع الفحم المضغوط
            </h2>
            <div className="underline-gold mx-auto mb-6" />
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              من أفضل الشركات العالمية لنوفر لك تجربة شواء غير تقليدية. فحم نشارة
              خشب طبيعي مصنع من أجود أنواع الخشب القاسي.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card group relative h-[350px] rounded-xl overflow-hidden"
              >
                {/* Background Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-navy/60 transition-opacity duration-300 group-hover:bg-navy/40" />

                {/* Gold Gradient Overlay */}
                <div className="card-overlay absolute inset-0" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-xl transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Split Panel - Gold Section with overlapping effect */}
      <div className="relative">
        <div className="split-panel min-h-[400px]">
          {/* Gold Panel - 35% with dot pattern */}
          <div className="bg-gold dot-pattern py-16 px-8 lg:px-16 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                لماذا تختار فحم Glow Coal؟
              </h3>
              <div className="underline-gold bg-navy mb-8" />

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <span className="feature-check">✓</span>
                    <span className="text-navy font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="btn-navy inline-block mt-8"
              >
                اطلب الآن
              </motion.a>
            </motion.div>
          </div>

          {/* Navy Panel - Overlapping */}
          <div className="bg-navy elevated-panel py-16 px-8 lg:px-16 flex items-center lg:-mr-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-6">
                مواصفات الفحم الممتاز
              </h3>
              <div className="underline-gold mb-8" />

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">◄</span>
                  <span>الكربون الثابت العالي (أكثر من 90%) يضمن حرارة قوية ومتناسقة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">◄</span>
                  <span>وقت احتراق طويل يصل إلى 5-6 ساعات متواصلة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">◄</span>
                  <span>شكل وتعبئة موحد ضمن صناديق نظيفة عالية الجودة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">◄</span>
                  <span>رماد منخفض أبيض ونظيف - احتراق نظيف 100%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">◄</span>
                  <span>حجم موحد وجودة متناسقة في كل دفعة</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
