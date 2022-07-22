import React from 'react'
import black from '../../assets/cart/black.jpg';
import white from '../../assets/cart/white.jpg';
export const Cart = () => {
    return (
        <div>
            <p>Your cart</p>
            <div className=" card border-0">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className='col md-4'>
                        <img className="card-img img-thumbnail rounded-circle w-50 h-50" src={black} alt="black" />
                    </div>
                    <div className="col md-8 p-0">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div>
                                <p className='m-0'><h6>T-Shirt</h6></p>
                                <p className='m-0'><h6>Summer Vibes</h6></p>
                                <div className='card-text'>
                                    <small className='text-secondary'>#261311</small>
                                </div>
                            </div>
                            <div>
                                <p>$89.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-0">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className='col' >
                        <img className="card-img img-thumbnail rounded-circle w-50 h-50" src={white} alt="white" />
                    </div>
                    <div className="col">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div>
                                <p className='m-0 '><h6>Basic Slim</h6></p>
                                <p className='m-0'><h6>Fit T-shirt</h6></p>
                                <div className='card-text'>
                                    <small className='text-secondary'>#212315</small>
                                </div>
                            </div>
                            <div>
                                <p>$69.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button className="d-flex border justify-content-between rounded-5 p-2 w-50 cost-btn">
                    <p className="mb-0 text-secondary">Total cost</p>
                    <p className="mb-0">$159,98</p>
                </button>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-5 text-secondary'>
                <div className="me-3">
                    <i className='fa-solid fa-truck'></i>
                </div>
                <div>
                    <p className='mb-0'>You are <span style={{fontweight:"bold"}}>$30,02</span> away</p>
                    <p className='mb-0'>from free shipping!</p>
                </div>
            </div>
        </div>
    )
}
