import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { BookingBanner } from "@/components/shared/BookingBanner";
import { TeamCard } from "@/components/team/TeamCard";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </SectionWrapper>

      <BookingBanner
        title="Deinen Barber aussuchen?"
        subtitle="Buche direkt bei deinem Wunsch-Barber über Booksy."
      />
    </>
  );
}
