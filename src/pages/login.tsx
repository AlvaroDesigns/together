import { GoogleLogo } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { auth, provider } from "@/lib/firebaseConfig";
import { setStore } from "@/utils";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const signInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      if (result.user.email) {
        setStore("name", String(result.user.displayName));
        navigate("/home");
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <main className="h-screen dark text-foreground bg-background md:flex">
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
        <form className="w-full max-w-[400px]">
          <h1 className={title({ color: "violet" })}>Hello Again!</h1>
          <p className={subtitle({ color: "black" })}>Top destinations</p>
          <div className="flex items-center mb-4 rounded-2xl">
            <Input
              isRequired
              radius="full"
              className="mb-4"
              type="email"
              label="Correo"
              fullWidth={true}
              placeholder="Introducce tu correo electronico"
            />
          </div>
          <div className="flex items-center">
            <Input
              isRequired
              radius="full"
              className="mb-4"
              type="password"
              label="Contraseña"
              placeholder="Por favor, introduce tu contraseña"
            />
          </div>
          <div className="flex flex-row items-center justify-between mb-4">
            <Checkbox size="sm" className="text-gray-600" defaultSelected>
              Remember me
            </Checkbox>
            <Link size="sm" className="mr-2 text-gray-600" href="#">
              Forgot password
            </Link>
          </div>
          <Button
            radius="full"
            color="primary"
            type="submit"
            className="bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] w-full h-14 mb-2"
          >
            Registrarme
          </Button>
          <p className={subtitle()}>OR</p>
          <Button
            radius="full"
            color="primary"
            className="w-full mb-2 h-14"
            onClick={signInGoogle}
          >
            <GoogleLogo />
            Continue with Google
          </Button>
        </form>
      </div>
    </main>
  );
}
