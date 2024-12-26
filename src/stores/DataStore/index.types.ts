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
  itinerary: HomeItineraryTypes[] | [];
}

export interface ItineraryTypes {
  title: string | undefined;
  days: number;
  date: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  image: string | undefined;
  itemId: number | undefined;
}
export interface DetailsTypes {
  type: string | undefined;
  startDate: string | null;
  endDate: string | null;
  departure: string | undefined;
  destination: string | undefined;
  stars: number | null;
  placeUrl: string | undefined;
  numberFlight: string | undefined;
  description: string | null;
  imageUrl: string | undefined;
  city_name: string | undefined;
  region: string | undefined;
  country: string | undefined;
  name: string | undefined;
  collapse: true;
}

export interface DataState {
  home: HomeTypes;
  itinerary: ItineraryTypes | undefined;
  details: DetailsTypes | undefined;
  setter: (data: unknown) => void;
  reset(): void;
}
