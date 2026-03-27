import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olari Julius — Full-Stack Developer",
  description:
    "Full-Stack Developer from Estonia. I build products that work. Fast. SaaS apps, booking systems, MVPs — shipped with Next.js, Supabase, and AI.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Stripe",
    "Estonia",
    "SaaS",
    "MVP",
  ],
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
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <body
        className="font-[family-name:var(--font-space)] bg-[#080808] text-white antialiased min-h-full"
        style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
