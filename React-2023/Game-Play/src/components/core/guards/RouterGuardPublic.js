import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";


export default function RouterGuardPublic({ children }) {
    const context = useAuthContext();
    
    if (context.isAuthenticated) {
        return <Navigate to="/games" />
    }

    return children ? children : <Outlet />
}