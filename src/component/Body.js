import React from 'react'
import { Cart } from './body/Cart'
import { Payment } from './body/Payment'
import { Shipping } from './body/Shipping'

export const Body = () => {
  return (
    <div className="mt-2 mb-4">
  <div className="row">
    <div class="col-sm ml-2">
      <Shipping/>
    </div>
    <div className="col-sm mt-2">
      <Payment/>
    </div>
    <div className="col-sm mx-2">
      <Cart/>
    </div>
  </div>
</div>
  )
}
