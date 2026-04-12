import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechBar from "@/components/TechBar";
import About from "@/components/About";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InteractiveGradientBackground from "@/components/InteractiveGradientBackground";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <InteractiveGradientBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechBar />
        <About />
        <Work />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
