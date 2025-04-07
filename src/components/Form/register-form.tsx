import { siteConfig } from '@/config/site';
import { ENDPOINT, MAIL } from '@/constants';
import { registerSchema } from '@/helpers/schema';
import { useForm } from '@/hooks';
import { RegisterProps } from '@/intefaces';
import Services from '@/services';

import { Welcome } from '@/templates/welcome';
import { sendEventError } from '@/utils/events';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Form, Input } from '@heroui/react';
import { useNavigate } from '@tanstack/react-router';
import { AxiosResponse } from 'axios';
import { useCallback, useState, useTransition } from 'react';
import { Controller } from 'react-hook-form';
import Btn from '../ui/btn';

export function RegisterForm() {
  const [hide, setHide] = useState(true);
  const [isPending, startTransition] = useTransition();

  const navigate = useNavigate();
  const { routes } = siteConfig;

  const { control, handleSubmit } = useForm({
    values: undefined,
    schema: registerSchema,
  });

  const onSubmit = useCallback(async (value: RegisterProps) => {
    startTransition(async () => {
      await Services({
        method: 'POST',
        url: ENDPOINT.REGISTER,
        payload: {
          name: value?.name,
          email: value?.email,
          phone: value?.phone,
          password: value?.password,
        },
      })
        .then((res: AxiosResponse) => {
          const { status } = res || {};

          if (status !== 201) return;

          Services({
            method: 'POST',
            url: ENDPOINT.EMAIL,
            payload: {
              from: MAIL,
              to: value?.email,
              subject: 'Bienvenido a Together Labs',
              html: Welcome({ name: value?.name }),
            },
          }).then((res) => {
            const { status } = res || {};
            if (status !== 201) return;

            navigate({ to: routes.login, replace: true });
          });
        })
        .catch(() => sendEventError());
    });
  }, []);

  return (
    <Form className="gap-4" onSubmit={handleSubmit(onSubmit)}>
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
              inputWrapper: '!min-h-[60px] h-10 rounded-lg',
            }}
            fullWidth={true}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? 'danger' : 'default'}
            errorMessage={fieldState.error?.message}
            value={field.value}
            placeholder="Introducce tu nombre"
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
              inputWrapper: '!min-h-[60px] h-10 rounded-lg',
            }}
            fullWidth={true}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? 'danger' : 'default'}
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
            startContent={
              <div className="flex items-center">
                <select
                  className="bg-transparent border-0 outline-none text-default-400 text-small"
                  id="currency"
                  name="currency"
                >
                  <option>+34</option>
                  <option>+35</option>
                  <option>+36</option>
                </select>
              </div>
            }
            classNames={{
              inputWrapper: '!min-h-[60px] h-10 rounded-lg',
            }}
            fullWidth={true}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? 'danger' : 'default'}
            errorMessage={fieldState.error?.message}
            value={field.value}
            label="Telefono"
            variant="bordered"
            placeholder="Introduce tu telefono"
            type="number"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            isRequired
            variant="bordered"
            classNames={{
              inputWrapper: '!min-h-[60px]',
            }}
            type={hide ? 'password' : 'text'}
            label="Contraseña"
            fullWidth={true}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? 'danger' : 'default'}
            errorMessage={fieldState.error?.message}
            endContent={
              <div onClick={() => setHide(!hide)}>
                {hide ? (
                  <EyeIcon className="m-1 size-6" />
                ) : (
                  <EyeSlashIcon className="m-1 size-6" />
                )}
              </div>
            }
            value={field.value}
            placeholder="Por favor, introduce tu contraseña"
          />
        )}
      />
      <Btn type="submit" isLoading={isPending}>
        Registrarme
      </Btn>
      <Btn variant="bordered" onPress={() => navigate({ to: routes.login })}>
        Iniciar sesión
      </Btn>
    </Form>
  );
}

/*

TODO: Google 

          <div className="flex items-center gap-4 px-2">
            <Divider className="flex-1" />
            <p className="shrink-0 text-medium text-default-500">OR</p>
            <Divider className="flex-1" />
          </div>
          <ButtonUI
            radius="full"
            color="primary"
            className="w-full text-medium my-2 h-14 min-h-[60px] bg-[#0072f5] text-white "
            onPress={signInGoogle}
          >
            <GoogleLogo />
            Continue with Google
          </ButtonUI>



            const signInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      if (result.user.email) {
        setter({
          user: {
            name: result.user.displayName,
            email: result.user.email,
            avatar: result.user.photoURL,
            remember: true,
            auth: false,
            role: ROLES.USER,
          },
        });
        navigate({ to: ROUTES.HOME_B2B });
      }
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };


*/
