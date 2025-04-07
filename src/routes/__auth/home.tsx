import { Home } from '@/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/__auth/home')({
  component: RootComponent,
});

function RootComponent() {
  return <Home />;
}

/*

const step1Route = createRoute({
  beforeLoad: async () => privateRoute(),
  getParentRoute: () => rootRoute,
  path: ROUTES.HOME_B2B.slice(1),
  component: Step1,
  loader: () => import('@/pages/step1'),
});

*/
