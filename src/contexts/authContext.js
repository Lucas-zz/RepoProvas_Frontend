import React, { createContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import api from '../services/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useLocalStorage('user', null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (user) {
            location.pathname === '/sign-in' && navigate('/mainpage');
        } else {
            navigate('/sign-in');
        }
    }, []); //eslint-disable-line

    async function logOut() {
        try {
            await api.signOut(user.token);
            setUser(null);
            navigate('/sign-in');

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                logOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;