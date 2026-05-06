import {
  Wifi,
  Flag,
  Waves,
  TreePine,
  Snowflake,
  Sparkles,
  Car,
  PawPrint,
  Bath,
  Bed,
  Utensils,
  Flame,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

const amenities = [
  {
    icon: Waves,
    title: "Piscine à débordement",
    description:
      "Bassin privé de 18 m² au cœur de la terrasse en bois, chauffé en intersaison sur demande.",
  },
  {
    icon: Bed,
    title: "Sept chambres",
    description:
      "Sept suites lumineuses avec literie haut de gamme, climatisation et salle de bain privative.",
  },
  {
    icon: Bath,
    title: "Sept salles de bain",
    description:
      "Volumes spacieux, douches à l'italienne et matériaux nobles dans chaque suite.",
  },
  {
    icon: Utensils,
    title: "Cuisine équipée",
    description:
      "Pièce ouverte avec îlot central, électroménager professionnel et grande table conviviale.",
  },
  {
    icon: Flag,
    title: "Golf de Seignosse",
    description:
      "À 1,2 km, l'un des plus beaux 18 trous d'Europe. Hossegor à 4 km pour prolonger le plaisir.",
  },
  {
    icon: TreePine,
    title: "Forêt landaise",
    description:
      "Pistes cyclables et sentiers de pins maritimes au départ direct de la villa.",
  },
  {
    icon: Wifi,
    title: "WiFi haut débit",
    description:
      "Fibre couvrant l'ensemble de la propriété, idéale pour les espaces de travail.",
  },
  {
    icon: Snowflake,
    title: "Climatisation",
    description:
      "Régulation pièce par pièce pour traverser sereinement les belles journées d'été.",
  },
  {
    icon: Sparkles,
    title: "Service de ménage",
    description:
      "Entretien quotidien et linge de maison de qualité hôtelière inclus dans le séjour.",
  },
  {
    icon: Car,
    title: "Parking privé",
    description:
      "Stationnement clos et sécurisé pour plusieurs véhicules, sans réservation préalable.",
  },
  {
    icon: PawPrint,
    title: "Animaux acceptés",
    description:
      "Vos compagnons à quatre pattes sont les bienvenus, sans frais supplémentaires.",
  },
  {
    icon: Flame,
    title: "Cheminée & espace lounge",
    description:
      "Salon en double hauteur avec cheminée, parfait pour les soirées plus fraîches d'arrière-saison.",
  },
];

export function Amenities() {
  return (
    <Section
      id="amenities"
      eyebrow="Équipements & Services"
      title="Tout est pensé. Rien n'est de trop."
      intro="Une villa conçue pour les longs séjours en famille ou entre amis : confort hôtelier, services discrets et accès direct aux meilleurs spots de la côte."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-anthracite/10 border border-anthracite/10">
        {amenities.map(({ icon: Icon, title, description }, i) => (
          <FadeIn
            key={title}
            direction="up"
            delay={(i % 3) * 0.08}
            className="bg-cream"
          >
            <div className="p-8 lg:p-10 h-full flex flex-col gap-4 group hover:bg-cream-deep transition-colors duration-500">
              <div className="w-12 h-12 flex items-center justify-center border border-sage-deep/30 text-sage-deep group-hover:bg-sage-deep group-hover:text-cream transition-colors duration-500">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-anthracite mt-2">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-anthracite-soft">
                {description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
