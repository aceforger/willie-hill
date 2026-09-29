import { useState, useEffect } from "react";
import { Menu, X, Sun, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { author, navLinks } from "../data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-antique-gold/40 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="h-[3px] w-full bg-gradient-to-r from-blood-red via-antique-gold to-blood-red" />

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-3 cursor-pointer text-left"
        >
          <div className="relative w-11 h-11 rounded-full border-2 border-antique-gold flex items-center justify-center bg-deep-burgundy group-hover:bg-blood-red transition-all">
            <Sun size={20} className="text-antique-gold" />
          </div>
          <div>
            <span className="font-serif text-base md:text-lg font-bold text-warm-cream leading-none block tracking-wider">
              WILLIE HILL
            </span>
            <p className="text-[9px] text-antique-gold/80 uppercase tracking-[0.3em] mt-1 font-medium">
              Author · Morning Star
            </p>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => scrollToSection(link.sectionId)}
              className="relative px-4 py-2 font-serif text-sm tracking-wider text-warm-cream/70 hover:text-antique-gold transition-colors group cursor-pointer uppercase"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-antique-gold group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <a
          href={`mailto:${author.email}`}
          className="hidden lg:flex items-center gap-2 bg-antique-gold hover:bg-warm-cream text-charcoal px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-antique-gold/20"
        >
          <Mail size={14} />
          Contact
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-warm-cream p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-charcoal/98 backdrop-blur-md border-t border-antique-gold/30 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.sectionId}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="flex items-center gap-3 font-serif text-base text-warm-cream/80 hover:text-antique-gold py-3 px-3 border-l-2 border-transparent hover:border-antique-gold transition-all w-full text-left cursor-pointer uppercase tracking-wider"
                >
                  {link.label}
                </button>
              ))}
              <div className="h-[1px] bg-antique-gold/20 my-4" />
              <a
                href={`mailto:${author.email}`}
                className="flex items-center justify-center gap-2 font-serif text-base text-charcoal py-3 px-3 bg-antique-gold font-bold"
              >
                <Mail size={16} />
                Contact Willie
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
