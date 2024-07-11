/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { tokenCheck } from "../HelperToken";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

function AgriProvider({ children }) {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const userInfo = tokenCheck();
        setUser(userInfo);
    }, [navigate]);

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                isLoading,
                setIsLoading
            }}
        >{children}</AppContext.Provider>
    )
}

export const AppState = () => {
    return useContext(AppContext);
}
export default AgriProvider;