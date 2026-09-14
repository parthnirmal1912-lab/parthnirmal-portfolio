import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.shortName} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3EFE7",
          padding: "64px 72px",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderBottom: "2px solid #15120E",
            paddingBottom: 20,
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8A8275",
          }}
        >
          <span>Portfolio — Edition 2026</span>
          <span>Indiana, USA</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#BE4218",
              marginBottom: 20,
            }}
          >
            Purdue BAIM &apos;26 · Available January 2027
          </div>
          <div
            style={{
              fontSize: 104,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: -4,
              textTransform: "uppercase",
              color: "#15120E",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Parth</span>
            <span>Nirmal</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "2px solid #15120E",
            paddingTop: 20,
          }}
        >
          <span style={{ fontSize: 26, color: "#4C463C", maxWidth: 760 }}>
            Business Analytics &amp; Information Management — turning messy data
            into decisions leaders act on.
          </span>
          <span
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#BE4218",
            }}
          >
            $33.9M sized
          </span>
        </div>
      </div>
    ),
    size,
  );
}
