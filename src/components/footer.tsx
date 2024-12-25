import { Label } from "@/components";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { Divider, Image } from "@nextui-org/react";
import { useTheme } from "@nextui-org/use-theme";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="flex flex-col items-start w-full gap-2 px-4 pt-5 pb-4 border-t justify-left">
      <Label>Legal</Label>
      {siteConfig.footerItems.map((item) => (
        <Link
          key={item.label}
          className="text-xs text-default-600"
          href={item.href}
          title={item.label}
        >
          {item.label}
        </Link>
      ))}
      <Divider className="my-3" />
      <Image
        removeWrapper
        alt="together"
        className="z-0 object-cover w-32 h-full"
        src={`${
          theme === "dark" ? "/logo_footer_white.png" : "/logo_footer_black.png"
        }`}
      />
      <span className="text-xs text-default-600">
        © 2025 Together Labs Inc.
      </span>
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
        title="nextui.org homepage"
      />
    </footer>
  );
}
