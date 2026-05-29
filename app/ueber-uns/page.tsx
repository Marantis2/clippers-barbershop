import type { Metadata } from "next";
import { Camera, Scissors, Gem, Users, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { BookingBanner } from "@/components/shared/BookingBanner";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Über uns — Clippers Ginnheim",
  description: "Erfahre mehr über Clippers Ginnheim – unsere Geschichte, unser Handwerk und warum wir mehr sind als ein Barbershop.",
};

interface Story {
  title: string;
  paragraphs: string[];
  imageBg: string;
  imageLabel: string;
}

const stories: Story[] = [
  {
    title: "Unsere Geschichte",
    paragraphs: [
      "Clippers Ginnheim ist seit Jahren ein fester Bestandteil des Viertels. Was einst als kleines Barbershop-Projekt begann, ist heute ein beliebter Treffpunkt für alle, die handwerkliche Qualität und echtes Wohlfühlen schätzen.",
      "Unser Ziel war von Anfang an klar: ein Ort, an dem jeder Kunde als Gast behandelt wird – mit Sorgfalt, Respekt und echtem Handwerksstolz. Das gilt heute genauso wie am ersten Tag.",
    ],
    imageBg: "#CCCCCC",
    imageLabel: "Der Shop von innen",
  },
  {
    title: "Unser Handwerk",
    paragraphs: [
      "Wir verbinden klassische Barbier-Techniken mit modernen Styles. Von der traditionellen Nassrasur mit heißen Tüchern bis zum präzisen Skin Fade – bei uns bekommst du das Beste aus beiden Welten.",
      "Für Haar und Bart verwenden wir ausschließlich Premium-Produkte renommierter Marken. Weil der Unterschied spürbar ist – und weil du es verdienst.",
    ],
    imageBg: "#C8C8C8",
    imageLabel: "Barber bei der Arbeit",
  },
  {
    title: "Willkommen in Ginnheim",
    paragraphs: [
      "Als Teil des Ginnheimer Stadtteils liegt uns die Community am Herzen. Bei uns bist du nicht einfach ein Kunde – du bist Teil von etwas Größerem. Nachbarn, Stammgäste, Neuzugezogene – alle sind willkommen.",
      "Komm einfach vorbei, lern das Team kennen und mach dir selbst ein Bild. Ein Kaffee oder Tee steht immer bereit.",
    ],
    imageBg: "#C4C4C4",
    imageLabel: "Ginnheimer Landstraße",
  },
];

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Scissors,
    title: "Handwerk",
    description: "Jahrelange Erfahrung in klassischen und modernen Schnitttechniken – jede Linie sitzt.",
  },
  {
    icon: Gem,
    title: "Premium-Qualität",
    description: "Nur die besten Produkte für dein Haar und deinen Bart – von der Klinge bis zur Pflege.",
  },
  {
    icon: Users,
    title: "Gemeinschaft",
    description: "Ein Ort, an dem du dich wohlfühlst, wiederkommst und neue Gesichter kennenlernst.",
  },
  {
    icon: Heart,
    title: "Leidenschaft",
    description: "Wir lieben, was wir tun – und das spürt man bei jedem Besuch. Kein Job, sondern Berufung.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        title="Über uns"
        subtitle="Mehr als ein Barbershop – ein Ort für Handwerk, Gemeinschaft und Wohlfühlen."
      />

      {/* Story sections */}
      <SectionWrapper className="bg-bg-surface">
        <div className="space-y-20 lg:space-y-28">
          {stories.map((story, i) => (
            <div
              key={story.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Text block */}
              <div className={cn(i % 2 === 1 && "md:order-2")}>
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
              <div className={cn(i % 2 === 1 && "md:order-1")}>
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

      {/* Values */}
      <SectionWrapper className="bg-bg-base">
        <div className="text-center mb-12">
          <p className="font-heading text-silver uppercase tracking-widest text-xs font-semibold mb-2">
            Wofür wir stehen
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-white tracking-tight">
            Unsere Werte
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-bg-card border border-border rounded-xl p-6 hover:border-silver/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-lg bg-silver/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-silver" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-base font-bold text-primary-white mb-2">{title}</h3>
              <p className="text-xs text-gray-mid leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <BookingBanner
        title="Teil unserer Geschichte werden?"
        subtitle="Buche deinen Termin online und erleb es selbst."
      />
    </>
  );
}
