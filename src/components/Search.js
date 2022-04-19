import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import  queryString from "query-string"
import { useForm } from '../hooks/useForm'
import { getplaysByName } from '../selectores/getplaysByName'
import { PublicCard } from './resultPublic/PublicCard'
export const Search = () => {

 const navegate = useNavigate();
 const location = useLocation()
 const {q =""} = queryString.parse(location.search)
 
 const [formValues,handleInputChange] =useForm({
     searchText:q,
 })
 const {searchText} = formValues
 const playsFilter = useMemo(()=>getplaysByName(q),[q])

    const handleSeacrh = (e)=>{
        e.preventDefault()
        console.log(searchText)
        navegate(`?q=${searchText}`)

    }
  return (
    <>
    <div className='bg-white mx-auto md:container  '>
    <h1 className='text-4xl text-center p-3 block'>Busqueda</h1>
    <hr/>
    <div>
        <div>
            <hr/>
            <form onSubmit={handleSeacrh} className="flex m-4 justify-between border rounded overflow-hidden md:w-96 md:m-auto md:my-5" alt="imagen">
                <input type="text" placeholder='Buscar juego'
                name='searchText' autoComplete='off'
                value={searchText}
                onChange={handleInputChange}
                className="p-2 border block w-full focus:outline-none"
                />
                <button type='submit'
                className="bg-blue-700 text-white px-1"
                >Buscar..</button>
            </form>
            <div className='conatiner m-auto bg-gray-100'>
                <hr/>
                {
                    (q === "")
                    ?<div></div>
                    : (playsFilter.length === 0 )&&
                    <div className=" block text-center p-3">No hay resultados de: {q}</div>

                }
               <div className="bg-gray-100 p-1 w-full md:w-11/12 m-auto mt-4 grid  gap-2  grid-cols-1 sm:grid sm:gap-2 sm:grid-cols-2 xl:grid-cols-3">
               {
                    playsFilter.map(play=>(
                        <PublicCard
                        key={play.id}
                        {...play}
                        
                        />
                    ))
                }
                   </div>
            </div>
        </div>
    </div>

    </div>
    </>
  )
}
