import { useUserStore } from "@/stores";
import {
  ArrowLeftIcon,
  ArrowLeftStartOnRectangleIcon,
  Bars3BottomLeftIcon,
  ChevronRightIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Link,
  Listbox,
  ListboxItem,
} from "@heroui/react";

import { AUHT_NAME, ROUTES } from "@/constants";
import { PROFILE_DATA } from "@/data";
import { removeAuth } from "@/utils";
import { useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { version } from "../../../package.json";
import NavOptions from "./navOptions";

const ICONS = {
  account: <UserIcon className="m-1 size-6" />,
  friends: <ShieldCheckIcon className="m-1 size-6" />,
  secure: <NewspaperIcon className="m-1 size-6" />,
  faqs: <NewspaperIcon className="m-1 size-6" />,
  delete: <ArrowLeftStartOnRectangleIcon className="m-1 size-6" />,
};

export default function DrawerNavBar({
  user,
}: {
  user: { name: string; email: string; avatar?: string };
}) {
  const router = useRouter();
  const [onClose, setOnClose] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [name, setName] = useState<string | null>(null);
  const { reset } = useUserStore((state) => state);

  const handelLogOut = () => {
    reset();
    removeAuth(AUHT_NAME);
    setTimeout(() => router.navigate({ to: ROUTES.HOME_B2C }), 500);
  };

  const handleOpenOptions = (key: string) => {
    setName(key?.toUpperCase());
    setIsDrawerOpen(true);
  };

  const handleCloseOptions = () => {
    setName(null);
    setIsDrawerOpen(false);
  };

  const handleOnDraweOpen = () => {
    setOnClose(true);
  };

  const handleOnDraweClose = () => {
    setOnClose(false);
  };

  return (
    <>
      <Button
        className="min-w-0 p-0 text-default-700"
        endContent={<Bars3BottomLeftIcon className="m-1 size-6" />}
        variant="light"
        onPress={handleOnDraweOpen}
      />
      <Drawer
        hideCloseButton
        backdrop="blur"
        radius="none"
        size="full"
        isOpen={onClose}
        classNames={{
          base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m- 2",
        }}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="absolute inset-x-0 top-0 z-50 flex flex-row items-center justify-between gap-2 px-2 py-2 border-b border-default-200/50 bg-content1/50 backdrop-saturate-150 backdrop-blur-lg min-h-16">
                <Button
                  isIconOnly
                  className="text-default-400"
                  size="sm"
                  variant="light"
                  onPress={handleOnDraweClose}
                >
                  <ArrowLeftIcon className="m-1 size-6" />
                </Button>
              </DrawerHeader>
              <DrawerBody className="pt-16">
                <div className="flex flex-col items-center justify-center w-full pt-4">
                  <Avatar
                    showFallback
                    className="w-32 h-32 text-6xl"
                    name={user.name.charAt(0)}
                    src={user.avatar}
                  />
                  <div className="flex flex-col items-center mt-4 dark:text-gray-300 default whitespace-nowrap">
                    <span className="text-xl font-semibold">
                      ¡Hola, {user.name}!
                    </span>
                    <span className="text-base ">{user.email}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <div className="w-full px-1 py-2 text-medium border-small rounded-small border-default-200 dark:border-default-100">
                    <Listbox
                      aria-label="Listbox menu with descriptions"
                      variant="flat"
                      className="dark:text-gray-300"
                    >
                      <>
                        {PROFILE_DATA.map((item) => (
                          <ListboxItem
                            key={item.key}
                            textValue={item.key}
                            className="flex items-center pb-3"
                            showDivider
                            color={item.color}
                            onPress={() => handleOpenOptions(item.key)}
                            startContent={ICONS[item.key as keyof object]}
                            endContent={
                              <ChevronRightIcon className="m-1 size-6" />
                            }
                          >
                            <span className="my-5 text-medium">
                              {item.title}
                            </span>
                          </ListboxItem>
                        ))}
                        <ListboxItem
                          textValue="delete"
                          key="delete"
                          className="flex items-center pt-3 text-danger"
                          color="danger"
                          onPress={handelLogOut}
                          startContent={
                            <ArrowLeftStartOnRectangleIcon className="m-1 size-6" />
                          }
                          endContent={
                            <ChevronRightIcon className="m-1 size-6" />
                          }
                        >
                          <span className="text-medium">Cerrar Sesión</span>
                        </ListboxItem>
                      </>
                    </Listbox>
                  </div>
                </div>
              </DrawerBody>
              <DrawerFooter className="flex flex-row justify-between gap-1">
                <Link
                  className="text-default-400"
                  href="mailto:hello@together@alvarodesigns.com"
                  size="sm"
                >
                  © 2025 Together Labs Inc.
                </Link>
                <Link
                  className="text-default-400"
                  href="mailto:hello@together@alvarodesigns.com"
                  size="sm"
                >
                  Versión apha-{version}
                </Link>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
      <NavOptions
        user={user}
        isOpen={isDrawerOpen}
        onOpenChange={handleCloseOptions}
        name={name}
      />
    </>
  );
}
