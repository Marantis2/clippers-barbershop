import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

interface GalleryPlaceholder {
  label: string;
  heightClass: string;
  imageUrl: string;
}

const placeholders: GalleryPlaceholder[] = [
  { label: "Haarschnitt",  heightClass: "h-64", imageUrl: "/Bild1.jpeg" },
  { label: "Fade",         heightClass: "h-44", imageUrl: "/Bild2.jpeg" },
  { label: "Bart",         heightClass: "h-52", imageUrl: "/Bild3.jpeg" },
  { label: "Skin Fade",    heightClass: "h-40", imageUrl: "/Bild4.jpeg" },
  { label: "Kombi",        heightClass: "h-60", imageUrl: "/Bild5.jpeg" },
  { label: "Design",       heightClass: "h-48", imageUrl: "/Bild6.png"  },
  { label: "Atmosphäre",   heightClass: "h-56", imageUrl: "/Bild7.png"  },
];

export function GalleryTeaser() {
  return (
    <SectionWrapper className="bg-bg-base">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="eyebrow mb-3">Unsere Arbeiten</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] tracking-[-0.02em]">
          Galerie
        </h2>
        <div className="mt-5 mx-auto divider-metallic w-24" aria-hidden="true" />
      </div>

      {/* CSS-columns masonry grid */}
      <div className="columns-2 md:columns-3 gap-3">
        {placeholders.map(({ label, heightClass, imageUrl }) => (
          <div
            key={label}
            className={`mb-3 break-inside-avoid rounded-xl overflow-hidden border border-border ${heightClass} relative group cursor-pointer transition-all duration-300 hover:border-silver/40`}
          >
            {/* Real image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={label}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay on hover — keep dark for image legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Label */}
            <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="font-heading text-[#F5F5F5] font-semibold text-sm tracking-wide">
                {label}
              </span>
            </div>

            {/* Top shimmer on hover */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-silver/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
          </div>
        ))}
      </div>

      {/* CTA link */}
      <div className="text-center mt-12">
        <Link
          href="/galerie"
          className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-[#666666] hover:text-[#111111] transition-colors duration-200 group tracking-wide"
        >
          Alle Fotos ansehen
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
