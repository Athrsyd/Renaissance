/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from 'react'
import HookAuth from '../Hook/HookAuth'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const { fetchUserData } = HookAuth()

    useEffect(() => {
        const load = async () => {
            const userData = await fetchUserData()
            if (userData) setUser(userData)
        }
        load()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps — dijalankan sekali saat mount

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}
