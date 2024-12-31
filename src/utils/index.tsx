import { AUHT_NAME } from "@/constants";

// Carga y muestra mensajes almacenados en localStorage
export const getAuth = (name: string) => {
  return localStorage.getItem(name);
};
// Carga y muestra mensajes almacenados en localStorage
export const setAuth = (name: string, value: string) => {
  return localStorage?.setItem(name, String(value));
};

// Romove datos almacenados en localStorage
export const removeAuth = (name: string) => {
  return localStorage?.removeItem(name);
};
/* Send Event Error */
export const sendEventError = () => {
  removeAuth(AUHT_NAME);
  window.location.assign("/");
};

export const elipsis = (texto: string, maxLength: number) => {
  return texto.length > maxLength ? texto.slice(0, maxLength) + "..." : texto;
};

export const betweenDates = (start: string, end: string) => {
  // Calcular la diferencia en milisegundos
  const differenceInMs = new Date(end).getTime() - new Date(start).getTime();

  // Convertir a días
  const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

  return differenceInDays;
};

export const datesForDay = (start: string | Date, end: string) => {
  // Calcular la diferencia en milisegundos
  const differenceInMs = new Date(end).getTime() - new Date(start).getTime();

  // Convertir a días
  const differenceInDays =
    Math.floor(differenceInMs / (1000 * 60 * 60 * 24)) + 1;

  return differenceInDays;
};

export const capitalCase = (value: string) => {
  if (!value) return value;

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

export const resolverAirFly = (code: string | undefined) => {
  const logi = `{https://cdn.logitravel.com/webmobile/vuelos/images/logo_${code}.png}`;
  const gs = `https://www.gstatic.com/flights/airline_logos/70px/${code}.png`;
  return gs || logi;
};
