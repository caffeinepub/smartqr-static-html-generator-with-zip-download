import { Link } from '@tanstack/react-router';
import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-colors hover:text-primary">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-chart-1 shadow-lg">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">idmetech</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary"
          >
            Home
          </Link>
          <Link
            to="/smartqr"
            className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary"
          >
            SmartQR
          </Link>
          <Link
            to="/download"
            className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary"
          >
            Download
          </Link>
        </nav>
      </div>
    </header>
  );
}
