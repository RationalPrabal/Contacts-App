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
import {VscEdit} from "react-icons/vsc"

import { useDispatch } from 'react-redux'
import { updateContact } from '@/redux/contacts/action'
 export function EditModal({contact}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch= useDispatch()
    const [data,setData]= React.useState({
        _id:contact._id,
        name:contact.name,
        contact_number:contact.contact_number,
        email:contact.email,
        address:contact.address,
    })
    return (
      <>
       
       <VscEdit onClick={onOpen} className='text-blue-600 cursor-pointer'/>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Contact Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody  >
                <div className='flex justify-between font-bold'>
                <span>Name</span>
                -
                <input value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}  />
                </div>
                <div className='flex justify-between font-bold'>
                <span>Contact Number</span>-
               <input value={data.contact_number} onChange={(e)=>setData({...data,contact_number:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Email</span>-
               <input value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Address</span>-
               <input value={data.address} onChange={(e)=>setData({...data,address:e.target.value})} />
               </div>
             
               <div className='flex justify-center mt-5'>
                <button onClick={()=>{
                   dispatch(updateContact(contact._id,data))
                    onClose()
                }} className='bg-green-500 text-white text-bold p-3 '>Save Changes</button>
               </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }