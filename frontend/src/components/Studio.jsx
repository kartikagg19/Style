import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SALON_PHOTOS } from "../mock";

export default function Studio() {
  const [i, setI] = useState(0);
  const STUDIO_PICS = SALON_PHOTOS.filter(p => p.category !== "Makeup");
  const total = STUDIO_PICS.length;
  const prev = () => setI((v) => (v - 1 + total) % total);
  const next = () => setI((v) => (v + 1) % total);

  return (
    <section id="studio" className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--es-mute)]">The Studio</div>
            <h2 className="font-display text-4xl md:text-5xl mt-2">
              Step <em className="text-[var(--es-accent)]">inside.</em>
            </h2>
            <p className="text-sm text-[var(--es-mute)] mt-3 max-w-md">
              A quiet luxury interior — warm wood, ambient lighting, considered detail.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-[var(--es-line)] flex items-center justify-center hover:bg-[var(--es-ink)] hover:text-[var(--es-cream)] transition-colors" aria-label="Previous">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-[var(--es-line)] flex items-center justify-center hover:bg-[var(--es-ink)] hover:text-[var(--es-cream)] transition-colors" aria-label="Next">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Featured large */}
          <div className="col-span-12 lg:col-span-8 relative aspect-[16/11] rounded-[20px] overflow-hidden">
            <img
              key={STUDIO_PICS[i].id}
              src={STUDIO_PICS[i].src}
              alt={STUDIO_PICS[i].title}
              className="w-full h-full object-cover es-reveal"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-90">Inside Elegant Style</div>
                <div className="font-display text-2xl md:text-3xl mt-1">{STUDIO_PICS[i].title}</div>
              </div>
              <div className="text-sm opacity-80">{String(i + 1).padStart(2, "0")} · {String(total).padStart(2, "0")}</div>
            </div>
          </div>

          {/* Thumbs */}
          <div className="col-span-12 lg:col-span-4 grid grid-cols-3 lg:grid-cols-2 gap-3 md:gap-4">
            {STUDIO_PICS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setI(idx)}
                className={`relative aspect-square rounded-2xl overflow-hidden group transition-all ${
                  idx === i ? "ring-2 ring-[var(--es-gold)] opacity-50" : ""
                }`}
              >
                <img src={p.src} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
