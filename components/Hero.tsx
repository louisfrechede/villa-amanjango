"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full flex items-end overflow-hidden"
    >
      <Image
        src="/photos/hero-piscine-villa.jpg"
        alt="Villa AmanJango, piscine à débordement et villa au cœur des pins"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,20,25,0.45) 0%, rgba(15,20,25,0.15) 35%, rgba(15,20,25,0.75) 100%)",
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pb-20 lg:pb-28 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-cream/90 text-xs tracking-[0.4em] uppercase mb-6"
          >
            Seignosse-Hossegor · Landes · Côte Atlantique
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-cream text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl"
          >
            Villa AmanJango
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-cream/85 text-lg sm:text-xl max-w-xl leading-relaxed font-light"
          >
            Une réalisation d&apos;architecture californienne de près de 500 m²
            en bordure de l&apos;un des plus beaux golfs d&apos;Europe. Sept
            suites, piscine à débordement de 18 mètres, à seulement 1 km de
            l&apos;océan Atlantique.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://www.airbnb.fr/rooms/49772524"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-cream text-anthracite text-xs tracking-[0.2em] uppercase font-medium hover:bg-cream-deep transition-colors"
            >
              Réserver un séjour
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 border border-cream/60 text-cream text-xs tracking-[0.2em] uppercase font-medium hover:bg-cream hover:text-anthracite transition-colors"
            >
              Découvrir la villa
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Faire défiler"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden lg:flex absolute bottom-10 right-10 z-10 w-12 h-12 items-center justify-center rounded-full border border-cream/40 text-cream hover:bg-cream hover:text-anthracite transition-colors"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
