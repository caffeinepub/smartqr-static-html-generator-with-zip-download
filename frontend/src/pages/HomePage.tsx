import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-chart-1/5 to-background" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_80%,oklch(var(--chart-1)/0.1),transparent_50%)]" />

      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Introducing SmartQR
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Connect Smarter, Not Harder
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  SmartQR is a smart and secure QR contact card designed to simplify your networking experience.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => navigate({ to: '/smartqr' })}
                  className="group gap-2 text-base"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Product Visual */}
            <div className="flex items-center justify-center">
              <Card className="overflow-hidden border-2 shadow-2xl">
                <CardContent className="p-0">
                  <img
                    src="/assets/generated/smartqr-product-mockup.dim_800x600.png"
                    alt="SmartQR Product"
                    className="h-auto w-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
