import React, { useEffect, useState } from "react";
import { Home as HomeIcon, ScissorsSquare, CalendarCheck, Images, MessageSquareHeart } from "lucide-react";

const ITEMS = [
  { key: "top", label: "Home", icon: HomeIcon, href: "#top" },
  { key: "menu", label: "Menu", icon: ScissorsSquare, href: "#menu" },
  { key: "contact", label: "Book", icon: CalendarCheck, href: "#contact", primary: true },
  { key: "gallery", label: "Gallery", icon: Images, href: "#gallery" },
  { key: "reviews", label: "Reviews", icon: MessageSquareHeart, href: "#reviews" },
];

export default function BottomNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.45;
      let current = "top";
      for (const it of ITEMS) {
        const id = it.key;
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Bottom navigation"
      className="lg:hidden fixed bottom-3 left-3 right-3 z-40"
    >
      <div className="relative flex items-center justify-between bg-[var(--es-cream)]/95 backdrop-blur-xl border border-[var(--es-line)] rounded-full px-2 py-1.5 shadow-[0_18px_40px_-14px_rgba(26,22,19,0.35)]">
        {ITEMS.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.key;
          if (it.primary) {
            return (
              <a
                key={it.key}
                href={it.href}
                className="relative -mt-6 mx-0.5 flex flex-col items-center"
              >
                <span
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-[var(--es-cream)] shadow-[0_14px_28px_-10px_rgba(138,106,61,0.7)] ring-4 ring-[var(--es-cream)] transition-transform ${
                    isActive ? "scale-105" : ""
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, #b8895a 0%, #8a6a3d 55%, #6d5330 100%)",
                  }}
                >
                  <Icon className="w-5 h-5" />
                </span>
                <span className="mt-0.5 text-[10px] font-medium tracking-widest uppercase text-[var(--es-accent)]">
                  {it.label}
                </span>
              </a>
            );
          }
          return (
            <a
              key={it.key}
              href={it.href}
              className="flex-1 flex flex-col items-center gap-0.5 py-2 rounded-full transition-colors"
            >
              <Icon
                className={`w-4 h-4 transition-colors ${
                  isActive ? "text-[var(--es-accent)]" : "text-[var(--es-ink-2)]"
                }`}
              />
              <span
                className={`text-[9.5px] tracking-[0.18em] uppercase transition-colors ${
                  isActive ? "text-[var(--es-accent)] font-medium" : "text-[var(--es-mute)]"
                }`}
              >
                {it.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
