import { motion } from "framer-motion";
import heroVideo from "@/assets/show-hero.webm";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end pt-28 pb-32 md:pb-40">
      {/* Background image */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        {/* Plain dark overlay */}
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Left-aligned content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 text-left flex flex-col items-start justify-end">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1] uppercase tracking-wide"
        >
          India's Most Advanced
          <br />
          <span className="text-ember">Drone</span> Light Shows
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full gap-2 px-5 py-2.5 bg-ember text-background text-md uppercase tracking-[0.2em] font-medium hover:bg-ember-glow transition-colors"
          >
            Start Your Show
            <span>→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator (line only, no round element) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.4em] text-muted-foreground/60 flex flex-col items-center gap-2">
        <span>Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-ember to-transparent" />
      </div>
    </section>
  );
}
