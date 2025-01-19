import { useTheme } from "@heroui/use-theme";
import { I18nProvider } from "@react-aria/i18n";
import { RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { Status } from "./components";
import { useMediaQuery } from "./hooks";
import { router } from "./routes";

function App() {
  const { theme } = useTheme();
  const { language } = navigator;
  const isMobile = useMediaQuery("(max-width: 768px)");

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

  return (
    <main className={`${theme} text-foreground bg-background`}>
      <I18nProvider locale={language}>
        <RouterProvider router={router} />
      </I18nProvider>
    </main>
  );
}

export default App;
