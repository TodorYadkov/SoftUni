import { createContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
// Create context
export const AuthContext = createContext(null);
// Crate auth provider to use in app only use AuthProvider around the routes
export const AuthProvider = ({ children }) => {
    const [localStorageState, setLocalStorageState] = useLocalStorage();
    
    const contextValues = {
        addUserSession: (data) => setLocalStorageState(data),
        clearUserSession: () => setLocalStorageState(),
        getUserSession: () => localStorageState,
        isAuthenticated: !!localStorageState,
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};