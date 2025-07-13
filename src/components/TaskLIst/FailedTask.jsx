import React from 'react'

const FailedTask = ({Data}) => {
  return (
     <div className=' flex-shrink-0 h-full w-[300px] bg-red-500 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 text-sm rounded text-white'>{Data.category}</h3>
        <h4 className='text-sm text-white'>   {Data.taskDate}</h4>
        </div>
        <h2 className='text-white text-2xl font-semibold mt-5'>{Data.taskTitle}</h2>
        <p className='text-white mt-4 text-sm'>
          {Data.taskDescription}

        </p>
        <div className='flex justify-center mt-4'>
            <button className='bg-green-500 text-white p-2 rounded text-sm active:scale-90 w-full' >Failed Task</button>
        </div>
      </div>
  )
}

export default FailedTask
