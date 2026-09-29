import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BookSection from "./components/BookSection";
import MessageSection from "./components/MessageSection";
import AuthorsSection from "./components/AuthorsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-charcoal text-warm-cream">
      <Navbar />
      <main>
        <HeroSection />
        <BookSection />
        <MessageSection />
        <AuthorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
