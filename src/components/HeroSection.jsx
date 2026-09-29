import { ArrowRight, BookOpen, Star, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { author, book } from "../data/siteContent";

export default function HeroSection() {
  const scrollToBook = () => {
    const el = document.getElementById("book");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-charcoal"
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-contain bg-center"
        style={{
          backgroundImage: `url('/images/hero-bg2.png')`,
        }}
      />

      {/* Dark gradient overlay - light, text readable on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(26,10,10,0.5) 0%, rgba(26,10,10,0.45) 30%, rgba(26,10,10,0.55) 60%, rgba(26,10,10,0.3) 100%)",
        }}
      />

      {/* African pattern overlay */}
      <div className="absolute inset-0 african-pattern opacity-10" />

      {/* Subtle vignette - barely there */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/5 via-transparent to-charcoal/5" />

      {/* Decorative corner brackets */}
      <div className="absolute top-28 left-6 w-12 h-12 border-t-2 border-l-2 border-antique-gold/40" />
      <div className="absolute bottom-8 left-6 w-12 h-12 border-b-2 border-l-2 border-antique-gold/40" />
      <div className="absolute top-28 right-6 w-12 h-12 border-t-2 border-r-2 border-antique-gold/40 hidden lg:block" />
      <div className="absolute bottom-8 right-6 w-12 h-12 border-b-2 border-r-2 border-antique-gold/40 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 z-10 w-full">
        <div className="max-w-2xl">
          {/* Publisher badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-antique-gold" />
            <Sun size={14} className="text-antique-gold" />
            <span className="font-serif text-xs tracking-[0.4em] uppercase text-antique-gold font-bold">
              Morning Star
            </span>
          </motion.div>

          {/* Author label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-sm md:text-base tracking-[0.4em] text-warm-cream/70 uppercase mb-5"
          >
            Willie Hill · Linda Jenkins
          </motion.p>

          {/* Book Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-antique-gold mb-6 leading-none tracking-tight"
            style={{ textShadow: "0 4px 30px rgba(212,165,55,0.3)" }}
          >
            COLORS
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-20 h-[1px] bg-antique-gold/60" />
            <div className="w-2 h-2 rotate-45 bg-antique-gold" />
            <div className="w-20 h-[1px] bg-antique-gold/60" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-serif italic text-lg md:text-2xl text-warm-cream/90 mb-8 leading-relaxed"
          >
            The Ancient African Connection to the Founding of America and the
            Making of the Crips and Bloods
          </motion.p>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-10 border border-antique-gold/40 bg-deep-burgundy/50 backdrop-blur-sm px-5 py-2.5"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-antique-gold fill-antique-gold"
                />
              ))}
            </div>
            <span className="font-serif text-xs tracking-wider text-warm-cream/80 uppercase">
              5.0 Rating
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToBook}
              className="inline-flex items-center justify-center gap-3 bg-antique-gold hover:bg-warm-cream text-charcoal px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all shadow-xl shadow-antique-gold/30 hover:scale-105 cursor-pointer"
            >
              <BookOpen size={16} />
              Explore the Book
              <ArrowRight size={16} />
            </button>

            <a
              href="#authors"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("authors");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-3 border-2 border-warm-cream/40 hover:border-antique-gold text-warm-cream/90 hover:text-antique-gold px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all backdrop-blur-sm bg-charcoal/20"
            >
              Meet the Authors
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gold bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-antique-gold to-transparent" />
    </section>
  );
}
