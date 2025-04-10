import { addHour, format, parse } from '@formkit/tempo';
import { differenceInDays } from 'date-fns';

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

export const formatString = (text: string) => {
  return text.toLowerCase().replace(/ /g, '_');
};

export const productItemId = (editId: number, items: [] | any) => {
  return items?.find((item: { id: number }) => Number(item.id) === editId);
};

export const productFilterItemId = (editId: number, items: [] | any) => {
  return items?.filter((item: { id: number }) => Number(item.id) !== editId);
};

export const formatIso = (date: Date | string | null) => {
  if (!date) return null;

  const parsedDate = new Date(date);
  parsedDate.setHours(parsedDate.getHours() + 2);

  return parsedDate.toISOString();
};

export const elipsis = (texto: string, maxLength: number) => {
  if (texto === null || texto === undefined) {
    return texto;
  }

  return texto.length > maxLength ? texto.slice(0, maxLength) + '...' : texto;
};

export const isDate = (date: Date | string | null) => {
  if (date === null || date === undefined) {
    return false;
  }

  const fecha = new Date(date);
  return !isNaN(fecha.getTime());
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
  const { year, month, day, hour = 0, minute = 0 } = dateObj;
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute));
  return date.toISOString();
};

export const convertFromISO = (isoDate: string) => {
  const date = new Date(isoDate);

  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1, // getUTCMonth() es 0-indexed, por lo que sumamos 1
    day: date.getUTCDate(),
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
    millisecond: date.getUTCMilliseconds(),
  };
};

export const parseIsoString = (isoString: string) => {
  // Paso 1: Parsear la fecha
  const date = parse(isoString, 'iso');

  // Paso 2: Incrementar 1 hora
  const newDate = addHour(date, 1);

  // Paso 3: Convertir la nueva fecha al formato ISO
  return newDate.toISOString();
};

export const formatDay = (day: Date, formatStr?: string, hour?: boolean) => {
  const f = formatStr || 'YYYY-MM-DD';

  if (hour) {
    // Asegurar que la hora sea 00:00:00
    const d = day?.setHours(0, 0, 0, 0) || day;
    return format(new Date(d), f);
  }

  return format(day instanceof Date ? new Date(day) : new Date(), f, 'Es');
};

export const formatDayForDays = (startDate: Date | undefined, day: Date) => {
  if (startDate === null || startDate === undefined || day === null) {
    return 'No disponible';
  }

  return datesForDay(
    format(new Date(startDate), 'YYYY/MM/DD'),
    format(new Date(day), 'YYYY/MM/DD'),
  );
};

export const calculateItineraryDay = (
  itineraryStartDate: Date,
  activityStartDate: Date,
) => {
  // Calcular la diferencia en días
  const dayDifference = differenceInDays(
    new Date(activityStartDate),
    new Date(itineraryStartDate),
  );

  // El día del itinerario es la diferencia + 1 (porque el día inicial es el día 1)
  return dayDifference + 1;
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
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24)) + 1;

  return differenceInDays;
};

export const capitalCase = (value: string) => {
  if (!value) return value;

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

export const resolverAirFly = (code: string | undefined) => {
  const logi = `{https://cdn.logitravel.com/webmobile/vuelos/images/logo_${code?.toUpperCase()}.png}`;
  const gs = `https://www.gstatic.com/flights/airline_logos/70px/${code?.toUpperCase()}.png`;
  return gs || logi;
};
