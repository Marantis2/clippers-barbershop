"use client";

import { useEffect, useRef, useState } from "react";
import { Check, CreditCard, Store, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BOOKSY_URL } from "@/lib/constants";

export interface CartItem {
  name: string;
  price: string;
}

interface BookingPanelProps {
  cart: CartItem[];
  open: boolean;
  onClose: () => void;
  onRemove: (name: string) => void;
}

type PaymentMethod = "vor-ort" | "online" | null;

function parseEuro(price: string): number {
  return parseFloat(price.replace(/[^\d.,]/g, "").replace(",", ".")) || 0;
}

export function BookingPanel({ cart, open, onClose, onRemove }: BookingPanelProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) setPaymentMethod(null);
  }, [open]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => closeBtnRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const subtotal = cart.reduce((sum, item) => sum + parseEuro(item.price), 0);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Warenkorb"
        className={cn(
          "fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[420px] bg-white border-l border-[#E0E0E0] shadow-2xl flex flex-col transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E0E0E0] shrink-0">
          <div className="flex items-center gap-2.5">
            <h2 className="font-heading font-bold text-lg text-[#111111] tracking-[-0.01em]">
              Warenkorb
            </h2>
            {cart.length > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#111111] text-white font-heading font-bold text-[10px] leading-none">
                {cart.length}
              </span>
            )}
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Panel schließen"
            className="w-8 h-8 flex items-center justify-center rounded-md text-[#666666] hover:text-[#111111] hover:bg-[#F0F0F0] transition-colors duration-150"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Cart items */}
          {cart.length === 0 ? (
            <p className="text-sm text-[#999999] text-center py-10">
              Noch keine Services ausgewählt.
            </p>
          ) : (
            <div>
              <p className="text-xs font-heading font-semibold tracking-[0.08em] uppercase text-[#666666] mb-3">
                Ausgewählte Services
              </p>
              <div className="rounded-xl border border-[#E0E0E0] overflow-hidden">
                {cart.map((item, i) => (
                  <div
                    key={item.name}
                    className={cn(
                      "flex items-center justify-between gap-3 px-4 py-3 bg-white",
                      i < cart.length - 1 && "border-b border-[#F0F0F0]"
                    )}
                  >
                    <span className="font-heading font-medium text-sm text-[#111111] flex-1 min-w-0 leading-snug">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-heading font-bold text-sm text-[#111111] tabular-nums">
                        {item.price}
                      </span>
                      <button
                        type="button"
                        onClick={() => onRemove(item.name)}
                        aria-label={`${item.name} entfernen`}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[#BBBBBB] hover:text-[#CC3333] hover:bg-red-50 transition-colors duration-150"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
                {/* Subtotal */}
                <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#F8F9FA] border-t border-[#E0E0E0]">
                  <span className="font-heading font-semibold text-sm text-[#666666]">
                    Gesamt
                  </span>
                  <span className="font-heading font-bold text-base text-[#111111] tabular-nums">
                    {subtotal} €
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Payment method — only shown when cart has items */}
          {cart.length > 0 && (
            <div>
              <p className="text-xs font-heading font-semibold tracking-[0.08em] uppercase text-[#666666] mb-3">
                Zahlungsmethode
              </p>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("online")}
                  className={cn(
                    "w-full flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200",
                    paymentMethod === "online"
                      ? "border-[#111111] bg-[#111111]/[0.03] shadow-[0_0_0_1px_#111111]"
                      : "border-[#E0E0E0] bg-white hover:border-[#BBBBBB] hover:bg-[#F8F9FA]"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-colors duration-200",
                      paymentMethod === "online"
                        ? "border-[#111111]/20 bg-[#111111]/[0.05]"
                        : "border-[#E0E0E0] bg-[#F8F9FA]"
                    )}
                  >
                    <CreditCard className="w-5 h-5 text-[#111111]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-semibold text-sm text-[#111111]">
                      Online bezahlen
                    </p>
                    <p className="text-xs text-[#666666] mt-0.5">
                      Stripe · sicher &amp; schnell
                    </p>
                  </div>
                  {paymentMethod === "online" && (
                    <div className="w-5 h-5 rounded-full bg-[#111111] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </div>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("vor-ort")}
                  className={cn(
                    "w-full flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200",
                    paymentMethod === "vor-ort"
                      ? "border-[#111111] bg-[#111111]/[0.03] shadow-[0_0_0_1px_#111111]"
                      : "border-[#E0E0E0] bg-white hover:border-[#BBBBBB] hover:bg-[#F8F9FA]"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-colors duration-200",
                      paymentMethod === "vor-ort"
                        ? "border-[#111111]/20 bg-[#111111]/[0.05]"
                        : "border-[#E0E0E0] bg-[#F8F9FA]"
                    )}
                  >
                    <Store className="w-5 h-5 text-[#111111]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-semibold text-sm text-[#111111]">
                      Vor Ort bezahlen
                    </p>
                    <p className="text-xs text-[#666666] mt-0.5">
                      Bar oder Karte im Shop
                    </p>
                  </div>
                  {paymentMethod === "vor-ort" && (
                    <div className="w-5 h-5 rounded-full bg-[#111111] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </div>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        {cart.length > 0 && (
          <div className="shrink-0 px-6 py-5 border-t border-[#E0E0E0]">
            {paymentMethod === "online" ? (
              <div className="rounded-xl border border-[#E0E0E0] bg-[#F8F9FA] px-5 py-4 text-center">
                <p className="font-heading font-semibold text-sm text-[#111111] mb-1">
                  Online-Zahlung folgt in Kürze
                </p>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Diese Funktion ist bald verfügbar. Bitte wähle vorerst &quot;Vor Ort bezahlen&quot;.
                </p>
              </div>
            ) : (
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "relative flex w-full items-center justify-center rounded-md font-heading font-semibold tracking-[0.08em] uppercase text-sm px-6 py-3.5 overflow-hidden transition-all duration-200 active:scale-[0.98]",
                  "bg-[#111111] text-white border border-[#111111]",
                  "hover:bg-[#333333] hover:border-[#333333]",
                  "shadow-[0_2px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.20)]",
                  "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
                  "before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-500"
                )}
              >
                Jetzt buchen
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );
}
