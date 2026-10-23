"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header({ name }: { name: string }) {
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Switch to the frosted bar once the hero has scrolled up behind the header.
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Over the hero, white text with a difference blend reads on the dark photo;
  // past it, a translucent blurred bar separates the menu from the content.
  const surface = pastHero
    ? "bg-background/70 text-foreground backdrop-blur-md"
    : "text-white mix-blend-difference";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-20 animate-fade transition-[background-color] duration-300 [animation-delay:2.1s] ${surface}`}
      >
        <div className="page-x flex h-20 items-center justify-between text-xs font-medium uppercase tracking-[0.2em]">
          <a href="#top" aria-label="Back to top">
            {name}
          </a>
          <nav className="hidden gap-10 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex items-center gap-2 uppercase tracking-[0.2em] md:hidden"
          >
            Menu
            <span aria-hidden className="flex w-5 flex-col gap-1">
              <span className="h-px bg-current" />
              <span className="h-px bg-current" />
            </span>
          </button>
        </div>
      </header>

      {/* Rendered outside the header so the difference blend doesn't apply to it */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-30 flex animate-fade flex-col bg-ink text-white [animation-duration:250ms] md:hidden"
        >
          <div className="page-x flex h-20 items-center justify-between text-xs font-medium uppercase tracking-[0.2em]">
            <span>{name}</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="uppercase tracking-[0.2em]"
            >
              Close ✕
            </button>
          </div>
          <nav className="page-x flex flex-1 flex-col justify-center gap-2">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-5xl font-extrabold tracking-[-0.04em]"
              >
                <span className="eyebrow text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
