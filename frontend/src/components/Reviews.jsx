import React, { useEffect, useState } from "react";
import { Star, Quote, Plus, X, Send } from "lucide-react";
import { SEED_REVIEWS } from "../mock";
import { useToast } from "../hooks/use-toast";

const STORAGE_KEY = "es_reviews";

export default function Reviews() {
  const { toast } = useToast();
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      setReviews([...saved, ...SEED_REVIEWS]);
    } catch {
      setReviews(SEED_REVIEWS);
    }
  }, []);

  const handleSubmit = (review) => {
    const withMeta = {
      ...review,
      id: `r-${Date.now()}`,
      date: "Just now",
    };
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const updated = [withMeta, ...saved];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setReviews([withMeta, ...reviews]);
    setOpen(false);
    toast({
      title: "Thank you ✨",
      description: "Your review is now live on the site.",
    });
  };

  return (
    <section id="reviews" className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--es-mute)]">The Praise</div>
            <h2 className="font-display text-4xl md:text-5xl mt-2">
              Loved by <em className="text-[var(--es-accent)]">{reviews.length}+</em> guests.
            </h2>
            <div className="flex items-center gap-2 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[var(--es-gold)] text-[var(--es-gold)]" />
              ))}
              <span className="text-sm text-[var(--es-mute)] ml-1">5.0 average · Google reviews</span>
            </div>
          </div>

          <button onClick={() => setOpen(true)} className="es-btn-primary">
            <Plus className="w-4 h-4" /> Write a Review
          </button>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <article
              key={r.id}
              className="relative bg-white/60 border border-[var(--es-line)] rounded-2xl p-6 es-lift"
            >
              <Quote className="w-6 h-6 text-[var(--es-gold-2)]/50 absolute top-4 right-4" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[var(--es-gold)] text-[var(--es-gold)]" />
                ))}
              </div>
              <p className="font-display text-lg leading-snug text-[var(--es-ink)]">“{r.text}”</p>
              <div className="mt-5 pt-4 border-t border-[var(--es-line)] flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-[var(--es-mute)]">{r.service} · {r.date}</div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[var(--es-ink)] text-[var(--es-cream)] flex items-center justify-center font-display text-sm">
                  {r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && <ReviewModal onClose={() => setOpen(false)} onSubmit={handleSubmit} />}
    </section>
  );
}

function ReviewModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({ name: "", service: "", rating: 0, text: "" });
  const [hover, setHover] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim() || form.rating === 0) return;
    onSubmit(form);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 es-reveal"
      onClick={onClose}
    >
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="bg-[var(--es-cream)] w-full max-w-lg rounded-2xl border border-[var(--es-line)] p-6 md:p-8 shadow-2xl relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--es-cream-2)]"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--es-mute)]">Share your experience</div>
        <h3 className="font-display text-3xl mt-1">Write a review</h3>
        <p className="text-sm text-[var(--es-mute)] mt-1">Your feedback helps us stay elegant.</p>

        <div className="mt-6">
          <label className="text-xs uppercase tracking-widest text-[var(--es-mute)]">Your rating</label>
          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onMouseEnter={() => setHover(n)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setForm({ ...form, rating: n })}
                className="es-star p-1"
                aria-label={`Rate ${n}`}
              >
                <Star
                  className={`w-7 h-7 ${
                    (hover || form.rating) >= n
                      ? "fill-[var(--es-gold)] text-[var(--es-gold)]"
                      : "text-[var(--es-line)]"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs uppercase tracking-widest text-[var(--es-mute)]">Name</label>
            <input
              className="mt-2 w-full px-4 py-2.5 rounded-lg bg-white border border-[var(--es-line)] focus:outline-none focus:border-[var(--es-gold)]"
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-[var(--es-mute)]">Service</label>
            <input
              className="mt-2 w-full px-4 py-2.5 rounded-lg bg-white border border-[var(--es-line)] focus:outline-none focus:border-[var(--es-gold)]"
              placeholder="e.g. Hair Colour"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-xs uppercase tracking-widest text-[var(--es-mute)]">Your review</label>
          <textarea
            className="mt-2 w-full px-4 py-3 rounded-lg bg-white border border-[var(--es-line)] focus:outline-none focus:border-[var(--es-gold)] resize-none"
            rows={4}
            placeholder="Tell us how it felt…"
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="es-btn-primary mt-6 w-full justify-center">
          <Send className="w-4 h-4" /> Submit Review
        </button>
      </form>
    </div>
  );
}
