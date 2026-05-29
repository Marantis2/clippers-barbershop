import { ImageResponse } from "next/og";
import { CONTACT, RATING } from "@/lib/constants";

export const alt = "Clippers Ginnheim – Barbershop Frankfurt";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#1A1A1A",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
      }}
    >
      {/* Top red accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          background: "#C0392B",
        }}
      />

      {/* Bottom blue accent bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 8,
          background: "#1A3A6B",
        }}
      />

      {/* Logo wordmark */}
      <div
        style={{
          display: "flex",
          fontSize: 96,
          fontWeight: 800,
          letterSpacing: "0.08em",
          lineHeight: 1,
          marginBottom: 20,
        }}
      >
        <span style={{ color: "#1A3A6B" }}>CLIP</span>
        <span style={{ color: "#C0392B" }}>PERS</span>
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 22,
          color: "#9B9B9B",
          letterSpacing: "0.22em",
          marginBottom: 48,
        }}
      >
        BARBERSHOP · GINNHEIM · FRANKFURT
      </div>

      {/* Address pill */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: 20,
          color: "#F8F8F8",
          fontWeight: 500,
          marginBottom: 28,
          paddingTop: 14,
          paddingBottom: 14,
          paddingLeft: 28,
          paddingRight: 28,
          borderRadius: 10,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.05)",
        }}
      >
        {CONTACT.address}, {CONTACT.city}
      </div>

      {/* Rating row — uses filled squares to avoid satori font-download warnings */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 20,
        }}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              width: 20,
              height: 20,
              borderRadius: 4,
              background: "#FACC15",
            }}
          />
        ))}
        <span style={{ color: "#F8F8F8", fontWeight: 700, marginLeft: 6 }}>
          {RATING.score}
        </span>
        <span style={{ color: "#9B9B9B" }}>
          / 5 · {RATING.count} {RATING.platform}-Bewertungen
        </span>
      </div>
    </div>,
    { ...size }
  );
}
