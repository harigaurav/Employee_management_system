import React from 'react';

const Header = ({Data}) => {
  // Handle both employee and admin data
  const displayName = Data?.firstName || 'Admin';

  return (
    <div className='flex items-end justify-between  '>
      <h1 className='text-white text-xl'>Hello,<br /><span className='text-white text-3xl '>{displayName}👋</span></h1>
      <button onClick={() => {
          localStorage.removeItem('LoggedInUser');
          window.location.reload();
        }} className=' bg-red-900 text-white border-2 border-red-400 hover:bg-red-300 hover:text-white transition-all p-2 text-xl w-40 rounded-xl'>Log Out</button>
    </div>

  );
};

export default Header;