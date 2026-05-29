import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Clippers Ginnheim",
  description:
    "Datenschutzerklärung von Clippers Ginnheim gemäß DSGVO – Informationen zur Datenverarbeitung und Ihren Rechten.",
};

function Divider() {
  return <div className="border-t border-border" />;
}

interface SectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

function Section({ number, title, children }: SectionProps) {
  return (
    <div>
      <div className="flex items-start gap-3 mb-3">
        <div className="w-1 h-5 bg-silver rounded-full shrink-0 mt-0.5" aria-hidden="true" />
        <h2 className="font-heading text-base font-bold text-primary-white">
          {number}. {title}
        </h2>
      </div>
      <div className="pl-4 text-sm text-gray-mid leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-semibold text-primary-white">{children}</p>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        title="Datenschutzerklärung"
        subtitle="Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO"
      />

      <SectionWrapper className="bg-bg-surface">
        <div className="max-w-3xl mx-auto">
          <div className="bg-bg-card border border-border rounded-xl p-8 md:p-10 space-y-8">

            <Section number="1" title="Verantwortlicher">
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer
                nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen
                ist:
              </p>
              <div className="bg-bg-surface rounded-lg p-4 border border-border">
                <p className="font-semibold text-primary-white">Clippers Ginnheim</p>
                <p>Ginnheimer Landstraße 146</p>
                <p>60431 Frankfurt am Main</p>
                <p className="mt-2">
                  Telefon:{" "}
                  <a
                    href="tel:+496953055532"
                    className="hover:text-primary-white transition-colors duration-200"
                  >
                    +49 69 53055532
                  </a>
                </p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:[EMAIL]"
                    className="hover:text-primary-white transition-colors duration-200"
                  >
                    [EMAIL]
                  </a>
                </p>
              </div>
            </Section>

            <Divider />

            <Section number="2" title="Allgemeines zur Datenverarbeitung">
              <SubHeading>Umfang der Verarbeitung personenbezogener Daten</SubHeading>
              <p>
                Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit
                dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
                Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt
                regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen
                Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen
                Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche
                Vorschriften gestattet ist.
              </p>
              <SubHeading>Rechtsgrundlage für die Verarbeitung</SubHeading>
              <p>
                Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der
                betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.
                Bei der Verarbeitung von Daten, die zur Erfüllung eines Vertrages erforderlich
                sind, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Zur Wahrung unserer
                berechtigten Interessen stützen wir uns auf Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </Section>

            <Divider />

            <Section number="3" title="Server-Logfiles">
              <p>
                Der Provider dieser Website erhebt und speichert automatisch Informationen in
                sogenannten Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Diese
                beinhalten:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (in anonymisierter Form)</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser
                berechtigtes Interesse besteht in der technisch fehlerfreien Darstellung und
                Optimierung unserer Website.
              </p>
            </Section>

            <Divider />

            <Section number="4" title="Kontaktaufnahme">
              <p>
                Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden die von Ihnen
                mitgeteilten Daten (z. B. Name, Telefonnummer, E-Mail-Adresse sowie der Inhalt
                Ihrer Anfrage) bei uns gespeichert, um Ihre Anfrage zu bearbeiten und für den Fall
                von Anschlussfragen.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder
                zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                Fällen beruht die Verarbeitung auf unserem berechtigten Interesse (Art. 6 Abs. 1
                lit. f DSGVO).
              </p>
              <p>
                Die von Ihnen an uns per Kontaktanfrage übersandten Daten verbleiben bei uns, bis
                Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
                der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen –
                insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </Section>

            <Divider />

            <Section number="5" title="Online-Terminbuchung (Booksy)">
              <p>
                Für die Online-Terminbuchung nutzen wir den Dienst Booksy, bereitgestellt von
                Booksy International sp. z o.o., ul. Przeskok 2, 00-032 Warszawa, Polen. Wenn Sie
                über Booksy einen Termin buchen, werden Ihre dabei angegebenen Daten (Name,
                E-Mail, Telefonnummer, Termindetails) an Booksy übermittelt und dort verarbeitet.
              </p>
              <p>
                Die Verarbeitung erfolgt zur Vertragserfüllung gemäß Art. 6 Abs. 1 lit. b DSGVO.
                Bitte beachten Sie die Datenschutzerklärung von Booksy unter{" "}
                <a
                  href="https://booksy.com/de-de/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-white transition-colors duration-200 underline underline-offset-2"
                >
                  booksy.com/de-de/privacy-policy
                </a>
                .
              </p>
            </Section>

            <Divider />

            <Section number="6" title="Google Maps">
              <p>
                Diese Website verwendet Google Maps, einen Kartendienst der Google Ireland Limited,
                Gordon House, Barrow Street, Dublin 4, Irland (nachfolgend „Google"). Google Maps
                wird eingebettet, um Ihnen unseren Standort übersichtlich anzuzeigen.
              </p>
              <p>
                Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu
                speichern. Diese Informationen werden in der Regel an einen Server von Google in
                den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen
                Einfluss auf diese Datenübertragung. Google Maps wird zur ansprechenden Darstellung
                unserer Online-Angebote und zur leichten Auffindbarkeit unseres Standorts
                eingesetzt.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Mehr
                Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung
                von Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-white transition-colors duration-200 underline underline-offset-2"
                >
                  policies.google.com/privacy
                </a>
                .
              </p>
            </Section>

            <Divider />

            <Section number="7" title="Cookies">
              <p>
                Diese Website setzt ausschließlich technisch notwendige Cookies ein, die für den
                Betrieb der Website erforderlich sind. Diese Cookies speichern keine
                personenbezogenen Daten und werden nach dem Schließen des Browsers gelöscht
                (Session-Cookies) oder nach einer kurzen, definierten Laufzeit.
              </p>
              <p>
                Tracking- oder Marketing-Cookies sowie Analyse-Dienste werden auf dieser Website
                nicht eingesetzt.
              </p>
            </Section>

            <Divider />

            <Section number="8" title="Ihre Rechte als betroffene Person">
              <p>
                Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
                personenbezogenen Daten:
              </p>
              <div className="space-y-2">
                <div>
                  <SubHeading>Auskunftsrecht (Art. 15 DSGVO)</SubHeading>
                  <p>
                    Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende
                    Daten verarbeitet werden, und auf Auskunft über diese Daten sowie auf weitere
                    Informationen und Kopie der Daten.
                  </p>
                </div>
                <div>
                  <SubHeading>Recht auf Berichtigung (Art. 16 DSGVO)</SubHeading>
                  <p>
                    Sie haben das Recht, die Vervollständigung der Sie betreffenden Daten oder die
                    Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
                  </p>
                </div>
                <div>
                  <SubHeading>Recht auf Löschung (Art. 17 DSGVO)</SubHeading>
                  <p>
                    Sie haben das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht
                    werden, sofern keiner der in Art. 17 Abs. 3 DSGVO genannten Ausnahmefälle
                    vorliegt.
                  </p>
                </div>
                <div>
                  <SubHeading>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</SubHeading>
                  <p>
                    Sie haben das Recht, die Einschränkung der Verarbeitung der Sie betreffenden
                    Daten zu verlangen.
                  </p>
                </div>
                <div>
                  <SubHeading>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</SubHeading>
                  <p>
                    Sie haben das Recht, die Sie betreffenden Daten, die Sie uns bereitgestellt
                    haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu
                    erhalten.
                  </p>
                </div>
                <div>
                  <SubHeading>Widerspruchsrecht (Art. 21 DSGVO)</SubHeading>
                  <p>
                    Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
                    ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden
                    personenbezogenen Daten, die auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                    erfolgt, Widerspruch einzulegen.
                  </p>
                </div>
              </div>
            </Section>

            <Divider />

            <Section number="9" title="Beschwerderecht bei einer Aufsichtsbehörde">
              <p>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
                Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu,
                insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder
                des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
                Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
              <p>
                Die zuständige Aufsichtsbehörde für Hessen ist der Hessische Beauftragte für
                Datenschutz und Informationsfreiheit (HBDI), Gustav-Stresemann-Ring 1, 65189
                Wiesbaden.
              </p>
            </Section>

            <Divider />

            <Section number="10" title="Aktualität und Änderung dieser Datenschutzerklärung">
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2025. Durch
                die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter
                gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese
                Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann
                jederzeit auf dieser Seite abgerufen werden.
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
