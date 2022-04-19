import React from 'react'
import "../Index.css"
import imagen from "../img/4000_4_08.jpg"
import { Link} from 'react-router-dom'
export const Hero = () => {
  return (
    <>
    <div >
      <div className='frImagen container max-w-full flex w-full '>
        <div className='container mx-auto  p-14 m-5 rounded-xl flex justify-between  backdrop-blur-sm border-t border-l'>
         <div className=''>
         <h1 className='text-2xl md:text-6xl font-bold text-white mb-5 '>GameShop</h1>
          <h2 className='text-white  sm:text-2xl md:text-3xl block md:w-96 mb-9'>Descarga tus juegos favoritos y comienza una aventura increible.
          tu camino apenas empieza comeinza yá.
          </h2>
          <div>
           <Link to="/explorar" className='text-white p2 sm:p-3 md:p-4 bg-blue-900 rounded-md hover:bg-blue-800 duration-300'>Explorar mas</Link>
          </div>

         </div>
         <div>
           <img src={imagen} className="w-80 rounded-xl shadow-lg shadow-purple-500 hidden md:block" alt='logo'/>
         </div>
        </div>

      </div>
    </div>
    </>
  )
}
