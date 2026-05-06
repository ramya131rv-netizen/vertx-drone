import { motion } from "framer-motion";
import corp from "@/assets/show-portfolio-corporate.png";
import wed from "@/assets/show-portfolio-wedding.png";
import fest from "@/assets/show-portfolio-festival.png";

const PROJECTS = [
  {
    img: corp,
    eyebrow: "01 — Corporate",
    title: "Skyline Anthem",
    desc: "A 600-drone brand reveal staged above the Mumbai skyline for a Fortune 500 launch.",
  },
  {
    img: wed,
    eyebrow: "02 — Wedding",
    title: "Two Names, One Sky",
    desc: "An intimate 300-drone proposal arc over Udaipur — choreographed to live strings.",
  },
  {
    img: fest,
    eyebrow: "03 — Festival",
    title: "Embers of Diwali",
    desc: "1,000 drones reimagining a 5,000-year-old festival as a 14-minute aerial film.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <div>
            <p className="text-[12px] uppercase tracking-[0.6em] text-ember mb-4 font-semibold">
              ◆ Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-7xl font-bold max-w-2xl leading-tight">
              Three skies we'll <span className="text-ember">never</span> forget.
            </h2>
          </div>
          <a
            href="#"
            className="text-sm tracking-wide text-muted-foreground hover:text-ember transition-colors border-b border-border hover:border-ember pb-1"
          >
            View full portfolio →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 shadow-2xl">
                <div className="absolute inset-0 bg-ember opacity-0 group-hover:opacity-20 transition-opacity z-10 mix-blend-overlay" />
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 z-10 text-[10px] uppercase tracking-[0.3em] bg-background/80 text-foreground backdrop-blur-md px-4 py-2 rounded-full border border-border/50 shadow-lg">
                  ▶ Play
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] uppercase tracking-[0.3em] text-ember mb-3 font-medium">
                  {p.eyebrow}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight mb-3 transition-colors group-hover:text-ember">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
