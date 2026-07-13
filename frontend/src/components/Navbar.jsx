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
          ? "bg-[var(--es-cream)]/95 backdrop-blur-md border-b border-[var(--es-line)]"
          : "bg-[var(--es-cream)]/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo block — mobile shows Es badge + brand column */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="lg:hidden w-9 h-9 rounded-lg bg-[var(--es-ink)] text-[var(--es-cream)] font-display italic text-lg flex items-center justify-center leading-none shadow-md">
            E<span className="text-[var(--es-gold-2)] -ml-0.5">s</span>
          </span>
          <span className="hidden lg:block font-display text-2xl md:text-3xl tracking-tight text-[var(--es-ink)]">
            Elegant<span className="text-[var(--es-gold)]">.</span>Style
          </span>
          <span className="lg:hidden flex flex-col leading-none">
            <span className="font-display text-base tracking-[0.12em] text-[var(--es-ink)]">ELEGANT STYLE</span>
            <span className="text-[9px] tracking-[0.28em] text-[var(--es-mute)] mt-0.5">BY UPASANA RAJPUT</span>
          </span>
        </a>

        {/* Desktop nav */}
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

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${SALON.phoneRaw}`} className="es-btn-ghost !py-2 !px-4 !text-xs">
            <Phone className="w-3.5 h-3.5" /> {SALON.phone}
          </a>
          <a href="#contact" className="es-btn-primary !py-2 !px-5 !text-xs">
            Reserve
          </a>
        </div>

        {/* Mobile actions — phone circle + menu */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={`tel:${SALON.phoneRaw}`}
            aria-label="Call salon"
            className="w-10 h-10 rounded-full border border-[var(--es-line)] bg-white/70 flex items-center justify-center text-[var(--es-ink)] hover:bg-white transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            className="w-10 h-10 rounded-full border border-[var(--es-line)] bg-white/70 flex items-center justify-center text-[var(--es-ink)] hover:bg-white transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-[var(--es-cream)] border-t border-[var(--es-line)]">
          <div className="px-5 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm py-3 border-b border-[var(--es-line)]/60 flex items-center justify-between"
                onClick={() => setOpen(false)}
              >
                <span>{l.label}</span>
                <span className="text-[var(--es-gold)]">→</span>
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="es-btn-primary justify-center mt-4">
              Reserve Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
