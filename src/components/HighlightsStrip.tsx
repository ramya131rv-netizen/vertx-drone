import { motion } from "framer-motion";

export function HighlightsStrip() {
  const highlights = [
    "Up to 1000 drones",
    "15 min flight time",
    "In-house technology",
    "Precision formations",
  ];

  // Duplicate items enough times to ensure seamless infinite scroll
  const scrollItems = [...highlights, ...highlights, ...highlights, ...highlights];

  return (
    <section className="relative overflow-hidden bg-background py-8 border-y border-border/40">
      <div className="flex w-full overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <motion.div
          className="flex items-center gap-8 md:gap-16 w-max shrink-0"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {scrollItems.map((text, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16 shrink-0">
              <HighlightItem text={text} />
              <HighlightSeparator />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HighlightItem({ text }: { text: string }) {
  return (
    <div className="text-xs md:text-sm lg:text-base font-semibold uppercase tracking-[0.2em] text-foreground">
      {text}
    </div>
  );
}

function HighlightSeparator() {
  return (
    <div className="w-1.5 h-1.5 rounded-full bg-ember shadow-[0_0_10px_var(--ember)]"></div>
  );
}
