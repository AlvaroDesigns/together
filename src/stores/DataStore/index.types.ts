export type FieldType =
  | "name"
  | "postCode"
  | "surname"
  | "email"
  | "phone"
  | "acceptsBasicInfo"
  | "acceptsMarketing"
  | "loader"
  | "error";

export interface UserTypes {
  name: string | undefined;
  email: string | undefined;
  avatar: string | undefined;
  remember: boolean;
}

interface HomeItineraryTypes {
  title: string | undefined;
  days: number;
  date: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  image: string | undefined;
  userId: number;
}

export interface HomeTypes {
  name: string | undefined;
  email: string | undefined;
  itinerary: HomeItineraryTypes[] | undefined;
}

export interface DataState {
  user: UserTypes;
  home: HomeTypes;
  setter: (data: unknown) => void;
  reset(): void;
}
