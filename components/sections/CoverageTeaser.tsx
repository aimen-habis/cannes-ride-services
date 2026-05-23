"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function CoverageTeaser() {
  const t = useTranslations("coverage");

  const cities: string[] = [];
  for (let i = 0; i < 10; i++) {
    try {
      cities.push(t(`cities.${i}`));
    } catch {
      break;
    }
  }

  return (
    <section className="relative py-32 lg:py-44 bg-off-white overflow-hidden">
      {/* Subtle background image */}
      <Image
        src="https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=2000&q=80&auto=format"
        alt="French Riviera aerial"
        fill
        className="object-cover grayscale opacity-[0.06]"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-eyebrow text-mid-gray mb-6"
        >
          {t("title")}
        </motion.p>

        {/* Cities in massive light text */}
        <div className="mb-16">
          {cities.map((city, i) => (
            <motion.span
              key={city}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="inline-block text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black/25 hover:text-black transition-colors duration-500 cursor-default mr-4 sm:mr-6 leading-relaxed"
            >
              {city}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link
            href="/zones"
            className="group inline-flex items-center gap-2 text-sm text-black font-medium"
          >
            <span className="link-underline">Voir toutes les zones</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
