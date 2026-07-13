import React, { useState } from "react";
import { Phone, MapPin, Clock, Instagram, CheckCircle2 } from "lucide-react";
import { SALON } from "../mock";
import { useToast } from "../hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", notes: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    toast({ title: "Reservation received ✨", description: "We’ll confirm your slot on WhatsApp shortly." });
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", service: "", date: "", notes: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-28 bg-[var(--es-ink)] text-[var(--es-cream)]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--es-gold-2)]">Reserve</div>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            Come as you are. <em className="text-[var(--es-gold-2)]">Leave radiant.</em>
          </h2>
          <p className="text-sm text-[var(--es-cream)]/70 mt-4 max-w-md">
            Reservations are recommended, especially on weekends. Walk-ins welcome when the studio is quieter.
          </p>

          <div className="mt-8 space-y-4">
            <InfoRow icon={<Phone className="w-4 h-4" />} label="Call" value={SALON.phone} href={`tel:${SALON.phoneRaw}`} />
            <InfoRow
              icon={<MapPin className="w-4 h-4" />}
              label="Studio"
              value={`${SALON.address.street}, ${SALON.address.area}, ${SALON.address.city} – ${SALON.address.pincode}`}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                SALON.address.street + ", " + SALON.address.area + ", " + SALON.address.city
              )}`}
            />
            <InfoRow
              icon={<Clock className="w-4 h-4" />}
              label="Hours"
              value={`Mon–Sat: ${SALON.hours.weekdays} · Sun: ${SALON.hours.sunday}`}
            />
            <InfoRow icon={<Instagram className="w-4 h-4" />} label="Follow" value="@elegantstyle_bystylist" href={SALON.socials.instagram} />
          </div>
        </div>

        <form onSubmit={submit} className="lg:col-span-7 bg-[var(--es-cream)] text-[var(--es-ink)] rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Your full name" required />
            <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="10-digit mobile" required />
            <Field label="Service" value={form.service} onChange={(v) => setForm({ ...form, service: v })} placeholder="e.g. Hair Colour" />
            <Field label="Preferred Date" type="date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} />
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-widest text-[var(--es-mute)]">Notes</label>
            <textarea
              rows={3}
              className="mt-2 w-full px-4 py-3 rounded-lg bg-white border border-[var(--es-line)] focus:outline-none focus:border-[var(--es-gold)] resize-none"
              placeholder="Any preferences or requests…"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>
          <button type="submit" className="es-btn-primary mt-6 w-full md:w-auto justify-center">
            {sent ? (<><CheckCircle2 className="w-4 h-4" /> Sent</>) : "Request Reservation"}
          </button>
        </form>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value, href }) {
  const Wrap = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex gap-4 items-start p-4 rounded-xl border border-white/10 hover:border-[var(--es-gold-2)]/60 transition-colors"
    >
      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--es-gold)]/20 text-[var(--es-gold-2)]">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--es-cream)]/60">{label}</div>
        <div className="text-sm mt-1 leading-relaxed">{value}</div>
      </div>
    </Wrap>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", required }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-[var(--es-mute)]">{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full px-4 py-2.5 rounded-lg bg-white border border-[var(--es-line)] focus:outline-none focus:border-[var(--es-gold)]"
      />
    </div>
  );
}
