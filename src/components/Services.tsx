"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "التصنيع",
    description:
      "فحم مضغوط مصنع من أجود أنواع الخشب الصلب ذو محتوى كربوني عالي ووقت احتراق طويل.",
    icon: (
      <svg
        className="w-8 h-8 text-gold transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "التدريب",
    description:
      "برامج تدريب احترافية لتأهيل فريقك على تشغيل وصيانة الآلات بكفاءة، بإشراف خبراء مختصين.",
    icon: (
      <svg
        className="w-8 h-8 text-gold transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "الصيانة",
    description:
      "خدمات صيانة دورية وطارئة لضمان عمل خطوط الإنتاج بكفاءة عالية دون انقطاع، مع دعم فني سريع.",
    icon: (
      <svg
        className="w-8 h-8 text-gold transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "التوريد",
    description:
      "نستورد مختلف أنواع الفحم المضغوط من أفضل الشركات العالمية بكميات كبيرة وثابتة.",
    icon: (
      <svg
        className="w-8 h-8 text-gold transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "التصدير",
    description:
      "نصدر منتجاتنا إلى جميع أنحاء العالم مع الالتزام بأعلى معايير الجودة والتغليف.",
    icon: (
      <svg
        className="w-8 h-8 text-gold transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "الجودة",
    description:
      "الكربون الثابت العالي (أكثر من 90%) يضمن حرارة قوية ومتناسقة مع رماد منخفض.",
    icon: (
      <svg
        className="w-8 h-8 text-gold transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      {/* Hero Image Section - Navy 65% */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt="فحم مضغوط"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Services Grid Section with Vertical Text */}
      <div className="relative bg-white">
        {/* Main Content */}
        <div className="flex">
          {/* Vertical Text Sidebar - Navy */}
          <div className="hidden lg:flex w-[200px] bg-navy items-center justify-center relative">
            <div className="vertical-text">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
              >
                <span className="text-5xl font-bold text-gold block">تمكين</span>
                <span className="text-5xl font-bold text-white block">إنتاجك</span>
                <span className="text-5xl font-bold text-gold block">بحلول</span>
                <span className="text-5xl font-bold text-white block">متكاملة</span>
                <span className="text-5xl font-bold text-gold block">ومبتكرة</span>
                <span className="text-5xl font-bold text-white block">وموثوقة</span>
              </motion.div>
            </div>

            {/* Overlapping Image */}
            <div className="absolute left-0 top-1/4 w-[300px] h-[400px] -translate-x-1/2 z-20">
              <Image
                src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80"
                alt="فحم"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Services Cards Grid - White 15% + Gold accents 20% */}
          <div className="flex-1 py-16 px-8 lg:px-16 bg-gradient-to-l from-white via-white to-gray-50">
            <div className="max-w-5xl">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <span className="text-gold text-lg font-medium mb-2 block">
                  خدماتنا
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  نستورد مختلف أنواع الفحم المضغوط
                </h2>
                <div className="underline-gold" />
              </motion.div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 cursor-pointer border border-gray-100"
                  >
                    {/* Icon */}
                    <div className="service-icon bg-gold/10">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-navy mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Read More Link */}
                    <a
                      href="#contact"
                      className="text-gold font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      اقرأ أكثر
                      <span>◄</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Additional Cards overlapping */}
        <div className="bg-white pb-16 px-8 lg:px-16">
          <div className="max-w-5xl mr-auto lg:mr-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8">
              {/* Feature Cards with background images */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative h-[250px] rounded-xl overflow-hidden group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
                  alt="شواء"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/70 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="service-icon bg-gold/20 w-12 h-12">
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold text-lg mt-3">فحم للشواء</h4>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[250px] rounded-xl overflow-hidden group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"
                  alt="مطاعم"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/70 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="service-icon bg-gold/20 w-12 h-12">
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold text-lg mt-3">فحم للمطاعم</h4>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative h-[250px] rounded-xl overflow-hidden group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                  alt="تصدير"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/70 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="service-icon bg-gold/20 w-12 h-12">
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold text-lg mt-3">فحم للتصدير</h4>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Strip - Gold 20% */}
      <div className="bg-gold py-8">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              "بدون مواد كيميائية",
              "بدون دخان",
              "بدون رائحة",
              "احتراق طويل",
              "حرارة ثابتة",
              "رماد أبيض قليل",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 text-navy font-medium"
              >
                <span className="w-5 h-5 bg-navy text-gold rounded-full flex items-center justify-center text-xs">
                  ✓
                </span>
                {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
