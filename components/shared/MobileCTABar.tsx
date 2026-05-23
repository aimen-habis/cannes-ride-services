"use client";

import { BUSINESS, WHATSAPP_DEEP_LINK } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex bg-black text-white">
      <a
        href={WHATSAPP_DEEP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-4 text-center text-sm font-medium transition-colors duration-300 active:bg-white/10"
        onClick={() => trackEvent({ action: "whatsapp_click", category: "mobile_bar" })}
      >
        WhatsApp
      </a>
      <div className="w-px bg-white/15" />
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex-1 py-4 text-center text-sm font-medium transition-colors duration-300 active:bg-white/10"
        onClick={() => trackEvent({ action: "phone_click", category: "mobile_bar" })}
      >
        Appeler
      </a>
    </div>
  );
}
