import React from 'react'
import './header.css'



export const Header = () => {
    return (
        <div className='container-fluid navbar'>
            <div className='text '><h5 className='mx-2 px-2'>Shipping and Payment</h5></div>
            <div className='icon px-5 mx-5'>

                <span><i className="fa-solid fa-cart-shopping    shop"></i></span>
                <span ></span>
                <span><i className="fa-solid fa-truck cart"></i></span>


            </div>
        </div>

    )
}
