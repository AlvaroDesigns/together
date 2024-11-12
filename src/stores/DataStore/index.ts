import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { DataState } from "./index.types";

const userData = {
  name: undefined,
  email: "",
  avatar: undefined,
};

export const useDataStore = create<DataState>()(
  devtools(
    immer((set) => ({
      user: userData,
      setter: (value: any) =>
        set(
          (state) => ({
            ...state,
            ...value,
            user: { ...state?.user, ...value?.user },
          }),
          false,
          "Set data"
        ),
    })),
    { name: "data-storage" }
  )
);
