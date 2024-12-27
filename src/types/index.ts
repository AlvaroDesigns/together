import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type VariantTypeSection =
  | "FLIGHT"
  | "HOTEL"
  | "TRANSFER"
  | "TRIP"
  | "RENT";

export const VARIANT_TYPE_SECTION = {
  FLIGHT: "FLIGHT",
  HOTEL: "HOTEL",
  TRANSFER: "TRANSFER",
  TRIP: "TRIP",
  RENT: "RENT",
};
