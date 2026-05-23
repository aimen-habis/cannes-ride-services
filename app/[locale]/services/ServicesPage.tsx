"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Plane, Briefcase, Star, Route, Clock, Heart, Check } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const services = [
  { key: "airport", icon: Plane, num: "01", features: ["Nice Côte d'Azur (NCE)", "Marseille Provence (MRS)", "Paris CDG / Orly"] },
  { key: "business", icon: Briefcase, num: "02", features: ["Wi-Fi", "Charging", "Confidentialité"] },
  { key: "events", icon: Star, num: "03", features: ["Festival de Cannes", "MIPIM", "MIPCOM", "Cannes Lions"] },
  { key: "longDistance", icon: Route, num: "04", features: ["Monaco", "Saint-Tropez", "Marseille", "Milan"] },
  { key: "hourly", icon: Clock, num: "05", features: ["Min. 2h", "Shopping", "Visites", "Rendez-vous"] },
  { key: "wedding", icon: Heart, num: "06", features: ["Décoration", "Véhicule premium", "Coordination"] },
] as const;

export function ServicesPage() {
  const t = useTranslations("services");

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
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 space-y-24 lg:space-y-32">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col lg:flex-row items-start gap-12 lg:gap-20 ${isEven ? "" : "lg:flex-row-reverse"}`}
              >
                <div className="w-full lg:w-2/5">
                  <span className="text-6xl font-medium tracking-tight text-light-gray leading-none block mb-6">{service.num}</span>
                  <div className="w-16 h-16 border border-border-light flex items-center justify-center">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="w-full lg:w-3/5">
                  <h2 className="text-h2 text-black mb-6">{t(`${service.key}.title`)}</h2>
                  <p className="text-dark-gray leading-relaxed mb-8">{t(`${service.key}.description`)}</p>
                  <div className="w-8 h-px bg-border-light mb-8" />
                  <ul className="grid grid-cols-2 gap-4">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-dark-gray">
                        <Check className="w-3.5 h-3.5 text-black shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
