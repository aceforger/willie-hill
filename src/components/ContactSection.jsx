import { useState } from "react";
import { Mail, Send, CheckCircle, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { author } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center bg-warm-cream overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-antique-gold to-transparent" />
      <div className="absolute inset-0 circle-pattern opacity-15" />

      <div className="relative max-w-5xl mx-auto px-6 w-full py-16">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-blood-red" />
              <Mail size={14} className="text-blood-red" />
              <span className="font-serif text-xs tracking-[0.4em] uppercase text-blood-red font-bold">
                Get in Touch
              </span>
              <Mail size={14} className="text-blood-red" />
              <div className="w-12 h-[1px] bg-blood-red" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-burgundy mb-4">
              Contact Willie
            </h2>
            <div className="w-24 h-[2px] bg-antique-gold mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <ScrollReveal
            animation="slideRight"
            delay={0.2}
            className="lg:col-span-2"
          >
            <div className="space-y-5">
              <div className="border-2 border-deep-burgundy/20 bg-warm-cream/50 p-6">
                <Mail size={20} className="text-blood-red mb-3" />
                <p className="font-serif text-xs tracking-[0.3em] uppercase text-deep-burgundy/60 mb-2 font-bold">
                  Email
                </p>
                <a
                  href={`mailto:${author.email}`}
                  className="font-serif text-sm text-deep-burgundy hover:text-blood-red transition-colors break-all font-medium"
                >
                  {author.email}
                </a>
              </div>

              {/* <div className="border-2 border-antique-gold/30 bg-deep-burgundy/10 p-6">
                <Sun size={20} className="text-antique-gold mb-3" />
                <p className="font-serif text-xs tracking-[0.3em] uppercase text-deep-burgundy/60 mb-2 font-bold">
                  Publisher
                </p>
                <p className="font-serif text-sm text-deep-burgundy">
                  {author.publisher}
                </p>
              </div> */}

              <div className="border-2 border-blood-red/20 bg-deep-burgundy/5 p-6">
                <p className="font-serif italic text-sm text-deep-burgundy/80 leading-relaxed">
                  "This is the opportune moment for the Crips and Bloods to
                  become Heroes — not only of their respective communities, but
                  the Nation as a whole."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal
            animation="slideLeft"
            delay={0.4}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-charcoal border-2 border-antique-gold/30 p-8 space-y-6"
            >
              <div>
                <label className="block font-serif text-xs tracking-[0.3em] uppercase text-antique-gold/80 mb-2 font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full bg-deep-burgundy/40 border border-antique-gold/30 px-4 py-3 text-warm-cream placeholder:text-warm-cream/30 focus:outline-none focus:border-antique-gold transition-all font-serif"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block font-serif text-xs tracking-[0.3em] uppercase text-antique-gold/80 mb-2 font-bold">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full bg-deep-burgundy/40 border border-antique-gold/30 px-4 py-3 text-warm-cream placeholder:text-warm-cream/30 focus:outline-none focus:border-antique-gold transition-all font-serif"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block font-serif text-xs tracking-[0.3em] uppercase text-antique-gold/80 mb-2 font-bold">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full bg-deep-burgundy/40 border border-antique-gold/30 px-4 py-3 text-warm-cream placeholder:text-warm-cream/30 focus:outline-none focus:border-antique-gold transition-all resize-none font-serif"
                  placeholder="Share your thoughts..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full inline-flex items-center justify-center gap-2 py-4 font-bold text-sm tracking-widest uppercase transition-all ${
                  status === "success"
                    ? "bg-green-700 text-warm-cream cursor-default"
                    : "bg-antique-gold hover:bg-blood-red text-charcoal hover:text-warm-cream"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {status === "sending" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Send size={16} />
                  </motion.div>
                ) : status === "success" ? (
                  <CheckCircle size={16} />
                ) : (
                  <Send size={16} />
                )}
                {status === "idle"
                  ? "Send Message"
                  : status === "sending"
                    ? "Sending..."
                    : "Message Sent!"}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-antique-gold font-serif italic"
                >
                  Thank you. Willie will respond to you shortly.
                </motion.p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
