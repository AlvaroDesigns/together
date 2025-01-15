import { AUHT_NAME } from "@/constants";
import { useUserStore } from "@/stores";
import React, { createContext, useContext } from "react";
import { RouterProviderProps } from "react-router-dom";

interface AuthContextType {
  storedToken: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{
  children: React.ReactNode;
  router: RouterProviderProps["router"];
}> = ({ children, router }) => {
  const storedToken = localStorage.getItem(AUHT_NAME);
  const logger = useUserStore((state) => state.user.logger);

  const { pathname } = window.location;

  if (logger && pathname.length === 1) {
    router.navigate("/home");
    return null;
  }

  return (
    <AuthContext.Provider value={{ storedToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
