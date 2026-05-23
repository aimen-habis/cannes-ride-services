export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && GA_ID) {
    window.gtag("event", "page_view", { page_path: url });
  }
};

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

export const trackEvent = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== "undefined" && GA_ID) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
