import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const facts = [
  { value: "500 m²", label: "Surface habitable" },
  { value: "7", label: "Suites" },
  { value: "165 m²", label: "Pièce de réception" },
  { value: "1 km", label: "De l'océan" },
];

export function About() {
  return (
    <section id="about" className="px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <FadeIn direction="left" className="lg:col-span-5 lg:sticky lg:top-32">
          <p className="text-xs uppercase tracking-[0.3em] text-sage-deep mb-5">
            La Villa
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Une propriété d&apos;exception en bordure de l&apos;un des plus beaux
            golfs d&apos;Europe.
          </h2>

          <div className="mt-10 border border-sage-deep/20 px-6 py-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-sage-deep mb-2">
              Sélection presse
            </p>
            <p className="text-sm leading-relaxed text-anthracite-soft">
              Retenue par le magazine{" "}
              <em className="font-serif not-italic text-anthracite">
                Elle Décoration
              </em>{" "}
              parmi les plus belles villas à louer du sud de la France.
            </p>
          </div>
        </FadeIn>

        <div className="lg:col-span-7 space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <p className="text-lg leading-relaxed text-anthracite-soft">
              AmanJango est une propriété d&apos;exception située à
              Seignosse-Hossegor, en bordure de l&apos;un des plus beaux golfs
              d&apos;Europe et à seulement 1&nbsp;km de l&apos;océan Atlantique.
              Cette remarquable réalisation d&apos;architecture californienne
              développe près de 500&nbsp;m² habitables et offre des prestations
              de très haut standing.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg leading-relaxed text-anthracite-soft">
              Idéalement située dans un environnement préservé, la villa
              bénéficie d&apos;un emplacement privilégié à proximité des plages
              sauvages de l&apos;Atlantique, accessibles en quelques minutes à
              vélo. Entre golf, pinède et littoral, elle offre un cadre de vie
              rare propice à la détente et aux loisirs de plein air.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg leading-relaxed text-anthracite-soft">
              Dès l&apos;entrée, les volumes impressionnent avec une
              spectaculaire pièce de réception de 165&nbsp;m², baignée de lumière
              et largement ouverte sur de vastes terrasses. La cuisine haut de
              gamme signée <em>Boffi</em>, organisée autour d&apos;un élégant
              îlot central, séduira les amateurs de design et de gastronomie.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.35}>
            <p className="text-lg leading-relaxed text-anthracite-soft">
              La propriété comprend 7 suites, chacune disposant de sa salle de
              bains privative, garantissant à ses occupants confort et intimité.
              Une salle de sport entièrement équipée en matériel{" "}
              <em>Technogym</em> complète cet ensemble dédié au bien-être.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/photos/villa-piscine.jpg"
                alt="La villa et sa piscine à débordement, ouvertes sur la pinède"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.45}>
            <p className="text-lg leading-relaxed text-anthracite-soft">
              À l&apos;extérieur, un magnifique jardin paysager conçu par un
              architecte de renommée internationale met en valeur la propriété.
              Une élégante piscine chauffée à débordement de 18 mètres,
              plusieurs espaces lounge ainsi qu&apos;une cuisine d&apos;été
              signée <em>Boffi</em> permettent de profiter pleinement du climat
              exceptionnel de la côte landaise.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <p className="text-lg leading-relaxed text-anthracite-soft">
              À l&apos;abri de tous les regards, la villa bénéficie d&apos;une
              parfaite intimité, sans aucun vis-à-vis, garantissant calme et
              sérénité. Un service de gouvernante est inclus à raison de 5 heures
              par jour, plaçant chaque séjour sous le signe du confort et de la
              qualité.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.55} className="pt-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 border-t border-sage-deep/20 pt-12">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-3 border-l border-sage-deep/20 pl-5 sm:pl-6"
                >
                  <span className="font-serif text-5xl sm:text-6xl lg:text-7xl text-sage-deep leading-none tracking-tight">
                    {fact.value}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-anthracite-muted">
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
