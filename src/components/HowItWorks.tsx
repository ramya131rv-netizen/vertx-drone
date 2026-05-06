"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import planImg from "@/assets/plan.webp";
import designImg from "@/assets/design.webp";
import assemblyImg from "@/assets/assembly.webp";
import setupImg from "@/assets/setup.webp";
import finalImg from "@/assets/the-final.webp";

export function HowItWorks() {
  const spiralRef = useRef<HTMLDivElement>(null);

  const [cfg, setCfg] = useState({
    points: 800,
    dotRadius: 1.6,
    duration: 3,
    gradient: "none",
    color: "#ffffff",
    pulseEffect: true,
    opacityMin: 0.25,
    opacityMax: 0.9,
    sizeMin: 0.5,
    sizeMax: 1.35,
    background: "transparent",
  });

  const gradients = useMemo(
    () => ({
      none: [],
      grayscale: ["#ffffff", "#999999", "#333333"],
    }),
    [],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (k === "r") randomize();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!spiralRef.current) return;

    const SIZE = 620;
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
    const N = cfg.points;
    const DOT = cfg.dotRadius;
    const CENTER = SIZE / 2;
    const PADDING = 4;
    const MAX_R = CENTER - PADDING - DOT;

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);

    if (cfg.gradient !== "none") {
      const defs = document.createElementNS(svgNS, "defs");
      const g = document.createElementNS(svgNS, "linearGradient");
      g.setAttribute("id", "spiralGradient");
      g.setAttribute("gradientUnits", "userSpaceOnUse");
      g.setAttribute("x1", "0%");
      g.setAttribute("y1", "0%");
      g.setAttribute("x2", "100%");
      g.setAttribute("y2", "100%");
      // @ts-ignore
      gradients[cfg.gradient].forEach((color, idx, arr) => {
        const stop = document.createElementNS(svgNS, "stop");
        stop.setAttribute("offset", `${(idx * 100) / (arr.length - 1)}%`);
        stop.setAttribute("stop-color", color);
        g.appendChild(stop);
      });
      defs.appendChild(g);
      svg.appendChild(defs);
    }

    for (let i = 0; i < N; i++) {
      const idx = i + 0.5;
      const frac = idx / N;
      const r = Math.sqrt(frac) * MAX_R;
      const theta = idx * GOLDEN_ANGLE;
      const x = CENTER + r * Math.cos(theta);
      const y = CENTER + r * Math.sin(theta);

      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", x.toFixed(3));
      c.setAttribute("cy", y.toFixed(3));
      c.setAttribute("r", String(DOT));
      c.setAttribute("fill", cfg.gradient === "none" ? cfg.color : "url(#spiralGradient)");
      c.setAttribute("opacity", "0.6");

      if (cfg.pulseEffect) {
        const animR = document.createElementNS(svgNS, "animate");
        animR.setAttribute("attributeName", "r");
        animR.setAttribute(
          "values",
          `${DOT * cfg.sizeMin};${DOT * cfg.sizeMax};${DOT * cfg.sizeMin}`,
        );
        animR.setAttribute("dur", `${cfg.duration}s`);
        animR.setAttribute("begin", `${(frac * cfg.duration).toFixed(3)}s`);
        animR.setAttribute("repeatCount", "indefinite");
        c.appendChild(animR);

        const animO = document.createElementNS(svgNS, "animate");
        animO.setAttribute("attributeName", "opacity");
        animO.setAttribute("values", `${cfg.opacityMin};${cfg.opacityMax};${cfg.opacityMin}`);
        animO.setAttribute("dur", `${cfg.duration}s`);
        animO.setAttribute("begin", `${(frac * cfg.duration).toFixed(3)}s`);
        animO.setAttribute("repeatCount", "indefinite");
        c.appendChild(animO);
      }

      svg.appendChild(c);
    }

    spiralRef.current.innerHTML = "";
    spiralRef.current.appendChild(svg);
  }, [cfg, gradients]);

  function randomize() {
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    const useBW = Math.random() > 0.4;
    setCfg((c) => ({
      ...c,
      points: Math.floor(rand(400, 1800)),
      dotRadius: rand(0.8, 3),
      duration: rand(1.2, 6),
      pulseEffect: Math.random() > 0.3,
      opacityMin: rand(0.1, 0.4),
      opacityMax: rand(0.6, 1),
      sizeMin: rand(0.4, 0.9),
      sizeMax: rand(1.1, 2.1),
      gradient: useBW ? "none" : "grayscale",
      color: "#ffffff",
    }));
  }

  const features = [
    {
      title: "Plan",
      blurb:
        "A safe flight zone and the best viewing spots are confirmed. Permissions are secured, and we collaborate with you to ensure full compliance.",
      meta: "T-14 Days",
      image: planImg,
    },
    {
      title: "Design",
      blurb:
        "Once the show concept is approved, our creative team crafts custom animations, programs drone movements, and mixes synchronous audio.",
      meta: "T-7 Days",
      image: designImg,
    },
    {
      title: "Arrival & Assembly",
      blurb:
        "The equipment and operations team arrive on-site. We begin preparations for the actual deployment of the drone fleet.",
      meta: "T-2 Days",
      image: assemblyImg,
    },
    {
      title: "Set Up & Final Checks",
      blurb:
        "Final safety checks and multiple test flights are conducted to ensure flawless execution on show night.",
      meta: "T-1 Day",
      image: setupImg,
    },
    {
      title: "The Grand Finale",
      blurb:
        "The big day! The sky comes alive as your vision takes flight—literally. A breathtaking live drone light show.",
      meta: "Showtime",
      image: finalImg,
    },
  ];

  const spans = [
    "md:col-span-4 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
  ];

  return (
    <div className="w-full relative overflow-hidden bg-background">
      {/* Azure Depths */}
      <div
        className="absolute inset-0 z-0"
    
      />

      <section className="relative mx-auto max-w-7xl px-6 py-20 text-white">
        {/* Background Spiral */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1),rgba(255,255,255,0.1)_60%,transparent_75%)]"
          style={{ mixBlendMode: "screen" }}
        >
          <div ref={spiralRef} className="w-full h-full max-w-[800px] max-h-[800px] m-auto" />
        </div>

        <header className="relative pb-10">
          <p className="text-[12px] uppercase tracking-[0.6em] text-ember mb-4 font-semibold">
            ◆ How It Works
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-[0.95] uppercase tracking-tight text-white">
                From Concept <span className="text-ember">to Sky</span>.
              </h2>
              <p className="text-sm md:text-base text-white/70 max-w-5xl text-balance">
                Every step is carefully crafted.
              </p>
            </div>
          </div>
        </header>

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-6 auto-rows-[minmax(180px,auto)]">
          {features.map((f, i) => (
            <BentoCard
              key={i}
              span={spans[i]}
              title={f.title}
              blurb={f.blurb}
              meta={f.meta}
              index={i}
              image={f.image}
            />
          ))}
        </div>

        {/* CTA Block */}
        <footer className="relative mt-12 pt-12 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
          <Button className="bg-ember text-white hover:bg-ember/90 rounded-full px-10 py-6 text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,100,50,0.3)] hover:shadow-[0_0_30px_rgba(255,100,50,0.5)] transition-all">
            Start Your Drone Show
          </Button>
          <a
            href="#"
            className="flex items-center text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors gap-2"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp quick connect
          </a>
        </footer>
      </section>
    </div>
  );
}

