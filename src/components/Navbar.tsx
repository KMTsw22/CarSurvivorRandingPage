"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Technology", href: "#technology" },
  { label: "Team", href: "#team" },
  { label: "Roadmap", href: "#roadmap" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-orange-500/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/car-super-side.png"
            alt="Car Survivor"
            width={40}
            height={40}
            className="drop-shadow-[0_0_8px_rgba(234,88,12,0.5)]"
          />
          <span className="text-lg font-bold tracking-tight">
            Car <span className="text-orange-500">Survivor</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 hover:text-orange-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:dashdeploystudio@gmail.com"
            className="text-sm px-4 py-2 rounded-full bg-orange-600 hover:bg-orange-500 transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-orange-500/10 bg-[#0a0a0a]/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 hover:text-orange-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
