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

            {/* Product Visual */}
            <div className="flex flex-col items-center justify-center gap-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl ring-4 ring-primary/10">
                  <img
                    src="/assets/generated/profile-business-person-transparent.dim_400x400.png"
                    alt="SmartQR User"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* QR Code badge */}
                <div className="absolute -bottom-4 -right-4 rounded-xl border-2 border-primary/20 bg-background p-1.5 shadow-lg">
                  <img
                    src="/assets/generated/smartqr-qrcode.dim_300x300.png"
                    alt="SmartQR QR Code"
                    className="h-16 w-16 rounded"
                  />
                </div>
              </div>

              {/* Icons row */}
              <div className="flex items-center gap-6 mt-6">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">Call</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">Email</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Share2 className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">Share</span>
                </div>
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
