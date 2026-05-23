"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const stats = ["experience", "rides", "languages", "available"] as const;

export function TrustIndicators() {
  const t = useTranslations("trust");

  return (
    <section className="py-24 lg:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-3 leading-none">
                {t(`${stat}.value`)}
              </div>
              <div className="text-xs font-medium tracking-[0.12em] uppercase text-mid-gray">
                {t(`${stat}.label`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
