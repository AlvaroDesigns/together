import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { DataState } from './index.types';

const contactData = {
  name: undefined,
  surname: undefined,
  email: '',
  phone: '',
  acceptsAccount: false,
  acceptsMarketing: false,
};

const personalData = {
  nationality: 'E-ESPAÑA',
  dni: undefined,
  birthDate: '',
  civil: '',
  gender: '',
  profession: '',
};

const addressData = {
  streetType: undefined,
  streetName: undefined,
  streetNumber: '',
  streetDoor: '',
  zipCode: undefined,
  aditionals: '',
  region: undefined,
  city: undefined,
};

const apiData = {
  civil: [],
  gender: [],
  nationality: [],
  profession: [],
  regions: [],
  streetType: [],
};

const config = {
  isApp: false,
  schollName: '',
  endDate: '',
  id: null,
};

const status = {
  start: false,
  signedRejected: false,
  adhesion: false,
  error: false,
};

export const useDataStore = create<DataState>()(
  devtools(
    immer((set) => ({
      contact: contactData,
      personal: personalData,
      address: addressData,
      config,
      status,
      apiData,
      id: null,
      sign: null,
      setter: (value: any) =>
        set(
          (state) => ({
            ...state,
            ...value,
            contact: { ...state?.contact, ...value?.contact },
            personal: { ...state?.personal, ...value?.personal },
            address: { ...state?.address, ...value?.address },
            config: { ...state?.config, ...value?.config },
            status: { ...state?.status, ...value?.status },
            sign: value?.sign,
          }),
          false,
          'Set data',
        ),

      setApi: (api) => set(() => ({ apiData: api })),
    })),
    { name: 'data-storage' },
  ),
);
