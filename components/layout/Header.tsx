"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { BUSINESS, WHATSAPP_DEEP_LINK } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/about", key: "about" },
  { href: "/zones", key: "zones" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Header bar — hidden when mobile menu is open */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          mobileOpen ? "pointer-events-none opacity-0" : ""
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-border-light"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className={`text-[0.95rem] font-medium tracking-tight transition-colors duration-500 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              CANNES RIDE
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    className={`link-underline text-sm transition-colors duration-300 ${
                      scrolled
                        ? isActive ? "text-black" : "text-dark-gray hover:text-black"
                        : isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions — Call first */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher scrolled={scrolled} />
              <a
                href={`tel:${BUSINESS.phone}`}
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "bg-black text-white hover:bg-white hover:text-black hover:ring-1 hover:ring-black"
                    : "bg-white text-black hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white"
                }`}
                onClick={() => trackEvent({ action: "phone_click", category: "header" })}
              >
                Appeler
              </a>
              <a
                href={WHATSAPP_DEEP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2 text-sm font-medium ring-1 transition-all duration-300 ${
                  scrolled
                    ? "text-black ring-black/20 hover:bg-black hover:text-white hover:ring-black"
                    : "text-white ring-white/30 hover:bg-white hover:text-black hover:ring-white"
                }`}
                onClick={() => trackEvent({ action: "whatsapp_click", category: "header" })}
              >
                {t("book")}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`p-2 transition-colors duration-300 lg:hidden ${
                scrolled ? "text-black" : "text-white"
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — fullscreen black overlay, above everything */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Header with logo + close */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10 shrink-0">
              <span className="text-[0.95rem] font-medium tracking-tight text-white">
                CANNES RIDE
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links — vertical stack with separators */}
            <nav className="flex flex-col px-6 py-8 flex-1">
              {navLinks.map((link, i) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-4 text-3xl font-medium tracking-tight border-b border-white/10 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/40 hover:text-white"
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Legal links */}
            <div className="px-6 py-6 border-t border-white/10 shrink-0">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-3">
                Informations légales
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/mentions-legales" onClick={() => setMobileOpen(false)} className="text-white/50 text-sm hover:text-white transition-colors">
                  Mentions Légales
                </Link>
                <Link href="/politique-confidentialite" onClick={() => setMobileOpen(false)} className="text-white/50 text-sm hover:text-white transition-colors">
                  Politique de Confidentialité
                </Link>
              </div>
            </div>

            {/* CTAs — Call first */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-6 pb-6 shrink-0 flex flex-col gap-3"
            >
              <a
                href={`tel:${BUSINESS.phone}`}
                className="block text-center py-4 bg-white text-black text-sm font-medium transition-all duration-300"
                onClick={() => {
                  trackEvent({ action: "phone_click", category: "mobile_menu" });
                  setMobileOpen(false);
                }}
              >
                Appeler maintenant
              </a>
              <a
                href={WHATSAPP_DEEP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 ring-1 ring-white text-white text-sm font-medium transition-all duration-300 hover:bg-white/5"
                onClick={() => {
                  trackEvent({ action: "whatsapp_click", category: "mobile_menu" });
                  setMobileOpen(false);
                }}
              >
                Réserver via WhatsApp
              </a>
            </motion.div>

            {/* Contact info */}
            <div className="px-6 pb-6 border-t border-white/10 pt-6 shrink-0">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Contact</p>
              <p className="text-white/70 text-sm">{BUSINESS.address}</p>
              <p className="text-white text-sm mt-1">{BUSINESS.phoneDisplay}</p>
              <p className="text-white/50 text-sm mt-1">24/7</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
