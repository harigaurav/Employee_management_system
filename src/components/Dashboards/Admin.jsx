import React from 'react';
import Header from '../Others/Header';
import CreateTask from '../Others/CreateTask';
import AllTask from '../Others/AllTask';
import BackGround from '../Others/BackGround';

const Admin = ({Data}) => {
  return (
    <div className='p-4'>
      <BackGround/>
      <Header Data={Data}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default Admin;