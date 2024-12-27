import { useDataStore } from "@/stores";
import {
  ArrowLeftIcon,
  ArrowLeftStartOnRectangleIcon,
  Bars3BottomLeftIcon,
  ChevronRightIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Chip,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Link,
  Listbox,
  ListboxItem,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { PressEvent } from "@react-types/shared";
import { useNavigate } from "react-router-dom";
import { version } from "../../package.json";

export default function DrawerCustom({
  user,
}: {
  user: { name: string; email: string; avatar?: string };
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { reset } = useDataStore((state) => state);

  const navigate = useNavigate();
  const handelLogOut = () => {
    sessionStorage.removeItem("name");
    reset();

    navigate("/");
  };

  return (
    <>
      <Button
        className="min-w-0 p-0 text-default-700"
        endContent={<Bars3BottomLeftIcon className="m-1 size-6" />}
        variant="light"
        onPress={onOpen}
      />
      <Drawer
        hideCloseButton
        backdrop="blur"
        radius="none"
        size="full"
        classNames={{
          base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m- 2",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose: ((e: PressEvent) => void) | undefined) => (
            <>
              <DrawerHeader className="absolute inset-x-0 top-0 z-50 flex flex-row items-center justify-between gap-2 px-2 py-2 border-b border-default-200/50 bg-content1/50 backdrop-saturate-150 backdrop-blur-lg min-h-16">
                <Tooltip content="Close">
                  <Button
                    isIconOnly
                    className="text-default-400"
                    size="sm"
                    variant="light"
                    onPress={onClose}
                  >
                    <ArrowLeftIcon className="m-1 size-6" />
                  </Button>
                </Tooltip>
              </DrawerHeader>
              <DrawerBody className="pt-16">
                <div className="flex flex-col items-center justify-center w-full pt-4">
                  <Avatar
                    showFallback
                    className="w-32 h-32 text-6xl"
                    name={user.name.charAt(0)}
                    src={user.avatar}
                  />
                  <div className="flex flex-col items-center mt-4 default whitespace-nowrap">
                    <span className="text-xl font-semibold">
                      ¡Hola, {user.name}!
                    </span>
                    <span className="text-base">{user.email}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <div className="w-full px-1 py-2 text-medium border-small rounded-small border-default-200 dark:border-default-100">
                    <Listbox
                      aria-label="Listbox menu with descriptions"
                      variant="flat"
                    >
                      <ListboxItem
                        key="account"
                        className="flex items-center pb-3 "
                        showDivider
                        startContent={<UserIcon className="m-1 size-6" />}
                        endContent={<ChevronRightIcon className="m-1 size-6" />}
                      >
                        <span className="my-5 text-medium">Mi cuenta</span>
                        <Chip isDisabled color="default" className="ml-2">
                          Next Feb
                        </Chip>
                      </ListboxItem>
                      <ListboxItem
                        key="friends"
                        className="flex items-center py-3"
                        showDivider
                        onPress={ShareButton}
                        startContent={<UserGroupIcon className="m-1 size-6" />}
                        endContent={<ChevronRightIcon className="m-1 size-6" />}
                      >
                        <span className="text-medium">Invitar amigos</span>
                        <Chip isDisabled color="default" className="ml-2">
                          Next Feb
                        </Chip>
                      </ListboxItem>
                      <ListboxItem
                        key="secure"
                        className="flex items-center py-3"
                        showDivider
                        startContent={
                          <ShieldCheckIcon className="m-1 size-6" />
                        }
                        endContent={<ChevronRightIcon className="m-1 size-6" />}
                      >
                        <span className="text-medium">Seguridad</span>
                        <Chip isDisabled color="default" className="ml-2">
                          Next Feb
                        </Chip>
                      </ListboxItem>
                      <ListboxItem
                        key="news"
                        className="flex items-center py-3"
                        showDivider
                        startContent={<NewspaperIcon className="m-1 size-6" />}
                        endContent={<ChevronRightIcon className="m-1 size-6" />}
                      >
                        <span className="text-medium">Noticias</span>
                        <Chip isDisabled color="default" className="ml-2">
                          Next Feb
                        </Chip>
                      </ListboxItem>
                      <ListboxItem
                        key="delete"
                        className="flex items-center pt-3 text-danger"
                        color="danger"
                        onPress={handelLogOut}
                        startContent={
                          <ArrowLeftStartOnRectangleIcon className="m-1 size-6" />
                        }
                        endContent={<ChevronRightIcon className="m-1 size-6" />}
                      >
                        <span className="text-medium">Cerrar Sesión</span>
                      </ListboxItem>
                    </Listbox>
                  </div>
                </div>
              </DrawerBody>
              <DrawerFooter className="flex flex-row justify-between gap-1">
                <Link
                  className="text-default-400"
                  href="mailto:hello@nextui.org"
                  size="sm"
                >
                  © 2025 Together Labs Inc.
                </Link>
                <Link
                  className="text-default-400"
                  href="mailto:hello@nextui.org"
                  size="sm"
                >
                  Versión apha-{version}
                </Link>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

const ShareButton = () => {
  const shareUrl = "http://together.alvarodesigns.com";
  const shareText = "¡Mira este enlace interesante!";
  console.log("ShareButton");
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Compartir URL",
          text: shareText,
          url: shareUrl,
        });
        console.log("Contenido compartido exitosamente");
      } catch (error) {
        console.error("Error al compartir:", error);
      }
    } else {
      alert("La función de compartir no está soportada en este dispositivo.");
    }
  };

  return <button onClick={handleShare}>Compartir</button>;
};
