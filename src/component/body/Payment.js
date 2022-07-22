import React from 'react'
import paypal from '../../assets/payment/paypal.png';
import visa from '../../assets/payment/vis.png';
import maestro from '../../assets/payment/maestro.png';
import master from '../../assets/payment/master.png';
import discover from '../../assets/payment/discover.png';
import ideal from '../../assets/payment/ideal.png';
import inpost from '../../assets/payment/inpost.png';
import dpd from '../../assets/payment/dpd.png';
import dhl from '../../assets/payment/dhl.png';
import fedex from '../../assets/payment/fedex.png';



export const Payment = () => {
  return (
    <div>
    <div>
        <p>Payment Method</p>
        <div className="row">
    <div className="col">
    <button className="w-100 bg-white border rounded-5 d-flex align-items-center justify-content-center p-1 payment-btn">
                            <div className="m-2">
                                <img src={paypal} height="25px" width="100%" alt="" />
                            </div>
                        </button>
    </div>
    <div className="col">
    <button className="w-100 bg-white border rounded-5 d-flex align-items-center justify-content-center p-1 payment-btn">
                            <div className="m-2">
                                <img src={visa} height="25px" width="100%" alt="" />
                            </div>
                        </button>
    </div>
    <div className='col'>
    <button className="w-100 bg-white border rounded-5 d-flex align-items-center justify-content-center p-1 payment-btn">
                            <div className="m-2">
                                <img src={master} height="25px" width="100%" alt="" />
                            </div>
                        </button>
    </div>
  </div>
  <div className="row mt-4">
    <div className="col">
    <button className="w-100 bg-white border rounded-5 d-flex align-items-center justify-content-center p-1 payment-btn">
                            <div className="m-2">
                                <img src={maestro} height="25px" width="100%" alt="" />
                            </div>
                        </button>
    </div>
    <div className="col">
    <button className="w-100 bg-white border rounded-5 d-flex align-items-center justify-content-center p-1 payment-btn">
                            <div className="m-2">
                                <img src={discover} height="25px" width="100%" alt="" />
                            </div>
                        </button>
    </div>
    <div className="col">
    <button className="w-100 bg-white border rounded-5 d-flex align-items-center justify-content-center p-1 payment-btn">
                            <div className="m-2">
                                <img src={ideal} height="25px" width="100%" alt="" />
                            </div>
                        </button>
    </div>
  </div>
    </div>
    <div className='mt-5'>
        <p>Delivery Method</p>
    <div className="row">
    <div className="col">
    <button className="w-100 bg-white border rounded-5 d-flex align-items-center justify-content-center p-2">
                            <div className="d-flex m-2 justify-content-between align-items-center">
                                <img src={inpost} height="25px" width="100%" alt="" />
                                <p className="mb-0 ms-3">$20.00</p>
                            </div>
                        </button>
    </div>
    <div className="col">
    <button className="w-100 bg-white border rounded-5 d-flex align-items-center justify-content-center p-2">
                            <div className="d-flex m-2 justify-content-between align-items-center">
                                <img src={dpd} height="25px" width="100%" alt="" />
                                <p className="mb-0 ms-3">$12.00</p>
                            </div>
                        </button>
    </div>
  </div>
  <div className="row mt-4">
    <div className="col">
    <button className="w-100 bg-white border rounded-5 d-flex align-items-center justify-content-center p-2">
                            <div className="d-flex m-2 justify-content-between align-items-center">
                                <img src={dhl} height="10px" width="100%" alt="" />
                                <p className="mb-0 ms-3">$15.00</p>
                            </div>
                        </button>
    </div>
    <div className="col">
    <button className="w-100 bg-white border rounded-5 d-flex align-items-center justify-content-center p-2">
                            <div className="d-flex m-2 justify-content-between align-items-center">
                                <img src={fedex} height="10px" width="100%" alt="" />
                                <p className="mb-0 ms-3">$10.00</p>
                            </div>
                        </button>
    </div>
    
  </div>
    </div>
</div>
  )
}