function BentoCard({
  span = "",
  title,
  blurb,
  meta,
  index,
  image,
}: {
  span?: string;
  title: string;
  blurb: string;
  meta: string;
  index: number;
  image: string;
}) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 md:p-8 transition-colors duration-300 hover:border-white/30 flex flex-col justify-between ${span}`}
    >
      {/* Background Image & Gradient Overlay */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transform-gpu"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      <header className="mb-6 flex flex-col sm:flex-row sm:items-center gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <span className="text-xl font-display font-medium text-ember">0{index + 1}</span>
          <h3 className="text-xl md:text-2xl font-display uppercase font-semibold leading-tight text-white group-hover:text-ember transition-colors">
            {title}
          </h3>
        </div>
        {meta && (
          <span className="sm:ml-auto w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-white/70 font-medium backdrop-blur-md">
            {meta}
          </span>
        )}
      </header>
      <p className="text-sm md:text-base text-white/80 max-w-prose leading-relaxed relative z-10 font-medium drop-shadow-md">
        {blurb}
      </p>

      {/* Hover outline mask */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
        <div
          className="absolute -inset-1 rounded-2xl border border-ember/50"
          style={{
            maskImage: `radial-gradient(250px_250px_at_${mousePos.x}%_${mousePos.y}%, white, transparent)`,
          }}
        />
      </div>
    </article>
  );
}

export default HowItWorks;
