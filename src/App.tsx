import { RouterProvider } from "react-router-dom";

import { useTheme } from "@nextui-org/use-theme";
import "./App.css";
import { router } from "./routes";

function App() {
  const { theme } = useTheme();

  return (
    <main className={`${theme} text-foreground bg-background`}>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
