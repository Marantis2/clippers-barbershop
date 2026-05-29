"use client";

import { useState } from "react";
import { TeamCard } from "./TeamCard";
import { BarberPanel } from "./BarberPanel";
import type { TeamMember } from "./TeamCard";

interface TeamGridProps {
  members: TeamMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
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
            className="cursor-pointer rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#999999]"
            aria-label={`Mehr über ${member.name} erfahren`}
          >
            <TeamCard {...member} />
          </div>
        ))}
      </div>

      <BarberPanel member={selected} onClose={() => setSelected(null)} />
    </>
  );
}
