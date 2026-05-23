export const BUSINESS = {
  name: "CANNES RIDE SERVICES",
  phone: "+213540281551",
  phoneDisplay: "+213 540 281 551",
  whatsappUrl: "https://wa.me/213540281551",
  whatsappMessage: "Bonjour, je souhaite réserver un VTC à Cannes pour...",
  coordinates: { lat: 43.55395, lng: 7.017022 },
  address: "Cannes, French Riviera, France",
} as const;

export const WHATSAPP_DEEP_LINK = `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;
