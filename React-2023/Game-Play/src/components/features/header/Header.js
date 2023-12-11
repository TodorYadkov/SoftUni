import { NavLink } from "react-router-dom";

import styles from "./Header.module.css"
import { useAuthContext } from "../../core/hooks/useAuthContext";

export default function Header() {
    const { isAuthenticated } = useAuthContext();

    return (
        <header>
            <h1><NavLink to="/" className={({ isActive, isPending }) => isActive ? `${styles.active} home` : "home"}>GamesPlay</NavLink></h1>
            
            <nav>
                <NavLink to="/games" className={({ isActive, isPending }) => isActive ? styles.active : ""}>All games</NavLink>
                {
                    isAuthenticated
                        ?
                        <div id="user">
                            <NavLink to="/games/create" className={({ isActive, isPending }) => isActive ? styles.active : ""}>Create Game</NavLink>
                            <NavLink to="/users/logout" className={({ isActive, isPending }) => isActive ? styles.active : ""}>Logout</NavLink>
                        </div >
                        :
                        <div id="guest" >
                            <NavLink to="/users/login" className={({ isActive, isPending }) => isActive ? styles.active : ""}> Login</NavLink >
                            <NavLink to="/users/register" className={({ isActive, isPending }) => isActive ? styles.active : ""}> Register</NavLink >
                        </div >
                }
            </nav >
        </header >
    );
}