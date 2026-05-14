"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type CardEntry = {
  id: string;
  name: string;
  nameKr: string;
  type: "SUMMON" | "MAGIC" | "BUFF" | "UTILITY";
  subType: string;
  rarity: "COMMON" | "UNCOMMON" | "RARE";
  cost: number;
  attack: number;
  hp: number;
  description: string;
  image: string | null;
  chapter: number;
};

const cards: CardEntry[] = [
  // — Carnivores (Arkane's roster, Chapter 1) —
  { id: "C004", name: "Raptor", nameKr: "랩터", type: "SUMMON", subType: "CARNIVORE", rarity: "COMMON", cost: 1, attack: 7, hp: 13, description: "Carnivore. Fast. Applies +1 Bleed on attack.", image: "Raptor.png", chapter: 1 },
  { id: "C005", name: "Carnotaurus", nameKr: "카르노타우루스", type: "SUMMON", subType: "CARNIVORE", rarity: "COMMON", cost: 1, attack: 8, hp: 10, description: "Carnivore hitter. Applies Vulnerable (1T) on attack.", image: "Carnotaurus.png", chapter: 1 },
  { id: "C008", name: "T-Rex", nameKr: "티렉스", type: "SUMMON", subType: "CARNIVORE", rarity: "RARE", cost: 2, attack: 15, hp: 22, description: "Apex. All enemies are Weakened while T-Rex is on the field.", image: "T-Rex.png", chapter: 1 },
  { id: "C010", name: "Compsognathus", nameKr: "콤프소그나투스", type: "SUMMON", subType: "CARNIVORE", rarity: "COMMON", cost: 0, attack: 2, hp: 5, description: "Tiny scout. 0-cost. Draw +1 card each turn.", image: "Compsognathus.png", chapter: 1 },
  { id: "C012", name: "Allosaurus", nameKr: "알로사우루스", type: "SUMMON", subType: "CARNIVORE", rarity: "COMMON", cost: 1, attack: 11, hp: 22, description: "Carnivore. +6 ATK when HP drops below 50%.", image: "Allosaurus.png", chapter: 1 },
  { id: "C014", name: "Majungasaurus", nameKr: "마준가사우루스", type: "SUMMON", subType: "CARNIVORE", rarity: "COMMON", cost: 2, attack: 9, hp: 14, description: "Cannibal. Once per turn, devour another ally to permanently absorb 30% of its ATK and HP.", image: "Majungasaurus.png", chapter: 1 },
  { id: "C018", name: "Giganotosaurus", nameKr: "기가노토사우루스", type: "SUMMON", subType: "CARNIVORE", rarity: "RARE", cost: 2, attack: 15, hp: 24, description: "Permanently gains +2 ATK every time it's hit.", image: "Giganotosaurus.png", chapter: 1 },
  { id: "C019", name: "Troodon", nameKr: "트로오돈", type: "SUMMON", subType: "CARNIVORE", rarity: "COMMON", cost: 1, attack: 7, hp: 12, description: "Ambusher. First attack after summon deals double damage.", image: "Troodon.png", chapter: 1 },
  { id: "C020", name: "Baryonyx", nameKr: "바리오닉스", type: "SUMMON", subType: "CARNIVORE", rarity: "UNCOMMON", cost: 2, attack: 12, hp: 18, description: "Rampage. Immediately attacks again after every kill.", image: "Baryonyx.png", chapter: 1 },
  { id: "C021", name: "Acrocanthosaurus", nameKr: "아크로칸토사우루스", type: "SUMMON", subType: "CARNIVORE", rarity: "UNCOMMON", cost: 2, attack: 11, hp: 22, description: "Intimidate. Reduces enemy ATK by 2 on every strike.", image: "Acrocanthosaurus.png", chapter: 1 },
  { id: "C022", name: "Carcharodontosaurus", nameKr: "카르카로돈토사우루스", type: "SUMMON", subType: "CARNIVORE", rarity: "RARE", cost: 2, attack: 14, hp: 20, description: "Executes any enemy at or below 8 HP on attack.", image: "Carcharodontosaurus.png", chapter: 1 },

  // — Herbivores & Omnivores (alternate paths) —
  { id: "C001", name: "Triceratops", nameKr: "트리케라톱스", type: "SUMMON", subType: "HERBIVORE", rarity: "COMMON", cost: 1, attack: 4, hp: 20, description: "Herbivore tank. All allies gain +3 Block at turn start.", image: "Triceratops.png", chapter: 1 },
  { id: "C002", name: "Stegosaurus", nameKr: "스테고사우루스", type: "SUMMON", subType: "HERBIVORE", rarity: "COMMON", cost: 1, attack: 5, hp: 17, description: "Herbivore. Gains +3 Block whenever it is hit.", image: "Stegosaurus.png", chapter: 1 },
  { id: "C003", name: "Ankylosaurus", nameKr: "안킬로사우루스", type: "SUMMON", subType: "HERBIVORE", rarity: "UNCOMMON", cost: 2, attack: 3, hp: 25, description: "Heavy herbivore tank. -2 to all incoming damage.", image: "Ankylosaurus.png", chapter: 1 },
  { id: "C011", name: "Brachiosaurus", nameKr: "브라키오사우루스", type: "SUMMON", subType: "HERBIVORE", rarity: "RARE", cost: 2, attack: 3, hp: 40, description: "Apex herbivore. All allies +2 ATK at turn start.", image: "Brachiosaurus.png", chapter: 1 },
  { id: "C013", name: "Therizinosaurus", nameKr: "테리지노사우루스", type: "SUMMON", subType: "OMNIVORE", rarity: "UNCOMMON", cost: 1, attack: 9, hp: 18, description: "Omnivore. Gains +5 Block on its own attack.", image: "Therizinosaurus.png", chapter: 1 },
  { id: "C015", name: "Iguanodon", nameKr: "이구아노돈", type: "SUMMON", subType: "OMNIVORE", rarity: "UNCOMMON", cost: 1, attack: 7, hp: 20, description: "Omnivore. Counterstrikes any attacker for 4 damage.", image: "Iguanodon.png", chapter: 1 },
  { id: "C016", name: "Ceratosaurus", nameKr: "케라토사우루스", type: "SUMMON", subType: "OMNIVORE", rarity: "UNCOMMON", cost: 1, attack: 10, hp: 14, description: "Omnivore. Applies +1 Bleed AND +1 Poison on every attack.", image: "Ceratosaurus.png", chapter: 1 },
  { id: "C017", name: "Gallimimus", nameKr: "갈리미무스", type: "SUMMON", subType: "OMNIVORE", rarity: "COMMON", cost: 1, attack: 6, hp: 10, description: "Omnivore. Gains +4 Block at turn start.", image: "Gallimimus.png", chapter: 1 },

  // — T1 / T2 evolutions (fusion results) —
  { id: "C004_T1", name: "Alpha Raptor", nameKr: "알파 랩터", type: "SUMMON", subType: "CARN · T1", rarity: "UNCOMMON", cost: 1, attack: 10, hp: 15, description: "Raptor T1. Faster, deeper lacerate.", image: "Raptor_T1.png", chapter: 1 },
  { id: "C004_T2", name: "Apex Raptor", nameKr: "절멸 랩터", type: "SUMMON", subType: "CARN · T2", rarity: "RARE", cost: 1, attack: 13, hp: 18, description: "Raptor T2. Apex speed, severing strikes.", image: "Raptor_T2.png", chapter: 1 },
  { id: "C005_T1", name: "Storm Carno", nameKr: "폭풍 카르노타우루스", type: "SUMMON", subType: "CARN · T1", rarity: "UNCOMMON", cost: 1, attack: 11, hp: 12, description: "Carnotaurus T1. Pure offense.", image: "Carnotaurus_T1.png", chapter: 1 },
  { id: "C005_T2", name: "Abyss Carno", nameKr: "심연 카르노타우루스", type: "SUMMON", subType: "CARN · T2", rarity: "RARE", cost: 1, attack: 15, hp: 14, description: "Carnotaurus T2. Glass cannon — devastating tenderize.", image: "Carnotaurus_T2.png", chapter: 1 },
  { id: "C008_T1", name: "Tyrant T-Rex", nameKr: "폭군 티렉스", type: "SUMMON", subType: "CARN · T1", rarity: "RARE", cost: 2, attack: 20, hp: 28, description: "T-Rex T1. Apex presence crushes the field.", image: "T-Rex_T1.png", chapter: 1 },
  { id: "C008_T2", name: "Doom T-Rex", nameKr: "종말 티렉스", type: "SUMMON", subType: "CARN · T2", rarity: "RARE", cost: 2, attack: 26, hp: 36, description: "T-Rex T2. Apex of apex.", image: "T-Rex_T2.png", chapter: 1 },
  { id: "C010_T1", name: "Clever Compy", nameKr: "영리한 콤프소그나투스", type: "SUMMON", subType: "CARN · T1", rarity: "UNCOMMON", cost: 0, attack: 3, hp: 8, description: "Compy T1. Tougher, sharper scout.", image: "Compsognathus_T1.png", chapter: 1 },
  { id: "C010_T2", name: "Pack Compy", nameKr: "무리의 콤프소그나투스", type: "SUMMON", subType: "CARN · T2", rarity: "RARE", cost: 0, attack: 4, hp: 12, description: "Compy T2. 0-cost beast.", image: "Compsognathus_T2.png", chapter: 1 },
  { id: "C012_T1", name: "Berserker Allo", nameKr: "분노의 알로사우루스", type: "SUMMON", subType: "CARN · T1", rarity: "UNCOMMON", cost: 1, attack: 15, hp: 26, description: "Allosaurus T1. Frenzy enhanced.", image: "Allosaurus_T1.png", chapter: 1 },
  { id: "C012_T2", name: "Apex Allo", nameKr: "절멸 알로사우루스", type: "SUMMON", subType: "CARN · T2", rarity: "RARE", cost: 1, attack: 20, hp: 30, description: "Allosaurus T2. Apex frenzy.", image: "Allosaurus_T2.png", chapter: 1 },
  { id: "C018_T1", name: "Warlord Giga", nameKr: "워로드 기가노토", type: "SUMMON", subType: "CARN · T1", rarity: "RARE", cost: 2, attack: 18, hp: 28, description: "Giga T1. Enhanced rage.", image: "Giganotosaurus_T1.png", chapter: 1 },
  { id: "C018_T2", name: "Iron Tyrant Giga", nameKr: "아이언 타이런트", type: "SUMMON", subType: "CARN · T2", rarity: "RARE", cost: 2, attack: 22, hp: 34, description: "Giga T2. Undying rage.", image: "Giganotosaurus_T2.png", chapter: 1 },
  { id: "C019_T1", name: "Shadow Troodon", nameKr: "섀도우 트로오돈", type: "SUMMON", subType: "CARN · T1", rarity: "UNCOMMON", cost: 1, attack: 10, hp: 15, description: "Troodon T1. Enhanced ambush.", image: "Troodon_T1.png", chapter: 1 },
  { id: "C019_T2", name: "Night Troodon", nameKr: "나이트 트로오돈", type: "SUMMON", subType: "CARN · T2", rarity: "RARE", cost: 1, attack: 14, hp: 19, description: "Troodon T2. Shadow ambush.", image: "Troodon_T2.png", chapter: 1 },
  { id: "C020_T1", name: "River Hunter Baryonyx", nameKr: "리버헌터 바리오닉스", type: "SUMMON", subType: "CARN · T1", rarity: "UNCOMMON", cost: 2, attack: 15, hp: 22, description: "Baryonyx T1. Enhanced rampage.", image: "Baryonyx_T1.png", chapter: 1 },
  { id: "C020_T2", name: "Iron Baryonyx", nameKr: "철갑 바리오닉스", type: "SUMMON", subType: "CARN · T2", rarity: "RARE", cost: 2, attack: 19, hp: 27, description: "Baryonyx T2. Iron rampage.", image: "Baryonyx_T2.png", chapter: 1 },
  { id: "C021_T1", name: "Warden Acro", nameKr: "워든 아크로칸토", type: "SUMMON", subType: "CARN · T1", rarity: "UNCOMMON", cost: 2, attack: 14, hp: 26, description: "Acrocanthosaurus T1. Enhanced intimidate.", image: "Acrocanthosaurus_T1.png", chapter: 1 },
  { id: "C021_T2", name: "Siege Acro", nameKr: "시지 아크로칸토", type: "SUMMON", subType: "CARN · T2", rarity: "RARE", cost: 2, attack: 18, hp: 31, description: "Acrocanthosaurus T2. Supreme intimidate.", image: "Acrocanthosaurus_T2.png", chapter: 1 },
  { id: "C022_T1", name: "Executioner Carchar", nameKr: "처형자 카르카로돈토", type: "SUMMON", subType: "CARN · T1", rarity: "RARE", cost: 2, attack: 17, hp: 24, description: "Carcharodontosaurus T1. Enhanced execute.", image: "Carcharodontosaurus_T1.png", chapter: 1 },
  { id: "C022_T2", name: "Iron Executioner", nameKr: "철제 처형자", type: "SUMMON", subType: "CARN · T2", rarity: "RARE", cost: 2, attack: 21, hp: 29, description: "Carcharodontosaurus T2. Apex execute.", image: "Carcharodontosaurus_T2.png", chapter: 1 },

  // — Spells —
  { id: "C101", name: "Searing Fang", nameKr: "작열 송곳니", type: "MAGIC", subType: "ATTACK", rarity: "COMMON", cost: 1, attack: 0, hp: 0, description: "Deal 5 damage.", image: "SearingFang.png", chapter: 1 },
  { id: "C102", name: "Runic Orb", nameKr: "룬 보주", type: "MAGIC", subType: "DEFENSE", rarity: "COMMON", cost: 1, attack: 0, hp: 0, description: "Gain 6 Block.", image: "RunicOrb.png", chapter: 1 },
  { id: "C103", name: "Inferno Meteor", nameKr: "폭염 운석", type: "MAGIC", subType: "ATTACK", rarity: "UNCOMMON", cost: 2, attack: 0, hp: 0, description: "Deal 12 damage.", image: "InfernoMeteor.png", chapter: 1 },
  { id: "C104", name: "Twin Rune Dome", nameKr: "이중 룬돔", type: "MAGIC", subType: "DEFENSE", rarity: "UNCOMMON", cost: 2, attack: 0, hp: 0, description: "Gain 10 Block now, +5 Block next turn.", image: "TwinRuneDome.png", chapter: 1 },
  { id: "C107", name: "Sacred Orb", nameKr: "신성의 광구", type: "MAGIC", subType: "PURIFY", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Free a stolen ally. Clear all debuffs from self.", image: "SacredOrb.png", chapter: 1 },
  { id: "C111", name: "Ward Cyclone", nameKr: "호위 선풍", type: "MAGIC", subType: "DEFENSE", rarity: "COMMON", cost: 1, attack: 0, hp: 0, description: "Grant a target ally 10 Block.", image: "WardCyclone.png", chapter: 1 },
  { id: "C112", name: "Pack Canopy", nameKr: "무리의 천막", type: "MAGIC", subType: "DEFENSE", rarity: "UNCOMMON", cost: 2, attack: 0, hp: 0, description: "All allies and you gain 10 Block.", image: "PackCanopy.png", chapter: 1 },
  { id: "C114", name: "Bedrock Monolith", nameKr: "대지의 거석", type: "MAGIC", subType: "DEFENSE", rarity: "RARE", cost: 2, attack: 0, hp: 0, description: "Gain 12 Block.", image: "BedrockMonolith.png", chapter: 1 },
  { id: "C121", name: "Shield Slam", nameKr: "방패 격돌", type: "MAGIC", subType: "ATTACK", rarity: "UNCOMMON", cost: 2, attack: 0, hp: 0, description: "Deal 7 damage. Gain 5 Block.", image: "ShieldSlam.png", chapter: 1 },
  { id: "C124", name: "Frenzy Slash", nameKr: "광기의 검광", type: "MAGIC", subType: "ATTACK", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Deal 5. If target HP ≤ 50%, deal 10 instead.", image: "FrenzySlash.png", chapter: 1 },
  { id: "C129", name: "Thunder Roar", nameKr: "천둥 포효", type: "MAGIC", subType: "ATTACK", rarity: "UNCOMMON", cost: 2, attack: 0, hp: 0, description: "Deal 4 to all enemies. Apply Weak (1T).", image: "ThunderRoar.png", chapter: 1 },
  { id: "C131", name: "Claw Storm", nameKr: "발톱 폭우", type: "MAGIC", subType: "ATTACK", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Deal damage equal to the total ATK of all dinos on your field.", image: "ClawStorm.png", chapter: 1 },
  { id: "C133", name: "Binding Vine", nameKr: "속박의 덩굴", type: "MAGIC", subType: "DEBUFF", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Bind one enemy (1T). They cannot attack.", image: "BindingVine.png", chapter: 1 },
  { id: "C135", name: "Corrosive Cyclone", nameKr: "부식의 선풍", type: "MAGIC", subType: "DEBUFF", rarity: "COMMON", cost: 1, attack: 0, hp: 0, description: "Deal 3. Apply Vulnerable (1T).", image: "CorrosiveCyclone.png", chapter: 1 },
  { id: "C136", name: "Venom Thorn", nameKr: "맹독 가시", type: "MAGIC", subType: "DEBUFF", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Deal 5. Apply +3 Poison.", image: "VenomThorn.png", chapter: 1 },
  { id: "C137", name: "Bone Arrow", nameKr: "뼈 화살", type: "MAGIC", subType: "ATTACK", rarity: "COMMON", cost: 0, attack: 0, hp: 0, description: "0-cost. Deal 3 damage.", image: "BoneArrow.png", chapter: 1 },
  { id: "C138", name: "Primal Mark", nameKr: "원시 각인", type: "MAGIC", subType: "ATTACK", rarity: "UNCOMMON", cost: 0, attack: 0, hp: 0, description: "Deal 5. Add a copy of this card to your discard.", image: "PrimalMark.png", chapter: 1 },
  { id: "C139", name: "Voltaic Flash", nameKr: "자전 섬광", type: "MAGIC", subType: "ATTACK", rarity: "COMMON", cost: 1, attack: 0, hp: 0, description: "Deal 5 damage. Draw 1 card.", image: "VoltaicFlash.png", chapter: 1 },
  { id: "C140", name: "Verdant Knot", nameKr: "수목의 매듭", type: "MAGIC", subType: "DEFENSE", rarity: "COMMON", cost: 1, attack: 0, hp: 0, description: "Gain 6 Block. Draw 1 card.", image: "VerdantKnot.png", chapter: 1 },
  { id: "C141", name: "Fossil Burst", nameKr: "화석 폭발", type: "MAGIC", subType: "ATTACK", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Deal 8 damage.", image: "FossilBurst.png", chapter: 1 },
  { id: "C142", name: "Primordial Wail", nameKr: "태고의 비명", type: "MAGIC", subType: "DEBUFF", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Deal 5 to all enemies. Apply Vulnerable (1T) to all.", image: "PrimordialWail.png", chapter: 1 },
  { id: "C204", name: "Cleave", nameKr: "광역 공격", type: "MAGIC", subType: "ATTACK", rarity: "UNCOMMON", cost: 2, attack: 0, hp: 0, description: "Deal 10 damage to all enemies.", image: "Cleave.png", chapter: 2 },

  // — Buffs —
  { id: "C108", name: "Taunt", nameKr: "도발", type: "BUFF", subType: "TAUNT", rarity: "COMMON", cost: 1, attack: 0, hp: 0, description: "Make a chosen dino Taunt (1T).", image: "Taunt.png", chapter: 1 },
  { id: "C132", name: "Full Charge", nameKr: "총출동", type: "BUFF", subType: "SPECIAL", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Summon cards cost 1 less this turn.", image: "PackCall.png", chapter: 1 },
  { id: "C201", name: "Power Up", nameKr: "공격 강화", type: "BUFF", subType: "ATTACK_BUFF", rarity: "COMMON", cost: 1, attack: 0, hp: 0, description: "All dinos on field gain +3 ATK (1T).", image: "PowerUp.png", chapter: 1 },
  { id: "C202", name: "Heal", nameKr: "공룡 치유", type: "BUFF", subType: "HEAL", rarity: "COMMON", cost: 1, attack: 0, hp: 0, description: "+5 HP to all allies.", image: "HealAll.png", chapter: 1 },
  { id: "C203", name: "Berserk", nameKr: "광폭화", type: "BUFF", subType: "ATTACK_BUFF", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Dinos +5 ATK (1T). You lose 3 HP.", image: "Berserk.png", chapter: 1 },
  { id: "C205", name: "Regenerate", nameKr: "재생", type: "BUFF", subType: "HEAL", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "+3 HP to all allies per turn (3T).", image: "Regenerate.png", chapter: 2 },
  { id: "C206", name: "Roar", nameKr: "분노의 함성", type: "BUFF", subType: "SPECIAL", rarity: "RARE", cost: 1, attack: 0, hp: 0, description: "Field dinos gain +2 ATK permanently.", image: "Roar.png", chapter: 3 },

  // — Utility & Sigils —
  { id: "C152", name: "Fusion Sigil", nameKr: "융합의 각인", type: "UTILITY", subType: "FUSION", rarity: "COMMON", cost: 1, attack: 0, hp: 0, description: "Fuse two same-species, same-tier carnivores into the next tier.", image: "FusionSigil.png", chapter: 1 },
  { id: "C153", name: "Vitality Sigil", nameKr: "생명의 각인", type: "UTILITY", subType: "FUSION", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Fuse. The result gains +5 HP for 2 turns.", image: "VitalitySigil.png", chapter: 1 },
  { id: "C154", name: "Fury Sigil", nameKr: "격노의 각인", type: "UTILITY", subType: "FUSION", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Fuse. The result gains +3 ATK for 2 turns.", image: "FurySigil.png", chapter: 1 },
  { id: "C155", name: "Aegis Sigil", nameKr: "가호의 각인", type: "UTILITY", subType: "FUSION", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Fuse. The result gains +8 Block for 2 turns.", image: "AegisSigil.png", chapter: 1 },
  { id: "C156", name: "Reinforcement", nameKr: "증원 소집", type: "UTILITY", subType: "REINFORCE", rarity: "COMMON", cost: 0, attack: 0, hp: 0, description: "Add one of your owned T0 dinos to your hand (this combat only).", image: "Reinforcement.png", chapter: 1 },
  { id: "C302", name: "Draw", nameKr: "카드 드로우", type: "UTILITY", subType: "DRAW", rarity: "COMMON", cost: 1, attack: 0, hp: 0, description: "Draw 2 cards.", image: "Draw.png", chapter: 1 },
  { id: "C303", name: "Excavate", nameKr: "발굴", type: "UTILITY", subType: "DRAW", rarity: "UNCOMMON", cost: 1, attack: 0, hp: 0, description: "Draw 3 cards.", image: "Excavate.png", chapter: 2 },
];

const FILTERS = [
  { key: "ALL", label: "All", count: cards.length },
  { key: "SUMMON", label: "Summon", count: cards.filter((c) => c.type === "SUMMON").length },
  { key: "MAGIC", label: "Spell", count: cards.filter((c) => c.type === "MAGIC").length },
  { key: "BUFF", label: "Buff", count: cards.filter((c) => c.type === "BUFF").length },
  { key: "UTILITY", label: "Utility", count: cards.filter((c) => c.type === "UTILITY").length },
] as const;

const RARITY_TRIM: Record<string, string> = {
  COMMON: "border-amber-700/60",
  UNCOMMON: "border-zinc-300/60",
  RARE: "border-yellow-500/80",
};
const RARITY_LABEL_COLOR: Record<string, string> = {
  COMMON: "text-amber-700",
  UNCOMMON: "text-zinc-300",
  RARE: "text-yellow-400",
};

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CardGalleryModal({ open, onClose }: Props) {
  const [filter, setFilter] = useState<string>("ALL");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const filtered =
    filter === "ALL" ? cards : cards.filter((c) => c.type === filter);

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0f0a06]/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-7xl max-h-[92vh] bg-[#1a140e] border border-orange-500/25 rounded-2xl flex flex-col overflow-hidden shadow-[0_0_60px_rgba(234,88,12,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold">
              Card <span className="text-orange-400">Gallery</span>
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              {filtered.length} of {cards.length} cards
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-orange-500/40 transition-colors flex items-center justify-center text-zinc-400 hover:text-orange-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Filter pills */}
        <div className="px-6 py-3 border-b border-white/10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                filter === f.key
                  ? "border-orange-500/60 bg-orange-500/15 text-orange-200"
                  : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-zinc-200 hover:border-white/20"
              }`}
            >
              {f.label} <span className="opacity-60">·{f.count}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map((c) => (
              <div
                key={c.id}
                className={`group relative rounded-xl border-2 ${RARITY_TRIM[c.rarity]} bg-[#15110d] overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(234,88,12,0.18)] transition-all duration-200`}
              >
                {/* Cost badge */}
                <div className="absolute top-2 left-2 z-10 w-7 h-7 rounded-full bg-orange-600 border border-orange-300/50 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {c.cost}
                </div>
                {/* Card art */}
                <div className="relative aspect-[3/2] bg-[#0f0a06]">
                  {c.image ? (
                    <Image
                      src={`/images/cards/${c.image}`}
                      alt={c.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-xs">
                      art coming soon
                    </div>
                  )}
                  {/* Rarity label */}
                  <div className="absolute bottom-1 right-2 z-10">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${RARITY_LABEL_COLOR[c.rarity]} drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]`}>
                      {c.rarity}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-white truncate">{c.name}</h3>
                  <p className="text-[11px] text-zinc-500 truncate mt-0.5">
                    {c.type === "SUMMON" ? c.subType : c.type}
                    {c.type === "SUMMON" && (
                      <span className="ml-1 text-orange-400/80">
                        · {c.attack}/{c.hp}
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-zinc-400 leading-snug mt-2 line-clamp-3">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer hint */}
        <div className="px-6 py-2.5 border-t border-white/10 text-[11px] text-zinc-500 text-center">
          Press <kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/10 text-zinc-400">Esc</kbd> or click outside to close
        </div>
      </div>
    </div>
  );
}
