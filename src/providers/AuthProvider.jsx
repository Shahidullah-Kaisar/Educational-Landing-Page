import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

// const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {


    const createRegisterUser = async(email,password) => {
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        return userCredential;
    }

    const signInUser = async (email,password) =>{
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        return userCredential;

    }

    const authInfo = {createRegisterUser,signInUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;