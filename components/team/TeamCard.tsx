"use client";

import Image from "next/image";
import { Scissors, Calendar } from "lucide-react";
import { BookingButton } from "@/components/shared/BookingButton";

export interface TeamMember {
  name: string;
  role: string;
  specialties: string[];
  experience: string;
  initials: string;
  accentHex: string;
  imageUrl?: string;
  booksyUrl?: string;
  bio?: string;
}

export function TeamCard({
  name,
  role,
  specialties,
  experience,
  initials,
  accentHex,
  imageUrl,
  booksyUrl,
}: TeamMember) {
  return (
    <div className="group bg-bg-card border border-border rounded-xl overflow-hidden card-glow hover:border-silver/35 flex flex-col">
      {/* Portrait — real photo or initials fallback */}
      <div
        className="aspect-[3/4] relative overflow-hidden"
        style={imageUrl ? undefined : {
          background: `linear-gradient(145deg, ${accentHex} 0%, #2A2A2A 100%)`,
        }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${name}, ${role}`}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <span
            className="absolute inset-0 flex items-center justify-center font-heading text-8xl font-bold select-none"
            style={{ color: "rgba(0,0,0,0.10)" }}
          >
            {initials}
          </span>
        )}

        {/* Gradient at bottom for smooth transition */}
        <div
          className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
          aria-hidden="true"
        />
      </div>

      {/* Top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-silver/30 to-transparent" aria-hidden="true" />

      {/* Info */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <p className="eyebrow text-[10px] mb-1.5">{role}</p>
          <h3 className="font-heading text-xl font-bold text-[#111111] tracking-wide">{name}</h3>
          <p className="text-xs text-[#666666] flex items-center gap-1.5 mt-1.5">
            <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {experience} Erfahrung
          </p>
        </div>

        {/* Specialty tags */}
        <div className="flex flex-wrap gap-2">
          {specialties.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1 text-xs bg-bg-surface border border-border/60 text-[#666666] px-2.5 py-1 rounded-full"
            >
              <Scissors className="h-3 w-3 text-silver/60 shrink-0" aria-hidden="true" />
              {s}
            </span>
          ))}
        </div>

        {/* CTA — stopPropagation so parent card click doesn't also fire */}
        <div
          className="mt-auto pt-4 border-t border-border/50"
          onClick={(e) => e.stopPropagation()}
        >
          <BookingButton size="sm" label="Termin buchen" href={booksyUrl} className="w-full" />
        </div>
      </div>
    </div>
  );
}
