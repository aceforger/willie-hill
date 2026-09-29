import { Quote, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { quotes } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function MessageSection() {
  return (
    <section
      id="message"
      className="relative min-h-screen flex items-center bg-deep-burgundy overflow-hidden scroll-mt-24"
    >
      {/* Pattern overlays */}
      <div className="absolute inset-0 african-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal/70" />

      {/* Large quote marks */}
      <div className="absolute top-10 left-10 text-[280px] font-serif text-antique-gold/5 leading-none select-none">
        "
      </div>
      <div className="absolute bottom-0 right-10 text-[280px] font-serif text-antique-gold/5 leading-none select-none rotate-180">
        "
      </div>

      <div className="relative max-w-5xl mx-auto px-6 w-full py-16 text-center">
        <ScrollReveal animation="fadeUp">
          <div className="inline-flex items-center gap-3 mb-12">
            <div className="w-12 h-[1px] bg-antique-gold" />
            <Sun size={14} className="text-antique-gold" />
            <span className="font-serif text-xs tracking-[0.4em] uppercase text-antique-gold font-bold">
              The Message
            </span>
            <Sun size={14} className="text-antique-gold" />
            <div className="w-12 h-[1px] bg-antique-gold" />
          </div>

          <Quote size={32} className="text-antique-gold mx-auto mb-10" />

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-cream italic leading-relaxed font-medium">
              "{quotes[0].text}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-[1px] bg-antique-gold" />
              <div className="w-2 h-2 rotate-45 bg-antique-gold" />
              <div className="w-16 h-[1px] bg-antique-gold" />
            </div>

            <p className="font-serif text-xl md:text-2xl text-warm-cream/80 italic leading-relaxed">
              "{quotes[1].text}"
            </p>
          </motion.blockquote>

          <div className="mt-12 inline-flex items-center gap-3 border border-antique-gold/40 bg-charcoal/40 backdrop-blur-sm px-6 py-3">
            <span className="font-serif text-xs tracking-[0.3em] uppercase text-antique-gold font-bold">
              — Willie Hill
            </span>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-antique-gold to-transparent" />
    </section>
  );
}
