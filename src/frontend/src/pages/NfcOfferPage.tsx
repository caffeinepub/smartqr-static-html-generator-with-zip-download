import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  CreditCard,
  Smartphone,
  Sparkles,
} from "lucide-react";

export default function NfcOfferPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10">
          <img
            src="/assets/generated/hero-background.dim_1200x600.png"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="outline"
              className="mb-6 gap-1.5 px-4 py-1.5 text-sm"
            >
              <CreditCard className="h-3.5 w-3.5" />
              Special Offer
            </Badge>

            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Get Your NFC &ldquo;My&rdquo; Card Today
            </h1>

            <p className="mb-4 text-2xl font-semibold text-primary md:text-3xl">
              One-Tap Contact Sharing — Powered by SmartQR
            </p>

            <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
              Enable one-tap contact exchange for NFC users, linking directly to
              the SmartQR app for universal compatibility.
            </p>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-chart-1/10 to-background" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,oklch(var(--primary)/0.15),transparent_70%)]" />

        <div className="container">
          <div className="mx-auto max-w-5xl">
            <Card className="overflow-hidden border-2 shadow-2xl">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10 p-8 lg:p-12">
                  <img
                    src="/assets/generated/nfc-mycard-enhanced.dim_600x400.png"
                    alt="NFC My Card"
                    className="h-auto w-full max-w-sm rounded-lg object-cover shadow-2xl"
                  />
                </div>

                <div className="flex flex-col justify-center space-y-6 p-8 lg:p-12">
                  <div>
                    <Badge className="mb-4 gap-1.5 bg-gradient-to-r from-primary to-chart-1">
                      <Sparkles className="h-3.5 w-3.5" />
                      Limited Time Offer
                    </Badge>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                      Get Your NFC &ldquo;My&rdquo; Card Today
                    </h2>
                    <div className="mb-6 flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-primary">
                        $4.95
                      </span>
                      <span className="text-lg text-muted-foreground">
                        covers shipping &amp; handling
                      </span>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      This premium NFC card enables instant contact sharing with
                      a simple tap. Works seamlessly with any NFC-enabled
                      smartphone.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <p className="font-medium">One-Tap Contact Exchange</p>
                        <p className="text-sm text-muted-foreground">
                          Share your contact instantly with NFC-enabled devices
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <p className="font-medium">Universal Compatibility</p>
                        <p className="text-sm text-muted-foreground">
                          Links directly to SmartQR app for seamless integration
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <p className="font-medium">Premium Quality</p>
                        <p className="text-sm text-muted-foreground">
                          Durable PVC card with branded finish
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <p className="font-medium">Unlimited Updates</p>
                        <p className="text-sm text-muted-foreground">
                          Update your contact info anytime through SmartQR
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://buy.stripe.com/fZu3cuakm61n6oM5JubMQ00"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="group w-full gap-2 text-base">
                      Get My NFC Card
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 bg-gradient-to-br from-chart-1/5 to-primary/5 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    Bonus: Add an NFC Digital Card at a discount.
                  </h2>
                  <p className="mb-6 text-lg text-muted-foreground">
                    Integrates with your SmartQR data.
                  </p>
                  <div className="mx-auto max-w-2xl space-y-3">
                    <div className="flex items-center justify-center gap-3 rounded-lg bg-background/50 p-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-left text-sm">
                        <strong>QR Code Sharing:</strong> Share your contact
                        with anyone, even without NFC
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-3 rounded-lg bg-background/50 p-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-left text-sm">
                        <strong>ADD the NFC My Card</strong> to use with NFC
                        Taps.
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-3 rounded-lg bg-background/50 p-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-left text-sm">
                        <strong>Real-Time Updates:</strong> Change your info any
                        time, update your information instantly
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-3 rounded-lg bg-background/50 p-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-left text-sm">
                        <strong>Cross-Platform:</strong> Works on iOS, Android,
                        and web browsers
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
