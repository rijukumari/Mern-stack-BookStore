import React, { createContext, useContext, useState } from "react";

// Create context
export const AuthContext = createContext();

// Provide context to children
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the context
export const useAuth = () => useContext(AuthContext);
