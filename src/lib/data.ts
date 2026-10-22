import type { Metadata } from "next";

export const site = {
  name: "Insist Training",
  tagline: "Celebre a persistência.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") || undefined,
  whatsapp: "https://wa.me/556294486227",
  phone: "+55 62 9448-6227",
  instagram: "https://www.instagram.com/insisttraining/",
  email: "insisttraining@gmail.com",
  address:
    "Rua Engenheiro Portela, 2760, Vila Nossa Senhora D’Abadia, Anápolis – GO",
  hours: [
    "Segunda a sexta · 05h às 22h",
    "Sábado · 08h às 14h",
    "Domingo · 08h às 12h",
  ],
};
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;
export function whatsappUrl(
  message = "Olá! Gostaria de conhecer a Insist Training. Pode me ajudar?",
) {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
export type Plan = {
  name: string;
  price: string;
  installments?: number;
  featured?: boolean;
};
export const plans: Plan[] = [
  { name: "Mensal", price: "209,90" },
  { name: "Trimestral", price: "179,90", installments: 3 },
  { name: "Semestral", price: "159,90", installments: 6 },
  { name: "Anual", price: "139,90", installments: 12, featured: true },
];
export const planInclusions = "Incluso musculação, dança, pilates e HIIT.";
export function planMessage(plan: Plan) {
  const condition = plan.installments
    ? `${plan.installments}x de R$ ${plan.price}`
    : `R$ ${plan.price} por mês`;
  return `Olá! Tenho interesse no plano ${plan.name.toLowerCase()} de ${condition}. Gostaria de saber mais.`;
}
export const activities = [
  {
    name: "Musculação",
    href: "/musculacao",
    image: "home",
    description: "Seu espaço para evoluir, um treino de cada vez.",
  },
  {
    name: "Dança",
    href: "/danca",
    image: "danca",
    description: "Sinta a música. Viva o movimento.",
  },
  {
    name: "Pilates",
    href: "/pilates",
    image: "pilates",
    description: "Força, controle e equilíbrio no seu ritmo.",
  },
  {
    name: "HIIT",
    href: "/hiit",
    image: "hiit",
    description: "Movimento e intensidade para a sua rotina.",
  },
  {
    name: "Bike IN",
    href: "/bike-in",
    image: "bike",
    description: "Energia em cada giro.",
  },
];
export const communityLinks = [
  { name: "Duathlon", href: "/duathlon" },
  { name: "Circuito das Estações", href: "/circuito-das-estacoes" },
];
export const days = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
] as const;
export type Day = (typeof days)[number];
export type ClassName = "Pilates" | "Dança" | "Bike IN";
export type Lesson = { day: Day; time: string; activity: ClassName };
export const lessons: Lesson[] = [
  ...(["Segunda", "Quarta", "Sexta"] as const).flatMap((day) => [
    { day, time: "07:00", activity: "Pilates" as const },
    { day, time: "08:00", activity: "Pilates" as const },
    { day, time: "09:00", activity: "Dança" as const },
    { day, time: "17:00", activity: "Pilates" as const },
  ]),
  { day: "Segunda", time: "19:00", activity: "Bike IN" },
  { day: "Quarta", time: "19:00", activity: "Bike IN" },
  { day: "Sábado", time: "08:00", activity: "Pilates" },
  { day: "Sábado", time: "09:00", activity: "Bike IN" },
  { day: "Sábado", time: "09:00", activity: "Dança" },
];
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "home",
): Metadata {
  const base = site.url ? new URL(site.url) : undefined;
  return {
    title: { absolute: `${title} | ${site.name}` },
    description,
    ...(base ? { metadataBase: base, alternates: { canonical: path } } : {}),
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      locale: "pt_BR",
      type: "website",
      siteName: site.name,
      ...(base
        ? {
            url: new URL(path, base),
            images: [
              {
                url: `/images/${image}.webp`,
                alt: "Imagem ilustrativa da atividade",
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      ...(base ? { images: [`/images/${image}.webp`] } : {}),
    },
  };
}
