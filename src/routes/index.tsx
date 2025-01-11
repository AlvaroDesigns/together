import { ROUTES } from "@/constants";
import { Login, Register, Step1, Step2 } from "@/pages";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTES.HOME,
    element: <Step1 />,
  },
  {
    path: "/:nameId",
    element: <Step2 />,
  },
  {
    path: ROUTES.ITINERARY,
    element: <Step2 />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
