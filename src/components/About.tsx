"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative section-layered">
      {/* Split Panel Layout */}
      <div className="split-panel-reverse min-h-[700px]">
        {/* Black Panel - Main Content (65%) */}
        <div className="bg-black-700 py-20 px-8 lg:px-16 order-2 lg:order-1">
          <div className="max-w-2xl mr-auto">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange text-lg font-medium mb-2 block">
                من نحن
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                أهمية البيئة والغطاء النباتي
              </h2>
              <div className="underline-red mb-8" />

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  في عالم يتسارع فيه نبض الحياة، يبقى الغطاء النباتي عماد الصحة
                  الإنسانية، مصدراً أساسياً للهواء النقي الذي يغذي رئتينا ويحمي
                  أجسادنا. الأشجار ليست مجرد زينة خضراء؛ إنها مصانع طبيعية تحول
                  ثاني أكسيد الكربون إلى أكسجين نقي.
                </p>
                <p>
                  لكن التهديد يلوح في الأفق: قطع الأشجار وحرق الغابات لإنتاج
                  الفحم التقليدي يدمر هذا التوازن. كل شجرة تُقطع تعني فقداناً
                  لكيلومترات مكعبة من الأكسجين سنوياً.
                </p>
              </div>

              {/* Highlight Box - Card Overlay Pattern */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 p-6 border-r-4 border-red bg-black-600/50 backdrop-blur-sm rounded-lg shadow-lg"
              >
                <h4 className="text-orange font-bold text-xl mb-3">
                  فحم الخشب المضغوط: الثورة البيئية
                </h4>
                <p className="text-gray-300">
                  يُعاد تدوير نفايات الأشجار – مثل نشارة الخشب والقشور – إلى فحم
                  عالي الجودة دون الحاجة لقطع أشجار جديدة. هذه التقنية تحول
                  النفايات إلى ثروة، محافظة على الغطاء النباتي ومقللة من انبعاثات
                  الكربون بنسبة تصل إلى 80%.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Red Panel - Image Side (35%) with overlap */}
        <div className="bg-red dot-pattern py-20 px-8 lg:px-16 order-1 lg:order-2 relative overflow-visible">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange/30 rounded-bl-[100px]" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full flex flex-col justify-center relative"
          >
            {/* Visual Card - OVERLAPPING with premium shadow */}
            <motion.div
              className="relative h-[400px] lg:h-[520px] overflow-hidden rounded-2xl lg:-mr-48 z-20"
              style={{
                boxShadow: '-40px 40px 80px rgba(0, 0, 0, 0.5), -15px 15px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255,255,255,0.1)'
              }}
              whileHover={{ x: -15, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <Image
                src="/images/about-factory.jpg"
                alt="فحم مضغوط طبيعي"
                fill
                className="object-cover"
              />
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black-700 via-black-700/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-red/20 to-transparent" />

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-white"
                >
                  <div className="inline-block bg-orange px-4 py-1 rounded-full text-sm font-bold text-black-700 mb-4">
                    منتج طبيعي
                  </div>
                  <h3 className="text-3xl font-bold mb-2">فحم مضغوط طبيعي</h3>
                  <p className="text-white/80 text-lg">صديق للبيئة - جودة عالية</p>
                </motion.div>
              </div>

              {/* Floating Badge - Premium style */}
              <motion.div
                className="absolute top-6 left-6 bg-black-700/90 backdrop-blur-md text-white p-5 rounded-2xl shadow-2xl z-30 border border-orange/20"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-5xl font-bold text-orange block">100%</span>
                <span className="text-sm text-gray-300">طبيعي وصديق للبيئة</span>
              </motion.div>
            </motion.div>

            {/* Stats below image - Connected orange block style */}
            <div className="grid grid-cols-2 gap-0 mt-8 lg:-mr-32 relative">
              {/* Connecting line */}
              <div className="absolute -top-8 left-1/2 w-1 h-8 bg-gradient-to-b from-transparent to-orange" />

              <motion.div
                className="bg-orange p-6 text-center relative overflow-hidden group"
                style={{ borderRadius: '20px 0 0 20px' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-4xl font-bold text-black-700 block relative z-10">80%</span>
                <span className="text-black-700/80 text-sm relative z-10">تقليل انبعاثات الكربون</span>
              </motion.div>
              <motion.div
                className="bg-black-700 p-6 text-center relative overflow-hidden group"
                style={{ borderRadius: '0 20px 20px 0' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-4xl font-bold text-orange block relative z-10">5-6</span>
                <span className="text-gray-300 text-sm relative z-10">ساعات احتراق</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Black Section with Company Info */}
      <div className="bg-black-700 py-16 border-t-4 border-orange">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-orange mb-6">
              في سوريا، تقود شركة Glow Coal هذه الثورة
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              باستيراد فحم Sawdust Charcoal عالي الجودة، متاحاً الآن للجميع. هذا
              المنتج ليس مجرد وقود؛ إنه تجربة شواء فاخرة تلبي معايير كبار الطهاة
              والمطاعم الكبرى. خالٍ من الشوائب والدخان والرائحة، يشتعل بدون شرار
              ويحافظ على حرارة ثابتة.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
