"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CTASection } from "@/components/sections/CTASection";
import { BUSINESS } from "@/lib/constants";

export function ZonesPage() {
  const t = useTranslations("coverage");

  const cities: string[] = [];
  for (let i = 0; i < 10; i++) {
    try { cities.push(t(`cities.${i}`)); } catch { break; }
  }

  return (
    <>
      <section className="pt-36 pb-24 lg:pt-44 lg:pb-32 bg-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-eyebrow text-white/60 mb-8">
            {t("title")}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-display text-white max-w-3xl">
            {t("subtitle")}
          </motion.h1>
        </div>
      </section>

      <section className="py-32 lg:py-44 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="overflow-hidden mb-20">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46000!2d${BUSINESS.coordinates.lng}!3d${BUSINESS.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1`}
              width="100%" height="500" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Coverage Area"
              className="img-bw"
            />
          </div>

          {/* Cities as massive text */}
          <div>
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
        </div>
      </section>

      <CTASection />
    </>
  );
}
