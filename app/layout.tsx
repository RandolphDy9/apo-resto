import type { Metadata, Viewport } from "next";
import { Alfa_Slab_One, Figtree } from "next/font/google";
import "./globals.css";

const alfa = Alfa_Slab_One({ weight: "400", subsets: ["latin"], variable: "--font-alfa", display: "swap" });
const figtree = Figtree({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-figtree", display: "swap" });

export const metadata: Metadata = {
  title: "Apo Filipino Cuisine | Home cooking at Bathurst & Wilson, Toronto",
  description:
    "Apo Filipino Cuisine serves fresh Filipino home cooking at 373 Wilson Ave, North York. Sisig, lechon, silog breakfasts, pancit and party trays. Order pickup or delivery.",
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${alfa.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
