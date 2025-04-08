import { I18nextProvider } from 'react-i18next';

import './App.css';
import i18n from './i18';

// Import the generated route tree
import { useProviderStore } from '@/stores/Global/store';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    auth: false,
    account: null,
  },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}

function App() {
  const { user } = useProviderStore();

  router.update({
    context: {
      auth: user.auth,
      account: null,
    },
  });

  return (
    <div className="text-foreground bg-background">
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </div>
  );
}

export default App;
