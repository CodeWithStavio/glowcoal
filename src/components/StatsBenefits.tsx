"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "حماية الصحة",
    description: "يقلل التلوث الهوائي، مما يدعم صحة مستدامة ويخفض التكاليف الطبية.",
  },
  {
    title: "توفير طاقة فعال",
    description: "احتراق طويل الأمد يعني استهلاكاً أقل وتوفيراً مالياً يصل إلى 30-40%.",
  },
  {
    title: "اقتصاد أخضر",
    description: "يعيد تدوير النفايات، يخلق فرص عمل، ويحافظ على موارد الغابات.",
  },
  {
    title: "جودة فائقة",
    description: "يُفضله الشيفات لنقائه، مما يرفع قيمة الوجبات في المطاعم والمنازل.",
  },
];

export default function StatsBenefits() {
  return (
    <div className="split-panel relative">
      {/* Orange Panel with benefits - transparent to show wrapper's map */}
      <div className="py-16 px-8 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black-700 mb-8">
            فوائد اقتصادية وبيئية لا تُقاوم
          </h3>
          <div className="underline-black mb-8" />

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <motion.span
                  className="inline-flex items-center justify-center w-7 h-7 bg-black-700 text-white rounded-full text-sm font-bold flex-shrink-0 mt-1 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  ✓
                </motion.span>
                <div>
                  <h4 className="text-black-700 font-bold text-lg group-hover:text-black-600 transition-colors">{benefit.title}</h4>
                  <p className="text-black-700/70">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Black Panel - Overlapping with premium shadow */}
      <motion.div
        className="bg-black-700 py-16 px-8 lg:px-16 lg:-mr-24 relative z-10 flex items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          boxShadow: '-40px 0 80px rgba(0, 0, 0, 0.4), -10px 0 30px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="text-center lg:text-right">
          <h3 className="text-2xl md:text-3xl font-bold text-red mb-6">
            الخيار الأمثل في سوريا
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            بات Glow Coal الخيار الأمثل في سوريا لمن يهتم بالبيئة والجودة،
            تحولاً من الاستهلاك التقليدي إلى نموذج اقتصادي بيئي مربح.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            سواء كنت تستضيف حفلة شواء في الحديقة، أو تدير مطعمًا، نوفر لك أداءً
            نظيفًا دون تنازل عن الطعم. طلبيات بالجملة مرحباً بكم - توصيل مجاني!
          </p>

          <motion.a
            href="#contact"
            className="btn-orange inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            اطلب الآن
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
