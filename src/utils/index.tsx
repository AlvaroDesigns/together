// Carga y muestra mensajes almacenados en localStorage
export const getStore = (key: string) => {
  return sessionStorage?.getItem(key) ?? undefined;
};

// Carga y muestra mensajes almacenados en localStorage
export const setStore = (key: string, value: string) => {
  return sessionStorage?.setItem(key, value) ?? undefined;
};
