import { Minus, Plus } from "lucide-react";

interface PriceItemProps {
  name: string;
  description?: string;
  price: string;
  inCart: boolean;
  quantity: number;
  onAdd: () => void;
  onDecrement: () => void;
}

export function PriceItem({ name, description, price, inCart, quantity, onAdd, onDecrement }: PriceItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-border last:border-0 group">
      <div className="flex-1 min-w-0">
        <p className="font-heading font-semibold text-primary-white text-sm group-hover:text-[#111111] transition-colors">
          {name}
        </p>
        {description && (
          <p className="text-xs text-gray-mid mt-0.5 leading-relaxed">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="font-heading font-bold text-silver text-base tabular-nums whitespace-nowrap">
          {price}
        </span>

        {inCart ? (
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onDecrement}
              aria-label={`${name} verringern`}
              className="w-7 h-7 rounded-full border border-[#E0E0E0] text-[#AAAAAA] hover:border-[#CC3333] hover:text-[#CC3333] hover:bg-red-50 flex items-center justify-center transition-colors duration-150 shrink-0"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-6 text-center font-heading font-semibold text-sm text-[#111111] tabular-nums select-none">
              {quantity}
            </span>
            <button
              type="button"
              onClick={onAdd}
              disabled={quantity >= 10}
              aria-label={`${name} erhöhen`}
              className="w-7 h-7 rounded-full border border-[#CCCCCC] text-[#666666] hover:border-[#111111] hover:text-[#111111] hover:bg-[#F0F0F0] flex items-center justify-center transition-colors duration-150 shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onAdd}
            aria-label={`${name} hinzufügen`}
            className="w-7 h-7 rounded-full border border-[#CCCCCC] text-[#666666] hover:border-[#111111] hover:text-[#111111] hover:bg-[#F0F0F0] flex items-center justify-center transition-colors duration-150 shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
