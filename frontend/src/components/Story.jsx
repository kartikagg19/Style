import React from "react";
import { Star, Heart, ShieldCheck } from "lucide-react";
import { SALON, SALON_PHOTOS } from "../mock";

export default function Story() {
  return (
    <section id="story" className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden">
            <img src={SALON_PHOTOS[3].src} alt="Visit us at Uttam Nagar" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[var(--es-cream)] border border-[var(--es-line)] rounded-2xl p-5 max-w-[240px] shadow-lg">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--es-mute)]">The Studio</div>
            <div className="font-display text-lg leading-snug mt-1">
              Right off Arya Samaj Rd, <em className="text-[var(--es-accent)]">Uttam Nagar.</em>
            </div>
            <div className="mt-2 text-xs text-[var(--es-mute)]">Just look for the ES sign ✨</div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--es-mute)] mb-4">Our Story</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Where <em className="text-[var(--es-accent)]">every detail</em>
            <br /> is a devotion.
          </h2>
          <p className="mt-6 text-[15px] md:text-base leading-relaxed text-[var(--es-ink-2)] max-w-2xl">
            Founded by {SALON.owner}, Elegant Style is a sanctuary in Uttam Nagar where
            technique meets tenderness. Our stylists — <em>{SALON.stylists.join(", ")}</em> — have
            earned a reputation for quiet, world-class artistry. Every appointment begins with
            a conversation and ends with the kind of look you’ll want to keep.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            <StoryPill icon={<Star className="w-4 h-4" />} kicker="Google" title="5.0★" sub="Highest rated in area" />
            <StoryPill icon={<Heart className="w-4 h-4" />} kicker="Guests" title={`${SALON.reviewCount}+`} sub="Beloved regulars" />
            <StoryPill icon={<ShieldCheck className="w-4 h-4" />} kicker="Welcome" title="All" sub="Woman-owned · Inclusive" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryPill({ icon, kicker, title, sub }) {
  return (
    <div className="border border-[var(--es-line)] rounded-2xl p-5 bg-white/50 backdrop-blur-sm es-lift">
      <div className="flex items-center gap-2 text-[var(--es-gold)]">
        {icon}
        <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--es-mute)]">{kicker}</span>
      </div>
      <div className="font-display text-2xl mt-2">{title}</div>
      <div className="text-xs text-[var(--es-mute)] mt-1">{sub}</div>
    </div>
  );
}
