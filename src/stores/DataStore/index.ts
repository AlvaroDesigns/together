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
  itinerary: [],
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
  endDate: null,
  departure: undefined,
  destination: undefined,
  stars: null,
  placeUrl: undefined,
  numberFlight: undefined,
  description: null,
  imageUrl: undefined,
  city_name: undefined,
  region: undefined,
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
        details: detailsData,
        setter: (value: any) =>
          set(
            (state) => ({
              ...state,
              ...value,
              home: { ...state?.home, ...value?.home },
              itinerary: { ...state?.itinerary, ...value?.itinerary },
              details: {
                ...state?.details,
                ...value?.details,
              },
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
