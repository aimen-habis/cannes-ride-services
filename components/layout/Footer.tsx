"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BUSINESS } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-black text-white pb-20 md:pb-0">
      <div className="h-px bg-white/10" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <span className="text-[0.95rem] font-medium tracking-tight block mb-6">
              CANNES RIDE
            </span>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-eyebrow text-white/60 text-[0.65rem] mb-6">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: nav("home") },
                { href: "/services", label: nav("services") },
                { href: "/about", label: nav("about") },
                { href: "/zones", label: nav("zones") },
                { href: "/contact", label: nav("contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-eyebrow text-white/60 text-[0.65rem] mb-6">
              {t("legal")}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/mentions-legales" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
                  {t("mentionsLegales")}
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
                  {t("politiqueConfidentialite")}
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
                  {t("cgv")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-eyebrow text-white/60 text-[0.65rem] mb-6">
              {t("contact")}
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>{BUSINESS.address}</li>
              <li>
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-white transition-colors duration-300">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8">
          <p className="text-[0.7rem] text-white/40">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
