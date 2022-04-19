import React from 'react'
import {Link} from "react-router-dom"
export const PublicCard = ({
    id,
    name,
    publicj,
    alter_ego,
    first_appearance,
    characters

}) => {
  const imagenPath= `/assets/img/${id}.jpg`
  return (
    <>
    <div className="">
    <div className='bg-white w-full flx overflow-hidden mt-3 flex  rounded rounded-md animate__animated animate__fadeIn '>
       <img className="w-1/2 h-36 sm:h-60  object-cover "  src={imagenPath} alt={name} title={name}  />
     <div className="flex flex-col w-1/2">
     <div className='flex flex-col m-3 '>
      <h2 className='text-blue-600 truncate truncate'>{name}</h2>
      <h3 className='text-gray-800 '>{alter_ego}</h3>
      </div>
      <p className='mx-3 truncate '>{first_appearance}</p>
      <Link to={`/game/${id}`} className='text-center text-white sm:text-xl bg-blue-600 hover:bg-blue-700 sm:p-2 m-2 block rounded' >Mas</Link>

     </div>
    </div>

    </div>
    
    </>
  )
}
