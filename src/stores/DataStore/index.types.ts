export type FieldType =
  | 'name'
  | 'postCode'
  | 'surname'
  | 'email'
  | 'phone'
  | 'acceptsBasicInfo'
  | 'acceptsMarketing'
  | 'loader'
  | 'error';

export interface AddressTypes {
  streetType: undefined | string;
  streetName: undefined | string;
  streetNumber: undefined | string;
  streetDoor: string;
  zipCode: undefined | string;
  aditionals: string;
  region: undefined | string;
  city: undefined | string;
}

interface ContactData {
  name: string | undefined;
  surname: string | undefined;
  email: string | undefined;
  phone: string | number | undefined;
  acceptsAccount: boolean;
  acceptsMarketing: boolean;
}

export interface PersonalData {
  nationality: string | null;
  dni: string | undefined;
  birthDate: string | Date;
  civil: string | null;
  gender: string | null;
  profession: string | null;
}

interface apiDataType {
  civil: Array<{ text: string; value: string }>;
  gender: Array<{ text: string; value: string }>;
  nationality: Array<{ text: string; value: string }>;
  profession: Array<{ text: string; value: string }>;
  regions: Array<{ text: string; value: string }>;
  streetType: Array<{ text: string; value: string }>;
}

interface configTypes {
  isApp: boolean;
  schollName: string;
  endDate: string;
}

interface statusTypes {
  start: boolean;
  signedRejected: boolean;
  adhesion: boolean;
  error: boolean;
}

export interface DataTypes {
  address: AddressTypes;
  contact: ContactData;
  personal: PersonalData;
  status?: statusTypes;
  id?: string | null;
}

export interface DataState extends DataTypes {
  apiData: apiDataType;
  status: statusTypes;
  config: configTypes;
  sign: string | null;
  // eslint-disable-next-line no-unused-vars
  setter: (start: any) => void;
  // eslint-disable-next-line no-unused-vars
  setApi: (apiData: any) => void;
  // set: (type: string, field: string, value: any) => void;
}
