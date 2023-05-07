import axios from "axios"
import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS,LOGIN_LOADING,LOGIN_SUCCESS,LOGIN_ERROR, LOGOUT_SUCCESS } from "./actionType"


//! register users
const signAPI= async(data)=>{
    try{
       
await axios.post("https://fluffy-plum-beetle.cyclic.app/user/register",data)
    }
    catch(e){
throw e
    }
}

export const registerUser=(data)=>async(dispatch)=>{
dispatch({type:SIGNUP_LOADING})
try{
 await signAPI(data)
 dispatch({type:SIGNUP_SUCCESS})

}
catch{
dispatch({type:SIGNUP_ERROR})
}
}


//! login users
const loginAPI= async(data)=>{
    try{
        
let res= await axios.post("https://fluffy-plum-beetle.cyclic.app/user/login",data)
return res.data
    }
    catch(e){
throw e
    }
}

export const loginUser=(data)=>async(dispatch)=>{
  
dispatch({type:LOGIN_LOADING})
try{
 let result= await loginAPI(data)

 dispatch({type:LOGIN_SUCCESS,payload:{token:result.token,data}})
localStorage.setItem("token",JSON.stringify(result.token))
}
catch{
dispatch({type:LOGIN_ERROR})
}
}

//! logout users

export const logout = () =>(dispatch) =>{
localStorage.setItem("token",null)
dispatch({type:LOGOUT_SUCCESS})
}