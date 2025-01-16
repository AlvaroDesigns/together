import { useUserStore } from "@/stores";
import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";

import { ROUTES } from "@/constants";
import { useRouter } from "@tanstack/react-router";
import DrawerNavBar from "./drawerNavBar";

export default function Header() {
  const { user } = useUserStore((state) => state);
  const router = useRouter();

  return (
    <Navbar
      maxWidth="xl"
      className="dark:border-slate-200 border-b-1 dark:border-default-200/50 order-b"
    >
      <NavbarBrand className="justify-start">
        <Image
          removeWrapper
          alt="together"
          className="z-0 object-cover w-32 h-full"
          src="../../logo.png"
          onClick={() => router.navigate({ to: ROUTES.HOME_B2B })}
        />
      </NavbarBrand>
      <NavbarContent as="div" justify="end" className="w-full">
        {!user?.logger ? (
          <Button
            radius="full"
            size="md"
            className="border-[#009688] bg-transparent text-[#009688] hover:border-[#009688]"
            onPress={() => router.navigate({ to: ROUTES.LOGIN })}
          >
            Acceso
          </Button>
        ) : (
          <DrawerNavBar
            user={{
              name: user?.name || "Nombre",
              email: user?.email || "Email",
              avatar: user?.avatar ?? undefined,
            }}
          />
        )}
      </NavbarContent>
    </Navbar>
  );
}
