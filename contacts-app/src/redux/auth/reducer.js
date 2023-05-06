import { LOGIN_SUCCESS } from "./actionType"

const initState={
    isAuth:false,
    user:""
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case LOGIN_SUCCESS:{
            return {
                ...state,isAuth:true,user:payload
            }
        }
        default:{
            return state
        }
    }
}