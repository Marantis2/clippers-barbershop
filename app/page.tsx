import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServiceTeaser } from "@/components/home/ServiceTeaser";
import { TeamTeaser } from "@/components/home/TeamTeaser";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BookingBanner } from "@/components/shared/BookingBanner";
import { KontaktKurzinfo } from "@/components/home/KontaktKurzinfo";

export const metadata: Metadata = {
  title: "Clippers Ginnheim | Barbershop Frankfurt",
  description:
    "Dein Barbershop in Frankfurt-Ginnheim. Erstklassige Haarschnitte, Bartpflege und Heißrasur. 4.7 Sterne · 194 Google-Bewertungen · Online buchen via Booksy.",
  openGraph: {
    title: "Clippers Ginnheim | Barbershop Frankfurt",
    description:
      "Erstklassige Haarschnitte und Bartpflege in Frankfurt-Ginnheim. Jetzt Termin buchen.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceTeaser />
      <TeamTeaser />
      <GalleryTeaser />
      <TestimonialsSection />
      <BookingBanner />
      <KontaktKurzinfo />
    </>
  );
}
