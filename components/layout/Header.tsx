"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { WHATSAPP_DEEP_LINK } from "@/lib/constants";
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
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

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <LanguageSwitcher scrolled={scrolled} />
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
          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitcher scrolled={scrolled} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — fullscreen black overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center px-6 pt-6">
              <span className="text-[0.95rem] font-medium tracking-tight text-white">
                CANNES RIDE
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white/60 p-2"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
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
                      className={`block py-3 text-4xl font-medium tracking-tight transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/40 hover:text-white"
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-6 pb-8"
            >
              <a
                href={WHATSAPP_DEEP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 bg-white text-black text-sm font-medium transition-all duration-300"
                onClick={() => {
                  trackEvent({ action: "whatsapp_click", category: "mobile_menu" });
                  setMobileOpen(false);
                }}
              >
                {t("book")}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
