import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const BannerCookies = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Recuperar el token JWT de las cookies
    const jwtToken = Cookies.get("jwtToken");
    if (jwtToken) {
      setToken(jwtToken);
    }
  }, []);

  const handleSetToken = (newToken: string) => {
    // Establecer el token JWT en las cookies
    Cookies.set("jwtToken", newToken, { expires: 7 }); // Expira en 7 días
    setToken(newToken);
  };

  const handleRemoveToken = () => {
    // Eliminar el token JWT de las cookies
    Cookies.remove("jwtToken");
    setToken(null);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 px-6 pb-6 pointer-events-none">
      <div className="max-w-sm p-6 ml-auto border pointer-events-auto rounded-large border-divider bg-background/15 shadow-small backdrop-blur">
        <p className="font-normal text-small text-default-700">
          We use cookies on our website to give you the most relevant experience
          by remembering your preferences and repeat visits. By clicking&nbsp;
          <b className="font-semibold">"Accept All"</b>, you consent to the use
          of ALL the cookies. However, you may visit&nbsp;
          <span className="font-semibold">"Cookie Settings"</span> to provide a
          controlled consent. For more information, please read our{" "}
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small text-primary hover:underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4"
            href="#"
            role="link"
          >
            Cookie Policy.
          </a>
        </p>
        <div className="mt-4 space-y-2">
          <button
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 text-small gap-2 rounded-large w-full [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-default text-default-foreground data-[hover=true]:opacity-hover px-4 font-medium"
            type="button"
            style={{
              border: "2px solid transparent",
              backgroundImage:
                "linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(83.87deg, #F54180, #9353D3)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            Accept All
          </button>
          <button
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-4 min-w-20 h-10 text-small gap-2 rounded-large w-full [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent data-[hover=true]:opacity-hover border-default-200 font-medium text-default-foreground"
            type="button"
          >
            Reject All
          </button>
          <button
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-large w-full [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent data-[hover=true]:bg-default/40 font-medium text-default-foreground"
            type="button"
          >
            Cookie Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCookies;
