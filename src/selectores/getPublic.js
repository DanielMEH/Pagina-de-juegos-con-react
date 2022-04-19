import {videoJuegos} from "../data/juegos"
export const getPublisher = (publication)=>{
    const validarPublic=["PO popular","AC accion","ES estrategia","CA casual"]
    if (!validarPublic.includes(publication)) {
         
        throw new Error(`${publication} No existe`)
        
    }
    return videoJuegos.filter(juego => juego.publicj === publication)

}