import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function WebLayout() {
  return (
    <div>
      <Header />
      <main className='mt-[80px]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default WebLayout