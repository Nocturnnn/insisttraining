import Link from "next/link";
import { Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { site, whatsappUrl, communityLinks } from "@/lib/data";
import { Logo } from "./ui";
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <Logo />
            <nav aria-label="Navegação do rodapé">
              <Link href="/#academia">A academia</Link>
              <Link href="/#modalidades">Modalidades</Link>
              <Link href="/cronograma">Cronograma</Link>
              <Link href="/eventos">Eventos</Link>
              <Link href="/#planos">Planos</Link>
              {communityLinks.map((a) => (
                <Link key={a.href} href={a.href}>
                  {a.name}
                </Link>
              ))}
            </nav>
            <div className="social-links">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Insist (nova aba)"
              >
                <Instagram />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Insist (nova aba)"
              >
                <MessageCircle />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Insist Training.</span>
            <span>Fotografias ilustrativas</span>
            <strong>Celebre a persistência.</strong>
          </div>
        </div>
      </footer>
      <a
        className="floating-contact"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a Insist pelo WhatsApp (nova aba)"
      >
        <MessageCircle size={23} />
        <ArrowUpRight className="floating-arrow" size={12} />
      </a>
    </>
  );
}
