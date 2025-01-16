import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
  redirect,
} from "@tanstack/react-router";

import { Status } from "@/components";
import { AUHT_NAME, ROUTES } from "@/constants";
import { Availability, Home, Login, Register, Step1, Step2 } from "@/pages";
import { getAuth } from "@/utils";

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
      <>
        <Status
          title="Ups! No se encontró la página"
          text="Por favor, vuelva a intentarlo más tarde."
          src="../../404.png"
        />
        <Link
          className="mt-2 text-gray-600 dark:text-gray-400"
          to={ROUTES.HOME_B2C}
        >
          Volver a la home
        </Link>
      </>
    );
  },
  errorComponent: ({ error }) => (
    <>
      <Status title="Habido un problema" text={error.message} />
      <Link
        className="mt-2 text-gray-600 dark:text-gray-400"
        to={ROUTES.HOME_B2C}
      >
        Volver a la home
      </Link>
    </>
  ),
});

const privateRoute = ({
  isLogged = false,
}: { isLogged?: boolean } = {}): void => {
  const authentication = getAuth(AUHT_NAME);

  if (isLogged) {
    throw redirect({ to: ROUTES.HOME_B2C });
  }

  if (!authentication) {
    throw redirect({ to: ROUTES.LOGIN });
  }
};

const indexRoute = createRoute({
  beforeLoad: async () => privateRoute({ isLogged: true }),
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
  beforeLoad: async () => privateRoute(),
  getParentRoute: () => rootRoute,
  path: ROUTES.HOME_B2B.slice(1),
  component: Step1,
});

const step2Route = createRoute({
  beforeLoad: async () => privateRoute(),
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
  beforeLoad: async () => privateRoute(),
  getParentRoute: () => rootRoute,
  path: ROUTES.AVAILABILITY.slice(1),
  component: Availability,
});

const availabilityPublicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.AVAILABILITY_PUBLIC.slice(1),
  component: Availability,
});

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

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});
