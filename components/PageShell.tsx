import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* The interactive gradient stays on the homepage only to keep inner routes calmer and more legible. */}
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
