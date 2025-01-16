import { Button, Footer, Password } from "@/components";
import { GoogleLogo } from "@/components/icons";
import { subtitle } from "@/components/primitives";
import { ENDPOINT, ROUTES } from "@/constants";
import { login } from "@/helpers/schema";
import { useForm, useLoading } from "@/hooks";
import { auth, provider } from "@/lib/firebaseConfig";
import Services from "@/services";
import { useDataStore } from "@/stores";
import { RegisterTypes } from "@/types";
import { Button as ButtonUI, Image, Input, Link } from "@nextui-org/react";
import { useRouter } from "@tanstack/react-router";
import { AxiosResponse } from "axios";
import { signInWithPopup } from "firebase/auth";
import { useCallback } from "react";
import { Controller } from "react-hook-form";

export default function Login() {
  const router = useRouter();

  const { isLoading, startLoading, stopLoading } = useLoading();
  const setter = useDataStore((state) => state.setter);

  const { control, errors, handleSubmit } = useForm({
    values: { email: "", password: "", remember: true },
    schema: login,
  });

  const onSubmit = useCallback(
    async (value: RegisterTypes) => {
      const error = Object.entries(errors).length !== 0;

      /* Exit */
      if (error) return;

      /* Start Loading */
      startLoading();

      /* Call API */
      Services()
        .post(ENDPOINT.REGISTER, {
          name: value?.name,
          email: value?.email,
          password: value?.password,
          phone: value?.phone,
        })
        .then((res: AxiosResponse) => {
          const { data } = res || {};

          /* Set */
          if (data.createdAt) {
            router.navigate({ to: ROUTES.HOME_B2C });
          }
        })
        .finally(() => stopLoading());
    },
    [errors, isLoading]
  );

  const signInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      if (result.user.email) {
        setter({
          user: {
            name: result.user.displayName,
            email: result.user.email,
            avatar: result.user.photoURL,
          },
        });
        router.navigate({ to: ROUTES.HOME_B2C });
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen text-foreground bg-background">
      <div className="flex items-center justify-center w-full px-4 py-10">
        <div className="w-full max-w-[400px]">
          <div className="flex flex-col justify-center w-full mb-4">
            <Image
              removeWrapper
              alt="together"
              height={40}
              className="z-0 object-contain mb-2"
              src="../../logo.png"
              onClick={() => router.navigate({ to: ROUTES.HOME_B2C })}
            />
            <p className={subtitle()}>Crea tu cuenta</p>
          </div>
          <div className="flex items-center my-4 rounded-2xl">
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
                  placeholder="Introducce tu nombre"
                />
              )}
            />
          </div>
          <div className="flex items-center mb-4">
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
                  placeholder="Introducce tu correo electronico"
                />
              )}
            />
          </div>

          <div className="flex items-center mb-4">
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
                    inputWrapper: "!min-h-[60px] h-10",
                  }}
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  value={field.value}
                  label="Telefono"
                  variant="bordered"
                  placeholder="Introduce tu telefono"
                  type="number"
                />
              )}
            />
          </div>
          <div className="flex items-center mb-4">
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Password
                  {...field}
                  placeholder="Por favor, introduce tu contraseña"
                  label="Contraseña"
                  message={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-3 my-4 mt-6 ">
            <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
              Registrarme
            </Button>
          </div>
          <p className={subtitle()}>OR</p>
          <ButtonUI
            radius="full"
            color="primary"
            className="w-full my-3 h-14 min-h-[60px] text-white "
            onPress={signInGoogle}
          >
            <GoogleLogo />
            Continue with Google
          </ButtonUI>
          <Link
            size="md"
            color="foreground"
            className="mt-4 text-gray-600 text-medium dark:text-gray-400"
            onPress={() => router.navigate({ to: ROUTES.LOGIN })}
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
