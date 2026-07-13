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

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
        {/* Top kicker */}
        <div className="flex items-center gap-3 mb-5 md:mb-6 es-reveal">
          <span className="es-divider" />
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[var(--es-mute)]">
            Est. {SALON.established} · Unisex Salon · Uttam Nagar
          </span>
        </div>

        {/* Mobile-first stacked layout, desktop 2-col */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 lg:order-1 order-2 relative z-10">
            <h1
              className="font-display text-[3.25rem] leading-[1.02] md:text-7xl lg:text-[5.5rem] tracking-tight es-reveal"
              style={{ animationDelay: "0.05s" }}
            >
              Refined.
              <br />
              <span className="italic text-[var(--es-accent)]">Radiant.</span>
              <br />
              Yours.
            </h1>

            <p
              className="mt-5 md:mt-6 text-[15px] leading-relaxed text-[var(--es-ink-2)] max-w-lg es-reveal"
              style={{ animationDelay: "0.15s" }}
            >
              Delhi’s beloved luxury makeup studio & unisex salon by
              <span className="italic"> {SALON.owner}</span> — crafting bespoke
              rituals for hair, face, and skin since {SALON.established}.
            </p>

            <div
              className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 es-reveal"
              style={{ animationDelay: "0.25s" }}
            >
              <a href="#contact" className="es-btn-primary">
                Reserve <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#menu" className="es-btn-ghost">
                Explore Menu
              </a>
            </div>

            {/* Stats */}
            <div
              className="mt-8 md:mt-12 grid grid-cols-3 gap-4 md:gap-6 max-w-md es-reveal"
              style={{ animationDelay: "0.35s" }}
            >
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-display text-2xl md:text-3xl">{SALON.rating.toFixed(1)}</span>
                  <Star className="w-4 h-4 fill-[var(--es-gold)] text-[var(--es-gold)]" />
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--es-mute)] mt-1">
                  Rated
                </div>
              </div>
              <div>
                <div className="font-display text-2xl md:text-3xl">{SALON.reviewCount}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--es-mute)] mt-1">
                  Reviews
                </div>
              </div>
              <div>
                <div className="font-display text-2xl md:text-3xl">{SALON.yearsOperating}+</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--es-mute)] mt-1">
                  Years
                </div>
              </div>
            </div>

            {/* Quick actions — hidden on very small since we have sticky bar */}
            <div
              className="mt-6 hidden sm:flex flex-wrap gap-3 es-reveal"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href={`tel:${SALON.phoneRaw}`}
                className="flex items-center gap-3 px-4 py-3 rounded-full border border-[var(--es-line)] bg-white/40 hover:bg-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--es-gold)]" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-[var(--es-mute)]">Call</div>
                  <div className="text-sm font-medium">{SALON.phone}</div>
                </div>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  SALON.address.street + ", " + SALON.address.area + ", " + SALON.address.city
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-full border border-[var(--es-line)] bg-white/40 hover:bg-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[var(--es-gold)]" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-[var(--es-mute)]">Directions</div>
                  <div className="text-sm font-medium">{SALON.address.area}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Storefront image — dominant on mobile */}
          <div className="lg:col-span-6 lg:order-2 order-1 relative">
            <div
              className={`relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[20px] overflow-hidden group ${
                mounted ? "es-kenburns" : ""
              }`}
            >
              <img
                src={HERO_STOREFRONT}
                alt="Elegant Style storefront — Unisex Salon by Upasana Rajput"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              {/* Top corner badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/85 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] text-[var(--es-ink)]">
                <Sparkles className="w-3 h-3 text-[var(--es-gold)]" /> Bespoke Rituals
              </div>
              {/* Bottom info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white pointer-events-none">
                <div className="max-w-[55%] md:max-w-none">
                  <div className="text-[10px] uppercase tracking-[0.3em] opacity-85">The Studio</div>
                  <div className="font-display text-lg md:text-2xl mt-0.5 leading-tight">Elegant Style</div>
                  <div className="text-[11px] opacity-80">by {SALON.owner}</div>
                </div>
                <a
                  href={SALON.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="pointer-events-auto w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center hover:bg-white hover:text-[var(--es-ink)] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Floating rating card */}
            <div
              className="mt-4 lg:mt-0 lg:absolute lg:-bottom-5 lg:-left-6 lg:max-w-[240px] bg-[var(--es-cream)] border border-[var(--es-line)] rounded-2xl p-3.5 md:p-4 shadow-xl es-reveal"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[var(--es-gold)] text-[var(--es-gold)]" />
                  ))}
                </div>
                <div className="text-[10px] md:text-xs text-[var(--es-mute)]">Google · 238 reviews</div>
              </div>
              <div className="font-display text-base md:text-lg mt-1 leading-tight">“A true five-star ritual.”</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
