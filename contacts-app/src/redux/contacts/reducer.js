import { CREATE_CONTACT_ERROR, CREATE_CONTACT_LOADING, CREATE_CONTACT_SUCCESS,  DELETE_CONTACT_ERROR,  DELETE_CONTACT_LOADING,  DELETE_CONTACT_SUCCESS,  GET_CONTACT_ERROR,  GET_CONTACT_LOADING,  GET_CONTACT_SUCCESS,UPDATE_CONTACT_ERROR,UPDATE_CONTACT_LOADING,UPDATE_CONTACT_SUCCESS } from "./actionType"

const initState={
    data:[],
    loading:false,
    error:false,
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_CONTACT_LOADING:{
            return {
                ...state,loading:true,error:false
            }
        }
        case GET_CONTACT_SUCCESS:{
            return {
                ...state,data:payload,loading:false,error:false
            }
        }
            case GET_CONTACT_ERROR:{
                return {
                    ...state,loading:false,error:true
                }
            }
        
            case CREATE_CONTACT_LOADING:{
                return{
                    ...state,loading:true,error:false
                }
            }
        case CREATE_CONTACT_SUCCESS:{
            return {
                ...state,data:[...state.data,payload],loading:false,error:false
            }
        }
        case CREATE_CONTACT_ERROR:{
return{
    ...state,loading:false,error:true
}
        }

        case UPDATE_CONTACT_LOADING:{
            return{
                ...state,loading:true,error:false
            }
        }
        case UPDATE_CONTACT_SUCCESS:{
            let edited=state.data.map(el=>{
                if(el._id===payload.id){
                    return payload.data
                }
                else return el
            })
            return {
                ...state,data:edited,loading:false,error:false
            }
        }

        case UPDATE_CONTACT_ERROR:{
            return {
                ...state,loading:false,error:true
            }
        }

        case DELETE_CONTACT_LOADING:{
            return{
                ...state,loading:true,error:false
            }
        }

        case DELETE_CONTACT_SUCCESS:{
          
let dataAfterDeletion= state.data.filter(el=>{
   
    if(el._id!==payload){
    
        return el
    }
})

    return{
        ...state,loading:false,error:false,data:dataAfterDeletion
    }



        }

        case DELETE_CONTACT_ERROR:{
return{
    ...state,error:true,loading:false
}
        }


        default:{
            return state
        }
    }
}