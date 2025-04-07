import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { CookiesProvider } from 'react-cookie';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GlobalProvider } from './stores/Global/provider.tsx';

// Crear una única instancia de QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>
          <GlobalProvider>
            <ToastProvider />
            <App />
          </GlobalProvider>
        </HeroUIProvider>
      </QueryClientProvider>
    </CookiesProvider>
  </StrictMode>,
);
