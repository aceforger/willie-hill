import { useState } from "react";
import { Star, ExternalLink, ShoppingBag, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { book } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function BookSection() {
  const [showBack, setShowBack] = useState(false);

  return (
    <section
      id="book"
      className="relative min-h-screen flex items-center bg-warm-cream overflow-hidden scroll-mt-24"
    >
      {/* Top gold border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-antique-gold to-transparent" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 circle-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-16">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-blood-red" />
              <BookOpen size={14} className="text-blood-red" />
              <span className="font-serif text-xs tracking-[0.4em] uppercase text-blood-red font-bold">
                The Book
              </span>
              <BookOpen size={14} className="text-blood-red" />
              <div className="w-12 h-[1px] bg-blood-red" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-burgundy mb-4">
              COLORS
            </h2>
            <p className="font-serif italic text-deep-burgundy/70 max-w-2xl mx-auto">
              The Ancient African Connection to the Founding of America and the
              Making of the Crips and Bloods
            </p>
            <div className="w-24 h-[2px] bg-antique-gold mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Book cover - left */}
          <ScrollReveal
            animation="slideRight"
            delay={0.2}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-64 md:w-72 lg:w-80">
              {/* Shadow glow */}
              <div className="absolute -inset-6 bg-blood-red/20 blur-3xl rounded-full" />

              {/* Double border frame - matches cover */}
              <div className="absolute -inset-2 border-4 border-royal-blue/60 pointer-events-none" />
              <div className="absolute -inset-4 border-2 border-blood-red/60 pointer-events-none" />

              <div
                onClick={() => setShowBack(!showBack)}
                className="relative cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-sm overflow-hidden shadow-2xl border-2 border-antique-gold/40"
                >
                  <AnimatePresence mode="wait">
                    {!showBack ? (
                      <motion.img
                        key="front"
                        src={book.coverFront}
                        alt={`${book.title} - Front`}
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: -90, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover aspect-[2/3]"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.classList.add(
                            "bg-gradient-to-br",
                            "from-deep-burgundy",
                            "to-charcoal",
                            "flex",
                            "items-center",
                            "justify-center",
                            "aspect-[2/3]",
                          );
                          e.target.parentElement.innerHTML = `<div class="text-center p-6"><div class="text-6xl mb-4">📖</div><p class="font-serif text-antique-gold text-lg">${book.title}</p></div>`;
                        }}
                      />
                    ) : (
                      <motion.img
                        key="back"
                        src={book.coverBack}
                        alt={`${book.title} - Back`}
                        initial={{ rotateY: -90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: 90, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover aspect-[2/3]"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.classList.add(
                            "bg-gradient-to-br",
                            "from-deep-burgundy",
                            "to-charcoal",
                            "flex",
                            "items-center",
                            "justify-center",
                            "aspect-[2/3]",
                          );
                          e.target.parentElement.innerHTML = `<div class="text-center p-6"><div class="text-6xl mb-4">📖</div><p class="font-serif text-antique-gold text-lg">Back Cover</p></div>`;
                        }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>

                <p className="text-center font-serif text-xs text-deep-burgundy/60 mt-5 italic">
                  Click to {showBack ? "see front" : "see back"} cover
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Book details - right */}
          <ScrollReveal
            animation="slideLeft"
            delay={0.4}
            className="lg:col-span-7"
          >
            <div className="space-y-6">
              <div>
                <p className="font-serif text-xs tracking-[0.4em] uppercase text-blood-red mb-3 font-bold">
                  Morning Star Presents
                </p>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-deep-burgundy leading-none mb-4">
                  {book.title}
                </h2>
                <p className="font-serif italic text-lg text-deep-burgundy/80 leading-relaxed">
                  {book.subtitle}
                </p>
              </div>

              <div className="w-20 h-[3px] bg-antique-gold" />

              {/* 5-star rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-antique-gold fill-antique-gold"
                    />
                  ))}
                </div>
                <span className="font-serif text-sm text-deep-burgundy/70">
                  5.0 · {book.reviewCount} review
                  {book.reviewCount !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Description */}
              <div className="space-y-4 text-deep-burgundy/85 leading-relaxed text-base md:text-lg font-serif">
                <p>{book.description}</p>
                <p>{book.descriptionFull}</p>
                <p className="font-semibold text-deep-burgundy">
                  {book.descriptionFinal}
                </p>
              </div>

              {/* Purchase Button */}
              <div className="pt-6">
                <motion.a
                  href={book.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-deep-burgundy hover:bg-blood-red text-warm-cream px-10 py-5 font-bold text-sm tracking-widest uppercase transition-all shadow-2xl shadow-deep-burgundy/30"
                >
                  <ShoppingBag size={18} />
                  Buy Now
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
