"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const targets =
  ".section-heading, .feature-card, .plan, .modality-card, .visit-copy, .visit-photo .photo, .included-inner, .contact-banner .container, .schedule-heading, .seasons-grid > *, .duathlon-cards > *, .gallery-grid > *";

/** One-shot compositor animations: no scroll loop, hidden content or layout changes. */
export function SectionMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !window.IntersectionObserver) return;
    const seen = new WeakSet<Element>();
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches || document.hidden) continue;
          const siblings = entry.target.parentElement
            ? [...entry.target.parentElement.children].filter((child) =>
                child.matches(targets),
              )
            : [];
          const delay =
            Math.min(Math.max(siblings.indexOf(entry.target), 0), 3) * 85;
          const animation = entry.target.animate(
            [
              {
                opacity: 0.62,
                transform: entry.target.matches(".photo")
                  ? "scale(1.035)"
                  : "translateY(28px)",
              },
              { opacity: 1, transform: "none" },
            ],
            {
              duration: 720,
              delay,
              easing: "cubic-bezier(.16,1,.3,1)",
              fill: "backwards",
            },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          animation.oncancel = () => animations.delete(animation);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );
    const main = document.querySelector("main");
    const observeElement = (element: Element) => {
      if (seen.has(element)) return;
      seen.add(element);
      observer.observe(element);
    };
    const observeContent = (root: Element) => {
      if (root.matches(targets)) observeElement(root);
      root.querySelectorAll(targets).forEach(observeElement);
    };
    if (main) observeContent(main);
    // Scan only inserted subtrees, not the entire page after every filter update.
    const mutations = new MutationObserver((records) => {
      for (const record of records)
        for (const node of record.addedNodes)
          if (node instanceof Element) observeContent(node);
    });
    if (main) mutations.observe(main, { childList: true, subtree: true });
    const cancel = () => {
      if (preference.matches || document.hidden)
        animations.forEach((animation) => animation.cancel());
    };
    preference.addEventListener("change", cancel);
    document.addEventListener("visibilitychange", cancel);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", cancel);
      document.removeEventListener("visibilitychange", cancel);
    };
  }, [pathname]);
  return null;
}
