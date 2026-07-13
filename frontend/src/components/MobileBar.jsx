import React from "react";
import { Phone, CalendarCheck } from "lucide-react";
import { SALON } from "../mock";

// Sticky mobile-only action bar at the bottom for quick call / reserve.
export default function MobileBar() {
  return (
    <div className="lg:hidden fixed bottom-3 left-3 right-3 z-40">
      <div className="flex items-center gap-2 bg-[var(--es-ink)] text-[var(--es-cream)] rounded-full p-1.5 shadow-2xl border border-white/10">
        <a
          href={`tel:${SALON.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full hover:bg-white/10 transition-colors text-xs uppercase tracking-widest"
        >
          <Phone className="w-4 h-4 text-[var(--es-gold-2)]" />
          Call
        </a>
        <div className="w-px h-6 bg-white/15" />
        <a
          href="https://elegantstylebyupasanarajput.com/4YaE8IZa7dNNv8xkeU8F/OfUAwzr9mme0LbQjTWx3/booking/" target="_blank" rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-[var(--es-gold)] text-[var(--es-ink)] font-medium text-xs uppercase tracking-widest hover:bg-[var(--es-gold-2)] transition-colors"
        >
          <CalendarCheck className="w-4 h-4" />
          Book
        </a>
      </div>
    </div>
  );
}
