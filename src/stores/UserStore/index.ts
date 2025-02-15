import { ROLES } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { UserState, UserTypes } from "./index.types";

const userData: UserTypes = {
  name: null,
  email: undefined,
  avatar: null,
  userId: undefined,
  remember: false,
  logger: false,
  phone: null,
  language: null,
  role: ROLES.USER,
};

export const useUserStore = create<UserState>()(
  persist(
    devtools(
      immer((set) => ({
        user: userData,
        setter: (value: Partial<UserState>) =>
          set(
            (state) => ({
              ...state,
              ...value,
            }),
            false,
            `Set User Data`
          ),
        reset: () => set(() => ({ user: userData }), false, "Reset User Data"),
      }))
    ),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
    }
  )
);
