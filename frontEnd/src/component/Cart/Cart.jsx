import React from 'react'
import CartItem from './CartItem'
import { Divider } from '@mui/material'
import AddressSection from './AddressSection'

const CartItems=[1,1]

const Cart = () => {
  const createOrderUsingSelectedAddress = () =>{
    
  }
  return (
    <div>
      <main className='lg:flex justify-between'>
        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
          {CartItems.map((item)=>(<CartItem/>))}
          <Divider></Divider>
          <div className='billDretails px-5 text-sm'>
            <p className='font-extralight py-5'>Bill Details</p>
            <div className='space-y-3'>
              <div className='flex justify-between text-gray-400'>
                <p>Item Total</p>
                <p>$400</p>
              </div>
              <div className='flex justify-between text-gray-400'>
                <p>Delivery Fee</p>
                <p>$40</p>
              </div>
              <div className='flex justify-between text-gray-400'>
                <p>Tax</p>
                <p>$4</p>
              </div>
              <div className='flex justify-between text-gray-400'>
                <p>Fees</p>
                <p>$0</p>
              </div>
              <Divider></Divider>
              <div className='flex justify-between text-gray-400'>
                <p>Total Pay</p>
                <p>$444</p>
              </div>
            </div>
          </div>
        </section>
        
        <Divider orientation='vertical' flexItem/>
        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
          <div>
            <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
            <div className='flex gap-5 flex-wrap justify-center'>
              {[1,1,1].map((item)=>(<AddressSection item={item} showButton={true} handleSelectAddress={createOrderUsingSelectedAddress}/>))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Cart
