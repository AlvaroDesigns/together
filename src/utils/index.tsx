import { addHour, format, parse } from "@formkit/tempo";

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

export const elipsis = (texto: string, maxLength: number) => {
  if (texto === null || texto === undefined) {
    return texto;
  }

  return texto.length > maxLength ? texto.slice(0, maxLength) + "..." : texto;
};

export const convertToISO = (dateObj: {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
}) => {
  const {
    year,
    month,
    day,
    hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
  } = dateObj;
  const date = new Date(
    Date.UTC(year, month - 1, day, hour, minute, second, millisecond)
  );
  return date.toISOString();
};

export const parseIsoString = (isoString: string) => {
  // Paso 1: Parsear la fecha
  const date = parse(isoString, "iso");

  // Paso 2: Incrementar 1 hora
  const newDate = addHour(date, 1);

  // Paso 3: Convertir la nueva fecha al formato ISO
  return newDate.toISOString();
};

export const formatDay = (day: Date) => {
  return format(new Date(day), "YYYY/MM/DD");
};

export const formatDayForDays = (startDate: Date | undefined, day: Date) => {
  if (startDate === null || startDate === undefined || day === null) {
    return "No disponible";
  }

  return datesForDay(
    format(new Date(startDate), "YYYY/MM/DD"),
    format(new Date(day), "YYYY/MM/DD")
  );
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
