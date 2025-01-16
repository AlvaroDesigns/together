import { AUHT_NAME } from "@/constants";
import { getAuth } from "@/utils";
import React, { useContext } from "react";
export interface AuthContext {
  isAuthenticated: boolean;
}

const AuthContext = React.createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const authentication = getAuth(AUHT_NAME);
  const isAuthenticated = !!authentication;

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
