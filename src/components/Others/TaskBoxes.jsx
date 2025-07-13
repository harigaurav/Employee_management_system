import React from 'react';

const TaskBox = ({Data}) => {
  return (
    <div className="flex flex-wrap justify-between items-end gap-5 mt-8 w-[100%]">
      <div className="bg-red-400 flex-1 min-w-[180px] max-w-[400px] h-[150px] rounded-xl p-5 flex flex-col items-start">
        <h2 className='text-2xl font-bold text-[white]' >{Data.taskCounts.newTask}</h2>
        <h3 className='text-lg font-semibold text-white ' >New Task</h3>
      </div>
      <div className="bg-blue-400 flex-1 min-w-[180px] max-w-[400px] h-[150px] rounded-xl p-5 flex flex-col items-start">
        <h2 className='text-2xl font-bold text-[white]' >{Data.taskCounts.active}</h2>
        <h3 className='text-lg font-semibold text-white ' >Active Task</h3>
      </div>
      <div className="bg-green-400 flex-1 min-w-[180px] max-w-[400px] h-[150px] rounded-xl p-5 flex flex-col items-start">
        <h2 className='text-2xl font-bold text-[white]' >{Data.taskCounts.completed}</h2>
        <h3 className='text-lg font-semibold text-white ' >Completed Task</h3>
      </div>
      <div className="bg-yellow-400 flex-1 min-w-[180px] max-w-[400px] h-[150px] rounded-xl p-5 flex flex-col items-start">
        <h2 className='text-2xl font-bold text-[white]' >{Data.taskCounts.failed}</h2>
        <h3 className='text-lg font-semibold  text-white' >Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskBox;