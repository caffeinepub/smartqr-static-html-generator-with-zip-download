import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import DownloadPage from "./pages/DownloadPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import NfcOfferPage from "./pages/NfcOfferPage";
import PrintCardPage from "./pages/PrintCardPage";
import TikTokPromo2Page from "./pages/TikTokPromo2Page";
import TikTokPromoPage from "./pages/TikTokPromoPage";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/smartqr",
  component: LandingPage,
});

const nfcOfferRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/nfc-offer",
  component: NfcOfferPage,
});

const downloadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/download",
  component: DownloadPage,
});

const tiktokPromoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tiktok-promo",
  component: TikTokPromoPage,
});

const tiktokPromo2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tiktok-promo2",
  component: TikTokPromo2Page,
});

const printCardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/print-card",
  component: PrintCardPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  landingRoute,
  nfcOfferRoute,
  downloadRoute,
  tiktokPromoRoute,
  tiktokPromo2Route,
  printCardRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
