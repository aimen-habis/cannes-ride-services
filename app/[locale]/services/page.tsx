import { getTranslations } from "next-intl/server";
import { ServicesPage } from "./ServicesPage";
import { BUSINESS } from "@/lib/constants";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: { fr: "/services", en: "/en/services" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: BUSINESS.name,
    },
  };
}

export default function Page() {
  return <ServicesPage />;
}
