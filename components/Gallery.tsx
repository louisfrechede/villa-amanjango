"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

type CatKey =
  | "salon"
  | "cuisine"
  | "piscine"
  | "jardin"
  | "sport"
  | "exterieur";

type Photo = {
  src: string;
  cat: CatKey;
  ratio: "tall" | "wide" | "square";
  feat: number; // 0 = pas dans "La Villa", sinon ordre d'affichage
};

const categories: { key: "lavilla" | CatKey; label: string }[] = [
  { key: "lavilla", label: "La Villa" },
  { key: "salon", label: "Salon & réception" },
  { key: "cuisine", label: "Cuisine & salle à manger" },
  { key: "piscine", label: "Piscine & terrasses" },
  { key: "jardin", label: "Jardin" },
  { key: "sport", label: "Salle de sport" },
  { key: "exterieur", label: "Extérieur & architecture" },
];

const catAlt: Record<CatKey, string> = {
  salon: "Salon et pièce de réception de la Villa AmanJango",
  cuisine: "Cuisine signée Boffi et espace repas de la Villa AmanJango",
  piscine: "Piscine à débordement et terrasses de la Villa AmanJango",
  jardin: "Jardin paysager de la Villa AmanJango",
  sport: "Salle de sport Technogym de la Villa AmanJango",
  exterieur: "Architecture contemporaine de la Villa AmanJango",
};

const photos: Photo[] = [
  { src: "/photos/exterieur-1.jpg", cat: "exterieur", ratio: "wide", feat: 7 },
  { src: "/photos/exterieur-2.jpg", cat: "exterieur", ratio: "wide", feat: 0 },
  { src: "/photos/exterieur-3.jpg", cat: "exterieur", ratio: "wide", feat: 0 },
  { src: "/photos/exterieur-4.jpg", cat: "exterieur", ratio: "wide", feat: 0 },
  { src: "/photos/exterieur-5.jpg", cat: "exterieur", ratio: "wide", feat: 0 },
  { src: "/photos/exterieur-6.jpg", cat: "exterieur", ratio: "wide", feat: 0 },
  { src: "/photos/piscine-1.jpg", cat: "piscine", ratio: "wide", feat: 1 },
  { src: "/photos/piscine-2.jpg", cat: "piscine", ratio: "tall", feat: 3 },
  { src: "/photos/piscine-3.jpg", cat: "piscine", ratio: "wide", feat: 6 },
  { src: "/photos/piscine-4.jpg", cat: "piscine", ratio: "wide", feat: 14 },
  { src: "/photos/piscine-5.jpg", cat: "piscine", ratio: "wide", feat: 0 },
  { src: "/photos/piscine-6.jpg", cat: "piscine", ratio: "wide", feat: 0 },
  { src: "/photos/piscine-7.jpg", cat: "piscine", ratio: "wide", feat: 0 },
  { src: "/photos/piscine-8.jpg", cat: "piscine", ratio: "wide", feat: 12 },
  { src: "/photos/piscine-9.jpg", cat: "piscine", ratio: "wide", feat: 0 },
  { src: "/photos/piscine-10.jpg", cat: "piscine", ratio: "wide", feat: 0 },
  { src: "/photos/piscine-11.jpg", cat: "piscine", ratio: "tall", feat: 11 },
  { src: "/photos/piscine-12.jpg", cat: "piscine", ratio: "wide", feat: 0 },
  { src: "/photos/piscine-13.jpg", cat: "piscine", ratio: "wide", feat: 0 },
  { src: "/photos/piscine-14.jpg", cat: "piscine", ratio: "tall", feat: 0 },
  { src: "/photos/salon-1.jpg", cat: "salon", ratio: "wide", feat: 2 },
  { src: "/photos/salon-2.jpg", cat: "salon", ratio: "wide", feat: 13 },
  { src: "/photos/salon-3.jpg", cat: "salon", ratio: "tall", feat: 4 },
  { src: "/photos/salon-4.jpg", cat: "salon", ratio: "wide", feat: 8 },
  { src: "/photos/salon-5.jpg", cat: "salon", ratio: "wide", feat: 0 },
  { src: "/photos/salon-6.jpg", cat: "salon", ratio: "tall", feat: 0 },
  { src: "/photos/salon-7.jpg", cat: "salon", ratio: "wide", feat: 0 },
  { src: "/photos/salon-8.jpg", cat: "salon", ratio: "wide", feat: 0 },
  { src: "/photos/salon-9.jpg", cat: "salon", ratio: "wide", feat: 0 },
  { src: "/photos/salon-10.jpg", cat: "salon", ratio: "wide", feat: 0 },
  { src: "/photos/salon-11.jpg", cat: "salon", ratio: "wide", feat: 0 },
  { src: "/photos/salon-12.jpg", cat: "salon", ratio: "wide", feat: 0 },
  { src: "/photos/cuisine-1.jpg", cat: "cuisine", ratio: "wide", feat: 5 },
  { src: "/photos/cuisine-2.jpg", cat: "cuisine", ratio: "wide", feat: 15 },
  { src: "/photos/cuisine-3.jpg", cat: "cuisine", ratio: "wide", feat: 0 },
  { src: "/photos/cuisine-4.jpg", cat: "cuisine", ratio: "wide", feat: 0 },
  { src: "/photos/cuisine-5.jpg", cat: "cuisine", ratio: "wide", feat: 9 },
  { src: "/photos/cuisine-6.jpg", cat: "cuisine", ratio: "tall", feat: 0 },
  { src: "/photos/cuisine-7.jpg", cat: "cuisine", ratio: "wide", feat: 0 },
  { src: "/photos/cuisine-8.jpg", cat: "cuisine", ratio: "wide", feat: 0 },
  { src: "/photos/jardin-1.jpg", cat: "jardin", ratio: "tall", feat: 10 },
  { src: "/photos/jardin-2.jpg", cat: "jardin", ratio: "wide", feat: 0 },
  { src: "/photos/jardin-3.jpg", cat: "jardin", ratio: "wide", feat: 0 },
  { src: "/photos/jardin-4.jpg", cat: "jardin", ratio: "wide", feat: 0 },
  { src: "/photos/jardin-5.jpg", cat: "jardin", ratio: "wide", feat: 0 },
  { src: "/photos/sport-1.jpg", cat: "sport", ratio: "wide", feat: 0 },
];

