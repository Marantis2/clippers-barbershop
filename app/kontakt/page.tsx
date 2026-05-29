import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { BookingBanner } from "@/components/shared/BookingBanner";
import { BookingButton } from "@/components/shared/BookingButton";
import { GoogleMap } from "@/components/shared/GoogleMap";
import { CONTACT, HOURS, SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt — Clippers Ginnheim",
  description:
    "Kontakt und Anfahrt zu Clippers Ginnheim – Ginnheimer Landstraße 146, Frankfurt am Main. Termin online via Booksy buchen.",
  openGraph: {
    title: "Kontakt — Clippers Ginnheim",
    description: "Adresse, Öffnungszeiten und Anfahrt zu Clippers Ginnheim in Frankfurt.",
    url: "/kontakt",
  },
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current shrink-0" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current shrink-0" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current shrink-0" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z" />
    </svg>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function InfoRow({ icon, label, children }: InfoRowProps) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-silver/10 flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-primary-white text-sm mb-1">{label}</p>
        {children}
      </div>
    </div>
  );
}

const socialLinks = [
  { href: SOCIAL.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SOCIAL.facebook,  label: "Facebook",  Icon: FacebookIcon  },
  { href: SOCIAL.tiktok,    label: "TikTok",    Icon: TikTokIcon    },
];

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        title="Kontakt"
        subtitle="Wir freuen uns auf deinen Besuch – buche online oder komm einfach vorbei."
      />

      <SectionWrapper className="bg-bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Info column */}
          <div className="space-y-8">

            {/* Booking CTA box */}
            <div className="bg-bg-card border border-border rounded-xl p-6 text-center">
              <p className="font-heading font-bold text-primary-white text-lg mb-1.5">
                Jetzt online buchen
              </p>
              <p className="text-gray-mid text-sm mb-5 leading-relaxed">
                Wähle deinen Barber und deinen Wunschtermin direkt über Booksy.
              </p>
              <BookingButton size="md" label="Termin buchen" className="w-full sm:w-auto" />
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <InfoRow icon={<MapPin className="h-5 w-5 text-silver" />} label="Adresse">
                <p className="text-gray-mid text-sm leading-relaxed">
                  {CONTACT.address}
                  <br />
                  {CONTACT.city}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${CONTACT.address}, ${CONTACT.city}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#888888] hover:text-[#111111] transition-colors mt-2 font-medium"
                >
                  In Google Maps öffnen
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </InfoRow>

              <InfoRow icon={<Phone className="h-5 w-5 text-silver" />} label="Telefon">
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="text-gray-mid text-sm hover:text-[#111111] transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </InfoRow>

              <InfoRow icon={<Mail className="h-5 w-5 text-silver" />} label="E-Mail">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-gray-mid text-sm hover:text-[#111111] transition-colors"
                >
                  {CONTACT.email}
                </a>
              </InfoRow>

              <InfoRow icon={<Clock className="h-5 w-5 text-silver" />} label="Öffnungszeiten">
                <ul className="space-y-1.5">
                  {HOURS.map(({ day, hours }) => (
                    <li key={day} className="flex gap-4 text-sm">
                      <span className="text-gray-mid w-40 shrink-0">{day}</span>
                      <span
                        className={
                          hours === "Geschlossen"
                            ? "text-gray-mid italic"
                            : "font-medium text-primary-white"
                        }
                      >
                        {hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </InfoRow>
            </div>

            {/* Social links */}
            <div>
              <p className="font-heading font-semibold text-xs uppercase tracking-widest text-gray-mid mb-4">
                Folge uns
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Clippers Ginnheim auf ${label}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-gray-mid text-sm font-medium hover:border-[#999999] hover:text-[#111111] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map column */}
          <div className="lg:sticky lg:top-24">
            <GoogleMap
              height={520}
              className="border border-border rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </SectionWrapper>

      <BookingBanner
        title="Dein nächster Termin wartet."
        subtitle="Buche schnell und unkompliziert über Booksy – wir freuen uns auf dich."
      />
    </>
  );
}
