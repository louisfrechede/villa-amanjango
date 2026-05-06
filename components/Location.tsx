import { MapPin, Plane, Waves, Flag, ShoppingBasket } from "lucide-react";
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
            {/* Carte stylisée — placeholder élégant en attendant une intégration Mapbox/Google Maps */}
            <div
              aria-hidden
              className="absolute inset-0 bg-stone"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 35%, rgba(135,165,150,0.35), transparent 60%), radial-gradient(circle at 75% 70%, rgba(176,137,104,0.25), transparent 55%), linear-gradient(135deg, #e8e2d5 0%, #d8cfbb 100%)",
              }}
            />
            <svg
              aria-hidden
              className="absolute inset-0 w-full h-full opacity-40 mix-blend-multiply"
              viewBox="0 0 600 450"
              preserveAspectRatio="none"
            >
              <path
                d="M0,260 Q120,210 240,250 T480,230 T600,260 L600,450 L0,450 Z"
                fill="#5a7a6c"
                opacity="0.35"
              />
              <path
                d="M0,290 Q140,240 280,280 T560,260 T600,280 L600,450 L0,450 Z"
                fill="#3f4754"
                opacity="0.25"
              />
              {[...Array(20)].map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  x2="600"
                  y1={i * 22}
                  y2={i * 22}
                  stroke="#1f2937"
                  strokeWidth="0.3"
                  opacity="0.15"
                />
              ))}
              {[...Array(28)].map((_, i) => (
                <line
                  key={`v${i}`}
                  y1="0"
                  y2="450"
                  x1={i * 22}
                  x2={i * 22}
                  stroke="#1f2937"
                  strokeWidth="0.3"
                  opacity="0.15"
                />
              ))}
            </svg>

            {/* Marker */}
            <div className="absolute top-[42%] left-[44%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <span className="absolute inset-0 -m-2 rounded-full bg-anthracite/20 animate-ping" />
                <span className="relative w-10 h-10 rounded-full bg-anthracite text-cream flex items-center justify-center shadow-lg">
                  <MapPin size={18} strokeWidth={2} />
                </span>
              </div>
              <span className="mt-3 px-3 py-1.5 bg-cream text-anthracite text-[10px] tracking-[0.25em] uppercase shadow-sm">
                Villa AmanJango
              </span>
            </div>

            <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.2em] uppercase text-anthracite-soft bg-cream/80 backdrop-blur-sm px-3 py-1.5">
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
