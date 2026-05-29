import { cn } from "@/lib/utils";
import { BOOKSY_URL } from "@/lib/constants";

interface BookingButtonProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "dark";
  className?: string;
  label?: string;
  href?: string;
}

const sizeClasses = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-9 py-4 text-sm",
};

export function BookingButton({
  size = "md",
  variant = "default",
  className,
  label = "Termin buchen",
  href = BOOKSY_URL,
}: BookingButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative inline-flex items-center justify-center rounded-md font-heading font-semibold tracking-[0.08em] uppercase transition-all duration-250 active:scale-[0.97] overflow-hidden",
        sizeClasses[size],
        variant === "default" && [
          "bg-[#111111] text-white border border-[#111111]",
          "hover:bg-[#333333] hover:border-[#333333]",
          "shadow-[0_2px_12px_rgba(0,0,0,0.12)]",
          "hover:shadow-[0_4px_20px_rgba(0,0,0,0.20)]",
          "before:absolute before:inset-0 before:bg-gradient-to-r",
          "before:from-transparent before:via-white/10 before:to-transparent",
          "before:translate-x-[-200%] hover:before:translate-x-[200%]",
          "before:transition-transform before:duration-500",
        ],
        variant === "outline" && [
          "border border-[#CCCCCC] text-[#555555]",
          "hover:bg-[rgba(0,0,0,0.04)] hover:border-[#999999] hover:text-[#111111]",
        ],
        variant === "dark" && [
          "bg-[#C0C0C0] text-[#111111] border border-[#C0C0C0]",
          "hover:bg-[#D8D8D8] hover:border-[#D8D8D8]",
          "shadow-[0_2px_12px_rgba(192,192,192,0.15)]",
          "hover:shadow-[0_4px_20px_rgba(192,192,192,0.25)]",
          "before:absolute before:inset-0 before:bg-gradient-to-r",
          "before:from-transparent before:via-white/20 before:to-transparent",
          "before:translate-x-[-200%] hover:before:translate-x-[200%]",
          "before:transition-transform before:duration-500",
        ],
        className
      )}
    >
      {label}
    </a>
  );
}
