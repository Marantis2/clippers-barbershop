import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { GalleryClient } from "@/components/galerie/GalleryClient";

export const metadata: Metadata = {
  title: "Galerie — Clippers Ginnheim",
  description: "Einblicke in unsere Arbeit: Haarschnitte, Bärte und die Atmosphäre bei Clippers Ginnheim Frankfurt.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHeader
        title="Galerie"
        subtitle="Einblicke in unsere Arbeit – Haarschnitte, Bärte und die Atmosphäre bei Clippers."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryClient />
        </div>
      </section>
    </>
  );
}
