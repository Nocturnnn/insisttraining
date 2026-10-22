import { ActivityPage } from "@/lib/pages";
import { whatsappUrl } from "@/lib/data";
import {
  Button,
  ContactBanner,
  Gallery,
  Hero,
  Included,
  Photo,
  SectionHeading,
} from "./ui";
export function ActivityView({
  page,
  slug,
}: {
  page: ActivityPage;
  slug: string;
}) {
  return (
    <div className={`activity-page page-${slug}`}>
      <Hero
        image={page.image}
        eyebrow={page.name}
        title={
          slug === "danca" ? (
            <>
              Sinta
              <br />a música.
              <br />
              Viva o<br />
              movimento.
            </>
          ) : (
            <>
              {page.title[0]}
              <br />
              {page.title[1]}
            </>
          )
        }
        description={page.description}
      >
        <Button
          href={
            slug === "musculacao" || slug === "hiit"
              ? "/#planos"
              : `/cronograma?modalidade=${encodeURIComponent(page.name)}#aulas`
          }
        >
          {slug === "musculacao" || slug === "hiit"
            ? "Conheça os planos"
            : "Consultar horários"}
        </Button>
      </Hero>
      <section className="activity-intro light-section angled">
        <div className="container">
          <SectionHeading
            title={
              <>
                {page.introTitle[0]}
                <br />
                <em>{page.introTitle[1]}</em>
              </>
            }
            description={page.introDescription}
          />
          {slug === "bike-in" && (
            <div className="bike-detail">
              <Photo
                name="bike-detalhe"
                alt="Imagem ilustrativa de ciclismo indoor"
                position="80% center"
              />
            </div>
          )}
          <div className="feature-grid">
            {page.features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className={`feature-image feature-image-${index}`}>
                  <Photo
                    name={feature.image}
                    sizes="(max-width: 600px) 100vw, 33vw"
                    alt={`Imagem ilustrativa: ${feature.title.toLowerCase()} em ${page.name}`}
                    position={
                      feature.image === "hiit"
                        ? "28% 20%"
                        : feature.image === "home"
                          ? "70% 20%"
                          : `${45 + index * 20}% 20%`
                    }
                  />
                  {slug !== "pilates" && <h3>{feature.title}</h3>}
                </div>
                <div className="feature-copy">
                  {slug === "pilates" && <h3>{feature.title}</h3>}
                  <p>{feature.description}</p>
                  <div>
                    <span />
                    <strong>0{index + 1}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {slug === "danca" && (
        <Gallery
          image="danca"
          title={
            <>
              Nossa aula
              <br />
              em <em>movimento.</em>
            </>
          }
        />
      )}
      {slug !== "bike-in" && (
        <Included
          activity={page.name as "Dança" | "Pilates" | "Musculação" | "HIIT"}
        />
      )}
      {slug === "bike-in" && (
        <Gallery
          image="bike"
          title={
            <>
              Uma energia.
              <br />
              <em>Muitos ritmos.</em>
            </>
          }
          description="Música, movimento e o incentivo de pedalar junto. Imagens ilustrativas dessa experiência."
        />
      )}
      <ContactBanner
        image={page.image}
        title={
          <>
            {page.ctaTitle[0]}
            <br />
            <em>{page.ctaTitle[1]}</em>
          </>
        }
        description={page.ctaDescription}
        href={
          slug === "musculacao" || slug === "hiit"
            ? whatsappUrl(
                `Olá! Gostaria de saber mais sobre ${page.name} na Insist.`,
              )
            : slug === "bike-in"
              ? whatsappUrl(
                  "Olá! Gostaria de saber os horários e as condições para participar da Bike IN.",
                )
              : "/cronograma#aulas"
        }
        label={
          slug === "bike-in" || slug === "musculacao" || slug === "hiit"
            ? "Falar com a equipe"
            : "Consultar horários"
        }
      />
    </div>
  );
}
