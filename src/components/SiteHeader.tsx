import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/vertx-logo.png";

const NAV = [
  { label: "Portfolio", to: "/" },
  { label: "Corporate", to: "/" },
  { label: "Weddings", to: "/" },
  { label: "Simulator", to: "/" },
  { label: "About", to: "/" },
  { label: "Blog", to: "/" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="VERTX"
            className="h-8 w-auto invert brightness-0"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              className="text-sm tracking-wide text-muted-foreground hover:text-ember transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-background bg-ember rounded-full overflow-hidden hover:shadow-glow transition-shadow"
        >
          <span className="relative z-10">Get a Quote</span>
          <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </header>
  );
}
