"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    id: 1,
    number: 500,
    suffix: "+",
    label: "عميل راضي",
    icon: "👥",
  },
  {
    id: 2,
    number: 1000,
    suffix: "+",
    label: "طن إنتاج سنوي",
    icon: "📦",
  },
  {
    id: 3,
    number: 15,
    suffix: "+",
    label: "دولة نصدر إليها",
    icon: "🌍",
  },
  {
    id: 4,
    number: 10,
    suffix: "+",
    label: "سنوات خبرة",
    icon: "⭐",
  },
];

function Counter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
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
    <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-navy/90" />
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
            إنجازاتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            أرقام تتحدث عنا
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
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
              <div className="bg-navy-400/30 border border-gold/20 rounded-2xl p-8 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2">
                <span className="text-5xl mb-4 block">{stat.icon}</span>
                <Counter target={stat.number} suffix={stat.suffix} />
                <p className="text-white text-lg mt-4">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
