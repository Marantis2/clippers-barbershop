import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Star } from "lucide-react";
import { BookingButton } from "@/components/shared/BookingButton";
import { RATING } from "@/lib/constants";

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="font-heading text-lg font-bold text-white tracking-tight">{value}</span>
      <span className="text-xs text-white/65 tracking-wide uppercase">{label}</span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Barbershop interior background image */}
      <Image
        src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />

      {/* Dark overlay — lets image show through while ensuring text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.45)" }}
        aria-hidden="true"
      />

      {/* Top silver radial shimmer over image */}
      <div
        className="absolute inset-0 pointer-events-none animate-orb-drift"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% -5%, rgba(0,0,0,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Fine grain noise overlay for premium texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-7">
          <span className="hidden sm:block w-8 h-px bg-white/40" />
          <p className="font-heading text-white/75 uppercase tracking-[0.3em] text-xs font-semibold">Barbershop · Frankfurt am Main</p>
          <span className="hidden sm:block w-8 h-px bg-white/40" />
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-white leading-[1.03] tracking-[-0.02em] mb-6">
          Dein Style.
          <br />
          <span className="text-white/90">Unser Handwerk.</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Erstklassige Haarschnitte und Bartpflege in Frankfurt.{" "}
          <br className="hidden sm:block" />
          Jetzt online buchen – schnell, einfach, zuverlässig.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingButton size="lg" label="Jetzt Termin buchen" />
          <Link
            href="/preisliste"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base rounded-md font-heading font-semibold border border-white/40 text-white hover:border-white/70 hover:bg-white/10 transition-all duration-250 tracking-wide backdrop-blur-sm"
          >
            Preise ansehen
          </Link>
        </div>

        {/* Trust / stats strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 mt-14 pt-10 border-t border-white/20">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
            ))}
            <span className="ml-2 font-heading font-bold text-white text-sm">{RATING.score}</span>
            <span className="text-white/65 text-xs ml-1">/ {RATING.count} Bewertungen</span>
          </div>

          <span className="hidden sm:block w-px h-6 bg-white/20" aria-hidden="true" />
          <StatPill value="10+" label="Jahre Erfahrung" />
          <span className="hidden sm:block w-px h-6 bg-white/20" aria-hidden="true" />
          <StatPill value="1000+" label="Zufriedene Kunden" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float opacity-40"
        aria-hidden="true"
      >
        <ChevronDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
}
