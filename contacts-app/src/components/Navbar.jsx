import { logout } from '@/redux/auth/action'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function 
() {
  const {isAuth} =useSelector(store=>store.authReducer)
  const [text,setText]= React.useState("login")
  const router= useRouter()
const dispatch=useDispatch()
  React.useEffect(()=>{
if (isAuth){
  setText("LogOut")
}
else {
  setText("LogIn")
}


  },[isAuth])
  return (
    <div className="bg-pink-400 py-4 flex justify-around text-white italic">
<p onClick={()=>{
 if(isAuth){dispatch(logout())
 }
router.push('/login')
 
}} className='font-bold text-2xl cursor-pointer'>{text}</p>

<p onClick={()=>{
  router.push('/')
}} className='font-bold text-2xl cursor-pointer'>Dashboard</p>
    </div>
  )
}
