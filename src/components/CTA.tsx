"use client";

import { motion } from "framer-motion";
import WorldMapDots from "./WorldMapDots";

export default function CTA() {
  return (
    <section className="relative">
      {/* Orange CTA Section */}
      <div className="bg-orange py-20 relative overflow-hidden">
        {/* World Map Dots Background - Top portion */}
        <div className="absolute inset-0 text-black-700 overflow-hidden">
          <div className="absolute inset-0 -top-[0%]" style={{ height: '200%' }}>
            <WorldMapDots className="opacity-100" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black-700 mb-6">
                هل تحتاج إلى فحم عالي الجودة بأسعار مناسبة؟
              </h2>
              <p className="text-black-700/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                قم بترقية تجربة الشواء الخاصة بك - اختر فحم Glow Coal فحم نشارة
                الخشب المضغوط المصنع من أجود أنواع الخشب القاسي. أسعار مدروسة
                تناسب الجميع!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/963933292192"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black-700 text-white font-bold px-10 py-4 rounded-md inline-flex items-center justify-center gap-3 hover:bg-black-600 transition-colors duration-300 text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  تواصل عبر واتساب
                </motion.a>

                <motion.a
                  href="tel:0991230605"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-black-700 text-black-700 font-bold px-10 py-4 rounded-md inline-flex items-center justify-center gap-3 hover:bg-black-700 hover:text-white transition-colors duration-300 text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  اتصل بنا
                </motion.a>
              </div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 flex flex-wrap justify-center gap-8"
              >
                <div className="flex items-center gap-2 text-black-700/90">
                  <span className="w-8 h-8 bg-black-700 text-white rounded-full flex items-center justify-center text-sm">📦</span>
                  <span>توصيل مجاني</span>
                </div>
                <div className="flex items-center gap-2 text-black-700/90">
                  <span className="w-8 h-8 bg-black-700 text-white rounded-full flex items-center justify-center text-sm">💰</span>
                  <span>أسعار الجملة متاحة</span>
                </div>
                <div className="flex items-center gap-2 text-black-700/90">
                  <span className="w-8 h-8 bg-black-700 text-white rounded-full flex items-center justify-center text-sm">✅</span>
                  <span>جودة مضمونة</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
