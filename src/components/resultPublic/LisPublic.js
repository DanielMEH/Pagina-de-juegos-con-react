import React, { useMemo } from 'react'

import {PublicCard} from "./PublicCard"
import {getPublisher} from "../../selectores/getPublic"
export const LisPublic = ({publication}) => {
  const juegos = useMemo(()=>getPublisher(publication),[publication])
  return (
    <div className='md:container  gap-1 w-11/12 mx-auto grid grid-cols-1 lg:w-4/5 lg:mx-auto md:grid-cols-2 sm:grid-cols-2
      lg:gid-cols-2 2xl:grid-cols-3 2xl 
      animate__animated animate__fadeIn'>

        {
            juegos.map(juego => (
                <PublicCard
                key={juego.id}
                {...juego}
                />
            ))
        }

    </div>
  )
}
