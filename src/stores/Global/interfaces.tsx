export const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  VIEWER: 'VIEW',
};

export interface User {
  name?: string | null;
  email?: string;
  avatar?: string | null;
  userId?: string;
  remember?: boolean;
  auth?: boolean;
  phone?: string | null;
  language?: string | null;
  role?: string;
}

export interface Home {
  products: Array<object> | [];
  productId?: number;
}

interface DetailsTypes {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  type: string;
  description: string;
  image: string;
}

export interface WeatherType {
  humidity: null;
  temperatureMax: null;
  temperatureMin: null;
}

export interface BudgetType {
  expensive: number | null;
  types: string[];
}

export interface Itinerary {
  editId?: number;
  isfetching?: boolean;
  id?: number;
  days?: number;
  endDate?: string;
  image?: string;
  items?: [] | DetailsTypes[];
  startDate?: string;
  title?: string;
  weather?: WeatherType | null;
  budget?: [] | BudgetType[] | null;
  load?: boolean;
}

export interface StoreState {
  user: User;
  home: Home;
  itinerary: Itinerary | null;
  isErrorService: boolean;
  isItinerary: boolean;
  setChangeItinerary: (value: boolean) => void;
  errorService: () => void;
  setterUser: (value: Partial<User>) => void;
  setterHome: (value: Partial<Home>) => void;
  setterItinerary: (value: Partial<Itinerary>) => void;
  resetItinerary: (value: Partial<Itinerary>) => void;
  reset: () => void;
}
