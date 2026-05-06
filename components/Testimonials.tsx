"use client";

import { Quote, Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

type Review = {
  name: string;
  origin: string;
  date: string;
  text: string;
  highlight?: string;
};

const reviews: Review[] = [
  {
    name: "Camille",
    origin: "Paris",
    date: "Août 2025",
    text: "Une parenthèse hors du temps. La villa est encore plus belle que sur les photos — l'architecture, les volumes, la lumière atlantique qui traverse les pièces toute la journée. Nous étions douze, chacun a trouvé son coin pour lire, travailler ou rêver. Le bassin à débordement face aux pins, c'est inoubliable.",
    highlight: "Une parenthèse hors du temps.",
  },
  {
    name: "Édouard",
    origin: "Bruxelles",
    date: "Juin 2025",
    text: "Séjour entre amis golfeurs. Le parcours de Seignosse est à 5 minutes en voiture, celui d'Hossegor à dix. La villa est parfaite pour rentrer le soir : grande cuisine, terrasse immense, et un calme absolu. Le propriétaire a été d'une discrétion et d'une efficacité remarquables.",
    highlight: "Parfaite pour les longs séjours golf.",
  },
  {
    name: "Sophie",
    origin: "Genève",
    date: "Juillet 2025",
    text: "Nous sommes venus en famille avec trois générations sous le même toit. Les sept chambres permettent à chacun son intimité, la pièce de réception nous a tous rassemblés pour les dîners. La plage du Penon à un kilomètre, accessible en vélo par la pinède — un bonheur quotidien.",
  },
  {
    name: "Marc & Hélène",
    origin: "Londres",
    date: "Mai 2025",
    text: "Le luxe sans l'ostentation. Tout est pensé avec un goût très sûr — les matières, la literie, les détails de décoration. Le service de ménage quotidien et la qualité du linge nous ont rappelé les meilleurs hôtels. Nous reviendrons sans hésiter au printemps prochain.",
    highlight: "Le luxe sans l'ostentation.",
  },
  {
    name: "Thomas",
    origin: "Lyon",
    date: "Septembre 2025",
    text: "Nous avons organisé un week-end d'entreprise pour dix collaborateurs. La villa est idéale pour ce format — espaces de travail confortables, fibre haut débit, et le soir, le luxe d'un dîner sur la terrasse face au coucher de soleil. Une expérience marquante pour toute l'équipe.",
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Ils ont séjourné à la villa"
      title="Le récit de nos voyageurs."
      intro="Une centaine de séjours, des avis cinq étoiles unanimes. Quelques mots, parmi les plus marquants, recueillis ces derniers mois."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sage-deep/15 border border-sage-deep/15">
        {reviews.slice(0, 4).map((review, i) => (
          <FadeIn
            key={review.name + review.date}
            direction="up"
            delay={(i % 2) * 0.1}
            className="bg-cream"
          >
            <article className="p-8 lg:p-12 h-full flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div
                  className="flex gap-0.5 text-sage-deep"
                  aria-label="5 étoiles sur 5"
                >
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star
                      key={k}
                      size={14}
                      strokeWidth={1.5}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <Quote
                  size={18}
                  strokeWidth={1.5}
                  className="text-sage-deep/40 ml-auto"
                />
              </div>

              {review.highlight && (
                <p className="font-serif text-2xl lg:text-3xl text-anthracite leading-snug tracking-tight">
                  « {review.highlight} »
                </p>
              )}

              <p className="text-[15px] leading-relaxed text-anthracite-soft">
                {review.text}
              </p>

              <footer className="mt-auto pt-6 border-t border-sage-deep/15 flex items-baseline justify-between">
                <span className="font-serif text-lg text-anthracite">
                  {review.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-anthracite-muted">
                  {review.origin} · {review.date}
                </span>
              </footer>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn direction="up" delay={0.2} className="mt-16 lg:mt-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-sage-deep/20">
          <div className="flex items-center gap-6">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl text-sage-deep leading-none">
                4,98
              </span>
              <span className="text-xs tracking-[0.25em] uppercase text-anthracite-muted">
                / 5
              </span>
            </div>
            <div
              className="flex gap-0.5 text-sage-deep"
              aria-label="Note moyenne 5 étoiles"
            >
              {Array.from({ length: 5 }).map((_, k) => (
                <Star
                  key={k}
                  size={16}
                  strokeWidth={1.5}
                  fill="currentColor"
                />
              ))}
            </div>
          </div>
          <a
            href="https://www.airbnb.fr/rooms/49772524"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3.5 border border-anthracite text-anthracite text-xs tracking-[0.2em] uppercase font-medium hover:bg-anthracite hover:text-cream transition-colors"
          >
            Lire tous les avis sur Airbnb
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
