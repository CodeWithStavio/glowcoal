"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const quickLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#services", label: "منتجاتنا" },
  { href: "#about", label: "من نحن" },
  { href: "#stats", label: "إنجازاتنا" },
];

const products = [
  "فحم للمطاعم",
  "فحم للشواء",
  "فحم بالجملة",
  "فحم للتصدير",
];

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      {/* Main Footer - Split Panel Layout like Diamond Machines */}
      <div className="footer-split min-h-[500px]">
        {/* Black Panel - Company Info (Right side in RTL) */}
        <div className="bg-black-700 elevated-panel py-16 px-8 lg:px-12 flex items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            {/* Logo */}
            <Link href="/" className="inline-block mb-8">
              <span className="text-4xl font-bold">
                <span className="text-orange">جلو</span>
                <span className="text-white">كول</span>
              </span>
            </Link>

            <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-md">
              نحن موردين فحم مضغوط عالي الجودة من كبرى شركات الإنتاج العالمية
              بكميات كبيرة وثابتة. فحم مصنع من أجود أنواع الخشب الصلب ذو محتوى
              كربوني عالي ووقت احتراق طويل.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:0991230605"
                className="flex items-center gap-4 text-white hover:text-orange transition-colors group"
              >
                <span className="w-10 h-10 bg-red/20 rounded-full flex items-center justify-center group-hover:bg-red transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                </span>
                <span className="text-lg">0991230605</span>
              </a>

              <a
                href="https://wa.me/963933292192"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white hover:text-orange transition-colors group"
              >
                <span className="w-10 h-10 bg-red/20 rounded-full flex items-center justify-center group-hover:bg-red transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
                <span className="text-lg">+963 933 292 192</span>
              </a>

              <a
                href="mailto:info@glowcoal.com"
                className="flex items-center gap-4 text-white hover:text-orange transition-colors group"
              >
                <span className="w-10 h-10 bg-red/20 rounded-full flex items-center justify-center group-hover:bg-red transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className="text-lg">info@glowcoal.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Orange Panel - Links (Left side in RTL) */}
        <div className="bg-orange map-dot-pattern py-16 px-8 lg:px-12 order-2 lg:order-1">
          <div className="h-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 h-full"
            >
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold text-black-700 mb-6">روابط مفيدة</h3>
                <div className="underline-black mb-6" />
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-black-700/80 hover:text-black-700 transition-colors flex items-center gap-2"
                      >
                        <span className="text-red text-sm">◄</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div>
                <h3 className="text-xl font-bold text-black-700 mb-6">منتجاتنا</h3>
                <div className="underline-black mb-6" />
                <ul className="space-y-3">
                  {products.map((product) => (
                    <li key={product}>
                      <span className="text-black-700/80 flex items-center gap-2">
                        <span className="text-red text-sm">◄</span>
                        {product}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social & Contact */}
              <div>
                <h3 className="text-xl font-bold text-black-700 mb-6">تابعنا</h3>
                <div className="underline-black mb-6" />

                <div className="flex gap-4 mb-8">
                  <a
                    href="https://wa.me/963933292192"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black-700/10 rounded-full flex items-center justify-center text-black-700 hover:bg-black-700 hover:text-orange transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:info@glowcoal.com"
                    className="w-12 h-12 bg-black-700/10 rounded-full flex items-center justify-center text-black-700 hover:bg-black-700 hover:text-orange transition-colors"
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="tel:0991230605"
                    className="w-12 h-12 bg-black-700/10 rounded-full flex items-center justify-center text-black-700 hover:bg-black-700 hover:text-orange transition-colors"
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
                  </a>
                </div>

                <p className="text-black-700/70 text-sm">
                  دردشة مباشرة عبر واتساب
                  <br />
                  اتصال مباشر للاستفسارات
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black-700 border-t border-red/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} جلو كول - Glow Coal. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-sm">
              فحم نشارة خشب طبيعي 100%
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/963933292192"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="تواصل عبر واتساب"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* Back to top button */}
      <a
        href="#home"
        className="back-to-top"
        aria-label="العودة للأعلى"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </a>
    </footer>
  );
}
