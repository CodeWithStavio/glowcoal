"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative section-layered">
      {/* Full-width Black Content Section */}
      <div className="bg-black-700 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
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
            </motion.div>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 border-r-4 border-red bg-black-600/50 backdrop-blur-sm rounded-lg shadow-lg"
            >
              <h4 className="text-orange font-bold text-2xl mb-4">
                فحم الخشب المضغوط: الثورة البيئية
              </h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                يُعاد تدوير نفايات الأشجار – مثل نشارة الخشب والقشور – إلى فحم
                عالي الجودة دون الحاجة لقطع أشجار جديدة. هذه التقنية تحول
                النفايات إلى ثروة، محافظة على الغطاء النباتي ومقللة من انبعاثات
                الكربون بنسبة تصل إلى 80%.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black-700/60 p-4 rounded-lg text-center">
                  <span className="text-3xl font-bold text-orange block">80%</span>
                  <span className="text-white/80 text-sm">تقليل انبعاثات الكربون</span>
                </div>
                <div className="bg-black-700/60 p-4 rounded-lg text-center">
                  <span className="text-3xl font-bold text-orange block">100%</span>
                  <span className="text-white/80 text-sm">طبيعي وصديق للبيئة</span>
                </div>
              </div>
            </motion.div>
          </div>
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
