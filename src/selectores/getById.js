
import {videoJuegos} from "../data/juegos"

   export const getHeroById = ( id = "") => {
  
      return videoJuegos.find( juego =>juego.id === id);


   }