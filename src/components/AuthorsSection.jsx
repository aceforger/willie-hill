import { User, Users, Star, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { author, book } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function AuthorsSection() {
  return (
    <section
      id="authors"
      className="relative min-h-screen flex items-center bg-charcoal overflow-hidden scroll-mt-24"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 circle-pattern opacity-30" />

      {/* Top gold border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-antique-gold to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-16">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-antique-gold" />
              <Users size={14} className="text-antique-gold" />
              <span className="font-serif text-xs tracking-[0.4em] uppercase text-antique-gold font-bold">
                The Authors
              </span>
              <Users size={14} className="text-antique-gold" />
              <div className="w-12 h-[1px] bg-antique-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-cream mb-4">
              Willie Hill <span className="text-antique-gold">&</span> Linda
              Jenkins
            </h2>
            <p className="font-serif italic text-warm-cream/60 max-w-2xl mx-auto">
              Two voices. One powerful story.
            </p>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-antique-gold to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* Willie Hill - Featured */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Profile photo */}
          <ScrollReveal
            animation="slideRight"
            delay={0.2}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Double frame matching book cover */}
              <div className="absolute -inset-2 border-4 border-royal-blue/60" />
              <div className="absolute -inset-4 border-2 border-blood-red/60" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/5] overflow-hidden shadow-2xl border-2 border-antique-gold/40"
              >
                <img
                  src="/images/profile.png"
                  alt={author.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-deep-burgundy to-charcoal flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <div className="text-center">
                    <User size={80} className="text-antique-gold/40 mx-auto" />
                    <p className="font-serif text-antique-gold mt-4 text-sm tracking-widest">
                      WILLIE HILL
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Name badge */}
              <div className="mt-6 text-center">
                <p className="font-serif text-2xl font-bold text-warm-cream">
                  {author.name}
                </p>
                <p className="font-serif text-xs tracking-[0.3em] uppercase text-antique-gold/70 mt-2">
                  Primary Author
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal
            animation="slideLeft"
            delay={0.4}
            className="lg:col-span-7"
          >
            <div className="space-y-6">
              <p className="font-serif text-xl text-warm-cream leading-relaxed">
                {author.bioShort}
              </p>

              <div className="w-16 h-[3px] bg-antique-gold" />

              <p className="text-warm-cream/70 leading-relaxed">
                {author.bioFull}
              </p>

              {/* Mission quote */}
              <div className="border-l-4 border-blood-red pl-6 py-4 bg-deep-burgundy/30">
                <p className="font-serif italic text-warm-cream/90 leading-relaxed">
                  "{author.mission}"
                </p>
              </div>

              <p className="text-warm-cream/70 leading-relaxed">
                {author.callToAction}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Co-Author: Linda Jenkins */}
        <ScrollReveal animation="fadeUp" delay={0.6}>
          <div className="pt-16 border-t border-antique-gold/20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-8 h-[1px] bg-blood-red" />
                <Star
                  size={12}
                  className="text-antique-gold fill-antique-gold"
                />
                <span className="font-serif text-xs tracking-[0.4em] uppercase text-antique-gold/80 font-bold">
                  Co-Author
                </span>
                <Star
                  size={12}
                  className="text-antique-gold fill-antique-gold"
                />
                <div className="w-8 h-[1px] bg-blood-red" />
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-center border border-antique-gold/30 bg-deep-burgundy/30 backdrop-blur-sm p-8">
              <div className="w-20 h-20 mx-auto rounded-full border-2 border-antique-gold flex items-center justify-center bg-charcoal mb-5">
                <User size={32} className="text-antique-gold" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-warm-cream mb-2">
                {author.coAuthor}
              </h3>
              <p className="font-serif text-xs tracking-[0.3em] uppercase text-antique-gold/70 mb-4">
                Co-Author
              </p>
              <p className="font-serif italic text-warm-cream/60 leading-relaxed">
                Co-author of COLORS: The Ancient African Connection to the
                Founding of America and the Making of the Crips and Bloods.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
