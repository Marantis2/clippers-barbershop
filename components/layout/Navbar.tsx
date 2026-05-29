"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BookingButton } from "@/components/shared/BookingButton";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "bg-[#111111]/90 backdrop-blur-md border-white/8 shadow-xl shadow-black/30"
          : "bg-[#111111] border-[#1A1A1A]"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Clippers" style={{ height: "55px", width: "280px", objectFit: "contain" }} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium tracking-wide transition-colors duration-200",
                    "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[1px] after:rounded-full",
                    "after:bg-silver after:transition-transform after:duration-200 after:origin-left",
                    isActive
                      ? "text-[#F5F5F5] after:scale-x-100"
                      : "text-[#F5F5F5]/65 hover:text-[#F5F5F5] after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:block">
              <BookingButton size="sm" variant="dark" />
            </div>
            <button
              className="lg:hidden p-2 rounded-md text-[#F5F5F5] hover:text-silver hover:bg-white/5 transition-colors duration-200"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/8 bg-[#111111]/95 backdrop-blur-md">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex flex-col gap-0.5">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "py-2.5 px-3 rounded-md text-sm font-medium tracking-wide transition-colors duration-200",
                    "hover:bg-white/6 hover:text-[#F5F5F5]",
                    isActive
                      ? "text-silver bg-white/5"
                      : "text-[#F5F5F5]/60"
                  )}
                >
                  {label}
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-white/8">
              <BookingButton className="w-full" label="Jetzt Termin buchen" variant="dark" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
