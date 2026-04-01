import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const CARDS_PER_SHEET = 10;
const CARD_IDS = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"];

function MyCard() {
  return (
    <div
      style={{
        width: "3.5in",
        height: "2in",
        background: "#f8f6f3",
        border: "1px solid #e0d8d0",
        borderRadius: "0.125in",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.12in",
        fontFamily: "'Georgia', serif",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        pageBreakInside: "avoid",
      }}
    >
      {/* Corner accents */}
      <div
        style={{
          position: "absolute",
          top: "0.12in",
          left: "0.12in",
          width: "0.18in",
          height: "0.18in",
          borderTop: "2px solid #9b3a3a",
          borderLeft: "2px solid #9b3a3a",
          borderRadius: "2px 0 0 0",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0.12in",
          right: "0.12in",
          width: "0.18in",
          height: "0.18in",
          borderTop: "2px solid #9b3a3a",
          borderRight: "2px solid #9b3a3a",
          borderRadius: "0 2px 0 0",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0.12in",
          left: "0.12in",
          width: "0.18in",
          height: "0.18in",
          borderBottom: "2px solid #9b3a3a",
          borderLeft: "2px solid #9b3a3a",
          borderRadius: "0 0 0 2px",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0.12in",
          right: "0.12in",
          width: "0.18in",
          height: "0.18in",
          borderBottom: "2px solid #9b3a3a",
          borderRight: "2px solid #9b3a3a",
          borderRadius: "0 0 2px 0",
        }}
      />

      {/* MY Logo */}
      <div style={{ display: "flex", gap: "0.08in", alignItems: "center" }}>
        <svg
          role="img"
          aria-label="M"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>M</title>
          <rect x="0" y="0" width="52" height="52" fill="#9b3a3a" />
          <polygon points="13,0 26,20 39,0" fill="#f8f6f3" />
        </svg>
        <svg
          role="img"
          aria-label="Y"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Y</title>
          <rect x="0" y="0" width="52" height="52" fill="#9b3a3a" />
          <polygon points="0,0 52,0 38,26 38,52 14,52 14,26" fill="#f8f6f3" />
        </svg>
      </div>

      <div
        style={{
          fontSize: "0.22in",
          fontWeight: "700",
          letterSpacing: "0.05em",
          color: "#2a1a1a",
          fontFamily: "'Georgia', serif",
          textTransform: "uppercase",
        }}
      >
        MY Card
      </div>

      <div
        style={{
          fontSize: "0.1in",
          color: "#7a6060",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontFamily: "'Arial', sans-serif",
        }}
      >
        Tap to Connect &middot; SmartQR
      </div>

      {/* NFC indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "0.18in",
          right: "0.22in",
          display: "flex",
          alignItems: "center",
          gap: "0.04in",
        }}
      >
        <div
          style={{
            width: "0.08in",
            height: "0.08in",
            borderRadius: "50%",
            background: "#9b3a3a",
            opacity: 0.6,
          }}
        />
        <span
          style={{
            fontSize: "0.08in",
            color: "#9b7070",
            fontFamily: "'Arial', sans-serif",
            letterSpacing: "0.04em",
          }}
        >
          NFC
        </span>
      </div>
    </div>
  );
}

export default function PrintCardPage() {
  return (
    <div>
      <div className="print:hidden container py-8">
        <div className="mx-auto max-w-2xl space-y-4">
          <h1 className="text-3xl font-bold">MY Card &mdash; Print Template</h1>
          <p className="text-muted-foreground">
            Prints {CARDS_PER_SHEET} cards per sheet on standard 8.5&quot;
            &times; 11&quot; paper. Use card stock (80&ndash;110 lb) for best
            results. Cut along the guides, then program each NFC chip with your
            customer&apos;s SmartQR profile URL.
          </p>
          <div className="rounded-lg border bg-muted/40 p-4 text-sm space-y-1">
            <p>
              <strong>Print settings:</strong>
            </p>
            <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
              <li>Paper: Letter (8.5&quot; &times; 11&quot;)</li>
              <li>Orientation: Portrait</li>
              <li>Margins: Default or Minimum</li>
              <li>Scale: 100% &mdash; do not scale to fit</li>
              <li>Background graphics: On</li>
            </ul>
          </div>
          <Button onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />
            Print Cards
          </Button>
        </div>
      </div>

      {/* Preview on screen */}
      <div className="print:hidden container pb-12">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            Preview (single card):
          </p>
          <MyCard />
        </div>
      </div>

      {/* Print sheet */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3.5in 3.5in",
          gridTemplateRows: `repeat(${CARDS_PER_SHEET / 2}, 2in)`,
          gap: "0.25in",
          padding: "0.375in",
          width: "8.5in",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
        className="hidden print:grid"
      >
        {CARD_IDS.map((id) => (
          <MyCard key={id} />
        ))}
      </div>

      <style>{`
        @media print {
          header, footer, nav { display: none !important; }
          body { margin: 0; }
          @page { size: letter; margin: 0; }
        }
      `}</style>
    </div>
  );
}
