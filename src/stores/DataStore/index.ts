import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { DataState, HomeTypes, ItineraryTypes } from "./index.types";

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
};

export const useDataStore = create<DataState>()(
  persist(
    devtools(
      immer((set) => ({
        home: homeData,
        itinerary: itineraryData,
        setter: (value: any) =>
          set(
            (state) => ({
              ...state,
              ...value,
              home: { ...state?.home, ...value?.home },
              itinerary: { ...state?.itinerary, ...value?.itinerary },
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
