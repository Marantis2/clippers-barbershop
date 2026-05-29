import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "Impressum — Clippers Ginnheim",
  description:
    "Impressum und Anbieterkennzeichnung gemäß § 5 TMG – Clippers Ginnheim, Frankfurt am Main.",
};

function Divider() {
  return <div className="border-t border-border" />;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-1 h-5 bg-silver rounded-full shrink-0" aria-hidden="true" />
        <h2 className="font-heading text-base font-bold text-primary-white">{title}</h2>
      </div>
      <div className="pl-4 text-sm text-gray-mid leading-relaxed">{children}</div>
    </div>
  );
}

export default function ImpressumPage() {
  return (
    <>
      <PageHeader
        title="Impressum"
        subtitle="Angaben gemäß § 5 TMG"
      />

      <SectionWrapper className="bg-bg-surface">
        <div className="max-w-3xl mx-auto">
          <div className="bg-bg-card border border-border rounded-xl p-8 md:p-10 space-y-8">

            <Section title="Angaben gemäß § 5 TMG">
              <p className="font-semibold text-primary-white">Clippers Ginnheim</p>
              <p>Ginnheimer Landstraße 146</p>
              <p>60431 Frankfurt am Main</p>
            </Section>

            <Divider />

            <Section title="Inhaber">
              <p>[INHABER]</p>
            </Section>

            <Divider />

            <Section title="Kontakt">
              <p>
                Telefon:{" "}
                <a
                  href="tel:+496953055532"
                  className="hover:text-primary-white transition-colors duration-200"
                >
                  +49 69 53055532
                </a>
              </p>
              <p className="mt-1">
                E-Mail:{" "}
                <a
                  href="mailto:[EMAIL]"
                  className="hover:text-primary-white transition-colors duration-200"
                >
                  [EMAIL]
                </a>
              </p>
            </Section>

            <Divider />

            <Section title="Steuernummer">
              <p>[STEUERNUMMER]</p>
            </Section>

            <Divider />

            <Section title="Verantwortlicher i. S. d. § 55 Abs. 2 RStV">
              <p>[INHABER]</p>
              <p>Ginnheimer Landstraße 146</p>
              <p>60431 Frankfurt am Main</p>
            </Section>

            <Divider />

            <Section title="Haftung für Inhalte">
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
                Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
                oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </Section>

            <Divider />

            <Section title="Haftung für Links">
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </Section>

            <Divider />

            <Section title="Urheberrecht">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                Gebrauch gestattet.
              </p>
            </Section>
          </div>

          <p className="text-xs text-gray-mid text-center mt-6">
            Stand: Mai 2025
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
