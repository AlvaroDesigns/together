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
