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
}

export interface DataState {
  home: HomeTypes;
  itinerary: ItineraryTypes | undefined;
  setter: (data: unknown) => void;
  reset(): void;
}
