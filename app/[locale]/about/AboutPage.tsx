"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Clock, Eye, Gem, Globe, Users, Car } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const valueIcons = [Clock, Eye, Gem, Globe];

export function AboutPage() {
  const t = useTranslations("about");

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

      {/* Story — asymmetric editorial with image */}
      <section className="py-32 lg:py-44 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image — left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1000&q=85&auto=format"
                alt="Chauffeur service"
                width={1000}
                height={1333}
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>

            {/* Text — right, starts lower */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:pt-20"
            >
              <p className="text-lead mb-10">{t("story")}</p>
              <div className="w-12 h-px bg-border-light mb-10" />
              <p className="text-dark-gray leading-relaxed">{t("mission")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 lg:py-44 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-eyebrow text-black/50 mb-20 text-center">
            {t("values.title")}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-light">
            {[0, 1, 2, 3].map((i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} className="bg-off-white p-10 lg:p-14 text-center">
                  <Icon className="w-5 h-5 text-black mx-auto mb-6" />
                  <h3 className="text-base font-medium tracking-tight text-black mb-4">{t(`values.items.${i}.title`)}</h3>
                  <p className="text-sm text-black/55 leading-relaxed">{t(`values.items.${i}.description`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-32 lg:py-44 bg-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-eyebrow text-white/60 mb-20 text-center">
            {t("fleet.title")}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {[0, 1, 2].map((i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }} className="bg-black p-10 lg:p-14 text-center">
                <Car className="w-8 h-8 text-white mx-auto mb-8" />
                <h3 className="text-lg font-medium tracking-tight text-white mb-3">{t(`fleet.items.${i}.name`)}</h3>
                <p className="text-sm text-white/40 mb-6 leading-relaxed">{t(`fleet.items.${i}.description`)}</p>
                <div className="w-6 h-px bg-white/10 mx-auto mb-4" />
                <div className="flex items-center justify-center gap-2 text-xs text-white/60">
                  <Users className="w-3.5 h-3.5" />
                  {t(`fleet.items.${i}.capacity`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
