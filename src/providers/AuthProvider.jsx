import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

// const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createRegisterUser = async(email,password) => {
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        await signOut(auth);  // Automatically sign out after successful registration
        return userCredential;
    }

    const signInUser = async (email,password) =>{
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        setUser(userCredential.user);
        return userCredential;

    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('saved data until signOut',currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return ()=> unSubscribe();
    },[])

    const userSignOut = async() =>{
        await signOut(auth);
        setUser(null);
    }

    const authInfo = {createRegisterUser,signInUser,userSignOut,user}

    return (
        <AuthContext.Provider value={authInfo}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;