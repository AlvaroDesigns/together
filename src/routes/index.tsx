import { Login, Step1, Step2 } from "@/pages";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Step1 />,
  },
  {
    path: "/:userId",
    element: <Step2 />,
  },
  {
    path: "/crear-itinerario",
    element: <Step2 />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
