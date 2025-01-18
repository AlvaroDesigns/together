export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Acme",
  description: "Make beautiful websites regardless of your design experience.",
  footerItems: [
    {
      label: "Terminos y condiciones",
      href: "/",
      active: true,
    },
    {
      label: "Privacidad",
      href: "/",
      active: true,
    },
    {
      label: "Politica de Cookies",
      href: "/register",
      active: true,
    },
  ],
  navMenuItems: [
    {
      label: "Mis Preferencias",
      tag: "foreground",
    },
    {
      label: "Apariencia",
      href: "/preferences",
      tag: "foreground",
    },
    {
      label: "Comunicaciones",
      href: "/preferences",
      tag: "foreground",
    },
    {
      divider: true,
    },
    {
      label: "Interacción",
      tag: "foreground",
    },
    {
      label: "Me gustan",
      href: "/profile",
      tag: "foreground",
    },
    {
      label: "Mis Publicaciones",
      href: "/dashboard",
      tag: "foreground",
    },
    {
      divider: true,
    },
    {
      label: "Información",
      tag: "foreground",
    },
    {
      label: "Pólitica de privacidad",
      href: "/profile",
      tag: "foreground",
    },
    {
      label: "Condiciones de uso",
      href: "/dashboard",
      tag: "foreground",
    },
    {
      divider: true,
    },
    {
      label: "Cerrar sesión",
      tag: "danger",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
