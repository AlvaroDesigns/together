interface HomeItineraryTypes {
  id: number;
  title: string | undefined;
  days: number;
  date: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  image: string | undefined;
  userId: number;
}

export interface HomeTypes {
  items: HomeItineraryTypes[] | [] | null;
}

export interface ItineraryTypes {
  title: string | undefined;
  days: number;
  date: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  image: string | undefined;
  itemId: number | undefined | null;
}
export interface DetailsTypes {
  type: string | undefined;
  days: number;
  startDate: string | null;
  endDate: string | null;
  departure: string | undefined;
  departureLabel: string | undefined;
  destination: string | undefined;
  destinationLabel: string | undefined;
  arrivalTime: string | undefined;
  stars: number | null;
  placeUrl: string | undefined;
  numberFlight: string | undefined;
  description: string | null;
  imageUrl: string | undefined;
  cityName: string | undefined;
  country: string | undefined;
  name: string | undefined;
  collapse: true;
}

export interface DataState {
  home: HomeTypes;
  itinerary: ItineraryTypes | undefined;
  edit: DetailsTypes | undefined;
  details: DetailsTypes | undefined;
  setter: (value: Partial<DataState>) => void;
  reset(): void;
}
