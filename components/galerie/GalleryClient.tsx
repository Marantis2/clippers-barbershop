"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type FilterCategory = "alle" | "haarschnitte" | "baerte" | "atmosphaere";

interface GalleryItem {
  id: number;
  label: string;
  category: Exclude<FilterCategory, "alle">;
  heightClass: string;
  imageUrl: string;
}

const LOCAL_IMAGES = ["/Bild1.jpeg", "/Bild2.jpeg", "/Bild3.jpeg", "/Bild4.jpeg", "/Bild5.jpeg", "/Bild6.png", "/Bild7.png"];

const ITEMS: GalleryItem[] = [
  { id: 1,  label: "Klassischer Sidepart",     category: "haarschnitte", heightClass: "h-64", imageUrl: LOCAL_IMAGES[0] },
  { id: 2,  label: "Textured Crop",            category: "haarschnitte", heightClass: "h-48", imageUrl: LOCAL_IMAGES[1] },
  { id: 3,  label: "Fade mit Design",          category: "haarschnitte", heightClass: "h-56", imageUrl: LOCAL_IMAGES[2] },
  { id: 4,  label: "Modern Undercut",          category: "haarschnitte", heightClass: "h-44", imageUrl: LOCAL_IMAGES[3] },
  { id: 5,  label: "Vollbart Styling",         category: "baerte",       heightClass: "h-52", imageUrl: LOCAL_IMAGES[4] },
  { id: 6,  label: "Kurzer Vollbart",          category: "baerte",       heightClass: "h-40", imageUrl: LOCAL_IMAGES[0] },
  { id: 7,  label: "Bart mit Nassrasur",       category: "baerte",       heightClass: "h-60", imageUrl: LOCAL_IMAGES[1] },
  { id: 8,  label: "Designer Beard",           category: "baerte",       heightClass: "h-44", imageUrl: LOCAL_IMAGES[2] },
  { id: 9,  label: "Shop-Atmosphäre",          category: "atmosphaere",  heightClass: "h-56", imageUrl: LOCAL_IMAGES[3] },
  { id: 10, label: "Barber bei der Arbeit",    category: "atmosphaere",  heightClass: "h-48", imageUrl: LOCAL_IMAGES[4] },
  { id: 11, label: "Warte- & Loungebereich",   category: "atmosphaere",  heightClass: "h-64", imageUrl: LOCAL_IMAGES[5] },
  { id: 12, label: "Werkzeuge & Details",      category: "atmosphaere",  heightClass: "h-44", imageUrl: LOCAL_IMAGES[6] },
];

const FILTERS: { value: FilterCategory; label: string }[] = [
  { value: "alle",         label: "Alle" },
  { value: "haarschnitte", label: "Haarschnitte" },
  { value: "baerte",       label: "Bärte" },
  { value: "atmosphaere",  label: "Atmosphäre" },
];

const CATEGORY_LABEL: Record<Exclude<FilterCategory, "alle">, string> = {
  haarschnitte: "Haarschnitte",
  baerte: "Bärte",
  atmosphaere: "Atmosphäre",
};

export function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("alle");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "alle" ? ITEMS : ITEMS.filter((i) => i.category === activeFilter);
  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));
  }, [filtered.length]);

  const changeFilter = useCallback((value: FilterCategory) => {
    setActiveFilter(value);
    setLightboxIndex(null);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Galerie filtern">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => changeFilter(value)}
            aria-pressed={activeFilter === value}
            className={cn(
              "px-5 py-2.5 rounded-full font-heading text-xs font-semibold tracking-[0.08em] uppercase transition-all duration-200 border",
              activeFilter === value
                ? "bg-[#111111] border-[#111111] text-white shadow-[0_2px_12px_rgba(0,0,0,0.20)]"
                : "bg-bg-card border-border text-[#666666] hover:border-[#BBBBBB] hover:text-[#111111]"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 gap-3">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            aria-label={`${item.label} vergrößern`}
            className={cn(
              "mb-3 break-inside-avoid rounded-xl overflow-hidden w-full relative group border border-border transition-all duration-300 hover:border-silver/40",
              item.heightClass
            )}
          >
            {/* Real image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.imageUrl}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover overlay — keep dark for readability over images */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Label */}
            <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
              <span className="font-heading text-[#F5F5F5] font-semibold text-sm tracking-wide leading-tight">
                {item.label}
              </span>
            </div>

            {/* Top shimmer line on hover */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-silver/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && setLightboxIndex(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden bg-bg-card border-border gap-0 [&>button]:text-[#666666] [&>button:hover]:text-[#111111]">
          {currentItem && (
            <>
              <DialogTitle className="sr-only">{currentItem.label}</DialogTitle>
              <DialogDescription className="sr-only">
                Kategorie: {CATEGORY_LABEL[currentItem.category]}. Pfeiltasten zum Navigieren.
              </DialogDescription>

              {/* Image area */}
              <div className="w-full h-[55vh] relative overflow-hidden bg-bg-base">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentItem.imageUrl}
                  alt={currentItem.label}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {filtered.length > 1 && (
                  <>
                    <button
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 backdrop-blur-sm text-[#F5F5F5] hover:bg-black/80 transition-colors border border-white/10"
                      aria-label="Vorheriges Bild"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 backdrop-blur-sm text-[#F5F5F5] hover:bg-black/80 transition-colors border border-white/10"
                      aria-label="Nächstes Bild"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption bar */}
              <div className="px-6 py-4 flex items-center justify-between border-t border-border">
                <div>
                  <p className="font-heading font-semibold text-[#111111] text-sm">
                    {currentItem.label}
                  </p>
                  <p className="text-xs text-[#666666] mt-0.5">
                    {CATEGORY_LABEL[currentItem.category]}
                  </p>
                </div>
                <span className="text-xs text-[#666666] font-heading tabular-nums">
                  {(lightboxIndex ?? 0) + 1} / {filtered.length}
                </span>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
