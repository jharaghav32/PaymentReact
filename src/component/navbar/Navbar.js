import React from 'react'
import './navbar.css'
import logo from '../../assets/logo/Logo.PNG'
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">

          <a className="navbar-brand" href="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-top mx-2" alt=""/>
            <span className='text-warning'>E-</span>Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent ">
            <ul className="navbar-nav  navbar-center ">

              <li className="nav-item mx-2 px-3">
                <a className="nav-link active  " aria-current="page" href="/">Men</a>
              </li>
              <li className="nav-item mx-2 px-3">
                <a className="nav-link active " href="/">Women</a>
              </li>
              <li className='nav-item mx-2 px-3'>
                <a className='nav-link active ' href="/">Kids</a>
              </li>

            </ul>
            <ul className='navbar-nav  navbar-right'>
              <li className='nav-item mx-3 px-1'>
                <a className='nav-link active' href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
              </li>
              <li className='nav-item mx-3 px-1'>
                <a className='nav-link active' href="/"><i className="fa-solid fa-user"></i></a>
              </li>
              <li className='nav-item mx-3 px-1'>
                <a className='nav-link active' href="/"><i className="fa-solid fa-cart-shopping"></i></a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <hr></hr>
    </div>
  )
}
