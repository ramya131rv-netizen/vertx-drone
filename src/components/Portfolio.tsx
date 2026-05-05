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

        <div className="space-y-32 md:space-y-44">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-7 relative group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-ember opacity-0 group-hover:opacity-20 transition-opacity z-10 mix-blend-overlay" />
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 z-10 text-[10px] uppercase tracking-[0.3em] bg-background/70 backdrop-blur px-3 py-1.5 rounded-full">
                  ▶ Play film
                </div>
              </div>
              <div className="md:col-span-5">
                <p className="text-xs uppercase tracking-[0.3em] text-ember mb-4">
                  {p.eyebrow}
                </p>
                <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-5">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
