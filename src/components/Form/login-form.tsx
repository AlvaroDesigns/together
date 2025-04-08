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
import { Checkbox, Form } from '@heroui/react';
import { Link, useNavigate } from '@tanstack/react-router';
import { AxiosResponse } from 'axios';
import { useCallback, useTransition } from 'react';
import { Controller } from 'react-hook-form';
import { InputController } from '../Controller/input';
import { PasswordController } from '../Controller/password';

export function LoginForm() {
  const { setterUser, user } = useProviderStore();
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
      <InputController
        fullWidth
        labelPlacement
        control={control}
        name="email"
        label="Correo"
        placeholder="Introduce tu correo electronico"
        type="email"
      />
      <PasswordController
        fullWidth
        labelPlacement
        name="password"
        label="Contraseña"
        placeholder="Por favor, introduce tu contraseña"
        control={control}
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
        <Link className="font-normal " to="#">
          <p>Forgot password</p>
        </Link>
      </div>
      <Btn type="submit" isLoading={isPending}>
        Iniciar sesión
      </Btn>
      <Btn
        variant="bordered"
        type="button"
        onPress={() => navigate({ to: routes.register })}
      >
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
