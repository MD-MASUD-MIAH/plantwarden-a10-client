import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
 const provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
const logout = () => {
    setLoading(true)
    return signOut(auth);
  };

  const googleLogin = ()=>{


    setLoading(true) 

    return signInWithPopup(auth,provider)


  }
    const  createUser =(email,password) =>{


        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)


        
    }

    const updateUser = (updateData) =>{

   
 setLoading(true)
    return updateProfile(auth.currentUser,updateData)
  }

  const loginUser = (email,password)=>{

 setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }


  useEffect(() => {
    const unsusribe = onAuthStateChanged(auth, (currentUser) => {

      setLoading(false)
      setUser(currentUser);
    });
    return () => {
      unsusribe();
    };
  }, []);

 const [sort, setSort] = useState(false); 

    const userInfo = {

  createUser,
  updateUser,
  setUser ,
  loginUser ,
  loading,
  user,
  logout,
  googleLogin,
  sort, setSort,
  isDark, setIsDark
    }
    return (
       <AuthContext value={userInfo}>

        {children}
       </AuthContext>
    );
};

export default AuthProvider;