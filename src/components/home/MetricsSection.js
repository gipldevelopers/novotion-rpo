"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, DollarSign, Clock } from "lucide-react";

const metrics = [
  { icon: Building2, value: "14+", label: "Organizations Served", description: "Enterprise clients across USA and UK", color: "from-secondary to-emerald-400" },
  { icon: TrendingUp, value: "85%+", label: "Placement Success", description: "Above industry average retention", color: "from-blue-500 to-cyan-400" },
  { icon: DollarSign, value: "60%", label: "Cost Reduction", description: "Average savings vs traditional agencies", color: "from-accent to-amber-400" },
  { icon: Clock, value: "24/7", label: "Global Support", description: "Round-the-clock recruitment coverage", color: "from-violet-500 to-purple-400" },
];

export function MetricsSection() {
  return (
    <section className="relative -mt-24 z-10 pb-8">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card rounded-3xl overflow-hidden border border-border"
          style={{ boxShadow: "var(--shadow-2xl)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 lg:p-10 text-center hover:bg-muted/50 transition-colors"
              >
                <div className={"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r " + metric.color + " opacity-0 group-hover:opacity-100 transition-opacity"} />
                <div className={"inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br " + metric.color + " text-primary-foreground mb-5 shadow-lg"}>
                  <metric.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-base font-semibold text-foreground mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
