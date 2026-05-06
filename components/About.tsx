import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const facts = [
  { value: "7", label: "Chambres" },
  { value: "600 m²", label: "Surface habitable" },
  { value: "400 m²", label: "Terrasse" },
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
            Une parenthèse contemporaine au cœur de la forêt landaise.
          </h2>
        </FadeIn>

        <div className="lg:col-span-7 space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <p className="text-lg leading-relaxed text-anthracite-soft">
              Posée à l&apos;orée des pins entre Seignosse et Hossegor, la Villa
              AmanJango déploie 600 m² d&apos;architecture contemporaine, une
              terrasse de 400 m² et une piscine à débordement de 18 m². Ses
              lignes épurées dialoguent avec la lumière atlantique et le silence
              singulier de la forêt landaise.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg leading-relaxed text-anthracite-soft">
              Sept suites baignées de clarté s&apos;ouvrent sur le jardin, le
              bassin ou les pins. Une vaste pièce de réception de 165 m²
              prolonge la cuisine équipée d&apos;un îlot central — l&apos;espace
              idéal pour réunir famille, amis et partenaires de golf autour
              d&apos;un long week-end.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg leading-relaxed text-anthracite-soft">
              À un kilomètre, la plage du Penon, ses vagues et son sable infini.
              À 1,2 km, le Golf de Seignosse, l&apos;un des plus beaux parcours
              de la côte ; à 4 km, Hossegor, son lac, son marché et son golf
              d&apos;exception. Un point de départ rare, entre <em>slow living</em>{" "}
              landais et art de vivre atlantique.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} className="pt-12">
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

          <FadeIn direction="up" delay={0.5} className="pt-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80"
                alt="Architecture contemporaine de la villa"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
