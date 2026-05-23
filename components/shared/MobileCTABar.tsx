"use client";

import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS, WHATSAPP_DEEP_LINK } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex bg-black border-t border-white/10">
      {/* PRIMARY: Call first */}
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex-1 py-4 flex items-center justify-center gap-2 bg-white text-black text-sm font-medium active:bg-light-gray transition-colors duration-300"
        onClick={() => trackEvent({ action: "phone_click", category: "mobile_bar" })}
      >
        <Phone className="w-4 h-4" />
        <span>Appeler</span>
      </a>
      {/* SECONDARY: WhatsApp */}
      <a
        href={WHATSAPP_DEEP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-4 flex items-center justify-center gap-2 text-white text-sm font-medium active:bg-white/10 transition-colors duration-300"
        onClick={() => trackEvent({ action: "whatsapp_click", category: "mobile_bar" })}
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
