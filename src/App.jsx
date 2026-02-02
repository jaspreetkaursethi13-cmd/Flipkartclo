import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from './Pages/Hero'
import Swiper from './Pages/Swiper'
import Topproduct from './Pages/Topproduct'
import Topdeals from './Pages/Topdeals'
function App() {
  return (
    <>
      <div className='h-screen bg-gray-200'>
        <Navbar />
        <Hero />
        <Swiper />
        <Topproduct />
        <Topdeals />
      </div>
    </>
  )
}

export default App