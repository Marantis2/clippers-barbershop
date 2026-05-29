"use client";

import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { PriceCategory } from "./PriceCategory";
import { BookingPanel } from "./BookingPanel";
import type { CartItem } from "./BookingPanel";
import type { PriceEntry } from "./PriceCategory";

export interface PriceTab {
  value: string;
  label: string;
  items: PriceEntry[];
}

interface PriceListTabsProps {
  categories: PriceTab[];
}

export function PriceListTabs({ categories }: PriceListTabsProps) {
  const [active, setActive] = useState(categories[0]?.value ?? "");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && categories.some((c) => c.value === hash)) {
      setActive(hash);
    }
  }, [categories]);

  const handleAdd = (item: PriceEntry) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.name === item.name);
      if (existing) {
        return prev.map((c) =>
          c.name === item.name ? { ...c, quantity: Math.min(10, c.quantity + 1) } : c
        );
      }
      return [...prev, { name: item.name, price: item.price, quantity: 1 }];
    });
  };

  const handleDecrement = (name: string) => {
    setCart((prev) => {
      const item = prev.find((c) => c.name === name);
      if (!item) return prev;
      if (item.quantity <= 1) return prev.filter((c) => c.name !== name);
      return prev.map((c) => c.name === name ? { ...c, quantity: c.quantity - 1 } : c);
    });
  };

  const handleIncrement = (name: string) => {
    setCart((prev) =>
      prev.map((c) => c.name === name ? { ...c, quantity: Math.min(10, c.quantity + 1) } : c)
    );
  };

  const handleRemove = (name: string) => {
    setCart((prev) => prev.filter((c) => c.name !== name));
  };

  const handleClose = () => setPanelOpen(false);

  return (
    <>
      <div>
        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Preiskategorien">
          {categories.map(({ value, label }) => (
            <button
              key={value}
              role="tab"
              aria-selected={active === value}
              aria-controls={`panel-${value}`}
              id={`tab-${value}`}
              onClick={() => setActive(value)}
              className={cn(
                "px-5 py-2.5 rounded-full font-heading text-xs font-semibold tracking-[0.08em] uppercase transition-all duration-200 border",
                active === value
                  ? "bg-[#111111] border-[#111111] text-white shadow-[0_2px_12px_rgba(0,0,0,0.20)]"
                  : "bg-bg-card border-border text-[#666666] hover:border-[#CCCCCC] hover:text-[#111111]"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab panels */}
        {categories.map(({ value, label, items }) => (
          <div
            key={value}
            id={`panel-${value}`}
            role="tabpanel"
            aria-labelledby={`tab-${value}`}
            hidden={active !== value}
            className="relative bg-bg-card rounded-xl border border-border overflow-hidden"
          >
            <div className="h-[1px] bg-gradient-to-r from-transparent via-silver/30 to-transparent" aria-hidden="true" />
            <div className="p-7 lg:p-10">
              <PriceCategory
                title={label}
                items={items}
                cart={cart}
                onAdd={handleAdd}
                onDecrement={handleDecrement}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Floating cart button — visible when cart has items and panel is closed */}
      {cart.length > 0 && !panelOpen && (
        <button
          type="button"
          onClick={() => setPanelOpen(true)}
          aria-label={`Warenkorb öffnen – ${cart.reduce((s, c) => s + c.quantity, 0)} ausgewählt`}
          className="fixed bottom-6 right-6 z-[35] w-14 h-14 rounded-full bg-[#111111] text-white shadow-[0_4px_24px_rgba(0,0,0,0.30)] hover:bg-[#333333] transition-colors duration-200 flex items-center justify-center"
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 rounded-full bg-[#C9A84C] text-[#111111] text-[10px] font-heading font-bold flex items-center justify-center px-1 leading-none">
            {cart.reduce((s, c) => s + c.quantity, 0)}
          </span>
        </button>
      )}

      <BookingPanel
        cart={cart}
        open={panelOpen}
        onClose={handleClose}
        onRemove={handleRemove}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </>
  );
}
