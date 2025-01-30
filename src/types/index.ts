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

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
  MODERATOR: "moderator",
  EDITOR: "editor",
  VIEWER: "viewer",
};

export const users = [
  { id: 1, name: "AdminUser", role: ROLES.ADMIN },
  { id: 2, name: "RegularUser", role: ROLES.USER },
  { id: 3, name: "GuestUser", role: ROLES.GUEST },
  { id: 4, name: "ModeratorUser", role: ROLES.MODERATOR },
  { id: 5, name: "EditorUser", role: ROLES.EDITOR },
  { id: 6, name: "ViewerUser", role: ROLES.VIEWER },
];

interface UserBasicTypes {
  name: string;
  email: string;
  password: string;
}

export interface RegisterTypes extends UserBasicTypes {
  phone: string;
}
export interface LoginTypes extends UserBasicTypes {
  remember: boolean;
  avatar: string;
}

export interface CardTypes {
  startDate: string | Date;
  name: string | undefined;
  city?: string;
  stars?: number;
  country?: string;
  endDate?: string | Date;
  imageUrl?: string | undefined;
  placeUrl?: string | undefined;
  descriptions?: string[] | null;
  arrivalTime?: string | Date;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
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
