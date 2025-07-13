import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="border-2 border-red-400 mt-5 rounded p-3 h-96 w-full flex flex-col">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row bg-red-400 px-4 py-2 rounded justify-between items-start sm:items-center mt-3 min-h-[50px]">
        <h2 className="w-full  text-center">Employee Name</h2>
        <h3 className="w-full  text-center">New Task</h3>
        <h5 className="w-full  text-center">Active Task</h5>
        <h5 className="w-full text-center">Completed Task</h5>
        <h5 className="w-full  text-center">Failed Task</h5>
      </div>
      {/* Scrollable Task List */}
      <div id="allTask" className="overflow-auto flex-1 mt-5">
        {authData.employees.map((elem, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row bg-transparent px-4 py-2 rounded justify-between items-start sm:items-center mt-3 min-h-[50px]"
          >
            <h2 className="w-full sm:w-1/5 text-white text-center">{elem.firstName}</h2>
            <h3 className="w-full sm:w-1/5 text-white text-center">{elem.taskCounts.newTask}</h3>
            <h5 className="w-full sm:w-1/5 text-white text-center">{elem.taskCounts.active}</h5>
            <h5 className="w-full sm:w-1/5 text-white text-center">{elem.taskCounts.completed}</h5>
            <h5 className="w-full sm:w-1/5 text-white text-center">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;