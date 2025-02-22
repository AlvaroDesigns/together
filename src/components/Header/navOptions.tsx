import {
  Accordion,
  AccordionItem,
  Image,
  Input,
  Link,
  Switch,
} from "@heroui/react";

import { Button as ButtonT, DrawerCustom, Password } from "@/components";
import { ENDPOINT, MAIL, TIMEOUT_MEDIUM } from "@/constants";
import { profileSchema } from "@/helpers/schema";
import { useForm } from "@/hooks";
import { LITERALS, SUBMIT } from "@/literals/common";
import Services from "@/services";
import { useUserStore } from "@/stores";
import { Account } from "@/templates/account";
import { VARIANT_TYPE_PROFILE } from "@/types";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast, Toaster } from "sonner";
import ShareButton from "../atomos/share";
import { subtitle } from "../primitives";

interface NavOptionsProps {
  user: any;
  isOpen: boolean;
  name: string | null;
  onOpenChange: (isOpen: boolean) => void;
}

export default function NavOptions({
  isOpen,
  name,
  onOpenChange,
}: NavOptionsProps) {
  const { user } = useUserStore((state) => state);
  const { t } = useTranslation();
  const { userId, name: userName, email } = user;

  const { control, handleSubmit } = useForm({
    values: user,
    schema: profileSchema(name as string),
  });

  const onSubmit = (value: any) => {
    if ((name as keyof object) === VARIANT_TYPE_PROFILE.FRIENDS) {
      ShareButton({
        url: "http://together.alvarodesigns.com",
        title: "¡Mira este enlace interesante!",
      });
    }

    /* Call API */
    const URL = ENDPOINT[name as keyof object].replace("#id#", String(userId));

    Services()
      .patch(URL, value)
      .then(() => {
        toast.success(LITERALS.REQUEST_OK, { duration: TIMEOUT_MEDIUM });

        Services().post(ENDPOINT.EMAIL, {
          from: MAIL,
          to: email,
          subject: "Cambio de datos importantes en tu cuenta Together Labs",
          html: Account({ name: userName as string }),
        });
      })
      .catch(() =>
        toast.error(LITERALS.REQUEST_KO, { duration: TIMEOUT_MEDIUM })
      );
  };

  const handleRemove = () => {
    Services()
      .delete(`${ENDPOINT.USER}/${userId}`)
      .then(({ status }) => {
        if (status !== 200) {
          return toast.error(LITERALS.REQUEST_KO, { duration: TIMEOUT_MEDIUM });
        }

        toast.success(LITERALS.REQUEST_OK, { duration: TIMEOUT_MEDIUM });
      })
      .catch(() =>
        toast.error(LITERALS.REQUEST_KO, { duration: TIMEOUT_MEDIUM })
      );
  };

  return (
    <DrawerCustom
      size="full"
      header={t(name as string)}
      body={
        <div className="flex flex-col items-center justify-center dark:text-gray-300">
          {name === VARIANT_TYPE_PROFILE.FRIENDS && (
            <>
              <Image
                alt="invitar amigos"
                fallbackSrc="https://via.placeholder.com/300x200"
                className="w-full aspect-square"
                height="auto"
                width="80%"
                src="../../share.png"
              />
              <p className="px-6 mt-6">
                Comparte este enlace con tus amigos y familiares para que puedan
                disfrutar de la experiencia de viajar juntos.
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
                    label="Teléfono"
                    classNames={{
                      inputWrapper: "!min-h-[60px] h-10",
                    }}
                    fullWidth={true}
                    startContent="+34"
                    isInvalid={Boolean(fieldState.error?.message)}
                    color={fieldState.error?.message ? "danger" : "default"}
                    errorMessage={fieldState.error?.message}
                    value={field.value}
                    placeholder="616616616"
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
                  onPress={handleRemove}
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
                aria-label="Accordion-1"
                title="Itinerario de viaje"
              >
                <div className="px-5">
                  <h4>
                    En la web, está disponible una la opción de invertir la
                    lista de opciones. De esta manera puede ver rapidamente la
                    parte final del viaje.
                  </h4>
                  <ul className="flex flex-col gap-2 my-3">
                    <li>1. Accede al itinerario de viaje.</li>
                    <li>
                      2. Haga clic en el botón “Vista invertida” que debería
                      aparecer en la esquina superior derecha.
                    </li>
                  </ul>
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion-2"
                title="Agregue detalles de vuelo, hotel y auto de alquiler"
              >
                <div className="px-5">
                  <h4>
                    Puede reenviar todos los correos electrónicos de reserva a
                    una dirección de correo electrónico única. Se agregarán de
                    inmediato los detalles de su vuelo, hotel o vehículo de
                    alquiler a su plan de viaje.
                  </h4>
                </div>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion-3"
                title="Añadir un gasto"
              >
                <div className="px-5">
                  <h4>
                    Puedes registrar los gastos de una factura de un lugar de tu
                    plan de viaje, de una actividad o de una reserva para llevar
                    un registro de tus gastos. Consulta el total de todos tus
                    gastos de viaje y si has utilizado todo tu presupuesto.
                  </h4>
                </div>
              </AccordionItem>
            </Accordion>
          )}
          <Toaster
            richColors
            toastOptions={{
              className: "my-toast",
            }}
            mobileOffset={{ bottom: "16px" }}
            position="bottom-center"
          />
        </div>
      }
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      footer={
        name !== VARIANT_TYPE_PROFILE.FAQS && (
          <ButtonT variant="light" onPress={handleSubmit(onSubmit)}>
            {SUBMIT[name as keyof object]}
          </ButtonT>
        )
      }
    />
  );
}
