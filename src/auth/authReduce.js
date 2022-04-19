import {types} from "../types/types"

// const state ={
//     name:"daniel ospina",
//     logged:true

// }

export const authReduce = (state={}, action )=>{

    switch (action.type) {
        case types.login:
            return{
                ...action.payload,
                logged:true
            }
            
            
        case types.logout:
            return{
                logged:false
            }

    
        default:
            break;
    }

}