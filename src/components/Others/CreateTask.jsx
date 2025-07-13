import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const authContext = useContext(AuthContext);
  const refreshData = authContext?.refreshData;

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignTo, setAssignTo] = useState('');

  const SubmitHandler = (e) => {
    e.preventDefault();

    console.log('Form submitted!');
    console.log('Form data:', { taskTitle, taskDescription, taskDate, category, assignTo });

    // Validate form fields
    if (!taskTitle || !taskDescription || !taskDate || !category || !assignTo) {
      alert("Please fill in all fields!");
      return;
    }

    // Create task object
    const newTask = {
      id: Date.now(),
      taskTitle,
      taskDescription,
      taskDate,
      category,
      assignedTo: assignTo,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    };

    console.log('New task created:', newTask);

    // Get existing employees from localStorage
    const existingEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
    console.log('Existing employees:', existingEmployees);

    // Find the employee and add the task
    let taskAdded = false;
    const updatedEmployees = existingEmployees.map(employee => {
      if (employee.firstName === assignTo) {
        console.log('Found matching employee:', employee.firstName);
        taskAdded = true;
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskCounts: {
            ...employee.taskCounts,
            newTask: employee.taskCounts.newTask + 1
          }
        };
      }
      return employee;
    });

    if (!taskAdded) {
      alert(`Employee "${assignTo}" not found! Available employees: Arjun, Sneha, Ravi`);
      return;
    }

    console.log('Updated employees:', updatedEmployees);

    // Save back to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    console.log('Saved to localStorage');

    // Refresh the context data
    if (refreshData) {
      refreshData();
    }

    alert('Task created successfully!');

    // Reset form
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setCategory('');
    setAssignTo('');
  };

  return (
    <div className='flex flex-col items-center justify-center h-full w-full border-2 border-red-400 mt-5' >
      {/* <h1 className="text-white text-3xl font-bold font-mono">Create Task</h1> */}
      <form onSubmit={(e)=>{
        SubmitHandler(e)
      }}
      className=' p-2 rounded w-full h-full flex flex-col lg:flex-row justify-between mt-4 gap-4'>
        <div className='p-4 flex-1 flex flex-col'>
          <h3 className="text-white">Task Title</h3>
          <input value={taskTitle} onChange={(e)=>{
            setTaskTitle(e.target.value)
          }} className='bg-transparent outline-none text-white border-2 border-red-400 p-2 text-base rounded w-full placeholder:text-grey-300 text-sm' placeholder='Make a UI design' type="text"/>
          <h3 className="text-white mt-5">Date</h3>
          <input value={taskDate} onChange={(e)=>{
            setTaskDate(e.target.value)
          }} className='bg-transparent outline-none text-white border-2 border-red-400 p-2 text-base rounded w-full placeholder:text-grey-300 text-sm' type="date"/>
          <h3 className="text-white mt-5">Assign To</h3>
          <input value={assignTo} onChange={(e)=>{
            setAssignTo(e.target.value)
          }} className='bg-transparent outline-none text-white border-2 border-red-400 p-2 text-base rounded w-full placeholder:text-grey-300 text-sm' placeholder='John Doe' type="text"/>
          <h3 className="text-white mt-5">Category</h3>
          <input value={category} onChange={(e)=>{
            setCategory(e.target.value)
          }} className='bg-transparent outline-none text-white border-2 border-red-400 p-2 text-base rounded w-full placeholder:text-grey-300 text-sm' placeholder='Design/Development/ETC' type="text"/>
        </div>

        <div className='flex flex-col p-4 flex-1'>
          <h3 className="text-white">Description</h3>
          <textarea  value={taskDescription} onChange={(e)=>{
            setTaskDescription(e.target.value)
          }} className='w-full h-32 md:h-[225px] text-sm py-2 px-4 rounded outline-none bg-transparent border-2 border-red-400 text-white placeholder:text-grey-300 resize-y'></textarea>
          <button className='bg-red-400 text-white border-2 border-red-400 hover:bg-red-300 hover:text-white transition-all p-2 text-sm w-full rounded mt-6'>Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;