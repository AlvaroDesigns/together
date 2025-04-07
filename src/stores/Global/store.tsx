import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Home, Itinerary, ROLES, StoreState, User } from './interfaces';

const userData: User = {
  name: null,
  email: undefined,
  avatar: null,
  userId: undefined,
  remember: false,
  auth: false,
  phone: null,
  language: null,
  role: ROLES.USER,
};

const homeData: Home = {
  products: [],
};

const itineraryData: Itinerary = {
  budget: [],
  isfetching: false,
  days: undefined,
  editId: undefined,
  endDate: undefined,
  id: undefined,
  image: undefined,
  items: [],
  startDate: undefined,
  title: undefined,
  weather: null,
};

const storeCreator: StateCreator<StoreState, [], []> = (set) => ({
  isErrorService: false,
  isItinerary: false,
  user: userData,
  home: homeData,
  itinerary: itineraryData,
  setChangeItinerary: (value: boolean) => set(() => ({ isItinerary: value })),
  errorService: () =>
    set((state: StoreState) => ({ isErrorService: !state.isErrorService })),
  setterUser: (value: Partial<User>) =>
    set(() => ({
      user: {
        ...userData,
        ...value,
      },
    })),
  setterHome: (value: Partial<Home>) =>
    set(() => ({
      home: {
        ...homeData,
        ...value,
      },
    })),
  setterItinerary: (value: Partial<Itinerary>) =>
    set((state) => ({
      itinerary: {
        ...state.itinerary,
        ...value,
      },
    })),
  reset: () =>
    set(
      () => ({
        isItinerary: false,
        isErrorService: false,
        user: userData,
        home: homeData,
        itinerary: itineraryData,
      }),
      false,
    ),
});

const persistedStoreCreator = persist(devtools(immer(storeCreator)), {
  name: 'data-storage',
});

export const useProviderStore = create<StoreState>()(persistedStoreCreator);