const ratioClass: Record<Photo["ratio"], string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export function Gallery() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<"lavilla" | CatKey>("lavilla");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible =
    active === "lavilla"
      ? photos.filter((p) => p.feat > 0).sort((a, b) => a.feat - b.feat)
      : photos.filter((p) => p.cat === active);

  const close = useCallback(() => setLightbox(null), []);
  const go = useCallback(
    (dir: 1 | -1) =>
      setLightbox((i) =>
        i === null ? i : (i + dir + visible.length) % visible.length
      ),
    [visible.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, go]);

  return (
    <Section
      id="gallery"
      eyebrow="Galerie"
      title="Visite en images."
      intro="Découvrez les plus beaux espaces de la villa, puis explorez chaque pièce en détail : salon, suites, cuisine, piscine, jardin… Cliquez sur une photo pour l'agrandir."
      className="bg-cream-deep"
    >
      {/* Onglets de catégories */}
      <div className="flex flex-wrap gap-x-2 gap-y-3 mb-12 lg:mb-16">
        {categories.map((c) => {
          const isActive = active === c.key;
          return (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 border ${
                isActive
                  ? "bg-sage-deep text-cream border-sage-deep"
                  : "bg-transparent text-anthracite-soft border-sage-deep/25 hover:border-sage-deep/60"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Grille masonry, ré-animée à chaque changement d'onglet */}
      <div key={active} className="masonry">
        {visible.map((p, i) => (
          <motion.figure
            key={p.src}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: Math.min(i, 8) * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden bg-stone cursor-pointer"
            onClick={() => setLightbox(i)}
          >
            <div className={`relative w-full ${ratioClass[p.ratio]}`}>
              <Image
                src={p.src}
                alt={catAlt[p.cat]}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-anthracite/70 via-anthracite/20 to-transparent text-cream text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {categories.find((c) => c.key === p.cat)?.label}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Lightbox plein écran */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-anthracite/95 flex items-center justify-center p-4 sm:p-8"
            onClick={close}
          >
            <button
              aria-label="Fermer"
              onClick={close}
              className="absolute top-5 right-5 z-10 w-11 h-11 flex items-center justify-center text-cream/80 hover:text-cream border border-cream/30 hover:border-cream/70 transition-colors"
            >
              <X size={20} />
            </button>

            <button
              aria-label="Photo précédente"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-3 sm:left-6 z-10 w-11 h-11 flex items-center justify-center text-cream/80 hover:text-cream border border-cream/30 hover:border-cream/70 transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              aria-label="Photo suivante"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-3 sm:right-6 z-10 w-11 h-11 flex items-center justify-center text-cream/80 hover:text-cream border border-cream/30 hover:border-cream/70 transition-colors"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={visible[lightbox].src}
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={visible[lightbox].src}
                alt={catAlt[visible[lightbox].cat]}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
              <p className="absolute -bottom-8 inset-x-0 text-center text-cream/70 text-[11px] tracking-[0.2em] uppercase">
                {categories.find((c) => c.key === visible[lightbox].cat)?.label}
                {"  ·  "}
                {lightbox + 1} / {visible.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
