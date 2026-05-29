"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Calendar, Scissors } from "lucide-react";
import type { TeamMember } from "./TeamCard";
import { BookingButton } from "@/components/shared/BookingButton";

const workPhotos = [
  { src: "/Bild1.jpeg", alt: "Arbeit 1" },
  { src: "/Bild2.jpeg", alt: "Arbeit 2" },
  { src: "/Bild3.jpeg", alt: "Arbeit 3" },
  { src: "/Bild4.jpeg", alt: "Arbeit 4" },
];

interface BarberPanelProps {
  member: TeamMember | null;
  onClose: () => void;
}

export function BarberPanel({ member, onClose }: BarberPanelProps) {
  const isOpen = member !== null;

  // Keep content visible during the exit slide animation
  const [displayMember, setDisplayMember] = useState<TeamMember | null>(null);
  useEffect(() => {
    if (member) setDisplayMember(member);
  }, [member]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-300"
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
      />

      {/* Slide-in panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={displayMember ? `${displayMember.name} – Details` : "Barber Details"}
        className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white border-l border-border shadow-2xl overflow-y-auto"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {displayMember && (
          <>
            {/* ── Header: text left, photo right ── */}
            <div className="relative flex items-start gap-5 p-6 pb-5">
              {/* Text */}
              <div className="flex-1 min-w-0 pt-9">
                <p className="eyebrow text-[10px] mb-1.5">{displayMember.role}</p>
                <h2 className="font-heading text-2xl font-bold text-[#111111] tracking-tight leading-snug">
                  {displayMember.name}
                </h2>
                <p className="text-xs text-[#666666] flex items-center gap-1.5 mt-2">
                  <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {displayMember.experience} Erfahrung
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {displayMember.specialties.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 text-[10px] bg-bg-surface border border-border/60 text-[#666666] px-2 py-0.5 rounded-full"
                    >
                      <Scissors className="h-2.5 w-2.5 text-silver/60 shrink-0" aria-hidden="true" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Photo (top right, large) */}
              <div className="w-36 shrink-0 rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="aspect-[3/4] relative bg-[#E8E8E8]">
                  {displayMember.imageUrl ? (
                    <Image
                      src={displayMember.imageUrl}
                      alt={`${displayMember.name}, ${displayMember.role}`}
                      fill
                      className="object-cover object-center"
                      sizes="144px"
                    />
                  ) : (
                    <span
                      className="absolute inset-0 flex items-center justify-center font-heading text-5xl font-bold select-none"
                      style={{ color: "rgba(0,0,0,0.10)" }}
                    >
                      {displayMember.initials}
                    </span>
                  )}
                </div>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Panel schließen"
                className="absolute top-5 right-5 w-8 h-8 rounded-full border border-border bg-white flex items-center justify-center text-[#666666] hover:text-[#111111] hover:border-[#999999] transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Divider */}
            <div className="h-px mx-6 bg-gradient-to-r from-transparent via-silver/30 to-transparent" />

            {/* ── Bio ── */}
            <div className="px-6 py-5">
              <p className="text-sm text-[#555555] leading-relaxed">
                {displayMember.bio ??
                  "Ein erfahrener Barber mit echter Leidenschaft für sein Handwerk. " +
                  "Jeder Schnitt wird mit höchster Sorgfalt und Liebe zum Detail ausgeführt. " +
                  "Bei ihm bist du in den besten Händen."}
              </p>
            </div>

            {/* ── Work gallery 2×2 ── */}
            <div className="px-6 pb-5">
              <p className="eyebrow text-[10px] mb-3">Arbeiten</p>
              <div className="grid grid-cols-2 gap-2">
                {workPhotos.map(({ src, alt }) => (
                  <div
                    key={src}
                    className="aspect-square relative rounded-lg overflow-hidden border border-border bg-[#E8E8E8]"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 448px) 45vw, 192px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px mx-6 bg-gradient-to-r from-transparent via-silver/30 to-transparent" />

            {/* ── Booking CTA ── */}
            <div className="px-6 py-5">
              <BookingButton
                size="md"
                label="Termin buchen"
                href={displayMember.booksyUrl}
                className="w-full"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
