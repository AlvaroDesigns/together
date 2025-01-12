import { Button, Footer, Password } from "@/components";
import { GoogleLogo } from "@/components/icons";
import { subtitle } from "@/components/primitives";
import { ROUTES } from "@/constants";
import { login } from "@/helpers/schema";
import { useForm, useLoading } from "@/hooks";
import { auth, provider } from "@/lib/firebaseConfig";
import { useDataStore } from "@/stores";
import { Welcome } from "@/templates/welcome";
import { Button as ButtonUI, Image, Input, Link } from "@nextui-org/react";
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

  const fetchEmail = async (email?: string) => {
    /* 
  curl -X POST 'https://api.resend.com/emails' \
  -H 'Authorization: Bearer re_VE6pWZD2_LTzBr9QdqJER1NgkjWRNyro2' \
  -H 'Content-Type: application/json' \
  -d $'{
    "from": "onboarding@resend.dev",
    "to": "info.alvarodesigns@gmail.com",
    "subject": "Hello World",
    "html": "<p>Congrats on sending your <strong>first email</strong>!</p>"
  }'

*/

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        Authorization: "Bearer re_VE6pWZD2_LTzBr9QdqJER1NgkjWRNyro2",
      },
      body: JSON.stringify({
        from: "hello@alvarodesigns.com", // email
        to: "info.alvarodesigns@gmail.com",
        subject: "Bienvenido a Together",
        html: Welcome(),
      }),
    }).then((response) => response.json());

    return response;
  };

  const onSubmit = useCallback(
    async (value: unknown) => {
      console.log("hola");
      fetchEmail();
      const error = Object.entries(errors).length !== 0;

      /* Exit */
      if (error) return;

      /* Start Loading */
      startLoading();

      /* Call API */
      console.log(value);

      setTimeout(() => stopLoading(), 300);
    },
    [errors, startLoading, stopLoading]
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
          },
        });
        navigate(ROUTES.HOME);
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
              onClick={() => navigate("/")}
            />
            <p className={subtitle({ color: "black" })}>Crea tu cuenta</p>
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
          <div className="flex items-center mb-4">
            <Controller
              name="password"
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
          <div className="flex flex-col gap-3 my-4 mt-6">
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
            size="sm"
            color="foreground"
            className="mt-2 text-gray-600"
            href="/"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
