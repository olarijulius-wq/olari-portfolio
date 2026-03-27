import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechBar from "@/components/TechBar";
import About from "@/components/About";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <TechBar />
      <About />
      <Work />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
