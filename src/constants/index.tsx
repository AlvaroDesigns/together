/***************************
 * Constants
 *************************/

/* QueryParams */

export const AUHT_NAME = "auth";
export const ON_BOARDNG = "onBoarding";
export const IS_APP: string = "mobile";
export const COUNTRY_ES: string = "E-ESPAÑA";

/* Calendar */
export const MAX_DATE_CLIENT: number = 206;
export const MIN_DATE_CLIENT: number = 768;
export const FORMAT_DATE_DDMMYYYY: string = "dd/MM/yyyy";
export const FORMAT_DATE_YYYYMMDD: string = "yyyy-MM-dd";

export const TIMEOUT_LARGE: number = 5000;

/* Regex */
export const REGEX: Record<string, RegExp> = {
  DIRECCTION: /^(?:\d+[A-Z]?|s\/n)$/,
  ABC_012: /^([a-zA-Z0-9]+)$/,
  ABC_012_SPACE: /^([a-zA-Z0-9 ]+)$/,
  NUMBER: /^([0-9]+)$/,
  POSTCODE:
    /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52)\d{3}$/,
  ALPHABETIC: /^([a-zA-ZÀ-ú -,._]+)$/,
  PHONE: /^(6\d|7[0-5])\d{7}$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/,
  DATE: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/,
};

/* Hubspot */
export const HUBSPOT_LANDING: string = "https://www.nnespana.es/orfandad";
export const HUBSPOT_THANKS: string =
  "https://www.nnespana.es/orfandad/gracias";

/* URLS */
export const BASE_ROUTE: string = "/seguro-orfandad";
export const ROUTES: Record<string, string> = {
  HOME: "/home",
  REGISTER: "registrame",
  ITINERARY: "crear-itinerario",
};

export const ENDPOINT: Record<string, string> = {
  AUTH: "auth/login",
  USER: "v1/user",
  ITINERARY: "v1/itinerary",
  DETAILS: "v1/itinerary/details",
  FLIGHTS: "v1/operative/fight",
  DIRECTIONS: "v1/operative/directions",
  OPERATIVE: "v1/operative/weather",
};

/* GTM */
export const GTM_EVENT: Record<string, string> = {
  LOAD: "page_view",
  BACK: "funnel_orf_atras",
  NEXT: "funnel_orf_siguiente",
};
