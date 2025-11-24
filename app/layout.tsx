import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tie the Celtic Knot | Humanist Wedding Officiant & Celebrant Ontario",
  description: "Licensed Ontario Celebrant Kerstin Sandstrom specializes in bespoke wedding ceremonies, handfasting rituals, child naming ceremonies, and memorials. Inclusive, nature-based, and Celtic-inspired celebrations.",
  keywords: ["wedding officiant Ontario", "handfasting ceremony", "Celtic wedding", "humanist celebrant", "Ontario wedding officiant", "child naming ceremony", "memorial service", "non-religious wedding"],
  openGraph: {
    title: "Tie the Celtic Knot | Humanist Wedding Officiant Ontario",
    description: "Bespoke ceremonies from ancient handfasting rituals to modern, inclusive celebrations. Licensed Ontario Celebrant.",
    url: "https://tiethecelticknot.ca",
    siteName: "Tie the Celtic Knot",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
