import Services from "@/services";
import { useQuery } from "@tanstack/react-query";

interface FetchProps {
  method: "get" | "post" | "put" | "patch" | "delete";
  url: string;
  payload?: object;
}

const fetchUserData = async (
  method: FetchProps["method"],
  url: FetchProps["url"],
  payload?: FetchProps["payload"]
) => {
  try {
    const service = Services();

    const httpMethods = {
      get: () => service.get(url),
      post: () => service.post(url, payload),
      put: () => service.patch(url, payload), // Si añades `put` en `Services`, cámbialo aquí
      patch: () => service.patch(url, payload),
      delete: () => service.get(url), // Cambia a `service.delete(url)` si lo implementas
    };

    const response = await (httpMethods[method]
      ? httpMethods[method]()
      : Promise.reject(new Error("Método HTTP no soportado")));

    if (!response || response.status !== 200) {
      throw new Error("Error fetching user data");
    }

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const useFetch = (
  method: FetchProps["method"],
  url: FetchProps["url"],
  payload?: FetchProps["payload"]
) => {
  return useQuery({
    queryKey: [method, url, payload], // Clave única para la caché
    queryFn: () => fetchUserData(method, url, payload),
    staleTime: 1000 * 60 * 5, // Mantiene los datos en caché durante 5 minutos
    retry: 2, // Reintenta 2 veces si falla
  });
};
