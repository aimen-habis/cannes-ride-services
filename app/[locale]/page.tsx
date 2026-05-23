import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Testimonials } from "@/components/sections/Testimonials";
import { CoverageTeaser } from "@/components/sections/CoverageTeaser";
import { CTASection } from "@/components/sections/CTASection";
import { BUSINESS } from "@/lib/constants";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "fr" ? "/" : "/en",
      languages: { fr: "/", en: "/en" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: BUSINESS.name,
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <TrustIndicators />
      <Testimonials />
      <CoverageTeaser />
      <CTASection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: BUSINESS.name,
            description: "Premium VTC / Private Driver Service in Cannes, French Riviera",
            url: "https://cannesrideservices.com",
            telephone: BUSINESS.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cannes",
              addressRegion: "Provence-Alpes-Côte d'Azur",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: BUSINESS.coordinates.lat,
              longitude: BUSINESS.coordinates.lng,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
            areaServed: [
              { "@type": "City", name: "Cannes" },
              { "@type": "City", name: "Nice" },
              { "@type": "City", name: "Monaco" },
              { "@type": "City", name: "Antibes" },
              { "@type": "City", name: "Saint-Tropez" },
            ],
            priceRange: "€€€",
          }),
        }}
      />
    </>
  );
}
