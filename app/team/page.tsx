import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { BookingBanner } from "@/components/shared/BookingBanner";
import { TeamGrid } from "@/components/team/TeamGrid";
import type { TeamMember } from "@/components/team/TeamCard";
import { BOOKSY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Team — Clippers Ginnheim",
  description: "Lern das Team von Clippers Ginnheim kennen – erfahrene Barber mit Leidenschaft für Haarschnitte und Bartpflege.",
};

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

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Unser Team"
        subtitle="Leidenschaftliche Barber mit jahrelanger Erfahrung – jeder mit seinem eigenen Stil."
      />

      <SectionWrapper>
        <p className="text-center text-gray-mid leading-relaxed max-w-2xl mx-auto mb-14 text-sm">
          Bei Clippers Ginnheim arbeiten Menschen, die ihren Beruf wirklich lieben.
          Jeder Barber bringt seine eigene Handschrift mit – zusammen bieten wir
          das komplette Spektrum moderner und klassischer Barbierkunst.
        </p>

        <TeamGrid members={team} />
      </SectionWrapper>

      <BookingBanner
        title="Deinen Barber aussuchen?"
        subtitle="Buche direkt bei deinem Wunsch-Barber über Booksy."
      />
    </>
  );
}
