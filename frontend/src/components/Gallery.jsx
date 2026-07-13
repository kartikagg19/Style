import React, { useMemo, useState } from "react";
import { X, Camera, PlayCircle, Filter } from "lucide-react";
import { SALON_PHOTOS } from "../mock";

// Gallery uses uploaded salon photos. You can push more images to your GitHub repo
// under /app/frontend/public/gallery/ and add entries here.
const FILTERS = ["All", "Interior", "Reception", "Retail", "Facial"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const items = useMemo(() => {
    // Repeat images with slight variations to enrich the gallery layout.
    const base = SALON_PHOTOS.map((p) => ({ ...p, type: "image" }));
    // Simulate extra shots by re-using assets with different titles
    const extras = SALON_PHOTOS.map((p, idx) => ({
      ...p,
      id: `${p.id}-extra`,
      title: ["Ambient Detail", "Warm Corners", "Tools of Craft", "Every Ritual", "Quiet Luxury"][idx],
      type: "image",
    }));
    const combined = [...base, ...extras];
    if (filter === "All") return combined;
    return combined.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[var(--es-cream-2)]/60 border-y border-[var(--es-line)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--es-mute)]">The Gallery</div>
            <h2 className="font-display text-4xl md:text-5xl mt-2">
              A visual <em className="text-[var(--es-accent)]">diary.</em>
            </h2>
            <p className="text-sm text-[var(--es-mute)] mt-3 max-w-md">
              Moments from our studio — the chairs, the light, the little details that make
              Elegant Style feel like a second home.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[var(--es-mute)] mr-2">
              <Filter className="w-3.5 h-3.5" /> Filter
            </span>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 rounded-full text-xs tracking-wide uppercase border transition-all ${
                  filter === f
                    ? "bg-[var(--es-ink)] text-[var(--es-cream)] border-[var(--es-ink)]"
                    : "bg-white/50 text-[var(--es-ink-2)] border-[var(--es-line)] hover:border-[var(--es-ink)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry */}
        <div className="mt-10 es-masonry">
          {items.map((p, idx) => (
            <button
              key={`${p.id}-${idx}`}
              onClick={() => setActive(p)}
              className="es-masonry-item group block w-full text-left"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    idx % 3 === 0 ? "aspect-[3/4]" : idx % 3 === 1 ? "aspect-[4/3]" : "aspect-square"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] opacity-90">
                    {p.type === "video" ? <PlayCircle className="w-3.5 h-3.5" /> : <Camera className="w-3.5 h-3.5" />}
                    {p.category}
                  </div>
                  <div className="font-display text-lg mt-1">{p.title}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-16 text-[var(--es-mute)] text-sm">
            No images in this category yet.
          </div>
        )}

        <p className="mt-10 text-center text-xs text-[var(--es-mute)]">
          More photos & videos coming soon. Follow us on Instagram for daily moments.
        </p>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 es-reveal"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full border border-white/20"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="max-w-5xl w-full max-h-full overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.src} alt={active.title} className="w-full h-auto max-h-[85vh] object-contain rounded-xl" />
            <div className="mt-4 text-center text-white/90">
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-70">{active.category}</div>
              <div className="font-display text-2xl mt-1">{active.title}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
