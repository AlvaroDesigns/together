import Btn from '@/components/ui/btn';
import { siteConfig } from '@/config/site';
import { ENDPOINT, MAIL } from '@/constants';
import { registerSchema } from '@/helpers/schema';
import { useForm } from '@/hooks';
import { RegisterProps } from '@/intefaces';
import Services from '@/services';

import { Welcome } from '@/templates/welcome';
import { sendEventError } from '@/utils/events';
import { Form } from '@heroui/react';
import { useNavigate } from '@tanstack/react-router';
import { AxiosResponse } from 'axios';
import { useCallback, useTransition } from 'react';
import { InputController } from '../Controller/input';
import { PasswordController } from '../Controller/password';

export function RegisterForm() {
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
      <InputController
        fullWidth
        labelPlacement
        control={control}
        name="name"
        label="Nombre"
        placeholder="Introducce tu nombre"
      />
      <InputController
        fullWidth
        labelPlacement
        control={control}
        name="email"
        label="Correo"
        placeholder="Introduce tu correo electronico"
        type="email"
      />
      <InputController
        fullWidth
        labelPlacement
        control={control}
        name="phone"
        label="Telefono"
        placeholder="Introduce tu telefono"
        type="number"
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
      />
      <PasswordController
        fullWidth
        labelPlacement
        name="password"
        label="Contraseña"
        placeholder="Por favor, introduce tu contraseña"
        control={control}
      />
      <Btn type="submit" isLoading={isPending}>
        Registrarme
      </Btn>
      <Btn
        variant="bordered"
        type="button"
        onPress={() => navigate({ to: routes.login })}
      >
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
