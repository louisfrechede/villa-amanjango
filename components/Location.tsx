import { Plane, Waves, Flag, ShoppingBasket } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

const points = [
  {
    icon: Flag,
    title: "Golf de Seignosse",
    distance: "1,2 km",
    note: "Parcours 18 trous dessiné par Robert Von Hagge, l'un des plus beaux d'Europe.",
  },
  {
    icon: Waves,
    title: "Plage du Penon",
    distance: "1 km",
    note: "Sable infini, vagues atlantiques et couchers de soleil mémorables. Accès à pied ou à vélo.",
  },
  {
    icon: ShoppingBasket,
    title: "Hossegor & son lac",
    distance: "4 km",
    note: "Marché, boutiques surfwear, restaurants iodés et golf international d'Hossegor.",
  },
  {
    icon: Plane,
    title: "Aéroport de Biarritz",
    distance: "30 min en voiture",
    note: "Vols directs depuis Paris, Londres, Genève, Bruxelles. Service de transfert privé sur demande.",
  },
];

export function Location() {
  return (
    <Section
      id="location"
      eyebrow="Localisation"
      title="Au cœur des Landes, entre océan, golf et forêt de pins."
      intro="Seignosse, sur la Côte Sud des Landes, est une enclave préservée qui réunit les plus belles plages de surf, les golfs les plus exigeants et l'art de vivre atlantique du Sud-Ouest."
      className="bg-cream-deep"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <FadeIn direction="left" className="lg:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-anthracite/10">
            <iframe
              title="Carte de la Villa AmanJango"
              src="https://maps.google.com/maps?q=28%20Avenue%20d%27Augusta%2C%2040510%20Seignosse&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.2em] uppercase text-anthracite-soft bg-cream/90 backdrop-blur-sm px-3 py-1.5 pointer-events-none">
              Seignosse · Landes · France
            </div>
          </div>
        </FadeIn>

        <div className="lg:col-span-5 flex flex-col gap-6">
          {points.map(({ icon: Icon, title, distance, note }, i) => (
            <FadeIn key={title} direction="right" delay={i * 0.08}>
              <div className="flex gap-5 pb-6 border-b border-anthracite/10 last:border-b-0">
                <div className="shrink-0 w-11 h-11 flex items-center justify-center border border-sage-deep/30 text-sage-deep">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <h3 className="font-serif text-xl text-anthracite">
                      {title}
                    </h3>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-sage-deep whitespace-nowrap">
                      {distance}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-anthracite-soft">
                    {note}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
