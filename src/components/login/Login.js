import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Login = () => {

  const navegate = useNavigate();
  const login =()=>{
    navegate("/",{
      replace:true,
    })
  }

  return (
    <>
    
    <div>
      <button className="text-white bg-blue-700
      absolute w-24 h-9 m-auto inset-px cursor-pointer"
      onClick={login}>
        login
      </button>
    </div>
    </>
  )
}
