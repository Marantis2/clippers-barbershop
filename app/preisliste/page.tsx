import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { BookingBanner } from "@/components/shared/BookingBanner";
import { PriceListTabs } from "@/components/preisliste/PriceListTabs";
import type { PriceTab } from "@/components/preisliste/PriceListTabs";

export const metadata: Metadata = {
  title: "Preisliste — Clippers Ginnheim",
  description: "Transparente Preise für Haarschnitte, Bartpflege und Kombipakete bei Clippers Ginnheim Frankfurt.",
};

const categories: PriceTab[] = [
  {
    value: "haarschnitt",
    label: "Haarschnitt",
    items: [
      {
        name: "Haarschnitt",
        description: "Klassischer oder moderner Schnitt, präzise abgestimmt.",
        price: "18 €",
      },
      {
        name: "Haarschnitt & Waschen",
        description: "Schnitt inkl. Haarwäsche und Styling.",
        price: "23 €",
      },
      {
        name: "Kinder Haarschnitt (bis 12 Jahre)",
        description: "Schnitt für Kinder bis 12 Jahre.",
        price: "15 €",
      },
    ],
  },
  {
    value: "bart",
    label: "Bart",
    items: [
      {
        name: "Klassische Bartrasur",
        description: "Traditionelle Rasur für einen gepflegten Look.",
        price: "10 €",
      },
      {
        name: "Modernes Bartdesign",
        description: "Formgebung und Konturierung für deinen individuellen Bartstyle.",
        price: "12 €",
      },
    ],
  },
  {
    value: "kombis",
    label: "Kombis",
    items: [
      {
        name: "Haarschnitt & Bart",
        description: "Haarschnitt kombiniert mit Bartpflege.",
        price: "30 €",
      },
      {
        name: "Haarschnitt, Bart & Waschen",
        description: "Das komplette Rundum-Paket inkl. Haarwäsche.",
        price: "35 €",
      },
      {
        name: "Clippers Paket",
        description: "Unser Premium-Paket für den perfekten Gesamtlook.",
        price: "50 €",
      },
    ],
  },
  {
    value: "extras",
    label: "Extras",
    items: [
      {
        name: "Waxing",
        description: "Professionelles Waxing für glatte Haut.",
        price: "6 €",
      },
      {
        name: "Facemask",
        description: "Pflegende Gesichtsmaske für strahlende Haut.",
        price: "10 €",
      },
    ],
  },
];

export default function PreislistePage() {
  return (
    <>
      <PageHeader
        title="Preisliste"
        subtitle="Transparente Preise für erstklassigen Service – kein Verstecktes, keine Überraschungen."
      />

      <SectionWrapper>
        <PriceListTabs categories={categories} />


      </SectionWrapper>

      <BookingBanner
        title="Bereit für deinen nächsten Look?"
        subtitle="Buche deinen Wunsch-Barber direkt online."
      />
    </>
  );
}
