import { useNavigate } from "react-router-dom";

import { userLogout } from "../../../core/services/user-services/userService";
import { useAuthContext } from "../../../core/hooks/useAuthContext";

export default function Logout() {
    const navigate = useNavigate();
    const context = useAuthContext();

    userLogout(context)
        .then(data => {
            context.clearUserSession();
        })
        .catch(error => {
            context.clearUserSession();
        });

    navigate('/', { replace: true })

    return null;
}