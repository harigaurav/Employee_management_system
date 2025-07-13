import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskLIST = ({Data}) => {
  return (
    <div  id='task' className="h-[50vh] w-full  mt-10 rounded-xl flex gap-7 justify-start items-center flex-nnowrap p-4 overflow-x-auto">
    {Data.tasks.map((elem,idx)=>{
        if(elem.newTask){
            return <NewTask key={idx} Data={elem}/>
        }
        if(elem.active){
            return <AcceptTask key={idx} Data={elem}/>
        }
        if(elem.completed){
            return <CompleteTask key={idx}  Data={elem}/>
        }
        if(elem.failed){
            return <FailedTask key={idx}  Data={elem}/>
        }
    })}

    </div>
  )
}

export default TaskLIST;