import { getTranslations } from "next-intl/server";
import { ContactPage } from "./ContactPage";
import { BUSINESS } from "@/lib/constants";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: { fr: "/contact", en: "/en/contact" },
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
  return <ContactPage />;
}
