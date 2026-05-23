import { BUSINESS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `CGV | ${BUSINESS.name}`,
  description: "Conditions Générales de Vente de Cannes Ride Services.",
  robots: "noindex",
};

export default function CGV() {
  return (
    <section className="pt-36 pb-24 lg:pt-44 lg:pb-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-16">
        <p className="text-eyebrow text-mid-gray mb-6">Juridique</p>
        <h1 className="text-h2 text-black mb-16">
          Conditions Générales de Vente
        </h1>
        <div className="space-y-12 text-dark-gray">
          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">1. Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les prestations de transport de personnes proposées par {BUSINESS.name}, exploitant de VTC (Voiture de Transport avec Chauffeur) enregistré conformément à la réglementation française.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">2. Réservation</h2>
            <p>
              Les réservations peuvent être effectuées par téléphone ou via WhatsApp. Toute réservation est considérée comme ferme et définitive une fois confirmée par {BUSINESS.name}. Nous recommandons de réserver à l&apos;avance pour garantir la disponibilité de nos véhicules.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">3. Tarifs</h2>
            <p>
              Les tarifs sont communiqués sur devis, en fonction de la distance, du type de véhicule et des services demandés. Les prix sont indiqués TTC. Tout temps d&apos;attente supplémentaire pourra être facturé selon les conditions communiquées au préalable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">4. Annulation</h2>
            <p>
              Toute annulation doit être effectuée au minimum 4 heures avant l&apos;heure prévue de prise en charge. Au-delà de ce délai, des frais d&apos;annulation pourront être appliqués à hauteur de 50% du montant de la course.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">5. Responsabilité</h2>
            <p>
              {BUSINESS.name} est assuré pour le transport de personnes conformément à la législation en vigueur. Notre responsabilité ne saurait être engagée en cas de retard dû à des circonstances indépendantes de notre volonté (conditions de circulation, intempéries, etc.).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">6. Paiement</h2>
            <p>
              Le paiement s&apos;effectue à la fin de chaque course. Les moyens de paiement acceptés sont : espèces, carte bancaire. Le paiement par virement peut être arrangé pour les clients réguliers et les entreprises.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">7. Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit français. Tout litige relatif à l&apos;exécution des présentes sera de la compétence exclusive des tribunaux de Cannes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
