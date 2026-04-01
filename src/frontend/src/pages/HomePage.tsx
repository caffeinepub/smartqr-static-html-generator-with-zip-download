import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Mail, Phone, Share2, X } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-chart-1/5 to-background" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_80%,oklch(var(--chart-1)/0.1),transparent_50%)]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Introducing SmartQR
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Connect Smarter, Not Harder
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  SmartQR is a smart and secure QR contact card designed to
                  simplify your networking experience. Always on your phone,
                  always in your hand.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => setPopupOpen(true)}
                  className="group gap-2 text-base"
                >
                  Get Yours Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Phone Frame Visual */}
            <div className="flex items-center justify-center">
              {/* Phone outer shell */}
              <div
                style={{
                  width: 260,
                  minHeight: 520,
                  borderRadius: 40,
                  background:
                    "linear-gradient(145deg, #1a2a4a 0%, #0f1c38 100%)",
                  boxShadow:
                    "0 0 0 2px #2d4a7a, 0 20px 60px rgba(10,20,50,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
                  padding: "14px 10px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {/* Top notch / speaker */}
                <div
                  style={{
                    width: 60,
                    height: 6,
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.18)",
                    marginBottom: 14,
                  }}
                />

                {/* Screen area */}
                <div
                  style={{
                    width: "100%",
                    borderRadius: 28,
                    background: "#f0f4f8",
                    padding: "18px 14px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 14,
                    flex: 1,
                  }}
                >
                  {/* Profile Photo */}
                  <div
                    style={{
                      width: 130,
                      height: 130,
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "3px solid #1a2a4a",
                      boxShadow: "0 4px 16px rgba(26,42,74,0.25)",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="/assets/generated/profile-business-person-transparent.dim_400x400.png"
                      alt="SmartQR User"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Name + title placeholder */}
                  <div style={{ textAlign: "center", lineHeight: 1.3 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#1a2a4a",
                      }}
                    >
                      Jane Smith
                    </div>
                    <div style={{ fontSize: 11, color: "#5a7090" }}>
                      Business Professional
                    </div>
                  </div>

                  {/* QR Code — 70% of photo width = ~91px, shown larger for visual impact */}
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      overflow: "hidden",
                      border: "2px solid #1a2a4a",
                      background: "white",
                      flexShrink: 0,
                      boxShadow: "0 2px 10px rgba(26,42,74,0.18)",
                    }}
                  >
                    <img
                      src="/assets/generated/smartqr-qr-navy.dim_300x300.png"
                      alt="SmartQR QR Code"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* 3 icon buttons */}
                  <div style={{ display: "flex", gap: 18, marginTop: 2 }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "#1a2a4a",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Phone size={16} color="white" />
                      </div>
                      <span style={{ fontSize: 9, color: "#5a7090" }}>
                        Call
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "#1a2a4a",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Mail size={16} color="white" />
                      </div>
                      <span style={{ fontSize: 9, color: "#5a7090" }}>
                        Email
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "#1a2a4a",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Share2 size={16} color="white" />
                      </div>
                      <span style={{ fontSize: 9, color: "#5a7090" }}>
                        Share
                      </span>
                    </div>
                  </div>
                </div>

                {/* Home button area */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.2)",
                    marginTop: 12,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent className="p-0 overflow-hidden w-[95vw] max-w-3xl h-[80vh] flex flex-col">
          <DialogTitle className="sr-only">Get SmartQR Free</DialogTitle>
          <div className="flex items-center justify-between px-4 py-2 border-b bg-background">
            <span className="text-sm font-medium text-muted-foreground">
              idmetech.com/smartqr
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setPopupOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <iframe
            src="https://idmetech.com/smartqr"
            className="flex-1 w-full border-0"
            title="Get SmartQR Free"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
