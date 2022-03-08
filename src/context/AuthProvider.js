import React from "react";
import useFirebase from "../components/Firebase/useFirebase";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const allChildren = useFirebase();
  return (
    <AuthContext.Provider value={allChildren}>{children}</AuthContext.Provider>
  );
}
