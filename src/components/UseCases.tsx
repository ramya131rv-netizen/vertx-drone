"use client";

import * as React from "react";
import { Building2, Heart, Music, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import corp from "@/assets/show-corporate.jpg";
import corpVideo from "@/assets/show-corporate.webm";
import wed from "@/assets/show-wedding.jpg";
import fest from "@/assets/show-festival.jpg";
import sport from "@/assets/show-sports.jpg";

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  videoSrc?: string;
  icon?: React.ReactNode;
  linkHref: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}

const CardVideo = ({ src, isActive }: { src: string; isActive: boolean }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (isActive) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className={cn(
        "absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out",
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-110"
      )}
    />
  );
};

export const ExpandingCards = React.forwardRef<
  HTMLUListElement,
  ExpandingCardsProps
>(({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(
    defaultActiveIndex,
  );

  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridStyle = React.useMemo(() => {
    if (activeIndex === null) return {};

    if (isDesktop) {
      const columns = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateColumns: columns };
    } else {
      const rows = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateRows: rows };
    }
  }, [activeIndex, items.length, isDesktop]);

  const handleInteraction = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ul
      className={cn(
        "w-full max-w-6xl gap-2",
        "grid",
        "h-[600px] md:h-[500px]",
        "transition-[grid-template-columns,grid-template-rows] duration-500 ease-out",
        className,
      )}
      style={{
        ...gridStyle,
        ...(isDesktop
          ? { gridTemplateRows: '1fr' }
          : { gridTemplateColumns: '1fr' }
        )
      }}
      ref={ref}
      {...props}
    >
      {items.map((item, index) => (
        <li
          key={item.id}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-black text-card-foreground shadow-sm transition-all duration-500",
            "md:min-w-[80px]",
            "min-h-0 min-w-0",
            "group-data-[active=true]:border-pink-500 group-data-[active=true]:shadow-[0_0_25px_rgba(236,72,153,0.3)]"
          )}
          onMouseEnter={() => handleInteraction(index)}
          onFocus={() => handleInteraction(index)}
          onClick={() => handleInteraction(index)}
          tabIndex={0}
          data-active={activeIndex === index}
        >
          <img
            src={item.imgSrc}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out group-data-[active=true]:scale-100 group-data-[active=true]:grayscale-0 scale-110 grayscale"
          />
          {item.videoSrc && <CardVideo src={item.videoSrc} isActive={activeIndex === index} />}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-data-[active=true]:opacity-80" />

          <article
            className="absolute inset-0 flex flex-col justify-end gap-2 p-6"
          >
            <h3 className="hidden origin-left rotate-90 text-sm font-light uppercase tracking-wider text-white/80 opacity-100 transition-all duration-500 ease-out md:block group-data-[active=true]:opacity-0">
              {item.title}
            </h3>

            <div className="text-white/90 opacity-0 transition-all duration-500 delay-75 ease-out group-data-[active=true]:opacity-100">
              {item.icon}
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-pink-500 opacity-0 transition-all duration-500 delay-150 ease-out group-data-[active=true]:opacity-100 translate-y-4 group-data-[active=true]:translate-y-0">
              {item.title}
            </h3>

            <p className="w-full max-w-xs text-sm text-white/80 opacity-0 transition-all duration-300 delay-225 ease-out group-data-[active=true]:opacity-100">
              {item.description}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
});
ExpandingCards.displayName = "ExpandingCards";

const ZONES: CardItem[] = [
  {
    id: "corporate",
    title: "Corporate",
    description: "Brand reveals, IPOs, product launches.",
    imgSrc: corp,
    videoSrc: corpVideo,
    linkHref: "#"
  },
  {
    id: "weddings",
    title: "Weddings",
    description: "Once-in-a-lifetime sky moments.",
    imgSrc: wed,
    linkHref: "#"
  },
  {
    id: "festivals",
    title: "Festivals",
    description: "City-scale storytelling at altitude.",
    imgSrc: fest,
    linkHref: "#"
  },
  {
    id: "sports",
    title: "Sports",
    description: "Stadium-sized opening ceremonies.",
    imgSrc: sport,
    linkHref: "#"
  },
];

export function UseCases() {
  return (
    <section className="relative py-32 md:py-44 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-20">
        <p className="text-[12px] uppercase tracking-[0.6em] text-ember mb-4">◆ Where We Fly</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          Four canvases. <span className=" text-ember">One sky.</span>
        </h2>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <ExpandingCards items={ZONES} />
      </div>
    </section>
  );
}
