import React, { useEffect, useState } from "react";
import { Phone, MapPin, Star, ArrowRight, Sparkles, Instagram } from "lucide-react";
import { SALON, HERO_STOREFRONT } from "../mock";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative pt-20 md:pt-28 pb-10 md:pb-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 -left-24 w-72 h-72 bg-[var(--es-gold)]/10 rounded-full blur-3xl es-float" />
        <div className="absolute bottom-10 -right-16 w-96 h-96 bg-[var(--es-gold-2)]/10 rounded-full blur-3xl es-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative">
        {/* Desktop kicker */}
        <div className="hidden md:flex items-center gap-3 mb-6 es-reveal">
          <span className="es-divider" />
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--es-mute)]">
            Est. {SALON.established} · Unisex Salon · Uttam Nagar
          </span>
        </div>

        {/* Layout: on mobile image is a hero-card with overlaid text. On desktop it's a 2-col grid. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Storefront image with overlays */}
          <div className="lg:col-span-6 lg:order-2 relative">
            <div
              className={`relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_30px_60px_-30px_rgba(26,22,19,0.5)] ${
                mounted ? "es-kenburns" : ""
              }`}
            >
              <img
                src={HERO_STOREFRONT}
                alt="Elegant Style storefront — Unisex Salon by Upasana Rajput"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Rich gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />

              {/* Top-left EST pill */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/55 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.3em] text-white">
                <Sparkles className="w-3 h-3 text-[var(--es-gold-2)]" /> Est. {SALON.established}
              </div>
              {/* Top-right rating pill */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-[var(--es-line)] px-3 py-1.5 rounded-full text-[11px] font-medium text-[var(--es-ink)]">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[var(--es-gold)] text-[var(--es-gold)]" />
                  ))}
                </div>
                <span>{SALON.rating.toFixed(1)}</span>
              </div>

              {/* Location marker — subtle mid label */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 text-center text-white/85 text-[10px] tracking-[0.5em] uppercase whitespace-nowrap">
                {SALON.address.area} · New Delhi
              </div>

              {/* Bottom overlaid headline (mobile-first) */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h1 className="font-display text-[2.6rem] leading-[1.02] md:text-6xl lg:text-[5.5rem] tracking-tight">
                  Refined.
                  <span className="italic text-[var(--es-gold-2)]"> Radiant.</span>
                  <br />
                  Yours.
                </h1>
              </div>

              {/* Instagram floating */}
              <a
                href={SALON.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-5 right-5 md:hidden w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-[var(--es-ink)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Copy — below image on mobile, left column on desktop */}
          <div className="lg:col-span-6 lg:order-1 relative z-10">
            {/* Desktop-only extra big headline (mobile uses overlay above) */}
            <h2
              className="hidden lg:block font-display text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight es-reveal"
              style={{ animationDelay: "0.05s" }}
            >
              Refined.
              <br />
              <span className="italic text-[var(--es-accent)]">Radiant.</span>
              <br />
              Yours.
            </h2>

            <p
              className="mt-1 md:mt-6 text-[14.5px] md:text-base leading-relaxed text-[var(--es-ink-2)] max-w-lg es-reveal"
              style={{ animationDelay: "0.15s" }}
            >
              Delhi’s beloved luxury makeup studio & unisex salon by
              <span className="italic"> {SALON.owner}</span> — crafting bespoke
              rituals for hair, face, and skin since {SALON.established}.
            </p>

            <div
              className="mt-5 md:mt-8 grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center md:gap-3 es-reveal"
              style={{ animationDelay: "0.25s" }}
            >
              <a href="#contact" className="es-btn-primary justify-center">
                Reserve <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#menu" className="es-btn-ghost justify-center">
                Explore Menu
              </a>
            </div>

            {/* Stats */}
            <div
              className="mt-6 md:mt-12 grid grid-cols-3 gap-3 md:gap-6 max-w-md es-reveal"
              style={{ animationDelay: "0.35s" }}
            >
              <Stat value={SALON.rating.toFixed(1)} suffix={<Star className="w-3.5 h-3.5 fill-[var(--es-gold)] text-[var(--es-gold)] inline" />} label="Rated" />
              <Stat value={SALON.reviewCount} label="Reviews" />
              <Stat value={`${SALON.yearsOperating}+`} label="Years" />
            </div>

            {/* Call & Directions pills */}
            <div
              className="mt-5 md:mt-6 grid grid-cols-2 gap-2.5 md:flex md:flex-wrap md:gap-3 es-reveal"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href={`tel:${SALON.phoneRaw}`}
                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full border border-[var(--es-line)] bg-white/70 hover:bg-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--es-gold)]" />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[var(--es-mute)]">Call</div>
                  <div className="text-[13px] font-medium">{SALON.phone}</div>
                </div>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  SALON.address.street + ", " + SALON.address.area + ", " + SALON.address.city
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full border border-[var(--es-line)] bg-white/70 hover:bg-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[var(--es-gold)]" />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[var(--es-mute)]">Directions</div>
                  <div className="text-[13px] font-medium">{SALON.address.area}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, suffix }) {
  return (
    <div>
      <div className="flex items-center gap-1">
        <span className="font-display text-2xl md:text-3xl">{value}</span>
        {suffix}
      </div>
      <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--es-mute)] mt-0.5">{label}</div>
    </div>
  );
}
