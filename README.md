# Last Ember — Landing Page

Landing page for **Last Ember**, a turn-based deck-building roguelike where **Arkane** — bearer of the world's last summoning ember — calls dinosaurs to her side in battle. Slay-the-Spire-style maps, fusion sigils, and bio-mecha evolutions.

## Tech Stack

- **Next.js 16** + TypeScript
- **Tailwind CSS**
- Deployed on **Vercel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:8000](http://localhost:8000) (project port — `dev` runs on 8000, not 3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout + metadata
│   ├── globals.css       # Global styles + animations
│   ├── privacy/          # Privacy Policy page
│   └── icon.png          # Favicon
├── components/
│   ├── Navbar.tsx        # Responsive navigation
│   ├── Hero.tsx          # Hero (Arkane vs Ruin Lord poster layout)
│   ├── GameShowcase.tsx  # In-game lobby preview
│   ├── About.tsx         # Game description
│   ├── Features.tsx      # Features + sample cards + dinosaur bestiary
│   ├── Technology.tsx    # Gemini AI + Google Cloud + Unity
│   ├── Team.tsx          # DashDeploy Studios team
│   ├── Roadmap.tsx       # MVP → Early Access → Launch
│   ├── Wishlist.tsx      # CTA section
│   └── Footer.tsx        # Footer with links
public/
└── images/               # Card art, dinosaur sprites, lobby + chapter backgrounds
```

## Team — DashDeploy Studios

| Name | Role |
|------|------|
| **Max** (Mintae Kim) | Builder — Game, AI Pipeline, DevOps, Design |

## Related Projects

- **DianoCard** — Game (Unity 6 + URP)
- **DianoCardPlan** — Design docs, card/enemy tables, asset pipeline
- **LandingPage** — This repo

## License

All rights reserved. © 2026 DashDeploy Studios.
