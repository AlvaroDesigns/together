import { VARIANT_TYPE_SECTION } from "@/types";
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

const weatherData = {
  humidity: null,
  temperatureMax: null,
  temperatureMin: null,
};

const itineraryData: ItineraryTypes = {
  date: "",
  days: 0,
  endDate: "",
  id: undefined,
  image: "",
  items: null,
  startDate: "",
  title: "",
  weather: weatherData,
  load: true,
};

export const detailsData: DetailsTypes = {
  type: VARIANT_TYPE_SECTION.FLIGHT,
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
  userId: undefined,
};

export const useDataStore = create<DataState>()(
  persist(
    devtools(
      immer((set) => ({
        home: homeData,
        itinerary: itineraryData,
        editId: null,
        isDelete: false,
        isSection: false,
        details: detailsData,
        setter: (value: Partial<DataState>) =>
          set(
            (state) => ({
              editId: value.editId,
              isDelete: state.isDelete || value.isDelete,
              isSection: value.isSection,
              home: { ...state.home, ...value.home },
              itinerary: { ...state.itinerary, ...value.itinerary },
              details: { ...state.details, ...value.details },
            }),
            false,
            `Set Itinerary`
          ),
        reset: () =>
          set({
            home: homeData,
            itinerary: itineraryData,
            details: detailsData,
          }),
        resetItinerary: (value: Partial<DataState>) =>
          set(
            () => ({
              itinerary: { ...itineraryData, ...value.itinerary },
            }),
            false,
            `Reset Itinerary`
          ),
      }))
    ),
    { name: "together-data", storage: createJSONStorage(() => sessionStorage) }
  )
);
