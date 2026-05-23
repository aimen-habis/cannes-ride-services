"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import { BookingForm } from "@/components/forms/BookingForm";
import { BUSINESS, WHATSAPP_DEEP_LINK } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <section className="pt-36 pb-24 lg:pt-44 lg:pb-32 bg-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-eyebrow text-mid-gray mb-8">
            {t("title")}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-display text-white max-w-3xl">
            {t("subtitle")}
          </motion.h1>
        </div>
      </section>

      <section className="py-32 lg:py-44 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-off-white border border-border-light p-8 lg:p-12">
                <BookingForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.a
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                href={WHATSAPP_DEEP_LINK} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-whatsapp text-white transition-all duration-300 hover:bg-[#20bd5a]"
                onClick={() => trackEvent({ action: "whatsapp_click", category: "contact_page" })}
              >
                <MessageCircle className="w-6 h-6 shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{t("info.whatsapp")}</p>
                  <p className="text-sm text-white/70">{BUSINESS.phoneDisplay}</p>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08, duration: 0.6 }}
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-4 p-6 bg-off-white border border-border-light transition-colors duration-300 hover:bg-light-gray"
                onClick={() => trackEvent({ action: "phone_click", category: "contact_page" })}
              >
                <Phone className="w-5 h-5 text-black shrink-0" />
                <div>
                  <p className="text-sm font-medium text-black">{t("info.phone")}</p>
                  <p className="text-sm text-mid-gray">{BUSINESS.phoneDisplay}</p>
                </div>
              </motion.a>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.16, duration: 0.6 }}
                className="flex items-center gap-4 p-6 bg-off-white border border-border-light"
              >
                <Clock className="w-5 h-5 text-black shrink-0" />
                <div>
                  <p className="text-sm font-medium text-black">{t("info.hours")}</p>
                  <p className="text-sm text-mid-gray">{t("info.hoursValue")}</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.24, duration: 0.6 }}
                className="flex items-center gap-4 p-6 bg-off-white border border-border-light"
              >
                <MapPin className="w-5 h-5 text-black shrink-0" />
                <div>
                  <p className="text-sm font-medium text-black">Cannes</p>
                  <p className="text-sm text-mid-gray">{BUSINESS.address}</p>
                </div>
              </motion.div>

              <div className="overflow-hidden border border-border-light">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5000!2d${BUSINESS.coordinates.lng}!3d${BUSINESS.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1`}
                  width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Cannes Ride Services"
                  className="img-bw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
