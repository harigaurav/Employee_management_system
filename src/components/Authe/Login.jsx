import React, { useState } from 'react';
import BackGround from '../Others/BackGround';

const Login= ({handleLogin}) => {

  
  const[email, setEmail]= useState('')
  const[password, setPassword]= useState('')


  const SubmitHandler= (e)=>{
    e.preventDefault()
    handleLogin(email, password)
    console.log("Submitted")
    console.log(email, password)
    setEmail('')
    setPassword('')
  }
  return (
    <div className='flex items-center justify-center h-screen w-screen relative overflow-hidden'>
      <BackGround/>
      <BackGround/>

      <div className='border-2 border-red-400 rounded-3xl h-96 w-96 z-10 bg-opacity-80 bg-black'>
        <form 
        onSubmit={(e)=>{
          SubmitHandler(e)
        }}
        className='flex items-center justify-center flex-col gap-5 m-20 '>
          <h1 className='text-red-400 text-4xl font-bold  '>Login</h1>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          className=' bg-transparent outline-none text-white border-2 border-red-400 p-2 text-xl rounded-full w-64 placeholder:text-gray-700' placeholder='Email'type="email" />
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className=' bg-transparent outline-none text-white border-2 border-red-400 p-2 text-xl rounded-full w-64 placeholder:text-gray-700' placeholder='Password' type="password" />
          <button className=' bg-red-400 text-white border-2 border-red-400 hover:bg-red-300 hover:text-white transition-all p-2 text-xl w-64 rounded-full active:scale-90'>Submit</button>
        </form>
      </div>
      
    </div>
  ) 
}

export default Login;