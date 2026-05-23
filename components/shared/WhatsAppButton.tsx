"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_DEEP_LINK } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppButton() {
  const t = useTranslations("whatsapp");

  return (
    <motion.a
      href={WHATSAPP_DEEP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group hidden md:block"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
      onClick={() => trackEvent({ action: "whatsapp_click", category: "floating_button" })}
      aria-label="WhatsApp"
    >
      <span className="relative flex items-center justify-center w-14 h-14 bg-whatsapp text-white transition-all duration-300 hover:bg-[#20bd5a]">
        <MessageCircle className="w-6 h-6" />
      </span>

      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-medium px-4 py-2.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {t("tooltip")}
      </span>
    </motion.a>
  );
}
