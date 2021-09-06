import React, { createContext, useContext } from 'react'

import { useAuth } from '../hooks/useAuth'

const AuthContext = createContext();

function AuthProvider({ children }) {
    const {
        handleSubmit,
        handleLogout,
        authenticate,
        loading,
        errors
    } = useAuth()

    return (
        <AuthContext.Provider value={{
            handleSubmit,
            handleLogout,
            authenticate,
            loading,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )

}

const useAuthContext = () => {
    return useContext(AuthContext);
}

export { useAuthContext, AuthProvider }