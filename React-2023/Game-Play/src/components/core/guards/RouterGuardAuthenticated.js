import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function RouterGuardAuthenticated({ children }) {
    const context = useAuthContext();
   
    if (!context.isAuthenticated) {
        return <Navigate to="/users/login" replace />;
    }

    return children ? children : <Outlet />;
};