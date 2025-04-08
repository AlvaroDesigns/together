import { Footer, Header } from '@/components';
import { useLocation } from '@tanstack/react-router';
import BannerCookies from './bannerCookies';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { pathname } = useLocation();
  const isLoginRoute = pathname.includes('/login') || pathname.includes('/register');

  return (
    <div className="relative flex flex-col h-screen">
      {!isLoginRoute && <Header />}
      <div className="container flex-grow mx-auto bg-white max-w-7xl dark:bg-black">
        {children}
      </div>
      {!isLoginRoute && <Footer />}
      <BannerCookies />
    </div>
  );
}
