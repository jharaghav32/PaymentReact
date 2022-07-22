import React from 'react'
import './shipping.css'
export const Shipping = () => {
  return (
    <div >

      <div>
        <a role="button" className='text-decoration-none px-10  py-2  ml-3 log' href='/login'>LOG IN</a>
        <a role="button" className='text-decoration-none  px-10  py-2 ml-3 sign ' href='/signup'>SIGN UP</a>
      </div> 
      <form className='flex mt-4 mx-4'>
        <p className=''>Shipping Information</p>
        <div>
          <input className='rounded-4 border mx-2 px-2 py-2 pl-7 w-60' type="text" name="Email" placeholder='Email' />
          <input className='rounded-4  border mx-2 px-2 py-2 pl-7 w-60' type="text" name="Address" placeholder='Address' />
          <input className='rounded-4 border mx-2 px-2 py-2 pl-7 my-4 w-60 block' type="text" name="First name" placeholder='First name' />
          <input className='rounded-4 border mx-2 px-2  py-2 pl-7 my-4 w-60 block' type="text" name="City" placeholder='City' />
        </div>
        <div className='ml-3'>
          <input className='rounded-4 border mx-2 px-2  py-2 pl-7 my-4 w-60' type="text" name="Last name" placeholder='Last name' />
          <input className='rounded-4 border mx-2 px-2 py-2 pl-7 my-4 w-60' type="text" name="Code" placeholder='Postal Code / ZIP' />
          <input className='rounded-4 border mx-2 px-2 py-2 pl-7 my-4  w-60 block' type="text" name="Phone" placeholder='Phone number' />
          <input className='rounded-4 border mx-2 px-2 py-2 pl-7 my-4 w-60' type="text" name="Code" placeholder='Poland' />
        </div>
      </form>
    </div>
  )
}
