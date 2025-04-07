import { RootLayout, Status } from '@/components';
import { ROUTES } from '@/constants';
import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

interface RouterContext {
  auth: boolean | undefined;
  account: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <RootLayout>
        <Outlet />
      </RootLayout>
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => {
    return (
      <>
        <Status
          title="Ups! No se encontró la página"
          text="Por favor, vuelva a intentarlo más tarde."
          src="../../404.png"
        />
        <Link className="mt-2 text-gray-600 dark:text-gray-400" to={ROUTES.HOME_B2C}>
          Volver a la home
        </Link>
      </>
    );
  },
  errorComponent: ({ error }) => (
    <>
      <Status title="Habido un problema" text={error.message} src="../../error.png" />
      <Link className="mt-2 text-gray-600 dark:text-gray-400" to={ROUTES.HOME_B2C}>
        Volver a la home
      </Link>
    </>
  ),
});
