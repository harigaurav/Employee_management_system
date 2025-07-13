import React, { useEffect, useState } from 'react';
import  {createContext}  from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext =createContext();

const AuthProvider = ({children}) => {
  const[userdata, setUserData]=useState(null)

  useEffect(() => {
    // Only set initial data if localStorage is empty
    const existingEmployees = localStorage.getItem('employees');
    const existingAdmin = localStorage.getItem('admin');

    if (!existingEmployees || !existingAdmin) {
      setLocalStorage()
    }

    const {employees,admin}=getLocalStorage()
    setUserData({employees,admin})

  }, []);

  // Function to refresh data from localStorage
  const refreshData = () => {
    const {employees,admin}=getLocalStorage()
    setUserData({employees,admin})
  };

  return (
    <div>
       <AuthContext.Provider value={{...userdata, refreshData}}>
        {children}
       </AuthContext.Provider>
    </div>
  );
};

export default  AuthProvider;