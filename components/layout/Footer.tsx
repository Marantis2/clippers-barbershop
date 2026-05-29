import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { BookingButton } from "@/components/shared/BookingButton";
import { CONTACT, HOURS, SOCIAL } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-surface text-[#111111] overflow-hidden">
      {/* Top metallic border */}
      <div className="absolute inset-x-0 top-0 divider-metallic" aria-hidden="true" />

      {/* Subtle ambient top light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 30% at 50% 0%, rgba(0,0,0,0.03) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="mb-3">
                <span style={{fontSize: '24px', fontWeight: '700', color: '#111111', letterSpacing: '2px'}}>CLIPPERS</span>
              </div>
              <p className="text-sm text-[#666666] leading-relaxed max-w-xs">
                Professionelle Haarschnitte und Bartpflege im Herzen von Frankfurt.
              </p>
            </div>

            <BookingButton variant="outline" className="w-fit" />

            <div className="flex gap-3">
              {[
                { href: SOCIAL.instagram, label: "Clippers auf Instagram", Icon: InstagramIcon },
                { href: SOCIAL.facebook, label: "Clippers auf Facebook", Icon: FacebookIcon },
                { href: SOCIAL.tiktok, label: "Clippers auf TikTok", Icon: TikTokIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-[#666666] hover:text-silver hover:border-silver/30 hover:bg-black/5 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="eyebrow mb-6">Öffnungszeiten</h3>
            <ul className="space-y-2.5">
              {HOURS.map(({ day, hours }) => (
                <li key={day} className="flex justify-between items-center text-sm gap-4">
                  <span className="text-[#666666]">{day}</span>
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
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <div className="w-7 h-7 rounded-md border border-border/60 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-3.5 w-3.5 text-silver" />
                </div>
                <span className="text-[#666666] leading-relaxed">
                  {CONTACT.address}
                  <br />
                  {CONTACT.city}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="w-7 h-7 rounded-md border border-border/60 flex items-center justify-center shrink-0">
                  <Phone className="h-3.5 w-3.5 text-silver" />
                </div>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="text-[#666666] hover:text-[#111111] transition-colors duration-200"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="w-7 h-7 rounded-md border border-border/60 flex items-center justify-center shrink-0">
                  <Mail className="h-3.5 w-3.5 text-silver" />
                </div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-[#666666] hover:text-[#111111] transition-colors duration-200"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#999999]">
          <p>© {year} Clippers Ginnheim Frankfurt. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/datenschutz" className="hover:text-[#111111] transition-colors duration-200">
              Datenschutz
            </Link>
            <Link href="/impressum" className="hover:text-[#111111] transition-colors duration-200">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
