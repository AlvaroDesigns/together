import { AuthProvider } from "@/routes/authContext";
import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { router } from "./routes";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <AuthProvider router={router}>
        <App />
      </AuthProvider>
    </NextUIProvider>
  </StrictMode>
);
