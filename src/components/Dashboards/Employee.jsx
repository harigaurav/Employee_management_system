import React from 'react';
import Header from '../Others/Header';
import TaskBox from '../Others/TaskBoxes';
import TaskLIST from '../TaskLIst/TaskLIST';
import BackGround from '../Others/BackGround';

const Employee = ({Data}) => {
  return (
    <div className='p-7'>
        <BackGround/>
        <Header Data={Data}/>
        <TaskBox Data={Data}/>
        <TaskLIST Data={Data}/>

    </div>
  )
}

export default Employee;