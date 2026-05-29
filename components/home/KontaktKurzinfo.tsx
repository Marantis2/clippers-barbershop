import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { GoogleMap } from "@/components/shared/GoogleMap";
import { CONTACT, HOURS } from "@/lib/constants";

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function InfoRow({ icon, label, children }: InfoRowProps) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-lg border border-border/60 bg-bg-card flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="font-heading font-semibold text-[#111111] text-sm mb-1 tracking-wide">{label}</p>
        {children}
      </div>
    </div>
  );
}

export function KontaktKurzinfo() {
  return (
    <SectionWrapper className="bg-bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Contact info */}
        <div>
          <p className="eyebrow mb-3">Besuche uns</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] tracking-[-0.02em] mb-10">
            So findest du uns
          </h2>

          <div className="space-y-7">
            <InfoRow icon={<MapPin className="h-4.5 w-4.5 text-silver" />} label="Adresse">
              <p className="text-[#666666] text-sm leading-relaxed">
                {CONTACT.address}
                <br />
                {CONTACT.city}
              </p>
            </InfoRow>

            <InfoRow icon={<Clock className="h-4.5 w-4.5 text-silver" />} label="Öffnungszeiten">
              <ul className="space-y-1.5">
                {HOURS.map(({ day, hours }) => (
                  <li key={day} className="flex gap-6 text-sm">
                    <span className="text-[#666666] w-40 shrink-0">{day}</span>
                    <span
                      className={
                        hours === "Geschlossen"
                          ? "text-[#999999] italic"
                          : "font-medium text-[#111111]"
                      }
                    >
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoRow>

            <InfoRow icon={<Phone className="h-4.5 w-4.5 text-silver" />} label="Telefon">
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="text-[#666666] text-sm hover:text-[#111111] transition-colors duration-200"
              >
                {CONTACT.phone}
              </a>
            </InfoRow>

            <InfoRow icon={<Mail className="h-4.5 w-4.5 text-silver" />} label="E-Mail">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-[#666666] text-sm hover:text-[#111111] transition-colors duration-200"
              >
                {CONTACT.email}
              </a>
            </InfoRow>
          </div>
        </div>

        {/* Sticky map */}
        <div className="lg:sticky lg:top-24">
          <GoogleMap
            height={480}
            className="border border-border/60 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
