"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative">
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

              {/* Highlight Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 p-6 border-r-4 border-red bg-black-600/30"
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
        <div className="bg-red dot-pattern py-20 px-8 lg:px-16 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full flex flex-col justify-center"
          >
            {/* Visual Card - OVERLAPPING ON TOP */}
            <div className="overlap-image relative h-[400px] lg:h-[500px] overflow-hidden shadow-2xl lg:-mr-32">
              <Image
                src="/images/about-factory.jpg"
                alt="فحم مضغوط طبيعي"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-700/80 via-black-700/20 to-transparent" />

              <div className="absolute inset-0 flex items-end justify-center pb-16">
                <div className="text-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-4">فحم مضغوط طبيعي</h3>
                  <p className="text-white/80 text-lg">صديق للبيئة - جودة عالية</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-black-700 text-white p-4 rounded-lg">
                <span className="text-3xl font-bold text-orange block">100%</span>
                <span className="text-sm">طبيعي وصديق للبيئة</span>
              </div>
            </div>

            {/* Stats below image */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-black-700/20 p-4 rounded-lg text-center">
                <span className="text-3xl font-bold text-white block">80%</span>
                <span className="text-white/80 text-sm">تقليل انبعاثات الكربون</span>
              </div>
              <div className="bg-black-700/20 p-4 rounded-lg text-center">
                <span className="text-3xl font-bold text-white block">5-6</span>
                <span className="text-white/80 text-sm">ساعات احتراق</span>
              </div>
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
