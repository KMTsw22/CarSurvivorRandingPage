import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Last Ember | Summon Dinosaurs. Build Your Deck.",
  description:
    "A deck-building roguelike where Arkane — bearer of the world's last summoning ember — calls dinosaurs to battle. Slay-the-Spire-style maps, fusion sigils, and bio-mecha evolutions. Coming to Steam.",
  keywords: ["last ember", "deckbuilder", "roguelike", "dinosaur card game", "slay the spire", "indie game", "steam"],
  openGraph: {
    title: "Last Ember | Summon Dinosaurs. Build Your Deck.",
    description: "Arkane carries the world's last spark of summoning fire — and the dinosaurs answer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#1a140e] text-white">
        {children}
      </body>
    </html>
  );
}
