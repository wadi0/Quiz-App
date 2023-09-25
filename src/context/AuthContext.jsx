import React, { useContext, useEffect, useState } from 'react';
import '../Firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

const AuthContext = React.createContext();

export const useAuth=()=>{
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState()

    useEffect(()=>{
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const signup = async( email, password, name )=>{
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser,{
            displayName: name
        })

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        })
    }

    const signin = async( email, password )=>{
        const auth = getAuth();
        return await signInWithEmailAndPassword(auth, email, password);
        
    }

    const logout = ()=>{
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        signin,
        logout,
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}