export interface UserTypes {
  name: string | null;
  email: string | undefined;
  avatar?: string | null;
  userId?: string | undefined;
  remember: boolean;
}

export interface UserState {
  user: UserTypes;
  setter: (data: Partial<UserState>) => void;
  reset(): void;
}
