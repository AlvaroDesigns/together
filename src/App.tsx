import { useTheme } from "@heroui/use-theme";
import { RouterProvider } from "@tanstack/react-router";
import { I18nextProvider } from "react-i18next";

import "./App.css";
import i18n from "./i18";
import { router } from "./routes";

function App() {
  const { theme } = useTheme();

  /*
  if (!isMobile) {
    return (
      <main
        className={`${theme} text-foreground bg-background flex flex-col items-center justify-center h-screen `}
      >
        <div className="w-1/2">
          <Status
            title="Esta página no está disponible en este dispositivo"
            text="Por favor, vuelva a intentarlo en un dispositivo móvil."
            src="../../error.png"
          />
        </div>
      </main>
    );
  }
*/
  return (
    <main className={`${theme} text-foreground bg-background`}>
      <I18nextProvider i18n={i18n} defaultNS={"translation"}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </main>
  );
}

export default App;
