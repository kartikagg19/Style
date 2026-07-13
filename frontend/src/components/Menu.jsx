import React, { useMemo, useState } from "react";
import { Clock } from "lucide-react";
import { SERVICES, CATEGORIES } from "../mock";

export default function Menu() {
  const [active, setActive] = useState("All");

  const list = useMemo(() => {
    if (active === "All") return SERVICES;
    return SERVICES.filter((s) => s.category === active);
  }, [active]);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[var(--es-cream-2)]/50 border-y border-[var(--es-line)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--es-mute)]">The Menu</div>
            <h2 className="font-display text-4xl md:text-5xl mt-2">
              Curated <em className="text-[var(--es-accent)]">rituals.</em>
            </h2>
            <p className="text-sm text-[var(--es-mute)] mt-3 max-w-md">
              Hair, face, and everything in between — priced honestly. Prices in INR.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-xs tracking-wide uppercase border transition-all ${
                  active === c
                    ? "bg-[var(--es-ink)] text-[var(--es-cream)] border-[var(--es-ink)]"
                    : "bg-transparent text-[var(--es-ink-2)] border-[var(--es-line)] hover:border-[var(--es-ink)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-2">
          {list.map((s) => (
            <div
              key={s.id}
              className="group flex items-baseline gap-4 py-4 border-b border-dashed border-[var(--es-line)]"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg md:text-xl group-hover:text-[var(--es-accent)] transition-colors">
                    {s.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--es-mute)]">
                    {s.category}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--es-mute)] mt-1">
                  <Clock className="w-3 h-3" /> {s.duration}
                </div>
              </div>

              <div className="flex-1 border-b border-dotted border-[var(--es-line)] hidden md:block mx-2" />

              <div className="font-display text-xl md:text-2xl tabular-nums">
                ₹{s.price.toLocaleString("en-IN")}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="es-btn-primary">Reserve an appointment</a>
        </div>
      </div>
    </section>
  );
}
