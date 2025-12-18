"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import to avoid SSR issues with react-simple-maps
const DottedWorldMap = dynamic(() => import("./DottedWorldMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const stats = [
  {
    id: 1,
    number: 500,
    suffix: "+",
    label: "عميل راضي",
  },
  {
    id: 2,
    number: 1000,
    suffix: "+",
    label: "طن إنتاج سنوي",
  },
  {
    id: 3,
    number: 15,
    suffix: "+",
    label: "دولة نصدر إليها",
  },
  {
    id: 4,
    number: 10,
    suffix: "+",
    label: "سنوات خبرة",
  },
];

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

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-orange">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative">
      {/* Stats Counter Section - with background image */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/stats-bg.jpg"
          alt="خلفية"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black-700/85" />

        {/* Animated background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-orange text-lg font-medium mb-2 block">
              إنجازاتنا
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              أرقام تتحدث عنا
            </h2>
            <div className="underline-red mx-auto" />
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-black-600/40 border border-red/20 rounded-xl p-8 hover:border-red/50 transition-all duration-300 hover:-translate-y-2">
                  <Counter target={stat.number} suffix={stat.suffix} />
                  <p className="text-white text-lg mt-4">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section - Split Panel with Overlapping */}
      <div className="split-panel relative">
        {/* Orange Panel with benefits */}
        <div className="bg-orange py-16 px-8 lg:px-16 relative overflow-hidden">
          {/* World Map Background */}
          <div className="absolute inset-0 opacity-60">
            <DottedWorldMap />
          </div>
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
    </section>
  );
}
