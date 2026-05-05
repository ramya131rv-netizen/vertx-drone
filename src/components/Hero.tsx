import { motion } from "framer-motion";
import heroVideo from "@/assets/show-hero.webm"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-28 pb-24">
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
        <div className="absolute inset-0 bg-background/75" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[20px] uppercase tracking-[0.5em] text-ember mb-5"
        >
          A show before the show
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl fleading-[1] uppercase tracking-wide"
        >
          India's Most Advanced
          <br />
          <span className="text-ember">Drone</span> Light Shows
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 max-w-md text-xs md:text-sm text-muted-foreground leading-relaxed"
        >
          Up to 1,000 drones. Fifteen minutes of synchronized aerial storytelling
          — engineered, choreographed and flown by VERTX.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-ember text-background text-xs uppercase tracking-[0.2em] font-medium hover:bg-ember-glow transition-colors"
          >
            Start Your Show
            <span>→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator (line only, no round element) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.4em] text-muted-foreground/60 flex flex-col items-center gap-2">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-ember to-transparent" />
      </div>
    </section>
  );
}
