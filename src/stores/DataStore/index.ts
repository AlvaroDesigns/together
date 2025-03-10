import { VARIANT_TYPE_SECTION } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  BudgetTypes,
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

const budgetData: BudgetTypes = {
  expensive: null,
  types: [],
};

const itineraryData: ItineraryTypes = {
  date: "",
  days: 0,
  endDate: "",
  id: undefined,
  image: "",
  items: null,
  startDate: "",
  weather: weatherData,
  budget: [budgetData],
  load: true,
  title: "",
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

export const insuredData = {
  name: "",
  date: "",
  postCode: "",
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
        isEdits: false,
        details: detailsData,

        setter: (value: Partial<DataState>) =>
          set(
            (state) => ({
              editId: value.editId,
              isDelete: state.isDelete ?? value.isDelete,
              isEdits: value.isEdits ?? state.isEdits,
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
    {
      name: "data-storage", // name of the item in the storage (must be unique)
    }
  )
);
