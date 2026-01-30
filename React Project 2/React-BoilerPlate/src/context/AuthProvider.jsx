import { createContext } from "react";
import useCredential from "../hooks/useCredential";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 const allContext = useCredential();
    return (
    <AuthContext.Provider value={allContext}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;