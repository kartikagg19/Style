import React, { useEffect, useState } from "react";
import { Menu as MenuIcon, X, Phone } from "lucide-react";
import { SALON } from "../mock";

const LINKS = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Studio", href: "#studio" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--es-cream)]/90 backdrop-blur-md border-b border-[var(--es-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl md:text-3xl tracking-tight text-[var(--es-ink)]">
            Elegant<span className="text-[var(--es-gold)]">.</span>Style
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-[var(--es-ink-2)] hover:text-[var(--es-gold)] transition-colors es-navlink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${SALON.phoneRaw}`} className="es-btn-ghost !py-2 !px-4 !text-xs">
            <Phone className="w-3.5 h-3.5" /> {SALON.phone}
          </a>
          <a href="#contact" className="es-btn-primary !py-2 !px-5 !text-xs">
            Reserve
          </a>
        </div>

        <button
          className="lg:hidden text-[var(--es-ink)] p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--es-cream)] border-t border-[var(--es-line)]">
          <div className="px-6 py-4 flex flex-col gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm py-2 border-b border-[var(--es-line)]/60"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href={`tel:${SALON.phoneRaw}`} className="es-btn-ghost mt-2 justify-center">
              <Phone className="w-4 h-4" /> Call {SALON.phone}
            </a>
            <a href="#contact" className="es-btn-primary justify-center">
              Reserve
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
