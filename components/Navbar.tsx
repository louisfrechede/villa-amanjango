"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#about", label: "La Villa" },
  { href: "#gallery", label: "Galerie" },
  { href: "#amenities", label: "Équipements" },
  { href: "#testimonials", label: "Avis" },
  { href: "#location", label: "Localisation" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-anthracite/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        <Link
          href="#top"
          className={`font-serif text-xl tracking-tight transition-colors ${
            scrolled ? "text-anthracite" : "text-cream"
          }`}
        >
          Villa AmanJango
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm tracking-[0.18em] uppercase transition-colors ${
                  scrolled
                    ? "text-anthracite hover:text-sage-deep"
                    : "text-cream/90 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://www.airbnb.fr/rooms/49772524"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden lg:inline-flex items-center px-6 py-2.5 text-xs tracking-[0.2em] uppercase border transition-all ${
            scrolled
              ? "border-anthracite text-anthracite hover:bg-anthracite hover:text-cream"
              : "border-cream text-cream hover:bg-cream hover:text-anthracite"
          }`}
        >
          Réserver
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? "text-anthracite" : "text-cream"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-cream border-t border-anthracite/10">
          <ul className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm tracking-[0.18em] uppercase text-anthracite"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://www.airbnb.fr/rooms/49772524"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 text-xs tracking-[0.2em] uppercase border border-anthracite text-anthracite"
              >
                Réserver sur Airbnb
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
