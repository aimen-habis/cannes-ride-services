"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 md:bottom-6 left-0 right-0 md:left-6 md:right-auto z-40 p-4 md:p-0 md:max-w-md"
        >
          <div className="bg-black text-white p-6 flex flex-col gap-4">
            <p className="text-sm text-white/60 leading-relaxed">{t("message")}</p>
            <div className="flex gap-3">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm text-white/40 hover:text-white transition-colors duration-300"
              >
                {t("decline")}
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 bg-white text-black text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white hover:ring-1 hover:ring-white"
              >
                {t("accept")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
