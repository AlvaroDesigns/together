import { useTheme } from "@nextui-org/use-theme";
import { I18nProvider } from "@react-aria/i18n";
import { RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { router } from "./routes";
import { useAuth } from "./routes/authContext";

function App() {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();
  console.log("authentication App", isAuthenticated);
  return (
    <main className={`${theme} text-foreground bg-background`}>
      <I18nProvider locale="es-ES">
        <RouterProvider router={router} context={{ isAuthenticated }} />
      </I18nProvider>
    </main>
  );
}

export default App;
