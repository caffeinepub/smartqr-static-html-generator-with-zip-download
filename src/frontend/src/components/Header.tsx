import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 transition-colors hover:text-primary"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-chart-1 shadow-lg">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">idmetech</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary"
            data-ocid="nav.link"
          >
            Home
          </Link>
          <Link
            to="/smartqr"
            className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary"
            data-ocid="nav.link"
          >
            SmartQR
          </Link>
          <Link
            to="/tiktok-promo"
            className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary"
            data-ocid="nav.link"
          >
            Promo
          </Link>
          <Link
            to="/tiktok-promo2"
            className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary transition-colors hover:bg-primary/20 [&.active]:bg-primary [&.active]:text-primary-foreground"
            data-ocid="nav.link"
          >
            Promo V2 ✨
          </Link>
          <Link
            to="/print-card"
            className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary"
            data-ocid="nav.link"
          >
            Print Cards
          </Link>
          <Link
            to="/download"
            className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary"
            data-ocid="nav.link"
          >
            Download
          </Link>
        </nav>
      </div>
    </header>
  );
}
