import React, { createContext, useState, ReactNode } from "react";

import { AuthContextType } from "Types";
// Define the type for your authentication context

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps): React.ReactElement | null => {
  const [auth, setAuth] = useState<Record<string, any>>({}); // Initialize with your auth object structure

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export a hook to use the AuthContext
export default AuthContext;
