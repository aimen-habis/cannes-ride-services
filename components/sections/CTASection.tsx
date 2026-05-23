"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS, WHATSAPP_DEEP_LINK } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="py-32 lg:py-44 bg-black">
      <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-display text-white mb-6"
        >
          {t("title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-lead text-mid-gray max-w-xl mx-auto mb-12"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={WHATSAPP_DEEP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white hover:ring-1 hover:ring-white"
            onClick={() => trackEvent({ action: "whatsapp_click", category: "cta_section" })}
          >
            <span>{t("bookNow")}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white text-sm font-medium ring-1 ring-white/30 transition-all duration-300 hover:ring-white hover:bg-white/5"
            onClick={() => trackEvent({ action: "phone_click", category: "cta" })}
          >
            <Phone className="w-4 h-4" />
            <span>{BUSINESS.phoneDisplay}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
