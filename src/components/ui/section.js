"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Section({ children, className, variant = "default", id }) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 lg:py-36 relative",
        variant === "muted" && "section-light",
        variant === "dark" && "section-dark text-primary-foreground",
        className
      )}
    >
      <div className="container-premium relative z-10">{children}</div>
    </section>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
  dark = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "max-w-3xl mb-14 lg:mb-20",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold tracking-wide rounded-full mb-6",
            dark
              ? "bg-secondary/10 border border-secondary/20 text-secondary"
              : "bg-secondary/10 text-secondary"
          )}
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5",
          dark ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg md:text-xl leading-relaxed",
            dark ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
