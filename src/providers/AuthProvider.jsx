import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);// 1. ekta context create kora
        const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => { // 3. authProvider component k main.jsx er vitore set kora ....

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); //loading spinner use korar jonno state ta use kora holo 

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }
    
   useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currently user', currentUser);
            setUser(currentUser);
            setLoading(false); // data paye jawar por setLoading false dekhabe...

            return () => {
                unSubscribe()
            }
        })
   } ,[])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        signInWithGoogle,
        signOutUser
    }

    return (// 2. ekta authContext er network set kora....
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. create provider
 * 3. set a value with something (authInfo)
 * 4. [attention please !!!!]
 * 5. use the authProvider in the main.jsx
 * 6. access the children inside the authProvider in the main.jsx 
 * 7. export AuthContext
 */