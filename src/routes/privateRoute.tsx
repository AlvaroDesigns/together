import { useUserStore } from "@/stores";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

export const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const { storedToken } = useAuth();
  const logger = useUserStore((state) => state.user.logger);

  const { pathname } = window.location;
  console.log(pathname, logger);
  if (logger && pathname.length === 1) {
    return <Navigate to="/home" replace />;
  }

  return storedToken ? element : <Navigate to="/" replace />;
};
