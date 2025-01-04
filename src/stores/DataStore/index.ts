import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  DataState,
  DetailsTypes,
  HomeTypes,
  ItineraryTypes,
} from "./index.types";

const homeData: HomeTypes = {
  items: null,
};

const itineraryData: ItineraryTypes = {
  title: "",
  days: 0,
  date: "",
  startDate: "",
  endDate: "",
  image: "",
  itemId: undefined,
};

const detailsData: DetailsTypes = {
  type: undefined,
  startDate: "",
  days: 0,
  endDate: null,
  departure: undefined,
  departureLabel: undefined,
  destination: undefined,
  destinationLabel: undefined,
  arrivalTime: undefined,
  stars: null,
  placeUrl: undefined,
  numberFlight: undefined,
  description: null,
  imageUrl: undefined,
  cityName: undefined,
  country: undefined,
  name: undefined,
  collapse: true,
};

export const useDataStore = create<DataState>()(
  persist(
    devtools(
      immer((set) => ({
        home: homeData,
        itinerary: itineraryData,
        edit: detailsData,
        details: detailsData,
        setter: (value: Partial<DataState>) =>
          set(
            (state) => ({
              ...state,
              ...value,
              home: { ...state.home, ...value.home },
              itinerary: { ...state.itinerary, ...value.itinerary },
              edit: { ...state.edit, ...value.edit },
              details: { ...state.details, ...value.details },
            }),
            false,
            `Set User Data Itinerary`
          ),
        reset: () => set({ home: homeData, itinerary: itineraryData }),
      }))
    ),
    { name: "together-data", storage: createJSONStorage(() => sessionStorage) }
  )
);
