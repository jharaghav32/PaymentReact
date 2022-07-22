import React from 'react'
import { Body } from './component/Body'
import { Footer } from './component/footer/Footer'
import { Header } from './component/header/Header'
import { Navbar } from './component/navbar/Navbar'

export const Home = () => {
  return (
    <div>

        <Navbar/>
        <Header/>
        <Body/>
        <Footer/>
    </div>
  )
}
