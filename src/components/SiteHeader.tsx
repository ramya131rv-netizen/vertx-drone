import * as React from "react";
import { motion, useScroll, useMotionValueEvent, Variants, Transition } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/vertx-logo.png";
import { Link } from "@tanstack/react-router";

const NAV = [
  { label: "Portfolio", to: "/" },
  { label: "Corporate", to: "/" },
  { label: "Weddings", to: "/" },
  { label: "Simulator", to: "/" },
  { label: "About", to: "/" },
  { label: "Blog", to: "/" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const smoothTransition: Transition = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 };

const containerVariants: Variants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "60%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    transition: {
      ...smoothTransition,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "4rem",
    paddingLeft: "0rem",
    paddingRight: "0rem",
    transition: {
      ...smoothTransition,
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const leftVariants: Variants = {
  expanded: { opacity: 1, x: 0, rotate: 0, transition: smoothTransition },
  collapsed: { opacity: 0, x: -20, rotate: -180, transition: { duration: 0.3, ease: "easeOut" } },
};

const rightVariants: Variants = {
  expanded: { opacity: 1, x: 0, transition: smoothTransition },
  collapsed: { opacity: 0, x: 20, transition: { duration: 0.3, ease: "easeOut" } },
};

const itemVariants: Variants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: smoothTransition },
  collapsed: { opacity: 0, x: -10, scale: 0.95, transition: { duration: 0.2, ease: "easeOut" } },
};

const collapsedIconVariants: Variants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: "easeOut" } },
  collapsed: { 
    opacity: 1, 
    scale: 1,
    transition: { ...smoothTransition, delay: 0.2 }
  },
};

export function SiteHeader() {
  const [isExpanded, setExpanded] = React.useState(true);

  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;

    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest;
    }
    else if (!isExpanded && latest < previous && (scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD)) {
      setExpanded(true);
    }

    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  return (
    <div className="fixed top-6 left-0 w-full px-4 md:px-8 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.02 } : {}}
        whileTap={!isExpanded ? { scale: 0.98 } : {}}
        onClick={handleNavClick}
        className={cn(
          "pointer-events-auto flex items-center justify-between overflow-hidden rounded-full border border-border/50 bg-background/80 shadow-lg backdrop-blur-md h-16",
          !isExpanded && "cursor-pointer justify-center"
        )}
        style={{ maxWidth: "1200px" }}
      >
        {/* LEFT: LOGO */}
        <motion.div
          variants={leftVariants}
          className="flex-1 flex items-center justify-start"
        >
          <Link to="/" onClick={(e) => e.stopPropagation()}>
            <img src={logo} alt="VERTX" className="h-6 md:h-8 w-auto invert brightness-0" />
          </Link>
        </motion.div>

        {/* CENTER: NAV LINKS */}
        <motion.div
          className={cn(
            "hidden md:flex items-center justify-center gap-3 lg:gap-5 flex-none",
            !isExpanded && "pointer-events-none"
          )}
        >
          {NAV.map((item) => (
            <motion.a
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              variants={itemVariants}
              onClick={(e) => e.stopPropagation()}
              className="font-display text-2xl tracking-widest text-muted-foreground hover:text-ember transition-colors whitespace-nowrap font-semibold"
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>

        {/* RIGHT: BUTTON */}
        <motion.div
          variants={rightVariants}
          className={cn(
            "hidden md:flex flex-1 items-center justify-end",
            !isExpanded && "pointer-events-none"
          )}
        >
          <motion.a
            href="#contact"
            onClick={(e) => e.stopPropagation()}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-bold text-background bg-ember rounded-full overflow-hidden hover:shadow-glow transition-shadow whitespace-nowrap"
          >
            <span className="relative z-10">Get a Quote</span>
          </motion.a>
        </motion.div>

        {/* COLLAPSED MENU ICON */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
