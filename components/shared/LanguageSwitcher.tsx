"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { trackEvent } from "@/lib/analytics";

export function LanguageSwitcher({ scrolled = false }: { scrolled?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleSwitch() {
    const next = locale === "fr" ? "en" : "fr";
    trackEvent({ action: "language_switch", label: next });
    router.replace(pathname, { locale: next });
  }

  const base = scrolled ? "text-black" : "text-white";
  const dim = scrolled ? "text-mid-gray" : "text-white/50";

  return (
    <button
      onClick={handleSwitch}
      className={`flex items-center gap-2 text-xs transition-colors duration-300`}
      aria-label={`Switch to ${locale === "fr" ? "English" : "French"}`}
    >
      <span className={locale === "fr" ? base : dim}>FR</span>
      <span className={scrolled ? "text-border-light" : "text-white/20"}>|</span>
      <span className={locale === "en" ? base : dim}>EN</span>
    </button>
  );
}
