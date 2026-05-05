import { useMemo } from "react";

interface DroneFieldProps {
  count?: number;
  className?: string;
}

/** Animated grid of glowing "drones" — purely decorative SVG */
export function DroneField({ count = 60, className = "" }: DroneFieldProps) {
  const dots = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      r: Math.random() * 1.2 + 0.4,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 4,
      key: i,
    }));
  }, [count]);

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {dots.map((d) => (
        <circle
          key={d.key}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill="var(--ember)"
          style={{
            animation: `pulse-glow ${d.duration}s ease-in-out ${d.delay}s infinite`,
            transformOrigin: `${d.cx}% ${d.cy}%`,
          }}
        />
      ))}
    </svg>
  );
}
