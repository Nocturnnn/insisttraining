"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** One observer, no scroll listeners, and no hidden content or hydration layout shift. */
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
          if (preference.matches) continue;
          const animation = entry.target.animate(
            [
              { opacity: 0.94, transform: "translateY(8px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 460, easing: "cubic-bezier(.2,.65,.3,1)" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
      },
      { threshold: 0.12 },
    );
    const main = document.querySelector("main");
    const observeContent = () =>
      main
        ?.querySelectorAll(
          ".section-heading, .feature-card, .plan, .modality-card, .visit-copy, .visit-photo, .included-inner, .contact-banner .container, .schedule-heading, .seasons-grid, .duathlon-cards",
        )
        .forEach((element) => {
          if (!seen.has(element)) {
            seen.add(element);
            observer.observe(element);
          }
        });
    observeContent();
    const mutations = new MutationObserver(observeContent);
    if (main) mutations.observe(main, { childList: true, subtree: true });
    const cancel = () => {
      if (preference.matches)
        animations.forEach((animation) => animation.cancel());
    };
    preference.addEventListener("change", cancel);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", cancel);
    };
  }, [pathname]);
  return null;
}
