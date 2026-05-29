import { cn } from "@/lib/utils";
import { BookingButton } from "./BookingButton";

interface BookingBannerProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function BookingBanner({
  title = "Bereit für deinen neuen Look?",
  subtitle = "Buche deinen Termin direkt online – schnell und unkompliziert.",
  className,
}: BookingBannerProps) {
  return (
    <section className={cn("relative overflow-hidden bg-bg-card py-20 lg:py-28 text-center", className)}>
      {/* Layered ambient radial light */}
      <div
        className="absolute inset-0 pointer-events-none animate-glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Top / bottom metallic lines */}
      <div className="absolute inset-x-0 top-0 divider-metallic" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 divider-metallic" aria-hidden="true" />

      {/* Subtle side vignettes */}
      <div
        className="absolute inset-y-0 left-0 w-32 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.04), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-32 pointer-events-none"
        style={{ background: "linear-gradient(to left, rgba(0,0,0,0.04), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-6" aria-hidden="true">
          <span className="block h-px w-10 bg-gradient-to-r from-transparent to-silver/40" />
          <span className="block h-1 w-1 rounded-full bg-silver/50" />
          <span className="block h-px w-10 bg-gradient-to-l from-transparent to-silver/40" />
        </div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-5">
          <span className="text-gradient-silver">{title}</span>
        </h2>

        <p className="text-base text-[#666666] leading-relaxed font-light mb-10">{subtitle}</p>

        <BookingButton size="lg" label="Jetzt Termin buchen" />
      </div>
    </section>
  );
}
