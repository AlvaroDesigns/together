import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

export const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const { storedToken } = useAuth();
  return storedToken ? element : <Navigate to="/" replace />;
};
