import Btn from '@/components/ui/btn';
import { siteConfig } from '@/config/site';
import { AUHT_NAME, ENDPOINT } from '@/constants';
import { loginSchema } from '@/helpers/schema';
import { useForm } from '@/hooks';
import { LoginProps } from '@/intefaces';
import Services from '@/services';
import { useProviderStore } from '@/stores/Global/store';
import { ROLES } from '@/types';

import { setAuth } from '@/utils';
import { sendEventError } from '@/utils/events';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Checkbox, Form, Input, Link } from '@heroui/react';
import { useNavigate } from '@tanstack/react-router';
import { AxiosResponse } from 'axios';
import { useCallback, useState, useTransition } from 'react';
import { Controller } from 'react-hook-form';

export function LoginForm() {
  const { setterUser, user } = useProviderStore();
  const [hide, setHide] = useState(true);
  const [isPending, startTransition] = useTransition();

  const navigate = useNavigate();
  const { routes } = siteConfig;

  const { control, handleSubmit } = useForm({
    values: user,
    schema: loginSchema,
  });

  const onSubmit = useCallback(async (value: LoginProps) => {
    startTransition(async () => {
      await Services({
        method: 'POST',
        url: ENDPOINT.AUTH,
        payload: {
          email: value.email,
          password: value.password,
        },
      })
        .then((res: AxiosResponse) => {
          const { data, status } = res || {};

          if (status !== 201) return;

          /* Set */
          setterUser({
            auth: Boolean(data?.access_token),
            email: value.email,
            role: data?.role ?? ROLES.USER,
            remember: value.remember,
          });

          setAuth(AUHT_NAME, data?.access_token);
          navigate({ to: routes.home_b2b });
        })
        .catch(() => sendEventError());
    });
  }, []);

  return (
    <Form className="gap-4" onSubmit={handleSubmit(onSubmit)}>
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
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            isRequired
            variant="bordered"
            classNames={{
              inputWrapper: '!min-h-[60px] rounded-lg',
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
      <div className="flex flex-row items-center justify-between w-full my-2">
        <Controller
          name="remember"
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              size="md"
              color="default"
              className="text-gray-600"
              isSelected={field.value === undefined ? false : field.value}
              defaultSelected
            >
              Remember me
            </Checkbox>
          )}
        />
        <Link
          size="md"
          color="foreground"
          className="text-gray-600 dark:text-gray-500"
          href="#"
        >
          Forgot password
        </Link>
      </div>
      <Btn type="submit" isLoading={isPending}>
        Iniciar sesión
      </Btn>
      <Btn variant="bordered" onPress={() => navigate({ to: routes.register })}>
        Registrarme
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
