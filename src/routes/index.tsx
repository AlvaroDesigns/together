import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
