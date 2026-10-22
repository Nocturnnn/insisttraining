import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className="logo" href="/" aria-label="Insist Training — início">
      <svg
        viewBox="0 0 65 44"
        aria-hidden="true"
        className={light ? "monogram white" : "monogram"}
      >
        <path
          d="M2 39 20 8h9L11 39zm19 0L43 1h10L41 23 56 1h9L43 39h-9l5-16-9 16z"
          fill="currentColor"
        />
      </svg>
      <span>INSIST</span>
    </Link>
  );
}
export function Button({
  children,
  href,
  variant = "blue",
  external = false,
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "blue" | "dark" | "white" | "outline" | "green";
  external?: boolean;
  className?: string;
}) {
  const content = (
    <>
      {children}
      {external ? (
        <ArrowUpRight size={19} aria-hidden="true" />
      ) : (
        <ArrowRight size={19} aria-hidden="true" />
      )}
    </>
  );
  const props = { className: `button button-${variant} ${className}` };
  return external ? (
    <a href={href} {...props} target="_blank" rel="noopener noreferrer">
      {content}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  ) : (
    <Link href={href} {...props}>
      {content}
    </Link>
  );
}
