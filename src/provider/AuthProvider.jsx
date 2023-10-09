import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = ()=>{
    return signInWithPopup(auth)
  }

  useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth, currentUser =>{
        console.log('user in the state changed', currentUser);
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
  },[])

  const logOut =()=>{
    setLoading(true)
    signOut(auth)
  }

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
