export interface UserTypes {
  name: string | undefined;
  email: string | undefined;
  avatar: string | undefined;
  userId: string | undefined;
  remember: boolean;
}

export interface UserState {
  user: UserTypes;
  setter: (data: unknown) => void;
  reset(): void;
}
