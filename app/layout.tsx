import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olari Julius — Full-Stack Developer",
  description:
    "Full-Stack Developer from Estonia. I build products that work. Fast. SaaS apps, booking systems, MVPs shipped with Next.js, Supabase, and AI.",
  authors: [{ name: "Olari Julius" }],
  openGraph: {
    title: "Olari Julius — Full-Stack Developer",
    description: "I build products that work. Fast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
