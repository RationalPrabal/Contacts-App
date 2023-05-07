import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleContact from '@/components/SingleContact'
import { getContacts } from '@/redux/contacts/action'
import { CreateModal } from '@/components/AddModal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data,loading,error}= useSelector(store=>store.contactReducer)
  const {isAuth}=useSelector(store=>store.authReducer)
const [auth,setAuth]= useState(false)
  const dispatch= useDispatch()

  React.useEffect(()=>{
    dispatch(getContacts())

  },[])
useEffect(()=>{
if(isAuth){
  setAuth(true)
}
else {
  setAuth(false)
}
},[isAuth])
  
  

return auth ?   <div>
  <div className='flex justify-between  w-[100%] sm:w-[40%] m-auto mt-5 '>
<input onChange={(e)=>{
setTimeout(()=>{
dispatch(getContacts(e.target.value,undefined))
},3000)
}} type="text" className="" placeholder="Search Contacts"/>
<select onChange={(e)=>{
dispatch(getContacts(undefined,e.target.value))
}} className="cursor-pointer">
  <option value="">Sort Contacts By Name</option>
  <option value="1">Ascending</option>
  <option value="-1">Descending</option>
</select>

</div>
  <CreateModal/>
 <div className='w-[90%] m-auto grid grid-cols-3 gap-6 mt-12'>
  {
    data.map(contact =><SingleContact key={contact._id} contact={contact} />)
  }

 </div>
 </div>
 :<div className='text-3xl w-[50%] m-auto mt-20 font-bold flex justify-center items-center'>
  <p>Please Login...</p>
 </div>

}

