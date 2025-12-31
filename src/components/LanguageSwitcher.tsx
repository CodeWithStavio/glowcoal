"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;

    startTransition(() => {
      // Set the locale cookie
      document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
      // Reload to apply the new locale
      window.location.reload();
    });
  };

  return (
    <div className="flex items-center gap-1 bg-black-600/50 rounded-full p-1">
      {locales.map((loc) => (
        <motion.button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={isPending}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            locale === loc
              ? "bg-orange text-white"
              : "text-white/70 hover:text-white hover:bg-white/10"
          } ${isPending ? "opacity-50 cursor-wait" : ""}`}
        >
          {localeNames[loc]}
        </motion.button>
      ))}
    </div>
  );
}
