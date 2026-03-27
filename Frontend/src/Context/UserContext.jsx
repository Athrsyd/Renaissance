/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";
import HookAuth from "../Hook/HookAuth";


const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const { fetchUserData } = HookAuth();

    useEffect(() => {
        const fetch = async () => {
            const userData = await fetchUserData();
            if (userData) {
                setUser(userData);
            }
            console.log("Fetched user data:", userData);
        };
        fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // hanya dijalankan sekali

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}