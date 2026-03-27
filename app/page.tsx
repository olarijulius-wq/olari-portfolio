import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#080808] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
