"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";

type Photo = {
  src: string;
  alt: string;
  ratio: "tall" | "wide" | "square";
};

const photos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    alt: "Piscine à débordement et terrasse en bois",
    ratio: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    alt: "Suite principale, lumière du matin",
    ratio: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    alt: "Vaste pièce de réception ouverte sur le jardin",
    ratio: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?auto=format&fit=crop&w=1200&q=80",
    alt: "Détail d'architecture contemporaine",
    ratio: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
    alt: "Salle à manger en bois et lin",
    ratio: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    alt: "Salle de bain en pierre claire",
    ratio: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1200&q=80",
    alt: "La forêt de pins landaise, à deux pas de la villa",
    ratio: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    alt: "Suite aux tons crème et bois clair",
    ratio: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1502933691298-84fc14542831?auto=format&fit=crop&w=1200&q=80",
    alt: "Plage du Penon, à un kilomètre de la villa",
    ratio: "tall",
  },
];

const ratioClass: Record<Photo["ratio"], string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export function Gallery() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="gallery"
      eyebrow="Galerie"
      title="Fragments d'un quotidien suspendu."
      intro="Chaque espace a été pensé pour faire dialoguer matières naturelles, lumière douce et lignes contemporaines. Une invitation à ralentir, entre forêt et océan."
      className="bg-cream-deep"
    >
      <div className="masonry">
        {photos.map((p, i) => (
          <motion.figure
            key={p.src}
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: (i % 3) * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden bg-stone"
          >
            <div className={`relative w-full ${ratioClass[p.ratio]}`}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-anthracite/70 via-anthracite/20 to-transparent text-cream text-xs tracking-[0.18em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {p.alt}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
