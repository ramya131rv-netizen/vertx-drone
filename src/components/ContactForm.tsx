import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { DroneField } from "./DroneField";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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

  const inputClass = "h-11 rounded-2xl border-border/60 bg-background/60 px-4 focus-visible:ring-ember focus-visible:border-ember";

  return (
    <section
      id="contact"
      className="relative py-32 md:py-44 border-t border-border overflow-hidden"
    >
      <DroneField count={50} className="absolute inset-0 w-full h-full opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-start">
        {/* Left: statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 lg:sticky lg:top-32"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-ember mb-6">
            ◆ Get in Touch
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] uppercase">
            Let's light <br />
            up your{" "}
            <span className="italic font-normal text-ember glow-ember normal-case">sky</span>.
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 group relative w-full rounded-3xl overflow-hidden border border-border/60 bg-card/85 p-8 backdrop-blur-xl sm:p-10 shadow-2xl"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
          />

          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 relative z-10">
            <Field label="First name" id="firstName">
              <Input required id="firstName" name="firstName" className={inputClass} placeholder="Your first name" />
            </Field>
            <Field label="Last name" id="lastName">
              <Input required id="lastName" name="lastName" className={inputClass} placeholder="Your last name" />
            </Field>
            <Field label="Phone" id="phone">
              <Input required id="phone" name="phone" type="tel" className={inputClass} placeholder="+91 …" />
            </Field>
            <Field label="Email" id="email">
              <Input required id="email" name="email" type="email" className={inputClass} placeholder="you@brand.com" />
            </Field>
            <Field label="Event vibe / concept" id="vibe" full>
              <Input id="vibe" name="vibe" className={inputClass} placeholder="A brand reveal, a proposal, a finale…" />
            </Field>
            <Field label="Date" id="date">
              <Input id="date" name="date" type="date" className={`${inputClass} [color-scheme:dark]`} />
            </Field>
            <Field label="Location" id="location">
              <Input id="location" name="location" className={inputClass} placeholder="City / venue" />
            </Field>
            <Field label="Tell us more (up to 100 words)" id="details" full>
              <Textarea
                id="details"
                name="details"
                rows={4}
                maxLength={700}
                className="rounded-2xl border-border/60 bg-background/60 p-4 resize-none focus-visible:ring-ember focus-visible:border-ember"
                placeholder="Audience size, mood, references…"
              />
            </Field>

            <div className="md:col-span-2 mt-4">
              <Button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-ember px-6 py-6 text-sm font-bold text-primary-foreground shadow-[0_10px_40px_-15px_var(--ember)] transition-transform duration-300 hover:-translate-y-1 uppercase tracking-[0.1em]"
              >
                {submitting ? "Transmitting…" : "Light up the sky"}
              </Button>
            </div>
            
            <p className="md:col-span-2 mt-2 text-center text-xs text-muted-foreground">
              By submitting, you agree to our terms of service and privacy policy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-6 border-b border-border/40 pb-3">
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground w-16">
        {label}
      </span>
      <span className="text-sm md:text-md text-foreground">{value}</span>
    </div>
  );
}

function Field({
  label,
  children,
  full,
  id,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
  id?: string;
}) {
  return (
    <div className={`space-y-2 ${full ? "md:col-span-2" : ""}`}>
      <Label htmlFor={id} className="text-xs text-muted-foreground ml-1">
        {label}
      </Label>
      {children}
    </div>
  );
}
