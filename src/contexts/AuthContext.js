import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }
    
    const logout = async () => {
        await auth.signOut();
        history.push('/');
    }
    
    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email);
    }
    
    const updateEmail = (email) => {
        return user.updateEmail(email);
    }
    
    const updatePassword = (password) => {
        return user.updatePassword(password);
    }
    
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            if (user) history.push('/chats');
        })
    }, [user, history])
    
    const value = {
        user,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }
    
    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
    }