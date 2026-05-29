import { PriceItem } from "./PriceItem";
import type { CartItem } from "./BookingPanel";

export interface PriceEntry {
  name: string;
  description?: string;
  price: string;
}

interface PriceCategoryProps {
  title: string;
  items: PriceEntry[];
  cart: CartItem[];
  onAdd: (item: PriceEntry) => void;
  onDecrement: (name: string) => void;
}

export function PriceCategory({ title, items, cart, onAdd, onDecrement }: PriceCategoryProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-7 bg-silver rounded-full shrink-0" aria-hidden="true" />
        <h3 className="font-heading text-xl font-bold text-primary-white">{title}</h3>
      </div>
      <div>
        {items.map((item) => {
          const cartItem = cart.find((c) => c.name === item.name);
          return (
            <PriceItem
              key={item.name}
              {...item}
              inCart={!!cartItem}
              quantity={cartItem?.quantity ?? 0}
              onAdd={() => onAdd(item)}
              onDecrement={() => onDecrement(item.name)}
            />
          );
        })}
      </div>
    </div>
  );
}
