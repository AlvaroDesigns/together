import { ROUTES } from "@/constants";
import { Availability, Home, Login, Register, Step1, Step2 } from "@/pages";

import { createBrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTES.HOME,
    element: <PrivateRoute element={<Step1 />} />,
  },
  {
    path: "itineray/:nameId",
    element: <PrivateRoute element={<Step2 />} />,
  },
  {
    path: "itineray/:nameId/shared",
    element: <Step2 />,
  },
  {
    path: "availability",
    element: <Availability />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
