export interface UserTypes {
  name?: string | null;
  email: string | undefined;
  avatar?: string | null;
  userId?: string | undefined;
  phone?: string | null;
  remember?: boolean;
  logger: boolean;
  role: string | null;
}

export interface UserState {
  user: UserTypes;
  setter: (data: Partial<UserState>) => void;
  reset(): void;
}
