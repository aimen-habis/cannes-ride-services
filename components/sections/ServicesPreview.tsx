"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Plane, Briefcase, Star, Route, Clock, Heart, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

const services = [
  { key: "airport", icon: Plane, num: "01" },
  { key: "business", icon: Briefcase, num: "02" },
  { key: "events", icon: Star, num: "03" },
  { key: "longDistance", icon: Route, num: "04" },
  { key: "hourly", icon: Clock, num: "05" },
  { key: "wedding", icon: Heart, num: "06" },
] as const;

export function ServicesPreview() {
  const t = useTranslations("services");

  return (
    <section className="py-32 lg:py-48 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-20 lg:mb-28">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-eyebrow text-mid-gray mb-6"
          >
            01 &mdash; {t("title")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-display text-black max-w-2xl"
          >
            {t("subtitle")}
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-light">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
              >
                <Link
                  href="/services"
                  className="group block bg-white p-10 lg:p-14 transition-colors duration-500 hover:bg-off-white"
                >
                  <span className="text-[0.65rem] font-medium tracking-[0.12em] text-mid-gray block mb-8">
                    {service.num}
                  </span>

                  <Icon className="w-5 h-5 text-black mb-6" />

                  <h3 className="text-lg font-medium tracking-tight text-black mb-4">
                    {t(`${service.key}.title`)}
                  </h3>

                  <p className="text-sm text-dark-gray leading-relaxed mb-8 line-clamp-3">
                    {t(`${service.key}.description`)}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm text-black opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
                    <span className="link-underline">En savoir plus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
