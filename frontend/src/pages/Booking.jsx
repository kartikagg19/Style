import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Clock,
  MapPin,
  Phone,
  Search,
  Trash2,
  X,
} from "lucide-react";
import { SALON } from "../mock";
import { BOOKING_CATEGORIES, BOOKING_GROUPS, BOOKING_SERVICES } from "../data/services";
import { useToast } from "../hooks/use-toast";

const WA_NUMBER = SALON.phoneRaw.replace(/[^0-9]/g, "");
const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function Booking() {
  const { toast } = useToast();
  const [category, setCategory] = useState(BOOKING_CATEGORIES[0]);
  const [query, setQuery] = useState("");
  const [picked, setPicked] = useState([]); // service ids, in the order tapped
  const [openGroup, setOpenGroup] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", notes: "" });
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book an Appointment · Elegant Style";
  }, []);

  const searching = query.trim().length > 0;

  // When searching we ignore the category tabs and look across the whole menu.
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return BOOKING_SERVICES.filter(
      (s) => s.name.toLowerCase().includes(q) || s.group.toLowerCase().includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => {
    return (BOOKING_GROUPS[category] || []).map((group) => ({
      group,
      items: BOOKING_SERVICES.filter((s) => s.category === category && s.group === group),
    }));
  }, [category]);

  // Open the first group of a category by default so the page never looks empty.
  useEffect(() => {
    setOpenGroup((BOOKING_GROUPS[category] || [])[0] || null);
  }, [category]);

  const selected = useMemo(
    () => picked.map((id) => BOOKING_SERVICES.find((s) => s.id === id)).filter(Boolean),
    [picked]
  );
  const total = selected.reduce((sum, s) => sum + s.price, 0);

  const toggle = (id) =>
    setPicked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const jumpToForm = () => {
    setCartOpen(false);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submit = (e) => {
    e.preventDefault();
    if (selected.length === 0) {
      toast({
        title: "No services selected",
        description: "Pick at least one service before confirming your booking.",
      });
      return;
    }

    const lines = [
      "*New Booking Request — Elegant Style*",
      "",
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.date ? `*Date:* ${form.date}` : null,
      form.time ? `*Time:* ${form.time}` : null,
      "",
      `*Services (${selected.length}):*`,
      ...selected.map((s, i) => `${i + 1}. ${s.name} — ${inr(s.price)}`),
      "",
      `*Total: ${inr(total)}*`,
      form.notes ? `\n*Notes:* ${form.notes}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer"
    );
    toast({
      title: "Opening WhatsApp ✨",
      description: "Your booking is pre-filled — just hit send and we'll confirm shortly.",
    });
  };

  return (
    <main className="min-h-screen bg-[var(--es-cream)] text-[var(--es-ink)] pb-40">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[var(--es-cream)]/95 backdrop-blur-xl border-b border-[var(--es-line)]">
        <div className="max-w-5xl mx-auto px-5 md:px-8 h-16 flex items-center gap-4">
          <Link
            to="/"
            className="w-9 h-9 shrink-0 rounded-full border border-[var(--es-line)] flex items-center justify-center hover:border-[var(--es-ink)] transition-colors"
            aria-label="Back to home"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="min-w-0">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--es-mute)]">
              Elegant Style
            </div>
            <div className="font-display text-lg leading-tight truncate">Book an appointment</div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {/* Intro */}
        <div className="pt-8 md:pt-12">
          <h1 className="font-display text-3xl md:text-5xl">
            Choose your <em className="text-[var(--es-accent)]">rituals.</em>
          </h1>
          <p className="text-sm text-[var(--es-mute)] mt-3 max-w-lg">
            Select the services you'd like, add your details, and confirm — your request goes
            straight to us on WhatsApp. Prices in INR.
          </p>
        </div>

        {/* Search */}
        <div className="mt-7 relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--es-mute)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services — facial, wax, hair colour…"
            className="w-full pl-11 pr-11 py-3.5 rounded-full bg-white border border-[var(--es-line)] text-sm focus:outline-none focus:border-[var(--es-gold)]"
          />
          {searching && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--es-mute)] hover:text-[var(--es-ink)]"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category tabs */}
        {!searching && (
          <div className="mt-5 flex flex-wrap gap-2">
            {BOOKING_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-5 py-2 rounded-full text-xs tracking-wide uppercase border transition-all ${
                  category === c
                    ? "bg-[var(--es-ink)] text-[var(--es-cream)] border-[var(--es-ink)]"
                    : "bg-transparent text-[var(--es-ink-2)] border-[var(--es-line)] hover:border-[var(--es-ink)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        {/* Service list */}
        <div className="mt-8">
          {searching ? (
            results.length ? (
              <div className="rounded-2xl border border-[var(--es-line)] bg-white/60 overflow-hidden">
                <div className="px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[var(--es-mute)] border-b border-[var(--es-line)]">
                  {results.length} {results.length === 1 ? "match" : "matches"}
                </div>
                {results.map((s) => (
                  <ServiceRow
                    key={s.id}
                    service={s}
                    showGroup
                    checked={picked.includes(s.id)}
                    onToggle={() => toggle(s.id)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-sm text-[var(--es-mute)] py-10 text-center">
                No services match “{query}”. Try a different word.
              </p>
            )
          ) : (
            <div className="space-y-3">
              {grouped.map(({ group, items }) => {
                const open = openGroup === group;
                const count = items.filter((s) => picked.includes(s.id)).length;
                return (
                  <div
                    key={group}
                    className="rounded-2xl border border-[var(--es-line)] bg-white/60 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenGroup(open ? null : group)}
                      className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-[var(--es-cream-2)]/60 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-display text-lg">{group}</div>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--es-mute)] mt-0.5">
                          {items.length} services
                          {count > 0 && (
                            <span className="text-[var(--es-accent)]"> · {count} selected</span>
                          )}
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[var(--es-mute)] transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {open && (
                      <div className="border-t border-[var(--es-line)]">
                        {items.map((s) => (
                          <ServiceRow
                            key={s.id}
                            service={s}
                            checked={picked.includes(s.id)}
                            onToggle={() => toggle(s.id)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Details form */}
        <form
          ref={formRef}
          onSubmit={submit}
          className="mt-12 scroll-mt-20 rounded-2xl bg-[var(--es-ink)] text-[var(--es-cream)] p-6 md:p-8"
        >
          <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--es-gold-2)]">
            Your details
          </div>
          <h2 className="font-display text-2xl md:text-3xl mt-2">
            Almost <em className="text-[var(--es-gold-2)]">there.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Your full name"
              required
            />
            <Field
              label="Phone"
              type="tel"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              placeholder="10-digit mobile"
              required
            />
            <Field
              label="Preferred Date"
              type="date"
              value={form.date}
              onChange={(v) => setForm({ ...form, date: v })}
            />
            <Field
              label="Preferred Time"
              type="time"
              value={form.time}
              onChange={(v) => setForm({ ...form, time: v })}
            />
          </div>

          <div className="mt-4">
            <label className="text-xs uppercase tracking-widest text-[var(--es-cream)]/60">
              Notes
            </label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Any preferences or requests…"
              className="mt-2 w-full px-4 py-3 rounded-lg bg-white text-[var(--es-ink)] border border-[var(--es-line)] focus:outline-none focus:border-[var(--es-gold)] resize-none"
            />
          </div>

          {/* Selected summary inside the form */}
          <div className="mt-6 rounded-xl border border-white/10 p-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--es-cream)]/60">
              Selected services
            </div>
            {selected.length === 0 ? (
              <p className="text-sm text-[var(--es-cream)]/70 mt-2">
                Nothing selected yet — pick your services above.
              </p>
            ) : (
              <>
                <ul className="mt-3 space-y-2">
                  {selected.map((s) => (
                    <li key={s.id} className="flex items-center gap-3 text-sm">
                      <span className="flex-1">{s.name}</span>
                      <span className="tabular-nums text-[var(--es-gold-2)]">{inr(s.price)}</span>
                      <button
                        type="button"
                        onClick={() => toggle(s.id)}
                        className="text-[var(--es-cream)]/50 hover:text-[var(--es-cream)]"
                        aria-label={`Remove ${s.name}`}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
                  <span className="text-xs uppercase tracking-widest text-[var(--es-cream)]/60">
                    Total
                  </span>
                  <span className="font-display text-2xl tabular-nums">{inr(total)}</span>
                </div>
              </>
            )}
          </div>

          <button type="submit" className="es-btn-primary mt-6 w-full justify-center">
            Confirm Booking on WhatsApp
          </button>
          <p className="text-[11px] text-[var(--es-cream)]/50 mt-3 text-center">
            Final pricing is confirmed at the studio after consultation.
          </p>
        </form>

        {/* Studio info */}
        <div className="mt-10 grid sm:grid-cols-3 gap-3 text-sm">
          <a
            href={`tel:${SALON.phoneRaw}`}
            className="flex items-center gap-3 p-4 rounded-xl border border-[var(--es-line)] hover:border-[var(--es-ink)] transition-colors"
          >
            <Phone className="w-4 h-4 text-[var(--es-accent)]" />
            {SALON.phone}
          </a>
          <div className="flex items-center gap-3 p-4 rounded-xl border border-[var(--es-line)]">
            <Clock className="w-4 h-4 text-[var(--es-accent)]" />
            {SALON.hours.weekdays}
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${SALON.address.street}, ${SALON.address.area}, ${SALON.address.city}`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl border border-[var(--es-line)] hover:border-[var(--es-ink)] transition-colors"
          >
            <MapPin className="w-4 h-4 text-[var(--es-accent)]" />
            {SALON.address.area}
          </a>
        </div>
      </div>

      {/* Sticky cart bar */}
      {selected.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40">
          {cartOpen && (
            <div className="max-w-5xl mx-auto px-3 md:px-8">
              <div className="bg-[var(--es-cream)] border border-[var(--es-line)] rounded-2xl shadow-[0_-10px_40px_-12px_rgba(26,22,19,0.35)] mb-2 max-h-[45vh] overflow-y-auto">
                <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--es-line)] sticky top-0 bg-[var(--es-cream)]">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--es-mute)]">
                    {selected.length} selected
                  </span>
                  <button
                    onClick={() => setPicked([])}
                    className="text-[11px] uppercase tracking-[0.2em] text-[var(--es-mute)] hover:text-[var(--es-accent)] flex items-center gap-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear
                  </button>
                </div>
                {selected.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center gap-3 px-5 py-3 border-b border-dashed border-[var(--es-line)] last:border-0"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{s.name}</div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--es-mute)]">
                        {s.group}
                      </div>
                    </div>
                    <span className="tabular-nums text-sm">{inr(s.price)}</span>
                    <button
                      onClick={() => toggle(s.id)}
                      className="text-[var(--es-mute)] hover:text-[var(--es-ink)]"
                      aria-label={`Remove ${s.name}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-[var(--es-ink)] text-[var(--es-cream)] border-t border-white/10">
            <div className="max-w-5xl mx-auto px-5 md:px-8 py-3 flex items-center gap-4">
              <button
                onClick={() => setCartOpen((v) => !v)}
                className="flex-1 text-left min-w-0"
                aria-expanded={cartOpen}
              >
                <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--es-cream)]/60 flex items-center gap-1.5">
                  {selected.length} {selected.length === 1 ? "service" : "services"}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${cartOpen ? "" : "rotate-180"}`}
                  />
                </div>
                <div className="font-display text-xl tabular-nums leading-tight">{inr(total)}</div>
              </button>
              <button onClick={jumpToForm} className="es-btn-primary !py-2.5 shrink-0">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ServiceRow({ service, checked, onToggle, showGroup }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full flex items-center gap-4 px-5 py-3.5 text-left border-b border-dashed border-[var(--es-line)] last:border-0 transition-colors ${
        checked ? "bg-[var(--es-gold)]/10" : "hover:bg-[var(--es-cream-2)]/60"
      }`}
    >
      <span
        className={`w-5 h-5 shrink-0 rounded-md border flex items-center justify-center transition-colors ${
          checked
            ? "bg-[var(--es-accent)] border-[var(--es-accent)] text-white"
            : "border-[var(--es-line)] bg-white"
        }`}
      >
        {checked && <Check className="w-3.5 h-3.5" />}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-sm md:text-base">{service.name}</span>
        {showGroup && (
          <span className="block text-[10px] uppercase tracking-[0.18em] text-[var(--es-mute)] mt-0.5">
            {service.category} · {service.group}
          </span>
        )}
      </span>
      <span className="font-display text-lg tabular-nums shrink-0">{inr(service.price)}</span>
    </button>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", required }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-[var(--es-cream)]/60">{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full px-4 py-2.5 rounded-lg bg-white text-[var(--es-ink)] border border-[var(--es-line)] focus:outline-none focus:border-[var(--es-gold)]"
      />
    </div>
  );
}
