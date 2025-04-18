export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Acme',
  description: 'Make beautiful websites regardless of your design experience.',
  routes: {
    home: '/',
    home_b2b: '/home',
    login: '/login',
    register: '/register',
    availability_public: '/availability_public',
    about: '/about',
    contact: '/contact',
    pricing: '/pricing',
    dashboard: '/dashboard',
    profile: '/profile',
    preferences: '/preferences',
  },
  footerItems: [
    {
      label: 'Terminos y condiciones',
      href: '/',
    },
    {
      label: 'Privacidad',
      href: '/',
    },
    {
      label: 'Politica de Cookies',
      href: '/cookies',
    },
  ],
  navMenuItems: [
    {
      label: 'Mis Preferencias',
      tag: 'foreground',
    },
    {
      label: 'Apariencia',
      href: '/preferences',
      tag: 'foreground',
    },
    {
      label: 'Comunicaciones',
      href: '/preferences',
      tag: 'foreground',
    },
    {
      divider: true,
    },
    {
      label: 'Interacción',
      tag: 'foreground',
    },
    {
      label: 'Me gustan',
      href: '/profile',
      tag: 'foreground',
    },
    {
      label: 'Mis Publicaciones',
      href: '/dashboard',
      tag: 'foreground',
    },
    {
      divider: true,
    },
    {
      label: 'Información',
      tag: 'foreground',
    },
    {
      label: 'Pólitica de privacidad',
      href: '/profile',
      tag: 'foreground',
    },
    {
      label: 'Condiciones de uso',
      href: '/dashboard',
      tag: 'foreground',
    },
    {
      divider: true,
    },
    {
      label: 'Cerrar sesión',
      tag: 'danger',
      href: '/',
    },
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
