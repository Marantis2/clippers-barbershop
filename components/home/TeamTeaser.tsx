"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scissors } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { BarberPanel } from "@/components/team/BarberPanel";
import type { TeamMember } from "@/components/team/TeamCard";
import { BOOKSY_URL } from "@/lib/constants";

const team: TeamMember[] = [
  {
    name: "Marco Rossi",
    role: "Senior Barber",
    specialties: ["Klassische Schnitte", "Bartpflege", "Heißrasur"],
    experience: "12 Jahre",
    initials: "MR",
    accentHex: "#2E2E2E",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    booksyUrl: BOOKSY_URL,
    bio: "Marco bringt über 12 Jahre Erfahrung in klassischer Barbierkunst mit. Sein Markenzeichen ist die perfekte Heißrasur kombiniert mit einem präzisen Schnitt. Wer Wert auf Tradition und handwerkliche Exzellenz legt, ist bei ihm genau richtig.",
  },
  {
    name: "Lukas Schneider",
    role: "Barber",
    specialties: ["Fades", "Moderne Styles", "Textured Cuts"],
    experience: "6 Jahre",
    initials: "LS",
    accentHex: "#242424",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    booksyUrl: BOOKSY_URL,
    bio: "Lukas ist der Spezialist für moderne Styles und saubere Fades. Mit einem feinen Gespür für aktuelle Trends schafft er Looks, die im Alltag funktionieren und trotzdem auffallen. Sein Stil: frisch, präzise, ausdrucksstark.",
  },
  {
    name: "Ahmed Khalil",
    role: "Junior Barber",
    specialties: ["Skin Fades", "Design-Linien", "Konturrasur"],
    experience: "3 Jahre",
    initials: "AK",
    accentHex: "#363636",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    booksyUrl: BOOKSY_URL,
    bio: "Ahmed hat sich auf Skin Fades und präzise Design-Linien spezialisiert. Mit ruhiger Hand und einem guten Auge für Details liefert er Ergebnisse, die für sich sprechen. Trotz seiner jungen Karriere zählt er bereits zu den gefragtesten Barbern im Shop.",
  },
];

export function TeamTeaser() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <>
      <SectionWrapper className="bg-bg-surface">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">Das Team</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] tracking-[-0.02em]">
            Unsere Barber
          </h2>
          <div className="mt-5 mx-auto divider-metallic w-24" aria-hidden="true" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {team.map((member) => (
            <div
              key={member.name}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(member)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(member);
                }
              }}
              aria-label={`Mehr über ${member.name} erfahren`}
              className="group bg-bg-card border border-transparent rounded-xl overflow-hidden card-glow hover:border-[#00BFFF] hover:shadow-[0_0_0_3px_#00BFFF] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#999999]"
            >
              {/* Portrait photo */}
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={member.imageUrl!}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div
                  className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
                  style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Top accent line */}
              <div className="h-[1px] bg-gradient-to-r from-transparent via-silver/30 to-transparent" aria-hidden="true" />

              <div className="p-6">
                <p className="eyebrow text-[10px] mb-2">{member.role}</p>
                <h3 className="font-heading text-lg font-bold text-[#111111] mb-2 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-sm text-[#666666] flex items-center gap-1.5">
                  <Scissors className="h-3.5 w-3.5 shrink-0 text-silver/60" aria-hidden="true" />
                  {member.specialties.slice(0, 2).join(" & ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="text-center mt-12">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-[#666666] hover:text-[#111111] transition-colors duration-200 group tracking-wide"
          >
            Das ganze Team kennenlernen
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </SectionWrapper>

      <BarberPanel member={selected} onClose={() => setSelected(null)} />
    </>
  );
}
