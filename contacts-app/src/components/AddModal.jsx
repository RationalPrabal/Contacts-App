import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import React from 'react'

import { useDispatch } from 'react-redux'
import { MdAddCircleOutline } from 'react-icons/md'
import { createContact } from '@/redux/contacts/action'
 export function CreateModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch= useDispatch()
    const [data,setData]= React.useState({
        name:"",
        contact_number:"",
        email:"",
        address:"",
    })
   
    return (
      <>
      
       <div onClick={onOpen} className='flex w-[60%] sm:w-[20%] justify-around m-auto items-center bg-teal-500 rounded-md mt-8 cursor-pointer'>
  <p className='font-bold text-white text-lg'>Add New Contact</p>
< MdAddCircleOutline className='text-white text-4xl'/>
</div>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Contact</ModalHeader>
            <ModalCloseButton />
            <ModalBody  >
                <div className='flex justify-between font-bold'>
                <span>Name</span>
                -
                <input placeholder='Enter Contact Name' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}  />
                </div>
                <div className='flex justify-between font-bold'>
                <span>Contact Number</span>-
               <input type='number' placeholder='Enter Contact Number' value={data.contact_number} onChange={(e)=>setData({...data,contact_number:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Email</span>-
               <input type='email' placeholder='Enter Email' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Address</span>-
               <input placeholder='Enter Address' value={data.address} onChange={(e)=>setData({...data,address:e.target.value})} />
               </div>
              
               <div className='flex justify-center mt-5'>
                <button disabled={!data.name||!data.contact_number||!data.email||!data.address} onClick={()=>{
                 dispatch(createContact(data))
                 setData({
                  name:"",
                  contact_number:"",
                  email:"",
                  address:"",
                 })
                onClose()
                }}  className='bg-green-500 text-white text-bold p-3 disabled:cursor-not-allowed'>Add</button>
               </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }