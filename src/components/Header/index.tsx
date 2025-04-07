import { Button, Image, Navbar, NavbarBrand, NavbarContent } from '@heroui/react';

import { siteConfig } from '@/config/site';
import { useProviderStore } from '@/stores/Global/store';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@heroui/use-theme';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import DrawerNavBar from './drawerNavBar';

export default function Header() {
  const { user } = useProviderStore();

  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { pathname } = useLocation();
  const { routes } = siteConfig;

  const isLoginRoute = pathname === routes.home;

  return (
    <Navbar
      maxWidth="xl"
      className="dark:border-slate-200 border-b-1 dark:border-default-200/50 order-b"
    >
      <NavbarBrand className="justify-start">
        <Link to={routes.home_b2b}>
          <Image
            removeWrapper
            alt="together"
            className="z-0 object-cover w-32 h-full"
            src="../../logo.png"
          />
        </Link>
      </NavbarBrand>

      <NavbarContent as="div" justify="end" className="w-full">
        <Button
          variant="light"
          isIconOnly
          onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white-800" />
          ) : (
            <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all text-slate-900" />
          )}
        </Button>
        {user?.auth && !isLoginRoute ? (
          <DrawerNavBar />
        ) : (
          <Button
            radius="full"
            size="md"
            className="bg-transparent rounded-lg border-primary text-primary hover:border-primary"
            onPress={() => navigate({ to: routes.login })}
          >
            Acceso
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
}
