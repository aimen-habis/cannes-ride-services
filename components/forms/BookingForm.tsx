"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

const bookingSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email().optional().or(z.literal("")),
  date: z.string().min(1),
  pickup: z.string().min(2),
  destination: z.string().min(2),
  passengers: z.string(),
  message: z.string().optional(),
});

type BookingData = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const t = useTranslations("contact.form");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
  });

  function onSubmit(data: BookingData) {
    trackEvent({ action: "form_submit", category: "booking" });

    const text = [
      `Bonjour, je souhaite réserver un VTC.`,
      ``,
      `Nom: ${data.name}`,
      `Téléphone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : "",
      `Date: ${data.date}`,
      `Départ: ${data.pickup}`,
      `Destination: ${data.destination}`,
      `Passagers: ${data.passengers}`,
      data.message ? `Message: ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full px-4 py-3.5 bg-white border border-border-light text-black text-sm focus:outline-none focus:border-black transition-colors duration-300";
  const errorClass = "text-red-600 text-xs mt-1.5";
  const labelClass = "block text-xs font-medium tracking-[0.08em] uppercase text-mid-gray mb-2";

  return (
    <motion.form
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>{t("name")} *</label>
          <input {...register("name")} className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>{t("phone")} *</label>
          <input {...register("phone")} type="tel" className={inputClass} />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>{t("email")}</label>
        <input {...register("email")} type="email" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>{t("date")} *</label>
          <input {...register("date")} type="datetime-local" className={inputClass} />
          {errors.date && <p className={errorClass}>{errors.date.message}</p>}
        </div>
        <div>
          <label className={labelClass}>{t("passengers")}</label>
          <select {...register("passengers")} className={inputClass}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>{t("pickup")} *</label>
        <input {...register("pickup")} className={inputClass} />
        {errors.pickup && <p className={errorClass}>{errors.pickup.message}</p>}
      </div>

      <div>
        <label className={labelClass}>{t("destination")} *</label>
        <input {...register("destination")} className={inputClass} />
        {errors.destination && <p className={errorClass}>{errors.destination.message}</p>}
      </div>

      <div>
        <label className={labelClass}>{t("message")}</label>
        <textarea {...register("message")} rows={3} className={inputClass} />
      </div>

      <button
        type="submit"
        className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black hover:ring-1 hover:ring-black"
      >
        <span>{t("submit")}</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </motion.form>
  );
}
