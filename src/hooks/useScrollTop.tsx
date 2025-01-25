import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

export const useScrollTop = () => {
  const location = useLocation(); // Accede a la ubicación actual del router

  useEffect(() => {
    // Desplazamiento hacia la parte superior de la página cuando cambie la ubicación
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
