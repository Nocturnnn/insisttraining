import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionMotion } from "@/components/section-motion";
import "./globals.css";
import "./composition.css";
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Insist Training — Celebre a persistência",
    template: "%s | Insist Training",
  },
  description:
    "Seu espaço para evoluir todos os dias em Anápolis. Conheça as modalidades, consulte os horários e encontre seu plano na Insist Training.",
  applicationName: "Insist Training",
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#101114" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${inter.variable}`}
    >
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <SectionMotion />
        <Footer />
      </body>
    </html>
  );
}
