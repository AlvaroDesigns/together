import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
} from "@tanstack/react-router";

import { ROUTES } from "@/constants";
import { Availability, Home, Login, Register, Step1, Step2 } from "@/pages";

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootRoute = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Volver a la home</Link>
      </div>
    );
  },
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.HOME_B2C,
  component: Home,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.LOGIN.slice(1),
  component: Login,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.REGISTER.slice(1),
  component: Register,
});

const step1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.HOME_B2B.slice(1),
  component: Step1,
});

const step2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: `${ROUTES.ITINERARY.slice(1)}/$productId`,
  component: Step2,
});

const step2SharedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: `${ROUTES.ITINERARY}/shared`.slice(1),
  component: Step2,
});

const availabilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.AVAILABILITY.slice(1),
  component: Availability,
});

const availabilityPublicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.AVAILABILITY_PUBLIC.slice(1),
  component: Availability,
});

// Añade las rutas al árbol
const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([
    loginRoute,
    registerRoute,
    step1Route,
    step2Route,
    availabilityRoute,
  ]),
  step2SharedRoute,
  availabilityPublicRoute,
]);

export const router = createRouter({ routeTree });

/*

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTES.HOME,
    element: <PrivateRoute element={<Step1 />} />,
  },
  {
    path: "itineray/:nameId",
    element: <PrivateRoute element={<Step2 />} />,
  },
  {
    path: "itineray/:nameId/shared",
    element: <Step2 />,
  },
  {
    path: "availability",
    element: <Availability />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

*/
