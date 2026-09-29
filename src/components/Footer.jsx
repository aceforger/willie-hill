import { Sun, Mail, Rocket } from "lucide-react";
import { author, book } from "../data/siteContent";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-charcoal border-t border-antique-gold/30 py-16 text-center relative overflow-hidden">
      <div className="absolute inset-0 african-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blood-red/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <Sun size={28} className="text-antique-gold mx-auto mb-5" />
        <p className="font-serif text-2xl font-bold text-warm-cream tracking-widest">
          WILLIE HILL
        </p>
        <p className="font-serif text-sm italic text-warm-cream/60 mt-2">&</p>
        <p className="font-serif text-sm italic text-warm-cream/60 mt-2">
          Linda Jenkins
        </p>

        <div className="flex justify-center gap-8 mt-10 flex-wrap">
          <button
            onClick={scrollToTop}
            className="font-serif text-[10px] tracking-[0.3em] uppercase text-warm-cream/50 hover:text-antique-gold transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("book")}
            className="font-serif text-[10px] tracking-[0.3em] uppercase text-warm-cream/50 hover:text-antique-gold transition-colors cursor-pointer"
          >
            The Book
          </button>
          <button
            onClick={() => scrollToSection("message")}
            className="font-serif text-[10px] tracking-[0.3em] uppercase text-warm-cream/50 hover:text-antique-gold transition-colors cursor-pointer"
          >
            The Message
          </button>
          <button
            onClick={() => scrollToSection("authors")}
            className="font-serif text-[10px] tracking-[0.3em] uppercase text-warm-cream/50 hover:text-antique-gold transition-colors cursor-pointer"
          >
            Authors
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-serif text-[10px] tracking-[0.3em] uppercase text-warm-cream/50 hover:text-antique-gold transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        <a
          href={`mailto:${author.email}`}
          className="text-warm-cream/50 hover:text-antique-gold transition-colors text-xs mt-6 inline-flex items-center gap-2 font-serif italic"
        >
          <Mail size={12} />
          {author.email}
        </a>

        <div className="flex items-center justify-center gap-4 my-10">
          <div className="w-20 h-[1px] bg-antique-gold/30" />
          <div className="w-2 h-2 rotate-45 bg-antique-gold" />
          <div className="w-20 h-[1px] bg-antique-gold/30" />
        </div>

        <div className="flex justify-center">
          <a
            href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blood-red via-antique-gold to-blood-red text-charcoal text-sm font-serif font-bold py-4 px-10 md:px-12 shadow-2xl shadow-antique-gold/30 transform transition-all duration-300 hover:scale-105 animate-pulse tracking-widest uppercase border-2 border-antique-gold"
          >
            <Rocket size={18} />
            Launch & Go-Live Portal
          </a>
        </div>

        <p className="font-serif text-warm-cream/30 text-[10px] mt-10 tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Willie Hill & Linda Jenkins · All rights
          reserved
        </p>
      </div>
    </footer>
  );
}
