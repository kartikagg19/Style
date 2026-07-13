import React from "react";
import { Phone, MapPin, Star, ArrowRight, Sparkles } from "lucide-react";
import { SALON, HERO_STOREFRONT } from "../mock";

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-6 relative z-10">
            <div className="flex items-center gap-3 mb-6 es-reveal">
              <span className="es-divider" />
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--es-mute)]">
                Est. {SALON.established} · Uttam Nagar
              </span>
            </div>

            <h1
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight es-reveal"
              style={{ animationDelay: "0.05s" }}
            >
              Refined.
              <br />
              <span className="italic text-[var(--es-accent)]">Radiant.</span>
              <br />
              Yours.
            </h1>

            <p
              className="mt-6 text-[15px] md:text-base leading-relaxed text-[var(--es-ink-2)] max-w-lg es-reveal"
              style={{ animationDelay: "0.15s" }}
            >
              Delhi’s beloved luxury makeup studio & unisex salon by
              <span className="italic"> {SALON.owner}</span> — crafting bespoke
              rituals for hair, face, and skin since {SALON.established}.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3 es-reveal"
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
              className="mt-12 grid grid-cols-3 gap-6 max-w-md es-reveal"
              style={{ animationDelay: "0.35s" }}
            >
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-display text-3xl">{SALON.rating.toFixed(1)}</span>
                  <Star className="w-4 h-4 fill-[var(--es-gold)] text-[var(--es-gold)]" />
                </div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--es-mute)] mt-1">
                  Rated
                </div>
              </div>
              <div>
                <div className="font-display text-3xl">{SALON.reviewCount}</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--es-mute)] mt-1">
                  Reviews
                </div>
              </div>
              <div>
                <div className="font-display text-3xl">{SALON.yearsOperating}+</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--es-mute)] mt-1">
                  Years
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div
              className="mt-8 flex flex-wrap gap-3 es-reveal"
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

          {/* Right — image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden es-reveal" style={{ animationDelay: "0.1s" }}>
              <img
                src={HERO_STOREFRONT}
                alt="Elegant Style salon interior"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] opacity-80">The Studio</div>
                  <div className="font-display text-xl mt-1">Uttam Nagar, New Delhi</div>
                </div>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs">
                  <Sparkles className="w-3.5 h-3.5" /> Bespoke
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-[var(--es-cream)] border border-[var(--es-line)] rounded-2xl p-4 shadow-xl es-reveal" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[var(--es-gold)] text-[var(--es-gold)]" />
                  ))}
                </div>
                <div className="text-xs text-[var(--es-mute)]">Google · 238 reviews</div>
              </div>
              <div className="font-display text-lg mt-1">“A true five-star ritual.”</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
