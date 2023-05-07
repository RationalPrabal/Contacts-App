import { LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./actionType"
let token
if (typeof window !== 'undefined') {
    // Access localStorage here
    token= JSON.parse(localStorage.getItem("token"))
  }
const initState={
    isAuth:token?true:false,
    user:"",
    registered:false,
    loading:false,
token:token||null
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case SIGNUP_LOADING:{
            return {
                ...state,loading:true
            }
        }
        case SIGNUP_SUCCESS:{
            
            return {
                ...state,loading:false,registered:true
            }
        }
        case LOGIN_LOADING:{
            return{
                ...state,loading:true
            }
        }
        case LOGIN_SUCCESS:{
         
            return {
                ...state,isAuth:true,user:payload.data,loading:false,token:payload.token
            }
        }
        case LOGOUT_SUCCESS:{
            return{
                ...state,isAuth:false,user:""
            }
        }
        default:{
            return state
        }
    }
}