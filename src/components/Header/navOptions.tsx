import { DrawerCustom } from '@/components';
import { resolverForm } from '@/components/Controller/resolver';
import { subtitle } from '@/components/primitives';
import Btn from '@/components/ui/btn';
import ShareButton from '@/components/ui/share';
import { ENDPOINT, MAIL } from '@/constants';
import { profileSchema } from '@/helpers/schema';
import { useForm } from '@/hooks';
import { SUBMIT } from '@/literals/common';

import Services from '@/services';
import { useProviderStore } from '@/stores/Global/store';
import { Account } from '@/templates/account';
import { VARIANT_TYPE_PROFILE } from '@/types';
import { sendEventError, sendEventSuccess } from '@/utils/events';
import { Accordion, AccordionItem, Image, Link, Switch } from '@heroui/react';
import { useTranslation } from 'react-i18next';

interface NavOptionsProps {
  user: any;
  isOpen: boolean;
  name: string | null;
  onOpenChange: (isOpen: boolean) => void;
}

export default function NavOptions({ isOpen, name, onOpenChange }: NavOptionsProps) {
  const { user } = useProviderStore((state) => state);
  const { t } = useTranslation();
  const { userId, name: userName, email } = user;

  const { control, handleSubmit } = useForm({
    values: user,
    schema: profileSchema(name as string),
  });

  const onSubmit = (value: any) => {
    if ((name as keyof object) === VARIANT_TYPE_PROFILE.FRIENDS) {
      ShareButton({
        url: 'http://together.alvarodesigns.com',
        title: '¡Mira este enlace interesante!',
      });
      return;
    }

    /* Call API */
    const URL = ENDPOINT[name as keyof object].replace('#id#', String(userId));

    Services({
      method: 'PATCH',
      url: URL,
      payload: value,
    })
      .then(() => {
        Services({
          method: 'POST',
          url: ENDPOINT.EMAIL,
          payload: {
            from: MAIL,
            to: email,
            subject: 'Cambio de datos importantes en tu cuenta Together Labs',
            html: Account({ name: userName as string }),
          },
        });

        sendEventSuccess();
      })
      .catch(() => sendEventError());
  };

  const handleRemove = () => {
    Services({
      method: 'DELETE',
      url: `${ENDPOINT.USER}/${userId}`,
    })
      .then(({ status }) => {
        if (status !== 200) {
          return sendEventError();
        }

        sendEventSuccess();
      })
      .catch(() => sendEventError());
  };

  const DATA = {
    ACCOUNT: [
      {
        key: 'Input',
        name: 'name',
        control,
        placeholder: 'Ej. Pedro',
        label: 'Nombre',
      },

      {
        key: 'Input',
        name: 'email',
        control,
        placeholder: 'Introduce tu correo electronico',
        label: 'Correo',
      },
      {
        key: 'Input',
        name: 'phone',
        control,
        placeholder: '616616616',
        label: 'Teléfono',
      },
      {
        key: 'Divider',
      },
    ],
    SECURE: [
      {
        key: 'Password',
        name: 'password',
        label: 'Nueva contraseña',
        placeholder: '*******',
        control,
      },

      {
        key: 'Password',
        name: 'newPassword',
        label: 'Repetir nueva contraseña',
        placeholder: '*******',
        control,
      },
    ],
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
                Comparte este enlace con tus amigos y familiares para que puedan disfrutar
                de la experiencia de viajar juntos.
              </p>
            </>
          )}
          {name === VARIANT_TYPE_PROFILE.ACCOUNT && (
            <div className="flex flex-col w-full gap-4 py-2">
              <div className="flex flex-row px-4 whitespace-nowrap">
                <p className={subtitle()}>Información personal</p>
              </div>
              {DATA.ACCOUNT.map((item) => resolverForm(item))}
              <div className="px-4">
                <div className="flex flex-row mb-4 whitespace-nowrap">
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
                <div className="flex flex-row justify-center mt-6 whitespace-nowrap">
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
            </div>
          )}
          {name === VARIANT_TYPE_PROFILE.SECURE && (
            <div className="flex flex-col items-center justify-center w-full gap-4 px-4 py-2 dark:text-gray-300">
              {DATA.SECURE.map((item) => resolverForm(item))}
            </div>
          )}
          {name === VARIANT_TYPE_PROFILE.FAQS && (
            <Accordion selectionMode="multiple">
              <AccordionItem key="1" aria-label="Accordion-1" title="Itinerario de viaje">
                <div className="px-5">
                  <h4>
                    En la web, está disponible una la opción de invertir la lista de
                    opciones. De esta manera puede ver rapidamente la parte final del
                    viaje.
                  </h4>
                  <ul className="flex flex-col gap-2 my-3">
                    <li>1. Accede al itinerario de viaje.</li>
                    <li>
                      2. Haga clic en el botón “Vista invertida” que debería aparecer en
                      la esquina superior derecha.
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
                    Puede reenviar todos los correos electrónicos de reserva a una
                    dirección de correo electrónico única. Se agregarán de inmediato los
                    detalles de su vuelo, hotel o vehículo de alquiler a su plan de viaje.
                  </h4>
                </div>
              </AccordionItem>
              <AccordionItem key="3" aria-label="Accordion-3" title="Añadir un gasto">
                <div className="px-5">
                  <h4>
                    Puedes registrar los gastos de una factura de un lugar de tu plan de
                    viaje, de una actividad o de una reserva para llevar un registro de
                    tus gastos. Consulta el total de todos tus gastos de viaje y si has
                    utilizado todo tu presupuesto.
                  </h4>
                </div>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      }
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      footer={
        name !== VARIANT_TYPE_PROFILE.FAQS && (
          <Btn onPress={handleSubmit(onSubmit)}>{SUBMIT[name as keyof object]}</Btn>
        )
      }
    />
  );
}
