import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import { signInWithPopup } from "firebase/auth";
import { GoogleLogo } from "../components/icons";
import { subtitle } from "../components/primitives";
import { auth, provider } from "../lib/firebaseConfig";

export default function Login() {
  const signInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      if (result.user.email) {
        console.log("ok");
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
          <p className="text-white mt-1">
            The most popular peer to peer lending at SEA
          </p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white w-full max-w-[400px]">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex items-center rounded-2xl mb-4">
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
          <div className="flex items-center flex-row justify-between mb-4">
            <Checkbox size="sm" defaultSelected>
              Remember me
            </Checkbox>
            <Link size="sm" className="mr-2" href="#">
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
    </div>
  );
}
