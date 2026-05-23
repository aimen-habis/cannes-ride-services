"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS, WHATSAPP_DEEP_LINK } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

function AnimatedWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.06, duration: 0.7, ease: "easeOut" }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

const cities = ["Cannes", "Nice", "Monaco", "Antibes", "Saint-Tropez"];

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-black overflow-hidden">
      {/* Optional background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 img-bw"
        style={{ backgroundImage: "url('/images/hero-cannes.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Main content — starts ~30% from top */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-eyebrow text-mid-gray mb-8"
          >
            Premium chauffeur service
          </motion.p>

          {/* Hero title — massive, left-aligned */}
          <h1 className="text-hero text-white mb-8 max-w-4xl">
            <AnimatedWords text={t("tagline")} />
          </h1>

          {/* Lead text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
            className="text-lead text-mid-gray max-w-xl mb-12"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_DEEP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white hover:ring-1 hover:ring-white"
              onClick={() => trackEvent({ action: "whatsapp_click", category: "hero" })}
            >
              <span>{t("bookWhatsApp")}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white text-sm font-medium ring-1 ring-white/30 transition-all duration-300 hover:ring-white hover:bg-white/5"
              onClick={() => trackEvent({ action: "phone_click", category: "hero" })}
            >
              <Phone className="w-4 h-4" />
              <span>{t("callNow")}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar — cities */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-6 flex items-center gap-6 overflow-x-auto">
          {cities.map((city, i) => (
            <span key={city} className="flex items-center gap-6 shrink-0">
              <span className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-white/40">
                {city}
              </span>
              {i < cities.length - 1 && (
                <span className="text-white/10">&middot;</span>
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
