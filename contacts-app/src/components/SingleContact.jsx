import React from 'react' 


import { DeleteModal } from './DeleteModal'
import { EditModal } from './EditModal'
export default function SingleContact({contact}) {
  return (
    <div className='bg-pink-200 shadow-md p-4 font-bold italic space-y-3'>
        <div className='flex justify-between text-xl'>
            <p>Name</p>
            <p>{contact?.name}</p>
        </div>
      <div className='flex justify-between'>
<p>Number</p>
<p>{contact?.contact_number}</p>
      </div>
      <div className='flex justify-between'>
        <p>Email</p>
        <p>{contact?.email} </p>

      </div>
      <div className='flex justify-between'>
        <p>Address</p>
        <p>{contact?.address}</p>
      </div>
      <div  className='flex justify-between text-2xl'>
        
       <EditModal contact={contact} />
        <DeleteModal _id={contact._id}/>
      </div>
    </div>
  )
}
