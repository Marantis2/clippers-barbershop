import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, eyebrow, className }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative bg-bg-base py-24 lg:py-32 text-center overflow-hidden",
        className
      )}
    >
      {/* Ambient top light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,0,0,0.05) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Top border line */}
      <div className="absolute inset-x-0 top-0 divider-metallic" />

      {/* Bottom border line */}
      <div className="absolute inset-x-0 bottom-0 divider-metallic" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        {eyebrow && (
          <p className="eyebrow mb-5">{eyebrow}</p>
        )}

        {/* Decorative bracket lines */}
        <div className="flex items-center justify-center gap-4 mb-6" aria-hidden="true">
          <span className="block h-px w-12 bg-gradient-to-r from-transparent to-silver/40" />
          <span className="block h-1 w-1 rounded-full bg-silver/50" />
          <span className="block h-px w-12 bg-gradient-to-l from-transparent to-silver/40" />
        </div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em]">
          <span className="text-gradient-silver">{title}</span>
        </h1>

        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-[#666666] leading-relaxed font-light max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
