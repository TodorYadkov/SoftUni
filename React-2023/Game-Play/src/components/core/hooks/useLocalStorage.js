import { useState } from "react";

import { userData } from "../environments/constants";

export const useLocalStorage = () => {
    // Create initial state with null or data from localStorage
    const [state, setState] = useState(JSON.parse(localStorage.getItem(userData)));
    // If the function is invoke with data, set new data as state
    // If the function is invoke with no data, set new state to null
    const setNewUserStatus = (newData) => {
        if (newData) {
            localStorage.setItem(userData, JSON.stringify(newData));
            setState(newData);
        } else {
            localStorage.removeItem(userData);
            setState(null);
        }
    };

    return [state, setNewUserStatus];
};