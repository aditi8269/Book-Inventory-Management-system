// import React from 'react'
import app from "../firebase/firebase.config/";
import {  createContext, useEffect, useState } from "react";
import { getAuth , createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
  const [user ,setUser] = useState(null);
  const [loading , setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

   const loginWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth , googleProvider)
   }

   const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = () => {
    setLoading(true);
    return signOut(auth);
   }

  // useEffect(() =>{
  //   const unsubscribe = onAuthStateChanged(auth , currentUser =>{
  //     // console.log(currentUser)
  //     setUser(currentUser)
  //     setLoading(false);
  //   });
  //   return unsubscribe();
  // } ,[])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Fix: Don't call the unsubscribe function immediately
  }, []);

  const authInfo = {
    user,
    createUser ,
    loginWithGoogle,
    loading,
    login,
    logOut,
 
  }
    
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

