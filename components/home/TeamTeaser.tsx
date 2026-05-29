import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scissors } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  imageUrl: string;
}

const team: TeamMember[] = [
  {
    name: "Marco Rossi",
    role: "Senior Barber",
    specialty: "Klassische Schnitte & Bartpflege",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Lukas Schneider",
    role: "Barber",
    specialty: "Fades & moderne Styles",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Ahmed Khalil",
    role: "Junior Barber",
    specialty: "Skin Fades & Linien",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
];

export function TeamTeaser() {
  return (
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
        {team.map(({ name, role, specialty, imageUrl }) => (
          <div
            key={name}
            className="group bg-bg-card border border-border rounded-xl overflow-hidden card-glow hover:border-silver/35"
          >
            {/* Portrait photo */}
            <div className="h-64 relative overflow-hidden">
              <Image
                src={imageUrl}
                alt={`${name}, ${role}`}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              {/* Gradient fade at bottom for smooth transition to card body */}
              <div
                className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
                style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
                aria-hidden="true"
              />
            </div>

            {/* Top accent line */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-silver/30 to-transparent" aria-hidden="true" />

            <div className="p-6">
              <p className="eyebrow text-[10px] mb-2">{role}</p>
              <h3 className="font-heading text-lg font-bold text-[#111111] mb-2 tracking-wide">{name}</h3>
              <p className="text-sm text-[#666666] flex items-center gap-1.5">
                <Scissors className="h-3.5 w-3.5 shrink-0 text-silver/60" aria-hidden="true" />
                {specialty}
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
  );
}
