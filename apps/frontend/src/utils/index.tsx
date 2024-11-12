// Carga y muestra mensajes almacenados en localStorage
export const getStore = (key: string) => {
  return sessionStorage?.getItem(key) ?? undefined;
};

// Carga y muestra mensajes almacenados en localStorage
export const setStore = (key: string, value: string) => {
  return sessionStorage?.setItem(key, value) ?? undefined;
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
