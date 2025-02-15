import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ColorType =
  | "danger"
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning";

export type AlertType = "success" | "info" | "warning" | "error";
export type VariantTypeSection =
  | "FLIGHT"
  | "HOTEL"
  | "TRANSFER"
  | "TRIP"
  | "RENT"
  | "OTHER";

export type VariantProfileType = "FRIENDS" | "ACCOUNT" | "SECURE" | "FAQS";

export const VARIANT_ALERT: Record<string, AlertType> = {
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
};

export const VARIANT_TYPE_SECTION: Record<string, VariantTypeSection> = {
  FLIGHT: "FLIGHT",
  HOTEL: "HOTEL",
  TRANSFER: "TRANSFER",
  TRIP: "TRIP",
  RENT: "RENT",
  OTHER: "OTHER",
};

export const VARIANT_TYPE_PROFILE: Record<string, VariantProfileType> = {
  FRIENDS: "FRIENDS",
  ACCOUNT: "ACCOUNT",
  SECURE: "SECURE",
  FAQS: "FAQS",
};

export type VariantTypeSectionIcon = "ACCOUNT" | "FRIENDS" | "SECURE" | "FAQS";
export type VariantTypeRoles = "ADMIN" | "USER" | "VIEWER";

export const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
  VIEWER: "VIEW",
};

export const users = [
  { id: 1, name: "ADMIN", role: ROLES.ADMIN },
  { id: 2, name: "USER", role: ROLES.USER },
  { id: 3, name: "VIEW", role: ROLES.VIEWER },
];

interface UserBasicTypes {
  name: string;
  email: string;
  password: string;
}

export interface RegisterTypes extends UserBasicTypes {
  phone: string;
  remember?: boolean | undefined;
  avatar?: string;
}
export interface LoginTypes extends UserBasicTypes {
  remember: boolean;
  avatar: string;
}

export interface CardTypes {
  startDate: string | Date | null;
  endDate?: string | Date | null;
  departure: string | undefined;
  departureLabel?: string | undefined;
  destination: string | undefined;
  description?: string[] | null | any;
  destinationLabel?: string | undefined;
  numberFlight: string | undefined;
  name: string | undefined;
  cityName?: string;
  stars?: number | null;
  country?: string;
  imageUrl?: string | undefined;
  placeUrl?: string | undefined;
  arrivalTime?: string | Date;
}

export interface CardFlightTypes {
  startDate: string | Date;
  departure: string | undefined;
  departureLabel?: string | undefined;
  destination: string | undefined;
  destinationLabel?: string | undefined;
  numberFlight: string | undefined;
  descriptions?: string[] | null;
  arrivalTime: string | undefined;
  onPressEdit: () => void;
  onPressDelete: () => void;
}
