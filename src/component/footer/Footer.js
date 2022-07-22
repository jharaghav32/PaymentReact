import React from 'react'
import './footer.css'
export const Footer = () => {
  return (
    <div className='container-fluid navbar footer '>
      <div ><i className="fa-solid fa-arrow-left-long  "></i>Back</div>
      < div className="  pr-5 " >
        <button type="button" className="btn py-2 mr-5 shopping ">CONTINUE SHOPPING</button>

        <button type="button" className="btn py-2 mr-5 payment">PROCEED TO PAYMENT</button>

      </div>
    </div>
  )
}
