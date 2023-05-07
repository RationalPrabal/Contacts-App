import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
  import {RiDeleteBin5Line} from "react-icons/ri"
import { useDispatch } from 'react-redux'
import { deleteContact } from '@/redux/contacts/action'
 export function DeleteModal({_id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch =useDispatch()
    return (
      <>
       
       <RiDeleteBin5Line onClick={onOpen} className='text-red-900 cursor-pointer'/>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Contact</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
          <div className='font-bold'>
            <p>You want to delete this Contact for Sure? </p>
          <div className='flex justify-around mt-8'>
            <button  onClick={()=>{
dispatch(deleteContact(_id))
onClose()

            }}  className='bg-red-700 text-white rounded-md px-4 py-2'>Delete</button>
            <button onClick={onClose}  className='bg-green-400 text-white rounded-md px-4 py-2'>Cancel</button>
            </div>
          </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }