import React from "react";
import { SALON } from "../mock";

export default function Footer() {
  return (
    <footer className="bg-[var(--es-cream-2)] border-t border-[var(--es-line)] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl">
          Elegant<span className="text-[var(--es-gold)]">.</span>Style
        </div>
        <div className="text-xs text-[var(--es-mute)] text-center">
          © {new Date().getFullYear()} Elegant Style by {SALON.owner}. All rights reserved.
        </div>
        <div className="text-xs text-[var(--es-mute)]">Uttam Nagar · New Delhi</div>
      </div>
    </footer>
  );
}
