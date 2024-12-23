import { GoogleLogo } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { AUHT_NAME, ENDPOINT, ROUTES } from "@/constants";
import { login } from "@/helpers/schema";
import { useForm, useLoading } from "@/hooks";
import { auth, provider } from "@/lib/firebaseConfig";
import Services from "@/services";
import { useDataStore } from "@/stores";
import { setAuth } from "@/utils";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import { AxiosResponse } from "axios";
import { signInWithPopup } from "firebase/auth";
import { useCallback } from "react";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { isLoading, startLoading, stopLoading } = useLoading();
  const { setter, user } = useDataStore((state) => state);

  const { control, errors, handleSubmit, watch } = useForm({
    values: user,
    schema: login,
  });

  const onSubmit = useCallback(
    async (value: { email: string; password: string; remember: boolean }) => {
      const error = Object.entries(errors).length !== 0;

      /* Exit */
      if (error) return;

      /* Start Loading */
      startLoading();

      /* Call API */
      Services()
        .post(ENDPOINT.AUTH, {
          email: value.email,
          password: value.password,
        })
        .then((res: AxiosResponse) => {
          const { status, data } = res;
          if (status !== 201) {
            return console.log("Error");
          }

          /* Set */
          const values = value.remember === true ? {} : value;
          setter({
            user: values,
            home: {
              email: value.email,
            },
          });

          setAuth(AUHT_NAME, data.access_token);
          navigate(ROUTES.HOME);
        })
        .catch((error) => console.log("Error", error))
        .finally(() => stopLoading());
    },
    [errors, setter, user, watch]
  );

  const signInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      if (result.user.email) {
        setter({
          user: {
            name: result.user.displayName,
            email: result.user.email,
            avatar: result.user.photoURL,
            remember: true,
          },
        });
        navigate(ROUTES.HOME);
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <main className="h-screen text-foreground bg-background md:flex">
      <div className="relative items-center justify-around hidden w-1/2 overflow-hidden md:flex ">
        <div>
          <h1 className="font-sans text-4xl font-bold text-white">GoFinance</h1>
          <p className="mt-1 text-white">
            The most popular peer to peer lending at SEA
          </p>
        </div>
        <div className="absolute border-4 border-t-8 rounded-full -bottom-32 -left-40 w-80 h-80 border-opacity-30"></div>
        <div className="absolute border-4 border-t-8 rounded-full -bottom-40 -left-20 w-80 h-80 border-opacity-30"></div>
        <div className="absolute border-4 border-t-8 rounded-full -top-40 -right-0 w-80 h-80 border-opacity-30"></div>
        <div className="absolute border-4 border-t-8 rounded-full -top-20 -right-20 w-80 h-80 border-opacity-30"></div>
      </div>
      <div className="flex items-center justify-center px-4 py-10 md:w-1/2">
        <div className="w-full max-w-[400px]">
          <h1 className={title({ color: "green" })}>Hello Again!</h1>
          <p className={subtitle({ color: "black" })}>Top destinations</p>
          <div className="flex items-center my-4 rounded-2xl">
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  isRequired
                  radius="full"
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
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  isRequired
                  radius="full"
                  classNames={{
                    inputWrapper: "!min-h-[60px]",
                  }}
                  type="password"
                  label="Contraseña"
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  value={field.value}
                  placeholder="Por favor, introduce tu contraseña"
                />
              )}
            />
          </div>
          <div className="flex flex-row items-center justify-between mb-4">
            <Controller
              name="remember"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  size="sm"
                  color="default"
                  className="text-gray-600"
                  defaultSelected
                >
                  Remember me
                </Checkbox>
              )}
            />
            <Link size="sm" className="mr-2 text-gray-600" href="#">
              Forgot password
            </Link>
          </div>
          <Button
            radius="full"
            color="primary"
            type="submit"
            className="bg-gradient-to-r text-white from-[#009688] to-[#009688] w-full h-14 min-h-[60px] mb-2"
            isLoading={isLoading}
            onPress={handleSubmit(onSubmit)}
          >
            Inicar sesión
          </Button>
          <Button
            radius="full"
            color="primary"
            type="submit"
            className="border-2 border-[#009688] bg-transparent w-full h-14 min-h-[60px] mb-2"
            onPress={() => navigate(ROUTES.REGISTER)}
          >
            Registrarme
          </Button>

          <p className={subtitle()}>OR</p>
          <Button
            radius="full"
            color="primary"
            className="w-full my-2 h-14 min-h-[60px] text-white"
            onPress={signInGoogle}
          >
            <GoogleLogo />
            Continue with Google
          </Button>
        </div>
      </div>
    </main>
  );
}
