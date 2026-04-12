import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechBar from "@/components/TechBar";
import About from "@/components/About";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InteractiveGradientBackground from "@/components/InteractiveGradientBackground";
import {
  contactEmail,
  personName,
  siteDescription,
  siteTitle,
  siteUrl,
  socialLinks,
} from "@/app/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: personName,
      url: siteUrl,
      image: `${siteUrl}/icon`,
      jobTitle: "Full-Stack Developer",
      description: siteDescription,
      email: contactEmail,
      nationality: "Estonian",
      sameAs: socialLinks,
      knowsAbout: [
        "Full-stack development",
        "Next.js",
        "React",
        "TypeScript",
        "SaaS development",
        "MVP development",
        "AI-assisted development",
        "Booking systems",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "en",
      about: {
        "@id": `${siteUrl}#person`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}#webpage`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      about: {
        "@id": `${siteUrl}#person`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon`,
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
