import Image, { getImageProps } from "next/image";
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
export function Photo({
  name,
  alt,
  className = "",
  priority = false,
  position,
  sizes = "100vw",
  quality = 75,
  mobileName,
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
  position?: string;
  sizes?: string;
  quality?: 75 | 85;
  mobileName?: string;
}) {
  const photo = (
    <Image
      src={`/images/${name}.webp`}
      alt={alt}
      fill
      sizes={sizes}
      quality={quality}
      className={`photo ${className}`}
      style={position ? { objectPosition: position } : undefined}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
  if (!mobileName) return photo;
  const mobile = getImageProps({
    src: `/images/${mobileName}.webp`,
    alt,
    fill: true,
    sizes: "100vw",
    quality,
  }).props;
  return (
    <picture className="responsive-photo">
      <source media="(max-width: 600px)" srcSet={mobile.srcSet} sizes="100vw" />
      {photo}
    </picture>
  );
}
export function Hero({
  image,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`hero ${className}`}>
      <div className="hero-media">
        <Photo name={image} alt="" priority quality={85} sizes="100vw" />
      </div>
      <div className="hero-shade" />
      <div className="container hero-content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="hero-description">{description}</p>}
        {children}
      </div>
    </section>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`section-heading ${className}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
export function Gallery({
  image,
  title = (
    <>
      Nossa energia
      <br />
      em <em>movimento.</em>
    </>
  ),
  description = "Um convite para se movimentar, se conectar e fazer parte. Conheça essa energia de perto.",
}: {
  image: string;
  title?: ReactNode;
  description?: string;
}) {
  return (
    <section className="gallery-section dark-section angled">
      <div className="container">
        <SectionHeading title={title} description={description} />
        <div className="gallery-grid">
          <div>
            <Photo
              name={image}
              alt="Cena ilustrativa da atividade em grupo"
              position="65% center"
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </div>
          <div>
            <Photo
              name={image === "danca" ? "comunidade" : image}
              alt="Imagem ilustrativa de uma experiência coletiva"
              position="right center"
              sizes="(max-width: 600px) 400px, 50vw"
            />
          </div>
          <div>
            <Photo
              name={
                image === "danca"
                  ? "danca-retrato"
                  : image === "bike"
                    ? "bike-detalhe"
                    : "danca-retrato"
              }
              alt="Detalhe ilustrativo de movimento e conexão"
              position="35% center"
              sizes="(max-width: 600px) 400px, 50vw"
            />
          </div>
        </div>
        <p className="image-note">
          Imagens ilustrativas. Venha conhecer a Insist de perto.
        </p>
      </div>
    </section>
  );
}
export function Included({
  activity,
}: {
  activity: "Dança" | "Pilates" | "Musculação" | "HIIT";
}) {
  return (
    <section className="included angled">
      <div className="container included-inner">
        <h2>
          {activity} inclus
          {activity === "Dança" || activity === "Musculação" ? "a" : "o"}
          <br />
          nos planos.
        </h2>
        <div>
          <p>
            Musculação, dança, pilates e HIIT inclusos em todos os planos. Mais
            possibilidades para o seu bem-estar.
          </p>
          <Button href="/#planos" variant="outline">
            Conheça os planos
          </Button>
        </div>
      </div>
    </section>
  );
}
export function ContactBanner({
  image,
  title,
  description,
  href,
  label,
}: {
  image: string;
  title: ReactNode;
  description?: string;
  href: string;
  label: string;
}) {
  return (
    <section className="contact-banner">
      <div className="banner-media">
        <Photo name={image} alt="" quality={85} sizes="100vw" />
      </div>
      <div className="hero-shade" />
      <div className="container">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <Button href={href} external={href.startsWith("https://")}>
          {label}
        </Button>
      </div>
    </section>
  );
}
