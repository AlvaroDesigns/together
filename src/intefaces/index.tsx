interface UserBasicProps {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  role: string;
}

export interface RegisterProps extends UserBasicProps {
  phone: string;
  remember?: boolean | undefined;
}
export interface LoginProps extends UserBasicProps {
  remember: boolean;
}

export interface CardProps {
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

export interface CardFlightProps {
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
