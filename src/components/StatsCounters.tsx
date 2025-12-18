"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

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

export default function StatsCounters() {
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
    </section>
  );
}
