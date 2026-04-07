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
  title: "Car Survivor | Drive Through the Dinosaur Age",
  description:
    "Race through prehistoric wastelands swarming with dinosaurs. A top-down 2D survivor roguelike with time-traveling vehicles, auto-combat, and AI-powered development. Coming to Steam.",
  keywords: ["car survivor", "roguelike", "dinosaur game", "survivor game", "indie game", "steam"],
  openGraph: {
    title: "Car Survivor | Drive Through the Dinosaur Age",
    description: "Race through prehistoric wastelands swarming with dinosaurs.",
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
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
