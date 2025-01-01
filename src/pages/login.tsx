import { Button, Footer } from "@/components";
import { GoogleLogo } from "@/components/icons";
import { subtitle } from "@/components/primitives";
import { AUHT_NAME, ENDPOINT, ROUTES } from "@/constants";
import { login } from "@/helpers/schema";
import { useForm, useLoading } from "@/hooks";
import { auth, provider } from "@/lib/firebaseConfig";
import Services from "@/services";
import { useUserStore } from "@/stores";
import { setAuth } from "@/utils";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  Button as ButtonUI,
  Checkbox,
  Image,
  Input,
  Link,
} from "@nextui-org/react";
import { AxiosResponse } from "axios";
import { signInWithPopup } from "firebase/auth";
import { useCallback, useState } from "react";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [hide, setHide] = useState(true);
  const { isLoading, startLoading, stopLoading } = useLoading();
  const { setter, user } = useUserStore((state) => state);

  const { control, errors, handleSubmit } = useForm({
    values: user,
    schema: login,
  });

  const onSubmit = useCallback(
    async (value: {
      avatar: string;
      name: string;
      email: string;
      password: string;
      remember: boolean;
    }) => {
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
          const { data } = res;

          /* Set */
          setter({
            user: {
              name: value.name,
              email: value.email,
              avatar: value.avatar,
              remember: value.remember,
            },
          });

          setAuth(AUHT_NAME, data.access_token);
          navigate(ROUTES.HOME);
        })
        .finally(() => stopLoading());
    },
    [errors, setter]
  );

  const signInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

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
    <div className="h-screen text-foreground bg-background md:flex">
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
          <div className="flex justify-center w-full mb-4">
            <Image
              removeWrapper
              alt="together"
              height={40}
              className="z-0 object-cover"
              src="../../logo.png"
              onClick={() => navigate("/home")}
            />
          </div>

          <div className="flex items-center my-4 rounded-2xl">
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
          </div>
          <div className="flex items-center mb-4">
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  isRequired
                  variant="bordered"
                  classNames={{
                    inputWrapper: "!min-h-[60px]",
                  }}
                  type={hide ? "password" : "text"}
                  label="Contraseña"
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
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
          </div>
          <div className="flex flex-row items-center justify-between my-2">
            <Controller
              name="remember"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  size="sm"
                  color="default"
                  className="text-gray-600"
                  isSelected={field.value === undefined ? false : field.value}
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
          <div className="flex flex-col gap-3 mt-4">
            <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
              Inicar sesión
            </Button>
            <Button
              variant="bordered"
              onPress={() => navigate(ROUTES.REGISTER)}
            >
              Registrarme
            </Button>
          </div>
          <p className={subtitle()}>OR</p>
          <ButtonUI
            radius="full"
            color="primary"
            className="w-full my-2 h-14 min-h-[60px] text-white "
            onPress={signInGoogle}
          >
            <GoogleLogo />
            Continue with Google
          </ButtonUI>
        </div>
      </div>
      <Footer />
    </div>
  );
}
