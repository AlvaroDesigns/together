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
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Image,
  Input,
  Link,
  Listbox,
  ListboxItem,
  Switch,
  Tooltip,
} from "@heroui/react";

import { Button as ButtonT, DrawerCustom, Password } from "@/components";
import { AUHT_NAME, ROUTES } from "@/constants";
import { PROFILE_DATA } from "@/data";
import { profileSchmea } from "@/helpers/schema";
import { useForm } from "@/hooks";
import { LITERALS, SUBMIT } from "@/literals/common";
import { VARIANT_TYPE_PROFILE } from "@/types";
import { removeAuth } from "@/utils";
import { useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { version } from "../../package.json";
import ShareButton from "./atomos/share";
import { subtitle } from "./primitives";

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

  const { control } = useForm({
    values: user,
    schema: profileSchmea(name as string),
  });

  const handelLogOut = () => {
    reset();
    removeAuth(AUHT_NAME);

    setTimeout(() => router.navigate({ to: ROUTES.HOME_B2C }), 1000);
  };

  const handleOnDraweOpen = () => {
    setOnClose(true);
  };

  const handleOnDraweClose = () => {
    setOnClose(false);
  };

  const handleInviteFriendsClick = (key: string) => {
    setName(key?.toUpperCase());
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setName(null);
    setIsDrawerOpen(false);
  };

  const handleSubmit = () => {
    if ((name as keyof object) === "FRIENDS") {
      ShareButton({
        url: "http://together.alvarodesigns.com",
        title: "¡Mira este enlace interesante!",
      });
    }

    console.log("Guardando cambios");
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
        classNames={{
          base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m- 2",
        }}
        isOpen={onClose}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="absolute inset-x-0 top-0 z-50 flex flex-row items-center justify-between gap-2 px-2 py-2 border-b border-default-200/50 bg-content1/50 backdrop-saturate-150 backdrop-blur-lg min-h-16">
                <Tooltip content="Close">
                  <Button
                    isIconOnly
                    className="text-default-400"
                    size="sm"
                    variant="light"
                    onPress={handleOnDraweClose}
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
                            onPress={() => handleInviteFriendsClick(item.key)}
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
      <DrawerCustom
        size="full"
        header={LITERALS[name as keyof object]}
        body={
          <div className="flex flex-col items-center justify-center dark:text-gray-300">
            {name === VARIANT_TYPE_PROFILE.FRIENDS && (
              <>
                <Image
                  alt="invitar amigos"
                  fallbackSrc="https://via.placeholder.com/300x200"
                  className="w-full aspect-square"
                  height="auto"
                  width="100%"
                  src="../../share.png"
                />
                <p className="px-6 mt-6">
                  Comparte este enlace con tus amigos y familiares para que
                  puedan disfrutar de la experiencia de viajar juntos.
                </p>
              </>
            )}
            {name === VARIANT_TYPE_PROFILE.ACCOUNT && (
              <div className="flex flex-col w-full gap-4 px-4 py-2">
                <div className="flex flex-row whitespace-nowrap">
                  <p className={subtitle()}>Información personal</p>
                </div>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      isRequired
                      variant="bordered"
                      type="text"
                      label="Nombre"
                      classNames={{
                        inputWrapper: "!min-h-[60px] h-10",
                      }}
                      fullWidth={true}
                      isInvalid={Boolean(fieldState.error?.message)}
                      color={fieldState.error?.message ? "danger" : "default"}
                      errorMessage={fieldState.error?.message}
                      value={field.value}
                      placeholder="Ej. Pedro"
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      isRequired
                      variant="bordered"
                      type="email"
                      label="Correo"
                      classNames={{
                        inputWrapper: "!min-h-[60px] h-10",
                      }}
                      fullWidth={true}
                      isInvalid={Boolean(fieldState.error?.message)}
                      color={fieldState.error?.message ? "danger" : "default"}
                      errorMessage={fieldState.error?.message}
                      value={field.value}
                      placeholder="Introduce tu correo electronico"
                    />
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      isRequired
                      variant="bordered"
                      type="number"
                      label="Correo"
                      classNames={{
                        inputWrapper: "!min-h-[60px] h-10",
                      }}
                      fullWidth={true}
                      startContent="+34"
                      isInvalid={Boolean(fieldState.error?.message)}
                      color={fieldState.error?.message ? "danger" : "default"}
                      errorMessage={fieldState.error?.message}
                      value={field.value}
                      placeholder="666 666 666"
                    />
                  )}
                />
                <div className="flex flex-row whitespace-nowrap">
                  <p className={subtitle()}>Idioma</p>
                </div>
                <div className="flex flex-row gap-4">
                  <p className={subtitle({ fullWidth: false })}>ES</p>
                  <Switch
                    defaultSelected
                    isDisabled
                    isSelected={false}
                    aria-label="Idioma"
                  />
                  <p className={subtitle({ fullWidth: false })}>EN</p>
                </div>
                <div className="flex flex-row justify-center mt-2 whitespace-nowrap">
                  <Link
                    isExternal
                    className="text-default-600 hover:text-default-600"
                    color="foreground"
                    href="https://github.com/nextui-org/nextui"
                  >
                    Eliminar mi cuenta
                  </Link>
                </div>
              </div>
            )}
            {name === VARIANT_TYPE_PROFILE.SECURE && (
              <div className="flex flex-col items-center justify-center w-full gap-4 px-4 py-2 dark:text-gray-300">
                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Password
                      placeholder=""
                      field={field}
                      message={fieldState.error?.message}
                      value={field.value}
                      label="Nueva contraseña"
                    />
                  )}
                />
                <Controller
                  name="newPassword"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Password
                      field={field}
                      placeholder=""
                      message={fieldState.error?.message}
                      value={field.value}
                      label="Repetir nueva contraseña"
                    />
                  )}
                />
              </div>
            )}
            {name === VARIANT_TYPE_PROFILE.FAQS && (
              <Accordion selectionMode="multiple">
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Quienes somos"
                >
                  Pendiente de texto
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Como funciona"
                >
                  Pendiente de texto
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Dudas frecuentes"
                >
                  Pendiente de texto
                </AccordionItem>
              </Accordion>
            )}
          </div>
        }
        isOpen={isDrawerOpen}
        onOpenChange={handleCloseDrawer}
        footer={
          name !== VARIANT_TYPE_PROFILE.FAQS && (
            <ButtonT variant="light" onPress={handleSubmit}>
              {SUBMIT[name as keyof object]}
            </ButtonT>
          )
        }
      />
    </>
  );
}
