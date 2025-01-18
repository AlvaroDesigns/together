import { useTheme } from "@heroui/use-theme";
import { I18nProvider } from "@react-aria/i18n";
import { RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { router } from "./routes";

function App() {
  const { theme } = useTheme();

  return (
    <main className={`${theme} text-foreground bg-background`}>
      <I18nProvider locale="es-ES">
        <RouterProvider router={router} />
      </I18nProvider>
    </main>
  );
}

export default App;
