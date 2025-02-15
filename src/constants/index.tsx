/***************************
 * Constants
 *************************/

export const AUHT_NAME = "auth";
export const ON_BOARDNG = "onBoarding";
export const MAIL: string = "noreplay@together.alvarodesigns.com";

/* Calendar */
export const MAX_DATE_CLIENT: number = 206;
export const MIN_DATE_CLIENT: number = 768;
export const FORMAT_DATE_DDMMYYYY: string = "dd/MM/yyyy";
export const FORMAT_DATE_YYYYMMDD: string = "yyyy-MM-dd";

export const TIMEOUT_LARGE: number = 5000;
export const TIMEOUT_MEDIUM: number = 3000;
export const TIMEOUT_SHORT: number = 1000;

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

/* URLS */
export const BASE_ROUTE: string = "/seguro-orfandad";
export const ROUTES: Record<string, string> = {
  HOME_B2C: "/",
  HOME_B2B: "/home",
  LOGIN: "/login",
  AVAILABILITY: "/availability",
  CHECK_OUT: "/checkout",
  AVAILABILITY_PUBLIC: "/availability_public",
  REGISTER: "/registrame",
  ITINERARY: "/itinerary",
  HOTELS: "/hotels",
  CONDITIONS: "/conditions",
  PRIVACY: "/privacy",
  COOKIES: "/cookies",
};

export const ENDPOINT: Record<string, string> = {
  AUTH: "auth/login",
  REGISTER: "auth/register",
  USER: "v1/user",
  ITINERARY: "v1/itinerary",
  DETAILS: "v1/itinerary/details",
  FLIGHTS: "v1/operative/fight",
  DIRECTIONS: "v1/operative/directions",
  OPERATIVE: "v1/operative/weather",
  IMAGE: "v1/operative/image",
  EMAIL: "v1/operative/email",
  ACCOUNT: `v1/user/#id#/details`,
  SECURE: `v1/user/#id#/password`,
  LANGUAGE: `v1/user/#id#/language`,
};
