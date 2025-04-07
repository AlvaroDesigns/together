import { useProviderStore } from '@/stores/Global/store';
import React from 'react';

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const useProvider = () => {
  const { isErrorService, user, errorService, setOnBoarding, setterUser, resetUser } =
    useProviderStore();

  return {
    isErrorService,
    user,
    errorService,
    setOnBoarding,
    setterUser,
    resetUser,
  };
};
