import { Star } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { RATING } from "@/lib/constants";

interface Testimonial {
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Regular hairdresser for 3 years. Very friendly and always top-notch.",
    author: "Marcel B.",
  },
  {
    text: "Excellent barbers and arguably the best in FFM. Not only do they do a good job on cuts but also provide extra services.",
    author: "Ninelmo G.",
  },
  {
    text: "Best hairdresser in Frankfurt. After a long search, finally found my place. My wishes were actually implemented perfectly.",
    author: "Peter S.",
  },
  {
    text: "The team at Clippers does a really great job every time. Always greeted warmly, coffee or tea available, atmosphere fantastic.",
    author: "Thies OG",
  },
  {
    text: "I've been a regular customer for years. The atmosphere is wonderful and you can tell the staff enjoy their work.",
    author: "Kevin B.",
  },
  {
    text: "Always very satisfied. Everyone is super nice and professional.",
    author: "Benjamin",
  },
];

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" aria-hidden="true" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <SectionWrapper className="bg-bg-base">
      {/* Heading + aggregate rating */}
      <div className="text-center mb-14">
        <p className="eyebrow mb-3">Was Kunden sagen</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] tracking-[-0.02em] mb-7">
          Bewertungen
        </h2>
        <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" aria-hidden="true" />
            ))}
          </div>
          <span className="font-heading font-bold text-[#111111] text-sm">{RATING.score}</span>
          <span className="text-[#666666] text-xs">
            · {RATING.count} {RATING.platform}-Bewertungen
          </span>
        </div>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map(({ text, author }) => (
          <figure
            key={author}
            className="group relative bg-bg-card border border-border rounded-xl p-7 flex flex-col gap-5 card-glow hover:border-silver/30 overflow-hidden"
          >
            {/* Subtle top-right glow on hover */}
            <div
              className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at top right, rgba(0,0,0,0.05) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Large decorative quote mark */}
            <span
              className="absolute top-4 right-5 font-heading text-6xl leading-none select-none pointer-events-none"
              style={{ color: "rgba(0,0,0,0.06)" }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <StarRow />

            <blockquote className="text-sm text-[#333333] leading-relaxed flex-1 relative">
              &ldquo;{text}&rdquo;
            </blockquote>

            {/* Separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-silver/20 to-transparent" aria-hidden="true" />

            <figcaption className="font-heading font-semibold text-[#111111] text-sm tracking-wide">
              — {author}
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionWrapper>
  );
}
