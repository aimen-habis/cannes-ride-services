import { BUSINESS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Mentions Légales | ${BUSINESS.name}`,
  description: "Mentions légales de Cannes Ride Services, VTC à Cannes.",
  robots: "noindex",
};

export default function MentionsLegales() {
  return (
    <section className="pt-36 pb-24 lg:pt-44 lg:pb-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-16">
        <p className="text-eyebrow text-mid-gray mb-6">Informations légales</p>
        <h1 className="text-h2 text-black mb-16">
          Mentions Légales
        </h1>
        <div className="space-y-12 text-dark-gray">
          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">1. Éditeur du site</h2>
            <p>
              {BUSINESS.name}<br />
              Siège social : Cannes, France<br />
              Téléphone : {BUSINESS.phoneDisplay}<br />
              Activité : VTC — Voiture de Transport avec Chauffeur
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">2. Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc.<br />
              440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis<br />
              Site web : vercel.com
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de {BUSINESS.name}, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication est strictement interdite sans l&apos;accord écrit préalable de {BUSINESS.name}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">4. Responsabilité</h2>
            <p>
              {BUSINESS.name} s&apos;efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium tracking-tight text-black mb-4">5. Loi applicable</h2>
            <p>
              Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
