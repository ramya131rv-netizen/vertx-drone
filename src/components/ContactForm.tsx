import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { DroneField } from "./DroneField";
import { toast } from "sonner";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Your sky brief has been received. We'll be in touch within 24h.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  const inputClass =
    "w-full bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/60 py-3 px-1 focus:outline-none focus:border-ember focus:shadow-[0_4px_24px_-12px_var(--ember)] transition-all text-sm";

  return (
    <section id="contact" className="relative py-32 md:py-44 border-t border-border overflow-hidden">
      <DroneField count={50} className="absolute inset-0 w-full h-full opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        {/* Left: statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-ember mb-5">◆ Get in Touch</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] uppercase">
            Let's light <br />
            up your <span className="italic font-normal text-ember glow-ember normal-case">sky</span>.
          </h2>
          <p className="mt-8 text-sm md:text-base text-muted-foreground max-w-md">
            Tell us the vibe. We'll handle the engineering, the permissions, and the magic.
          </p>

          <div className="mt-12 space-y-5">
            <ContactRow label="Email" value="fly@vertx.in" />
            <ContactRow label="Phone" value="+91 00000 00000" />
            <ContactRow label="Studio" value="Bengaluru · India" />
          </div>
        </motion.div>

        {/* Right: form card */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={onSubmit}
          className="lg:col-span-7 rounded-3xl border border-border bg-background/40 backdrop-blur-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-left"
        >
          <Field label="First name *">
            <input required name="firstName" className={inputClass} placeholder="Your first name" />
          </Field>
          <Field label="Last name *">
            <input required name="lastName" className={inputClass} placeholder="Your last name" />
          </Field>
          <Field label="Phone *">
            <input required name="phone" type="tel" className={inputClass} placeholder="+91 …" />
          </Field>
          <Field label="Email *">
            <input required name="email" type="email" className={inputClass} placeholder="you@brand.com" />
          </Field>
          <Field label="Event vibe / concept" full>
            <input name="vibe" className={inputClass} placeholder="A brand reveal, a proposal, a finale…" />
          </Field>
          <Field label="Date">
            <input name="date" type="date" className={`${inputClass} [color-scheme:dark]`} />
          </Field>
          <Field label="Location">
            <input name="location" className={inputClass} placeholder="City / venue" />
          </Field>
          <Field label="Tell us more (up to 100 words)" full>
            <textarea
              name="details"
              rows={3}
              maxLength={700}
              className={`${inputClass} resize-none`}
              placeholder="Audience size, mood, references…"
            />
          </Field>

          <div className="md:col-span-2 mt-10 flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-ember text-primary-foreground text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:shadow-glow transition-all disabled:opacity-60"
            >
              {submitting ? "Transmitting…" : "Light up the sky"}
              <span className="text-base transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-6 border-b border-border pb-3">
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground w-16">
        {label}
      </span>
      <span className="text-sm md:text-base text-foreground">{value}</span>
    </div>
  );
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "md:col-span-2" : ""}`}>
      <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1 mt-5">
        {label}
      </span>
      {children}
    </label>
  );
}
