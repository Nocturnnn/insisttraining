import { notFound } from "next/navigation";
import { ActivityView } from "@/components/activity-page";
import {
  CircuitoPage,
  DuathlonPage,
  EventsPage,
} from "@/components/community-pages";
import { activityPages } from "@/lib/pages";
import { pageMetadata } from "@/lib/data";
const routes = [
  "musculacao",
  "hiit",
  "danca",
  "pilates",
  "bike-in",
  "eventos",
  "duathlon",
  "circuito-das-estacoes",
];
export const dynamicParams = false;
export function generateStaticParams() {
  return routes.map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug in activityPages) {
    const p = activityPages[slug as keyof typeof activityPages];
    return pageMetadata(p.name, p.seo, `/${slug}`, p.image);
  }
  const meta: Record<string, [string, string, string]> = {
    eventos: [
      "Eventos e comunidade",
      "A energia vai além do treino. Conheça as propostas de encontros, CarnaIN e aulas especiais da Insist. Consulte a equipe sobre a programação.",
      "comunidade",
    ],
    duathlon: [
      "Duathlon",
      "Dois desafios, uma só atitude. Conheça a proposta de corrida e ciclismo da Insist Training e consulte a equipe para saber como participar.",
      "corrida",
    ],
    "circuito-das-estacoes": [
      "Circuito das Estações",
      "Cada estação, uma nova conquista. Conheça a proposta de movimento e comunidade ao ar livre da Insist Training. Programação a confirmar com a equipe.",
      "corrida",
    ],
  };
  const m = meta[slug];
  return m ? pageMetadata(m[0], m[1], `/${slug}`, m[2]) : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug in activityPages)
    return (
      <ActivityView
        page={activityPages[slug as keyof typeof activityPages]}
        slug={slug}
      />
    );
  if (slug === "eventos") return <EventsPage />;
  if (slug === "duathlon") return <DuathlonPage />;
  if (slug === "circuito-das-estacoes") return <CircuitoPage />;
  notFound();
}
