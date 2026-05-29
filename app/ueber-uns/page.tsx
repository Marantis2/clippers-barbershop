import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { BookingBanner } from "@/components/shared/BookingBanner";
import { UeberUnsStories } from "@/components/ueber-uns/UeberUnsStories";

export const metadata: Metadata = {
  title: "Über uns — Clippers Ginnheim",
  description: "Erfahre mehr über Clippers Ginnheim – unsere Geschichte, unser Handwerk und warum wir mehr sind als ein Barbershop.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        title="Über uns"
        subtitle="Mehr als ein Barbershop – ein Ort für Handwerk, Gemeinschaft und Wohlfühlen."
      />

      <UeberUnsStories />

      <BookingBanner
        title="Teil unserer Geschichte werden?"
        subtitle="Buche deinen Termin online und erleb es selbst."
      />
    </>
  );
}
