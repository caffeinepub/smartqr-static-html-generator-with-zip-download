import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import NfcOfferPage from './pages/NfcOfferPage';
import DownloadPage from './pages/DownloadPage';
import Layout from './components/Layout';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/smartqr',
  component: LandingPage,
});

const nfcOfferRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/nfc-offer',
  component: NfcOfferPage,
});

const downloadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/download',
  component: DownloadPage,
});

const routeTree = rootRoute.addChildren([indexRoute, landingRoute, nfcOfferRoute, downloadRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
