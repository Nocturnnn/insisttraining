import { Hero, ContactBanner } from "@/components/ui";
import { Schedule } from "@/components/schedule";
import { pageMetadata, whatsappUrl } from "@/lib/data";
export const metadata = pageMetadata(
  "Cronograma de aulas",
  "Encontre seu ritmo na Insist. Consulte a grade parcial de Pilates, dança e Bike IN e confirme a programação completa com a equipe.",
  "/cronograma",
  "pilates",
);
export default function SchedulePage() {
  return (
    <>
      <Hero
        image="pilates"
        className="schedule-hero"
        title={
          <>
            Seu ritmo.
            <br />
            Sua rotina.
          </>
        }
        description="Encontre sua próxima aula."
      />
      <Schedule />
      <ContactBanner
        image="comunidade"
        title={
          <>
            Encontre tempo
            <br />
            para <em>você.</em>
          </>
        }
        href={whatsappUrl(
          "Olá! Gostaria de encontrar uma aula para a minha rotina.",
        )}
        label="Falar com a equipe"
      />
    </>
  );
}
