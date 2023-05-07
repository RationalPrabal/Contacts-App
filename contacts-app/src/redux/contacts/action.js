import axios from "axios"
import { CREATE_CONTACT_ERROR, CREATE_CONTACT_LOADING, CREATE_CONTACT_SUCCESS, DELETE_CONTACT_ERROR, DELETE_CONTACT_LOADING, DELETE_CONTACT_SUCCESS, GET_CONTACT_ERROR, GET_CONTACT_LOADING, GET_CONTACT_SUCCESS, UPDATE_CONTACT_ERROR, UPDATE_CONTACT_LOADING, UPDATE_CONTACT_SUCCESS } from "./actionType"


//! Get Contacts

const getApi=async(name,sort) =>{
    try {
        let token= JSON.parse(localStorage.getItem("token"))
 
        let result=await axios.get(`https://fluffy-plum-beetle.cyclic.app/contacts?name=${name}&sort=${sort}`,{
            headers:{
                Authorization:token
            }
        })
        
        return result.data
        
    } catch (error) {
       
        throw error
    }
}

export const getContacts=(name,sort)=>async(dispatch)=>{
dispatch({type:GET_CONTACT_LOADING})
try {

   let contacts= await getApi(name,sort)
    dispatch({type:GET_CONTACT_SUCCESS,payload:contacts})
} catch (error) {
    dispatch({type:GET_CONTACT_ERROR})
}
}


//! Create Contact


const createApi=async(data) =>{
    try {
        let token= JSON.parse(localStorage.getItem("token"))
      await axios.post("https://fluffy-plum-beetle.cyclic.app/contacts/create",data,{
        headers:{
            Authorization:token
        }
      })
    } catch (error) {
        throw error
    }
}

export const createContact=(data)=>async(dispatch)=>{
dispatch({type:CREATE_CONTACT_LOADING})
try {
  await createApi(data)
    dispatch({type:CREATE_CONTACT_SUCCESS,payload:data})
} catch (error) {
    dispatch({type:CREATE_CONTACT_ERROR})
}
}


//! Update a contact

const updateApi=async(id,data) =>{
    try {
        let token= JSON.parse(localStorage.getItem("token"))
   await   axios.patch(`https://fluffy-plum-beetle.cyclic.app/contacts/updateContact/${id}`,data,{
    headers:{
        Authorization:token
    }
   })
        
    } catch (error) {
        throw error
    }
}

export const updateContact=(id,data)=>async(dispatch)=>{
dispatch({type:UPDATE_CONTACT_LOADING})
try {
    await updateApi(id,data)
    dispatch({type:UPDATE_CONTACT_SUCCESS,payload:{id,data}})
} catch (error) {
    dispatch({type:UPDATE_CONTACT_ERROR})
}
}


//! Delete a contact


const deleteApi=async(id) =>{
    try {
        let token= JSON.parse(localStorage.getItem("token"))
    await  axios.delete(`https://fluffy-plum-beetle.cyclic.app/contacts/deleteContact/${id}`,{
        headers:{
            Authorization:token
        }
    })
        
    } catch (error) {
        throw error
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
dispatch({type:DELETE_CONTACT_LOADING})
try {
    await deleteApi(id)
    
    dispatch({type:DELETE_CONTACT_SUCCESS,payload:id})
} catch (error) {
    dispatch({type:DELETE_CONTACT_ERROR})
}
}
