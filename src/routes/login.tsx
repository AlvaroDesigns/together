import { Login } from '@/pages';
/*import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  beforeLoad: async ({ context }) => {
    if (!context.auth) {
      console.log('redirecting to login', context);

      //throw redirect({ to: '/login' });
    } else {
      // throw redirect({ to: '/' });
    }
  },
  component: Login,
});


*/

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: Login,
});
