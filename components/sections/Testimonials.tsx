"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const [current, setCurrent] = useState(0);
  const total = 5;

  function next() {
    setCurrent((c) => (c + 1) % total);
  }
  function prev() {
    setCurrent((c) => (c - 1 + total) % total);
  }

  return (
    <section className="relative py-32 lg:py-44 bg-black overflow-hidden">
      {/* Subtle blurred background */}
      <Image
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2000&q=60&auto=format"
        alt=""
        fill
        className="object-cover grayscale opacity-10 blur-sm"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-eyebrow text-white/60 mb-16 text-center"
        >
          {t("title")}
        </motion.p>

        <div className="relative min-h-[240px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center w-full"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-snug max-w-3xl mx-auto mb-10">
                &ldquo;{t(`items.${current}.text`)}&rdquo;
              </p>

              <div className="w-8 h-px bg-white/20 mx-auto mb-6" />

              <p className="text-sm text-white font-medium mb-1">
                {t(`items.${current}.name`)}
              </p>
              <p className="text-sm text-white/60">
                {t(`items.${current}.role`)}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button onClick={prev} className="text-white/50 hover:text-white transition-colors duration-300 p-2" aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 ${i === current ? "w-6 h-px bg-white" : "w-3 h-px bg-white/20 hover:bg-white/40"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="text-white/50 hover:text-white transition-colors duration-300 p-2" aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
