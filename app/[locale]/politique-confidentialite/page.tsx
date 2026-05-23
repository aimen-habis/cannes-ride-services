import { BUSINESS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Politique de Confidentialité | ${BUSINESS.name}`,
  description: "Politique de confidentialité et protection des données personnelles.",
  robots: "noindex",
};

export default function PolitiqueConfidentialite() {
  return (
    <section className="pt-36 pb-24 lg:pt-44 lg:pb-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-16">
        <p className="text-eyebrow text-mid-gray mb-6">Confidentialité</p>
        <h1 className="text-h2 text-black mb-16">
          Politique de Confidentialité
        </h1>
        <div className="space-y-12 text-dark-gray">
          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">1. Collecte des données</h2>
            <p>
              Les données personnelles collectées sur ce site sont les suivantes : nom, prénom, adresse e-mail, numéro de téléphone, et toute information que vous nous transmettez via le formulaire de contact. Ces données sont collectées uniquement lorsque vous les soumettez volontairement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">2. Utilisation des données</h2>
            <p>
              Vos données personnelles sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Traiter vos demandes de réservation</li>
              <li>Vous contacter suite à une demande</li>
              <li>Améliorer nos services</li>
            </ul>
            <p>Vos données ne sont jamais vendues, échangées ou louées à des tiers.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">3. Cookies</h2>
            <p>
              Ce site utilise des cookies essentiels au fonctionnement du site. Des cookies analytiques (Google Analytics) peuvent être utilisés avec votre consentement pour mesurer l&apos;audience du site. Vous pouvez à tout moment refuser l&apos;utilisation de ces cookies via la bannière de consentement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">4. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pour la durée nécessaire au traitement de votre demande et au maximum pendant 3 ans à compter du dernier contact.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">5. Vos droits (RGPD)</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous par téléphone au {BUSINESS.phoneDisplay} ou via WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">6. Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter au {BUSINESS.phoneDisplay}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
