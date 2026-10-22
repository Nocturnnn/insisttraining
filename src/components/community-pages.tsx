import { ArrowUpRight } from "lucide-react";
import {
  Button,
  ContactBanner,
  Gallery,
  Hero,
  Photo,
  SectionHeading,
} from "./ui";
import { site, whatsappUrl } from "@/lib/data";
export function EventsPage() {
  const cards = [
    {
      title: "CarnaIN",
      description: "Movimento, música e comunidade em uma experiência única.",
      image: "danca",
    },
    {
      title: "Encontros da comunidade",
      description: "Conexões que fortalecem dentro e fora do treino.",
      image: "comunidade",
    },
    {
      title: "Aulas especiais",
      description: "Novas formas de viver o treino e compartilhar energia.",
      image: "pilates",
    },
  ];
  return (
    <>
      <Hero
        image="comunidade"
        eyebrow="Eventos"
        title={
          <>
            A energia vai
            <br />
            <em>além do treino.</em>
          </>
        }
        description="Mais do que uma academia, uma comunidade que se encontra, compartilha e vive experiências dentro e fora do treino."
      />
      <section className="events-intro light-section angled">
        <div className="container">
          <SectionHeading
            title={
              <>
                Momentos
                <br />
                que nos movem.
              </>
            }
            description="Nossos encontros são uma extensão daquilo que acreditamos: movimento, conexão e pessoas que escolhem evoluir juntas."
          />
          <div className="event-grid">
            {cards.map((card) => (
              <article key={card.title}>
                <div className="event-image">
                  <Photo
                    name={card.image}
                    sizes="(max-width: 600px) 100vw, 33vw"
                    alt={`Imagem ilustrativa da proposta de ${card.title}`}
                    position="70% center"
                  />
                </div>
                <div className="event-copy">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a
                    href={whatsappUrl(
                      `Olá! Gostaria de saber sobre ${card.title} e a programação da Insist.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar a equipe sobre ${card.title} (nova aba)`}
                  >
                    <ArrowUpRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="editorial-note">
            Propostas de experiências da comunidade. Consulte a equipe sobre a
            programação confirmada.
          </p>
        </div>
      </section>
      <ContactBanner
        image="home"
        title={
          <>
            Acompanhe a<br />
            programação
            <br />
            <em>no Instagram.</em>
          </>
        }
        description="Novidades e próximos encontros nos canais oficiais da Insist."
        href={site.instagram}
        label="Ver novidades"
      />
      <Gallery
        image="comunidade"
        title={
          <>
            O que nos conecta
            <br />
            <em>vai além.</em>
          </>
        }
        description="Conheça as pessoas e o espaço da Insist. As fotografias desta apresentação são ilustrativas."
      />
    </>
  );
}
export function DuathlonPage() {
  return (
    <div className="page-duathlon">
      <section className="duathlon-hero">
        <div className="duathlon-half">
          <Photo
            name="corrida"
            alt="Imagem ilustrativa de corrida ao ar livre"
            mobileName="duathlon-mobile"
            sizes="(max-width: 600px) 100vw, 1800px"
            quality={85}
            priority
          />
        </div>
        <div className="duathlon-half second">
          <Photo
            name="ciclismo"
            alt="Imagem ilustrativa de ciclismo de estrada"
            sizes="(max-width: 600px) 100vw, 1500px"
            quality={85}
          />
        </div>
        <div className="duathlon-stripe" />
        <div className="hero-shade" />
        <div className="container">
          <p className="eyebrow">Duathlon</p>
          <h1>
            Dois desafios.
            <br />
            <em>Uma só atitude.</em>
          </h1>
          <p>
            Corrida e ciclismo em uma só jornada.
            <br />
            Disciplina, superação e constância para seguir em movimento.
          </p>
          <Button
            href={whatsappUrl(
              "Olá! Gostaria de saber como participar das atividades de Duathlon da Insist.",
            )}
            external
          >
            Saiba como participar
          </Button>
        </div>
      </section>
      <section className="duathlon-intro light-section angled">
        <div className="container">
          <p className="eyebrow">Duathlon</p>
          <h2>
            Corrida <em>+</em> ciclismo<span className="blue-dot">.</span>
          </h2>
          <p>
            Duas modalidades, um mesmo propósito: ir além.
            <br />A energia da corrida e a potência do ciclismo em uma proposta
            de movimento, foco e comunidade.
          </p>
          <div className="duathlon-cards">
            {[
              {
                title: "Na corrida",
                description: "Construindo resistência, passo a passo.",
                image: "corrida",
              },
              {
                title: "No pedal",
                description: "Mais movimento, novos horizontes.",
                image: "ciclismo",
              },
            ].map((c) => (
              <article key={c.title}>
                <Photo
                  name={c.image}
                  sizes="1000px"
                  alt={`Imagem ilustrativa: ${c.title.toLowerCase()}`}
                />
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBanner
        image="corrida"
        title={
          <>
            O próximo desafio
            <br />
            começa <em>com um passo.</em>
          </>
        }
        description="O movimento é ainda mais especial quando compartilhado. Conheça essa proposta e consulte a equipe sobre os próximos encontros e as condições de participação."
        href={whatsappUrl(
          "Olá! Gostaria de saber sobre os próximos encontros de Duathlon.",
        )}
        label="Saiba como participar"
      />
      <div className="blue-callout">
        <p>Consulte a equipe sobre os próximos encontros.</p>
        <Button
          href={whatsappUrl(
            "Olá! Quero saber mais sobre o Duathlon da Insist.",
          )}
          variant="white"
          external
        >
          Falar com a Insist
        </Button>
      </div>
    </div>
  );
}
export function CircuitoPage() {
  return (
    <div className="page-circuito">
      <Hero
        image="corrida"
        eyebrow="Circuito das Estações"
        title={
          <>
            Cada estação.
            <br />
            Uma nova
            <br />
            <em>conquista.</em>
          </>
        }
      >
        <Button href="#circuito">Conhecer o circuito</Button>
      </Hero>
      <section className="seasons-section light-section angled" id="circuito">
        <div className="container">
          <SectionHeading
            title={
              <>
                Movimente-se
                <br />
                <em>o ano inteiro.</em>
              </>
            }
            description="Quatro estações, novas paisagens, a mesma energia: movimento, bem-estar e comunidade."
          />
          <div className="seasons-grid">
            {["Verão", "Outono", "Inverno", "Primavera"].map((s, i) => (
              <article className={`season season-${i}`} key={s}>
                <Photo
                  name={["corrida", "outono", "inverno", "primavera"][i]}
                  alt={`Imagem conceitual de atividade ao ar livre para ${s.toLowerCase()}`}
                  position={i === 0 ? "72% center" : `${25 + i * 22}% center`}
                />
                <div className="card-shade" />
                <h3>
                  <span aria-hidden="true">{"//"}</span>
                  {s}
                </h3>
              </article>
            ))}
          </div>
          <div className="circuito-community">
            <div>
              <Photo
                name="corrida"
                alt="Imagem ilustrativa de uma comunidade correndo ao ar livre"
              />
            </div>
            <div>
              <h2>
                Uma proposta
                <br />
                de comunidade
                <br />
                <em>em movimento.</em>
              </h2>
              <p>
                O Circuito das Estações é um convite para viver o ano de forma
                mais ativa, conectando pessoas, natureza e bem-estar. A cada
                estação, um novo cenário para fazer do movimento parte da sua
                história.
              </p>
              <p className="editorial-note">
                Apresentação conceitual. Programação, locais e participação:
                consulte a equipe.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactBanner
        image="corrida"
        title={
          <>
            Viva o<br />
            <em>próximo desafio.</em>
          </>
        }
        href={whatsappUrl(
          "Olá! Gostaria de conhecer o Circuito das Estações e saber sobre a programação oficial.",
        )}
        label="Conhecer o circuito"
      />
    </div>
  );
}
