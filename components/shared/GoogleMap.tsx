import { cn } from "@/lib/utils";
import { GOOGLE_MAPS_EMBED_URL } from "@/lib/constants";

interface GoogleMapProps {
  src?: string;
  height?: number;
  title?: string;
  className?: string;
}

export function GoogleMap({
  src = GOOGLE_MAPS_EMBED_URL,
  height = 400,
  title = "Clippers Barbershop Frankfurt – Karte",
  className,
}: GoogleMapProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg", className)}>
      <iframe
        src={src}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
}
