import { getTranslations } from "next-intl/server";
import { AboutPage } from "./AboutPage";
import { BUSINESS } from "@/lib/constants";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: { fr: "/about", en: "/en/about" },
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
  return <AboutPage />;
}
