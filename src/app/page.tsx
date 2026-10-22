import Link from "next/link";
import { ArrowUpRight, MapPin, Clock3, Mail } from "lucide-react";
import { Button, Hero, Photo, SectionHeading } from "@/components/ui";
import { Plans } from "@/components/plans";
import {
  activities,
  communityLinks,
  mapsUrl,
  pageMetadata,
  site,
  whatsappUrl,
} from "@/lib/data";
export const metadata = pageMetadata(
  "Celebre a persistência",
  "Conheça a Insist Training em Anápolis. Musculação, dança, pilates e HIIT inclusos nos planos. Consulte horários e fale com a equipe.",
  "/",
);
export default function Home() {
  return (
    <>
      <Hero
        image="home"
        className="home-hero"
        title={
          <>
            Celebre a<br />
            <em>persistência.</em>
          </>
        }
        description="Seu espaço para evoluir todos os dias."
      >
        <Button href="#planos">Conheça os planos</Button>
      </Hero>
      <div className="modality-ribbon">
        <p>
          Musculação <span>•</span> Dança <span>•</span> Pilates <span>•</span>{" "}
          HIIT
        </p>
      </div>
      <Plans />
      <section
        id="modalidades"
        className="modalities-section dark-section angled"
      >
        <div className="container">
          <SectionHeading
            eyebrow="Modalidades"
            title={
              <>
                Treine do <em>seu jeito.</em>
              </>
            }
            description="Uma rotina com mais movimento começa com o que faz sentido para você. Encontre seu jeito de evoluir."
          />
          <div className="modality-grid">
            {activities.slice(0, 4).map((a, i) => (
              <Link
                className="modality-card"
                key={a.name}
                href={a.href}
                aria-label={`Conheça ${a.name}`}
              >
                <Photo
                  name={a.image}
                  alt={`Imagem ilustrativa de ${a.name.toLowerCase()}`}
                  position={i === 3 ? "28% center" : "70% center"}
                  sizes="(max-width: 600px) 420px, 600px"
                />
                <div className="card-shade" />
                <div className="modality-card-label">
                  <h3>{a.name}</h3>
                  <ArrowUpRight aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
          <div className="more-activities">
            <span>O movimento continua.</span>
            <Link href="/bike-in">
              Bike IN <ArrowUpRight size={16} />
            </Link>
            {communityLinks.map((a) => (
              <Link key={a.href} href={a.href}>
                {a.name}
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="academia" className="visit-section light-section">
        <div className="visit-copy">
          <p className="eyebrow">Visite nossa academia</p>
          <h2>
            Venha conhecer
            <br />a <em>Insist.</em>
          </h2>
          <p className="visit-intro">
            Um espaço para criar sua rotina, se movimentar e celebrar cada
            passo. Estamos em Anápolis, esperando por você.
          </p>
          <div className="visit-detail">
            <MapPin />
            <p>{site.address}</p>
          </div>
          <div className="visit-detail">
            <Clock3 />
            <div>
              {site.hours.map((h) => (
                <p key={h}>{h}</p>
              ))}
            </div>
          </div>
          <div className="visit-buttons">
            <Button href={whatsappUrl()} variant="green" external>
              Falar no WhatsApp
            </Button>
            <Button href={mapsUrl} variant="dark" external>
              Como chegar
            </Button>
          </div>
          <a className="email-link" href={`mailto:${site.email}`}>
            <Mail size={16} />
            {site.email}
          </a>
        </div>
        <div className="visit-photo">
          <Photo
            name="academia-marca"
            sizes="(max-width: 850px) 650px, 1200px"
            quality={85}
            alt="Imagem ilustrativa de uma recepção de academia, não representa o espaço real da Insist"
            position="60% center"
          />
          <span className="visit-photo-caption">O próximo passo é seu.</span>
        </div>
      </section>
    </>
  );
}
