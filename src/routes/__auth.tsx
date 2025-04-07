import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/__auth')({
  beforeLoad: async ({ context, location }) => {
    if (!context.auth) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
});
