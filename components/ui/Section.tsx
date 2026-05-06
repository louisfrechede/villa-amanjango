import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  align = "left",
}: SectionProps) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <section
      id={id}
      className={`px-6 sm:px-10 lg:px-16 py-24 lg:py-32 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(eyebrow || title || intro) && (
          <header className={`max-w-3xl mb-16 lg:mb-20 ${alignClass}`}>
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.3em] text-sage-deep mb-5">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-anthracite">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-6 text-lg leading-relaxed text-anthracite-soft max-w-2xl">
                {intro}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
