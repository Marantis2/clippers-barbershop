import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

interface Service {
  name: string;
  image: string;
  description: string;
  price: string;
  duration: string;
  badge: string | null;
  href: string;
}

const services: Service[] = [
  {
    name: "Haarschnitt",
    image: "/Bild1.jpeg",
    description: "Klassisch oder modern – präzise auf deine Gesichtsform abgestimmt.",
    price: "18 €",
    duration: "ca. 30 min",
    badge: "Beliebt",
    href: "/preisliste#haarschnitt",
  },
  {
    name: "Bartpflege",
    image: "/Bild3.jpeg",
    description: "Konturierung, Rasur und Pflege für den perfekten Bartstyle.",
    price: "ab 10 €",
    duration: "ca. 20 min",
    badge: null,
    href: "/preisliste#bart",
  },
  {
    name: "Clippers Paket",
    image: "/Bild5.jpeg",
    description: "Haarschnitt, Bart & Waschen – das Rundum-sorglos-Paket.",
    price: "50 €",
    duration: "ca. 55 min",
    badge: "Top-Deal",
    href: "/preisliste#kombis",
  },
];

export function ServiceTeaser() {
  return (
    <SectionWrapper className="bg-bg-base">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="eyebrow mb-3">Was wir bieten</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] tracking-[-0.02em]">
          Unsere Leistungen
        </h2>
        <div className="mt-5 mx-auto divider-metallic w-24" aria-hidden="true" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map(({ name, image, description, price, duration, badge, href }) => (
          <Link
            key={name}
            href={href}
            className="relative group bg-bg-card rounded-xl border border-border flex flex-col overflow-hidden card-glow hover:border-silver/35"
          >
            {/* Top metallic accent bar */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-silver/40 to-transparent" aria-hidden="true" />

            <div className="relative h-48 overflow-hidden">
              <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            <div className="p-7 flex flex-col flex-1">
              {badge && (
                <span className="self-start inline-flex items-center rounded-full bg-silver/12 border border-silver/25 px-2.5 py-0.5 text-[10px] font-bold text-silver font-heading tracking-widest uppercase mb-4">
                  {badge}
                </span>
              )}

              <h3 className="font-heading text-xl font-bold text-[#111111] group-hover:text-[#00BFFF] mb-3 tracking-wide transition-colors duration-300 relative w-fit">
                {name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#00BFFF] group-hover:w-full transition-all duration-300" />
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed flex-1">{description}</p>

              <div className="flex items-end justify-between mt-7 pt-5 border-t border-border/60">
                <div>
                  <span className="font-heading text-3xl font-bold text-gradient-silver">{price}</span>
                  <p className="text-xs text-[#666666] mt-0.5 tracking-wide">{duration}</p>
                </div>
                <div
                  className="w-8 h-8 rounded-full border border-silver/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-silver/45"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-silver" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA link */}
      <div className="text-center mt-12">
        <Link
          href="/preisliste"
          className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-[#666666] hover:text-[#111111] transition-colors duration-200 group tracking-wide"
        >
          Alle Preise ansehen
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
