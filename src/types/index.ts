import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type VariantTypeSection =
  | "FLIGHT"
  | "HOTEL"
  | "TRANSFER"
  | "TRIP"
  | "RENT"
  | "OTHER";

export const VARIANT_TYPE_SECTION = {
  FLIGHT: "FLIGHT",
  HOTEL: "HOTEL",
  TRANSFER: "TRANSFER",
  TRIP: "TRIP",
  RENT: "RENT",
  OTHER: "OTHER",
};

export type VariantTypeSectionIcon = "ACCOUNT" | "FRIENDS" | "SECURE" | "FAQS";

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
