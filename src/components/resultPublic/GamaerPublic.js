import React, { useMemo } from 'react'
import { useParams, Navigate,useNavigate } from "react-router-dom"
import {getHeroById} from "../../selectores/getById"
export const GamaerPublic = () => {

 
  
  const {idgame} =useParams();
  const navegate = useNavigate();
    
  
     const juego = useMemo(()=>getHeroById(idgame),[idgame]);

   const volverPaginaPrincipal = ()=>{
     navegate(-1)
   }
  
  if(!juego){
   return <Navigate to="/" />

   }
   const imagenPath= `/assets/img/${juego.id}.jpg`
 
  return (
  <div className='bg-gradient-to-r from-green-400  to-blue-500 h-screen '>
      <div className='container mx-auto p-5 '>
      <div className='w-11/12 h-80 mx-auto my-6 block '>
      <div className='bg-white w-full overflow-hidden rounded rounded-md flex '>
        <div className='imagen w-1/2'>
        <img className="w-full h-60 mt-0 object-cover animate__animated animate__fadeInLeft"  src={imagenPath} alt={juego.name} title={juego.name}  />

        </div>
      <div className='w-1/2'>
      <div className='flex  flex-col m-3 '>
      <h2 className='text-blue-600 truncate'>{juego.name}</h2>
      <h3 className='text-gray-800 truncate'>{juego.alter_ego}</h3>
      </div>
      <p className='mx-3 truncate'>{juego.first_appearance}</p>
     <button className='mx-3 my-2 text-white bg-blue-600 p-1 rounded hover:bg-blue-500'
     onClick={volverPaginaPrincipal}>Volver</button>
      </div>
    </div>
      </div>
    </div>
  </div>
  )
}
