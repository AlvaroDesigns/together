import { useDataStore } from "@/stores";
import { Image, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

import DrawerCustom from "./drawer";

export default function Header() {
  const { home, user } = useDataStore((state) => state);

  return (
    <Navbar className="border-slate-200 border-b-1 order-b">
      <NavbarBrand className="justify-start">
        <Image
          removeWrapper
          alt="together"
          className="z-0 object-cover w-32 h-full"
          src="../../logo.png"
        />
      </NavbarBrand>
      <NavbarContent as="div" justify="end" className="w-full">
        <DrawerCustom
          user={{
            name: home?.name || "Nombre",
            email: user?.email || "Email",
          }}
        />
      </NavbarContent>
    </Navbar>
  );
}
