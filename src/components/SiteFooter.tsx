import logo from "@/assets/vertx-logo.png";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Giant brand mark */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <img
              src={logo}
              alt="VERTX"
              className="h-14 w-auto invert brightness-0"
            />
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              India's most advanced drone light show studio. Designed, built and flown in-house.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 border border-ember/40 rounded-full text-xs uppercase tracking-[0.3em] text-ember hover:bg-ember hover:text-primary-foreground transition-all"
            >
              Start a project →
            </a>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-ember mb-5">Studio</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Portfolio</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">About</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Partner Program</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Blog / Insights</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.4em] text-ember mb-5">Shows</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Corporate</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Weddings</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Festivals</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Sports</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.4em] text-ember mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>fly@vertx.in</li>
              <li>+91 00000 00000</li>
              <li>Bengaluru · India</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Massive wordmark */}
      <div
        aria-hidden
        className="relative font-display font-bold text-ember/[0.08] tracking-tighter text-center select-none pointer-events-none leading-none uppercase"
        style={{ fontSize: "clamp(80px, 22vw, 320px)" }}
      >
        VERTX
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-8 pt-2 border-t border-border flex flex-col md:flex-row gap-3 justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
        <span>© {new Date().getFullYear()} VERTX. All skies reserved.</span>
        <span>Made for the dark.</span>
      </div>
    </footer>
  );
}
