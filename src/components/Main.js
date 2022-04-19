import React from 'react'
import freeFire from "../img//freefire.jpeg"
import falgay from "../img/falgay.jpg"
import forNite from "../img/fornite.webp"
import "../Index.css"
import { Link, NavLink, Outlet } from 'react-router-dom'
export const Main = () => {
  return (
    <>
   <div className='container m-auto w-11/12'>
            <h1 className='text-center xl:w-4/5 max-w-7xl text-4xl m-6 md:text-6xl font-bold'>Más juegos</h1>
        <div className='container  flex flex-col md:flex-row md: justify-center  '>
            <div className='w-full xl:w-80 flex md:flex-col m-2 bg-white rounded-xl overflow-hidden' >
                <img src={freeFire} className="w-1/2 md:w-full object-cover " alt="imagen"/>
                <div className='w-1/2 md:w-full'>
                <strong className='mx-2 my-2 block text-xl'>Free fire</strong>
                <p className='text-[#1f2937] text-sm sm:text-base mx-2 my-2 block'>El juego mas popular. más de 100 millones de descargas
                   descarga ya
                </p>
                <Link to="/juegos" className='text-blue-800 hover:underline mx-2 sm:text-xl'>Más</Link>
                </div>
            </div>
            <div className='w-full xl:w-80 flex md:flex-col m-2 bg-white rounded-xl overflow-hidden'>
                <img src={forNite} className="w-1/2 md:w-full object-cover" alt="imagen"/>
                <div className='w-1/2 md:w-full'>
                <strong className='mx-2 my-2 block text-xl'>Fornite</strong>
                <p  className='text-[#1f2937] text-sm sm:text-base mx-2 my-2 block'>El juego mas popular. más de 80 millones de descargas
                   descarga ya
                </p>
                <Link to="/juegos" className='text-blue-800 hover:underline mx-3 text-xl '>Más</Link>
                </div>
                

            </div>
            <div className='w-full xl:w-80 flex md:flex-col m-2 bg-white rounded-xl overflow-hidden '>
                <img src={falgay} className=" w-1/2 md:w-full object-cover " alt="imagen"/>
                <div className='w-1/2 md:w-full'>
                <strong className='mx-2 my-2 block text-xl'>fal gays</strong>
                <p  className='text-[#1f2937] mx-2 my-2 block  text-sm sm:text-base'>El juego mas popular. más de 80 millones de descargas
                   descarga ya
                </p>
                <Link to="/juegos" className='text-blue-800 hover:underline mx-3 text-xl '>Más</Link>
                </div>
                

            </div>
           
        </div>
        </div>
    
    <div className='md:container mx-auto mt-5 '>
        <h2 className='text-center text-3xl md:text-6xl font-medium'>Juegos populares</h2>
        <p className='text-center mt-3 text-xl'>Juega + de 1000 de juegos </p>
        <nav className=' sm:container flex justify-between w-full md:w-3/5 md:m-auto  my-5 '>
            <NavLink to="/popular" className={({isActive})=> isActive ? "text-gray-700 text-center border-b-2 border-b-red-500  block w-full activeNavLink ":"text-gray-700 border-1  text-center border-b-2 border-b-gray-500 block w-full"}>Popular</NavLink>
            <NavLink to="/accion" className={({isActive})=> isActive ? "text-gray-700 text-center border-b-2 border-b-red-500  block w-full activeNavLink ":"text-gray-700 border-1  text-center border-b-2 border-b-gray-500 block w-full"}>Acción</NavLink>
            <NavLink to="/estrategia" className={({isActive})=> isActive ? "text-gray-700 text-center border-b-2 border-b-red-500  block w-full activeNavLink ":"text-gray-700 border-1  text-center border-b-2 border-b-gray-500 block w-full"}>Estrategia </NavLink>
            <NavLink to="/casual" className={({isActive})=> isActive ? "text-gray-700 text-center border-b-2 border-b-red-500  block w-full activeNavLink ":"text-gray-700 border-1  text-center border-b-2 border-b-gray-500 block w-full"}>Casual</NavLink>

        </nav>
        <Outlet/>
    </div>
    </>
  )
}
