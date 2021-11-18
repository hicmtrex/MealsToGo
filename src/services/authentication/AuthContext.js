import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase';

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      setUser(userLogin);
      setLoading(false);
      setIsAuth(true);
      console.log(userLogin);
    } catch (error) {
      setLoading(false);
      setError(error.toString());
      console.log(error);
    }
  };

  const register = async (email, password, repeatedPassword) => {
    //setLoading(true);
    if (password !== repeatedPassword) {
      setError('Error : Passwords do not match');
      return;
    }
    try {
      const userRegister = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userRegister);
      setLoading(false);
      setIsAuth(true);
      console.log(userLogin);
    } catch (error) {
      setLoading(false);
      setError(error.toString());
      console.log(error);
    }
  };

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setLoading(false);
    } else {
      setLoading(false);
    }
  });

  const values = {
    login,
    user,
    loading,
    error,
    isAuth,
    register,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
