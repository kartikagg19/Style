import React from "react";
import { SALON_PHOTOS } from "../mock";

export default function QuickPeek() {
  const items = [...SALON_PHOTOS, ...SALON_PHOTOS]; // duplicate for seamless marquee

  return (
    <section className="py-10 md:py-14 border-y border-[var(--es-line)] bg-[var(--es-cream-2)]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-end justify-between mb-6">
        <div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--es-mute)]">A Quick Peek</div>
          <h2 className="font-display text-3xl md:text-4xl mt-2">Wander inside our studio</h2>
        </div>
        <a href="#gallery" className="text-sm text-[var(--es-accent)] hover:text-[var(--es-ink)] transition-colors">
          See all →
        </a>
      </div>

      <div className="relative">
        <div className="flex es-marquee-track gap-4 w-max">
          {items.map((p, idx) => (
            <div key={idx} className="relative w-[280px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden group">
              <img
                src={p.src}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-90">{p.tag}</div>
                <div className="font-display text-lg">{p.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--es-cream-2)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--es-cream-2)] to-transparent" />
      </div>
    </section>
  );
}
