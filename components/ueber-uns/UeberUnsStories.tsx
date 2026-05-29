'use client';

import { useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { cn } from '@/lib/utils';

interface Story {
  title: string;
  paragraphs: string[];
  imageBg: string;
  imageLabel: string;
}

const stories: Story[] = [
  {
    title: 'Unsere Geschichte',
    paragraphs: [
      'Clippers Ginnheim ist seit Jahren ein fester Bestandteil des Viertels. Was einst als kleines Barbershop-Projekt begann, ist heute ein beliebter Treffpunkt für alle, die handwerkliche Qualität und echtes Wohlfühlen schätzen.',
      'Unser Ziel war von Anfang an klar: ein Ort, an dem jeder Kunde als Gast behandelt wird – mit Sorgfalt, Respekt und echtem Handwerksstolz. Das gilt heute genauso wie am ersten Tag.',
    ],
    imageBg: '#CCCCCC',
    imageLabel: 'Der Shop von innen',
  },
  {
    title: 'Unser Handwerk',
    paragraphs: [
      'Wir verbinden klassische Barbier-Techniken mit modernen Styles. Von der traditionellen Nassrasur mit heißen Tüchern bis zum präzisen Skin Fade – bei uns bekommst du das Beste aus beiden Welten.',
      'Für Haar und Bart verwenden wir ausschließlich Premium-Produkte renommierter Marken. Weil der Unterschied spürbar ist – und weil du es verdienst.',
    ],
    imageBg: '#C8C8C8',
    imageLabel: 'Barber bei der Arbeit',
  },
  {
    title: 'Willkommen in Ginnheim',
    paragraphs: [
      'Als Teil des Ginnheimer Stadtteils liegt uns die Community am Herzen. Bei uns bist du nicht einfach ein Kunde – du bist Teil von etwas Größerem. Nachbarn, Stammgäste, Neuzugezogene – alle sind willkommen.',
      'Komm einfach vorbei, lern das Team kennen und mach dir selbst ein Bild. Ein Kaffee oder Tee steht immer bereit.',
    ],
    imageBg: '#C4C4C4',
    imageLabel: 'Ginnheimer Landstraße',
  },
];

export function UeberUnsStories() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blocks = containerRef.current?.querySelectorAll('.reveal-block');
    if (!blocks) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target.querySelector('.reveal-img') as HTMLElement | null;
            const txt = entry.target.querySelector('.reveal-text') as HTMLElement | null;
            if (img) img.style.animation = 'fadeSlideUp 0.8s ease forwards 0s';
            if (txt) txt.style.animation = 'fadeSlideUp 0.8s ease forwards 0.6s';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    blocks.forEach((b) => observer.observe(b));
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper className="bg-bg-surface">
      <div ref={containerRef} className="space-y-20 lg:space-y-28">
        {stories.map((story, i) => (
          <div
            key={story.title}
            className="reveal-block grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* Text block */}
            <div className={cn(i % 2 === 1 && 'md:order-2', 'reveal-text')} style={{ opacity: 0 }}>
              <div className="w-1 h-7 bg-silver rounded-full mb-5" aria-hidden="true" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-white tracking-tight mb-5">
                {story.title}
              </h2>
              {story.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-mid leading-relaxed text-sm mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>

            {/* Image placeholder */}
            <div className={cn(i % 2 === 1 && 'md:order-1', 'reveal-img')} style={{ opacity: 0 }}>
              <div
                className="w-full aspect-[4/3] rounded-xl flex items-center justify-center border border-border"
                style={{ backgroundColor: story.imageBg }}
                aria-label={story.imageLabel}
              >
                <Camera className="h-12 w-12 text-silver/30" aria-hidden="true" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
