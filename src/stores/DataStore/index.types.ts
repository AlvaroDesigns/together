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

export interface WeatherType {
  humidity: null;
  temperatureMax: null;
  temperatureMin: null;
}

export interface ItineraryTypes {
  date: string | undefined;
  days: number;
  endDate: string | undefined;
  id: number | undefined;
  image: string | undefined;
  items: HomeItineraryTypes[] | [] | null;
  startDate: string | undefined;
  title: string | undefined;
  weather: WeatherType | null;
  load: boolean;
}

export interface DetailsTypes {
  id?: string | number;
  type: string | undefined;
  userId: number | undefined;
  days: number;
  startDate: string | Date | null;
  endDate: string | Date | null;
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
  editId: number | null;
  isDelete: boolean;
  isEdits: boolean;
  details: DetailsTypes | undefined;
  setter: (value: Partial<DataState>) => void;
  reset(): void;
  resetItinerary(value: Partial<DataState>): void;
}
