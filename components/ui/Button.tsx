import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

type AsButton = CommonProps & {
  href?: undefined;
} & Omit<ComponentProps<"button">, "className" | "children">;

const styles: Record<Variant, string> = {
  primary:
    "bg-anthracite text-cream hover:bg-anthracite-soft border border-anthracite",
  outline:
    "bg-transparent text-anthracite hover:bg-anthracite hover:text-cream border border-anthracite",
  ghost:
    "bg-transparent text-anthracite hover:text-sage-deep border border-transparent",
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm tracking-[0.18em] uppercase font-medium transition-all duration-300 ease-out rounded-none";

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", className = "", children } = props;
  const cls = `${base} ${styles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  const { href: _omit, ...rest } = props as AsButton;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
