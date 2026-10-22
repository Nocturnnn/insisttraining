"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { activities, communityLinks, whatsappUrl } from "@/lib/data";
import { Logo } from "./ui";

export function Header() {
  const path = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  function close() {
    dialog.current?.close();
    setOpen(false);
    trigger.current?.focus();
  }
  const nav = (
    <>
      <Link href="/#academia" onClick={close}>
        A academia
      </Link>
      <details
        className="nav-dropdown"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.currentTarget.open = false;
            e.currentTarget.querySelector("summary")?.focus();
          }
        }}
      >
        <summary
          className={
            activities.some((a) => a.href === path) ||
            communityLinks.some((a) => a.href === path)
              ? "active"
              : ""
          }
        >
          Modalidades <ChevronDown size={13} />
        </summary>
        <div className="dropdown-panel">
          <p>Seu jeito de treinar</p>
          {activities.map((a) => (
            <Link
              key={a.name}
              href={a.href}
              onClick={(e) => {
                e.currentTarget.closest("details")?.removeAttribute("open");
                close();
              }}
            >
              {a.name}
            </Link>
          ))}
          <p>Atividades & comunidade</p>
          {communityLinks.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              onClick={(e) => {
                e.currentTarget.closest("details")?.removeAttribute("open");
                close();
              }}
            >
              {a.name}
            </Link>
          ))}
        </div>
      </details>
      <Link
        className={path === "/cronograma" ? "active" : ""}
        aria-current={path === "/cronograma" ? "page" : undefined}
        href="/cronograma"
        onClick={close}
      >
        Cronograma
      </Link>
      <Link
        className={path === "/eventos" ? "active" : ""}
        aria-current={path === "/eventos" ? "page" : undefined}
        href="/eventos"
        onClick={close}
      >
        Eventos
      </Link>
      <Link href="/#planos" onClick={close}>
        Planos
      </Link>
    </>
  );
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav aria-label="Navegação principal" className="desktop-nav">
          {nav}
        </nav>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="header-contact"
        >
          Fale com a Insist <ArrowUpRight size={17} />
          <span className="sr-only"> no WhatsApp (nova aba)</span>
        </a>
        <button
          className="menu-toggle"
          ref={trigger}
          aria-label="Abrir menu"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => {
            dialog.current?.showModal();
            setOpen(true);
          }}
        >
          <Menu />
        </button>
      </div>
      <dialog
        id="mobile-menu"
        ref={dialog}
        className="mobile-dialog"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-label="Menu de navegação"
      >
        <div className="mobile-dialog-inner">
          <div className="mobile-menu-heading">
            <Logo />
            <button aria-label="Fechar menu" onClick={close}>
              <X />
            </button>
          </div>
          <nav aria-label="Navegação mobile">{nav}</nav>
          <a
            className="button button-blue"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com a Insist <ArrowUpRight size={18} />
            <span className="sr-only"> (nova aba)</span>
          </a>
          <p className="mobile-tagline">Celebre a persistência.</p>
        </div>
      </dialog>
    </header>
  );
}
