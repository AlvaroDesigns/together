import { GoogleLogo } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { ROUTES } from "@/constants";
import { login } from "@/helpers/schema";
import { useForm, useLoading } from "@/hooks";
import { auth, provider } from "@/lib/firebaseConfig";
import { useDataStore } from "@/stores";
import { setStore } from "@/utils";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import { signInWithPopup } from "firebase/auth";
import { useCallback } from "react";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { isLoading, startLoading, stopLoading } = useLoading();
  const setter = useDataStore((state) => state.setter);

  const { control, errors, handleSubmit } = useForm({
    values: { email: "", password: "", remember: true },
    schema: login,
  });

  const onSubmit = useCallback(
    async (value: unknown) => {
      const error = Object.entries(errors).length !== 0;
      console.log(value, error);
      /* Exit */
      if (error) return;

      /* Start Loading */
      startLoading();

      /* Set Data */
      console.log("value", value);
      setter({
        user: {
          email: value.email,
          remember: true,
        },
      });
      navigate(ROUTES.HOME);

      /* Call API */

      setTimeout(() => stopLoading(), 300);
    },
    [errors, startLoading, stopLoading]
  );

  const signInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      if (result.user.email) {
        setStore("name", String(result.user.displayName));
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
          <h1 className={title({ color: "violet" })}>Hello Again!</h1>
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
            className="bg-gradient-to-r text-md text-white from-[#FF1CF7] to-[#b249f8] w-full h-14 min-h-[60px] mb-2"
            isLoading={isLoading}
            onClick={handleSubmit(onSubmit)}
          >
            Inicar sesión
          </Button>
          <Button
            radius="full"
            color="primary"
            type="submit"
            className="border-2 border-[#b249f8] text-md bg-transparent w-full h-14 min-h-[60px] mb-2"
            onClick={() => navigate(ROUTES.REGISTER)}
          >
            Registrarme
          </Button>

          <p className={subtitle()}>OR</p>
          <Button
            radius="full"
            color="primary"
            className="w-full my-2 h-14 min-h-[60px] text-white text-md"
            onClick={signInGoogle}
          >
            <GoogleLogo />
            Continue with Google
          </Button>
        </div>
      </div>
    </main>
  );
}
