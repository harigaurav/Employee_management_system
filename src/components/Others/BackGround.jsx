import React from 'react';

const BackGround = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute top-10 left-20 w-72 h-72 bg-white opacity-20 rounded-full filter blur-2xl"></div>
      <div className="absolute bottom-20 right-32 w-96 h-96 bg-red-400 opacity-15 rounded-full filter blur-xl"></div>
      <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-red-400 opacity-10 rounded-full filter blur-lg"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-white opacity-10 rounded-full filter blur-lg"></div>
    </div>
  );
};

export default BackGround;
