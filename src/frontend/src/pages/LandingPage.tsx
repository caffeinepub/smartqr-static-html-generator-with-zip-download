import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, CreditCard, Sparkles, X, Zap } from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  const [popupOpen, setPopupOpen] = useState(false);

  const features = [
    {
      title: "Smart Contact Sharing",
      description: "Easily share contact information using QR codes",
    },
    {
      title: "Instant Updates",
      description: "Keep your contact details up-to-date in real-time",
    },
    {
      title: "NFC Card Integration",
      description: "Upgrade to NFC for seamless contact sharing",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Hero Background */}
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
              <Sparkles className="h-3.5 w-3.5" />
              Smart Contact Sharing
            </Badge>

            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Upgrade Your Networking Game
            </h1>

            <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
              SmartQR offers advanced contact sharing with real-time updates and
              NFC integration.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group gap-2 text-base"
                onClick={() => setPopupOpen(true)}
              >
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />

        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Powerful Features
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Everything you need for modern networking
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const icons = [Zap, Sparkles, CreditCard];
                const Icon = icons[index % icons.length];

                return (
                  <Card
                    key={feature.title}
                    className="group transition-all hover:shadow-lg hover:shadow-primary/5"
                  >
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-chart-1 text-primary-foreground shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  See SmartQR in Action
                </h2>
                <p className="text-lg text-muted-foreground">
                  Experience seamless contact sharing with our beautifully
                  designed QR contact cards. Share your information instantly
                  with anyone, anywhere.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Zap className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="font-medium">Instant Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Changes reflect immediately across all shared cards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="font-medium">Smart & Secure</p>
                      <p className="text-sm text-muted-foreground">
                        Your data is encrypted and protected
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Card className="overflow-hidden border-2 shadow-2xl">
                  <CardContent className="p-0">
                    <img
                      src="/assets/generated/smartqr-product-mockup.dim_800x600.png"
                      alt="SmartQR Product Preview"
                      className="h-auto w-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NFC Upgrade CTA Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-chart-1/10 to-background" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,oklch(var(--primary)/0.15),transparent_70%)]" />

        <div className="container">
          <div className="mx-auto max-w-5xl">
            <Card className="overflow-hidden border-2 shadow-2xl">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="flex items-center justify-center p-8 lg:p-12">
                  <img
                    src="/assets/generated/nfc-card-product.dim_400x300.png"
                    alt="NFC Card"
                    className="h-auto w-full max-w-sm rounded-lg object-cover shadow-lg"
                  />
                </div>

                <div className="flex flex-col justify-center space-y-6 p-8 lg:p-12">
                  <div>
                    <Badge className="mb-4 gap-1.5">
                      <CreditCard className="h-3.5 w-3.5" />
                      Premium Upgrade
                    </Badge>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                      Upgrade to NFC for just
                    </h2>
                    <div className="mb-6 flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-primary">
                        $4.95
                      </span>
                      <span className="text-lg text-muted-foreground">
                        one-time
                      </span>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Get a physical NFC card that works with a simple tap. No
                      app required for your contacts to receive your
                      information.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Premium metal card design</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Works with any smartphone</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Lifetime updates included</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      size="lg"
                      variant="default"
                      onClick={() => navigate({ to: "/nfc-offer" })}
                      className="group gap-2"
                    >
                      View Special Offer
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
}
