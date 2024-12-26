import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { UserState, UserTypes } from "./index.types";

const userData: UserTypes = {
  name: undefined,
  email: undefined,
  avatar: undefined,
  userId: undefined,
  remember: false,
};

export const useUserStore = create<UserState>()(
  persist(
    devtools(
      immer((set) => ({
        user: userData,
        setter: (value: any) =>
          set(
            (state) => ({
              ...state,
              ...value,
            }),
            false,
            `Set User Data`
          ),
        reset: () => set(() => userData, false, "Reset User Data"),
      }))
    ),
    { name: "together-user", storage: createJSONStorage(() => sessionStorage) }
  )
);
