export type FieldType =
  | "name"
  | "postCode"
  | "surname"
  | "email"
  | "phone"
  | "acceptsBasicInfo"
  | "acceptsMarketing"
  | "loader"
  | "error";

interface UsertData {
  name: string | undefined;
  email: string | undefined;
  avatar: string | undefined;
}

export interface DataState {
  user: UsertData;
  setter: (data: any) => void;
}
