import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { DataState, HomeTypes, UserTypes } from "./index.types";

const userData: UserTypes = {
  name: undefined,
  email: undefined,
  avatar: undefined,
  remember: false,
};

const homeData: HomeTypes = {
  name: undefined,
  email: undefined,
  itinerary: undefined,
};

export const useDataStore = create<DataState>()(
  persist(
    devtools(
      immer((set) => ({
        user: userData,
        home: homeData,
        setter: (value: any) =>
          set(
            (state) => ({
              ...state,
              ...value,
              user: { ...state?.user, ...value?.user },
              home: { ...state?.home, ...value?.home },
            }),
            false,
            "Set data"
          ),
        reset: () => set({ home: homeData }),
      }))
    ),
    { name: "data-storage", storage: createJSONStorage(() => sessionStorage) }
  )
);
