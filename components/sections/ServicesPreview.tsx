"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

const services = [
  { key: "airport", num: "01", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format" },
  { key: "business", num: "02", img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80&auto=format" },
  { key: "events", num: "03", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80&auto=format" },
  { key: "longDistance", num: "04", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80&auto=format" },
  { key: "hourly", num: "05", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80&auto=format" },
  { key: "wedding", num: "06", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format" },
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

        {/* Grid with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
            >
              <Link href="/services" className="group block">
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <Image
                    src={service.img}
                    alt={t(`${service.key}.title`)}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Text */}
                <p className="text-[0.65rem] font-medium tracking-[0.12em] text-mid-gray mb-3">
                  {service.num}
                </p>

                <h3 className="text-xl font-medium tracking-tight text-black mb-3 group-hover:text-dark-gray transition-colors duration-300">
                  {t(`${service.key}.title`)}
                </h3>

                <p className="text-sm text-dark-gray leading-relaxed mb-6 line-clamp-2">
                  {t(`${service.key}.description`)}
                </p>

                <span className="inline-flex items-center gap-2 text-sm text-black font-medium opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
                  <span className="link-underline">En savoir plus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
