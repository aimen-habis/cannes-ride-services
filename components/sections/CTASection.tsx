"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS, WHATSAPP_DEEP_LINK } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="relative py-32 lg:py-44 bg-black overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=2000&q=80&auto=format"
        alt="Cannes coastline"
        fill
        className="object-cover grayscale opacity-20"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 text-center">
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
          className="text-lg text-white/80 max-w-xl mx-auto mb-12 leading-relaxed font-light"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTAs — Call FIRST */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`tel:${BUSINESS.phone}`}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-sm font-medium transition-all duration-300 hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white"
            onClick={() => trackEvent({ action: "phone_click", category: "cta" })}
          >
            <Phone className="w-4 h-4" />
            <span>{t("bookNow")}</span>
          </a>
          <a
            href={WHATSAPP_DEEP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white text-sm font-medium ring-1 ring-white/30 transition-all duration-300 hover:ring-white hover:bg-white/5"
            onClick={() => trackEvent({ action: "whatsapp_click", category: "cta_section" })}
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
