import React, { useContext, useEffect, useState } from 'react';

import Login from './components/Authe/Login';
import Employee from './components/Dashboards/Employee';
import Admin from './components/Dashboards/Admin';
import { AuthContext } from './context/AuthProvider';
import { data } from 'autoprefixer';

const App = () => {
  const [user, setUser] = useState(null);
  const AuthData=useContext(AuthContext)
  const [LoggedInUerData, setLoggedInUserData] = useState(null);


  useEffect(()=>{
    const LoggedInUer=localStorage.getItem('LoggedInUser')
    if(LoggedInUer){
      const userData=JSON.parse(LoggedInUer)
      console.log(userData)
    }
  },[])
  

  const handleLogin = (email, password) => {
    if (AuthData) {
      // Check for admin login first
      const admin = AuthData.admin.find((admin) => admin.email === email && admin.password === password);
      if (admin) {
        setUser("admin");
        setLoggedInUserData(admin) 
        localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin',data:admin}))
        return;
      }

      // Check for employee login
      const employee = AuthData.employees.find((employee) => employee.email === email && employee.password === password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee',data:employee}))
        return;
      }

      // If neither admin nor employee found
      alert("Invalid Credentials");
    } else {
      alert("Loading user data...");
    }
  };


  return (
    <>
    
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <Admin Data={LoggedInUerData} />}
      {user === 'employee' && <Employee  Data={LoggedInUerData}/>}
    </>
  );
};

export default App;

