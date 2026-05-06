"use client";

import { useState, type FormEvent } from "react";
import { Camera, Mail, MapPin, Send } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function Footer() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <footer id="contact" className="bg-anthracite text-cream">
      <div className="px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <FadeIn direction="up" className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-sage-soft mb-5">
              Réserver, contact
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Composons ensemble votre séjour à Seignosse.
            </h2>
            <p className="mt-6 text-cream/70 leading-relaxed max-w-md">
              Pour toute demande de réservation, séjour prolongé ou événement
              privé, notre équipe vous répond sous 24 heures.
            </p>

            <div className="mt-12 space-y-5 text-sm">
              <div className="flex items-center gap-4 text-cream/85">
                <Mail size={16} className="text-sage-soft" strokeWidth={1.5} />
                <a
                  href="mailto:contact@villa-amanjango.com"
                  className="hover:text-cream transition-colors"
                >
                  contact@villa-amanjango.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-cream/85">
                <MapPin
                  size={16}
                  className="text-sage-soft"
                  strokeWidth={1.5}
                />
                <span>28 Avenue d&apos;Augusta, 40510 Seignosse, France</span>
              </div>
              <div className="flex items-center gap-4 text-cream/85">
                <Camera
                  size={16}
                  className="text-sage-soft"
                  strokeWidth={1.5}
                />
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  @villaamanjango
                </a>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="https://www.airbnb.fr/rooms/49772524"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-cream text-anthracite text-xs tracking-[0.2em] uppercase font-medium hover:bg-cream-deep transition-colors"
              >
                Voir sur Airbnb
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-cream/40 text-cream text-xs tracking-[0.2em] uppercase font-medium hover:bg-cream hover:text-anthracite transition-colors"
              >
                Instagram
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="grid sm:grid-cols-2 gap-x-6 gap-y-7"
            >
              <Field label="Nom complet" name="name" required />
              <Field label="Adresse e-mail" name="email" type="email" required />
              <Field label="Date d'arrivée souhaitée" name="checkin" type="date" />
              <Field label="Nombre de voyageurs" name="guests" type="number" />
              <div className="sm:col-span-2">
                <Field
                  label="Votre message"
                  name="message"
                  textarea
                  required
                />
              </div>

              <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-2">
                <p className="text-xs text-cream/50 max-w-sm">
                  Vos données sont traitées de manière strictement
                  confidentielle. Aucune information n&apos;est partagée avec
                  des tiers.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-cream text-anthracite text-xs tracking-[0.2em] uppercase font-medium hover:bg-sage-soft transition-colors"
                >
                  {status === "sent" ? "Envoyé" : "Envoyer"}
                  <Send size={14} strokeWidth={1.8} />
                </button>
              </div>
              {status === "sent" && (
                <p className="sm:col-span-2 text-sm text-sage-soft">
                  Merci. Nous revenons vers vous très rapidement.
                </p>
              )}
            </form>
          </FadeIn>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-cream/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs text-cream/50">
          <p className="font-serif text-base text-cream">Villa AmanJango</p>
          <p>
            © {new Date().getFullYear()} Villa AmanJango, Seignosse, Landes.
            Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
};

function Field({ label, name, type = "text", required, textarea }: FieldProps) {
  const inputClass =
    "w-full bg-transparent border-b border-cream/30 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-cream transition-colors";

  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.25em] uppercase text-cream/60 mb-2">
        {label}
        {required && <span className="text-sage-soft ml-1">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className={inputClass}
        />
      )}
    </label>
  );
}
