"use client";

import { useState } from "react";
import Image from "next/image";
import CardGalleryModal from "./CardGalleryModal";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9-4 9 4-9 4-9-4z M3 12l9 4 9-4 M3 17l9 4 9-4" />
      </svg>
    ),
    title: "20-Card Decks",
    desc: "Draw 5 cards each turn — at least one summon guaranteed. Spend chapter mana on summons, attack spells, defense, and buffs. Every run, a new deck.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Summon & Auto-Strike",
    desc: "Play summon cards to bring dinosaurs onto the field. They strike automatically each turn while you focus on tactics, blocks, and the next play.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Branching Map Runs",
    desc: "15 nodes per chapter — battles, elites, shops, events, and rest sites. Choose your path. Lose the run, keep the lessons. 4 chapters in total.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Fusion Sigils",
    desc: "Brand a summon with a Fusion Sigil to combine carnivore traits — the Apex Fusion passive lets Arkane bind two beasts into one stronger card.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Bio-Mecha Evolution",
    desc: "Each dinosaur evolves through three tiers — bare hide, partial mecha, full bio-mecha. Ember-charged plating, signature skills sharpened with every step.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Apex Signatures",
    desc: "Each summon has its own striking pattern — Raptor's pounce, Carnotaurus' charge, Allosaurus' stalk, T-Rex's apex roar. Compose a board of complements, not duplicates.",
  },
];

const dinosaurs = [
  { name: "Compsognathus", role: "Swarm", img: "/images/Compsognathus.png" },
  { name: "Raptor", role: "Striker", img: "/images/Raptor.png" },
  { name: "Carnotaurus", role: "Charger", img: "/images/Carnotaurus.png" },
  { name: "Allosaurus", role: "Hunter", img: "/images/Allosaurus.png" },
  { name: "Majungasaurus", role: "Predator", img: "/images/Majungasaurus.png" },
  { name: "T-Rex", role: "Apex / Rare", img: "/images/T-Rex.png" },
];

const cards = [
  { name: "Raptor", art: "/images/cards/Raptor.png", tag: "Summon" },
  { name: "Inferno Meteor", art: "/images/cards/InfernoMeteor.png", tag: "Spell" },
  { name: "Bedrock Monolith", art: "/images/cards/BedrockMonolith.png", tag: "Spell" },
  { name: "Fusion Sigil", art: "/images/cards/FusionSigil.png", tag: "Utility" },
];

export default function Features() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-[#1a140e] via-orange-950/5 to-[#1a140e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
            Features
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Draw. Summon. <span className="text-orange-400">Evolve.</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center mb-4 group-hover:bg-orange-600/30 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Card sample row */}
        <div className="mt-16">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <h3 className="text-2xl font-bold">
              Sample <span className="text-orange-400">Cards</span>
            </h3>
            <button
              onClick={() => setGalleryOpen(true)}
              className="px-5 py-2.5 rounded-full bg-orange-600 hover:bg-orange-500 transition-colors text-white text-sm font-semibold inline-flex items-center gap-2"
            >
              View All Cards
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cards.map((c) => (
              <button
                key={c.name}
                onClick={() => setGalleryOpen(true)}
                className="group rounded-xl border border-white/10 bg-white/[0.02] hover:border-orange-500/30 hover:scale-[1.02] transition-all duration-300 overflow-hidden text-left cursor-pointer"
              >
                <div className="relative aspect-[3/2] bg-zinc-900">
                  <Image src={c.art} alt={c.name} fill className="object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-white">{c.name}</p>
                  <p className="text-xs text-orange-400/80 mt-0.5">{c.tag}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <CardGalleryModal open={galleryOpen} onClose={() => setGalleryOpen(false)} />

        {/* Dinosaur bestiary */}
        <div className="mt-16 p-8 rounded-2xl border border-orange-500/20 bg-orange-500/5">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Dinosaur <span className="text-orange-400">Bestiary</span>
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
            {dinosaurs.map((d) => (
              <div key={d.name} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    className="object-contain drop-shadow-[0_0_8px_rgba(234,88,12,0.3)]"
                  />
                </div>
                <p className="text-sm font-medium text-white">{d.name}</p>
                <p className="text-xs text-zinc-500">{d.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
