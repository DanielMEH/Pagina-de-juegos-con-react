import React from 'react'
import "../Index.css"
import { NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navegate = useNavigate();
  const handleLogout =()=>{
    navegate("login",{
      replace:true
    })
  
  }
  return (
    <>
        <div className="flex w-full justify-between p-3 bg-blue-900 md:hidden">
        <div className="text-white text-xl">
        ReactLadingPages
          </div>
          <div>
            <button className="text-xl text-white border-b"
            onClick={handleLogout}> Logout</button>
          </div>
        </div>
    <div className='flex  bg-blue-900 items-center justify-center md:justify-between container max-w-full sticky top-0 z-10'>
      <div className='text-xl hidden md:block mx-4 text-white capitalize'>
        ReactLadingPages
      </div>
      <div className="flex">
        
        <ul className='flex justify-center'>
          <li className='mx-1 md:mx-4 bg-blue-900 text-white hover:text-red-400 cursor-pointer hover:bg-blue-800 sm:p-3 px-2 py-2 duration-300'>
            <NavLink to="/" className={({isActive})=> isActive ? "text-red-400 active px-2 py-2 sm:p-3": ""}>Inicio</NavLink>
          </li>
          <li className='mx-1 md:mx-4 bg-blue-900 text-white hover:text-red-400 cursor-pointer hover:bg-blue-800 sm:p-3 px-2 py-2 duration-300'>
            <NavLink to="/search" className={({isActive})=> isActive ? "text-red-400 active": ""}>buscar</NavLink>
          </li>
          <li className='mx-1 md:mx-4 bg-blue-900 text-white hover:text-red-400 cursor-pointer hover:bg-blue-800 sm:p-3 px-2 py-2 duration-300'>
          <NavLink to="/juegos">juegos</NavLink>
          </li>
          <li className='mx-1 md:mx-4 bg-blue-900 text-white hover:text-red-400 cursor-pointer hover:bg-blue-800 sm:p-3 px-2 py-2 duration-300'>
            <NavLink to="/blog">blog</NavLink>
          </li>
          <li className='mx-1 hidden sm:block md:mx-4 bg-blue-900 text-white hover:text-red-400 cursor-pointer hover:bg-blue-800 sm:p-3 px-2 py-2 duration-300'>
            <NavLink to="/nosotros" >Nosotros</NavLink>
          </li>
          <li className='mx-1 hidden md:block md:mx-4 bg-blue-900 text-white hover:text-red-400 cursor-pointer hover:bg-blue-800 sm:p-3 px-2 py-2 duration-300'>
          <button className=" text-white hidden md:block"
          onClick={handleLogout}> Logout</button>

          </li>
        </ul>
  
        </div>
        
    </div>
    
    </>
  )

}