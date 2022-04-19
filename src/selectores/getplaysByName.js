import {videoJuegos} from "../data/juegos"

export const getplaysByName=(name ="")=>{
    if(name.length === 0){

        return []
    }

     name = name.toLowerCase();
     return videoJuegos.filter(juego => juego.name.toLowerCase().includes(name))
  
}