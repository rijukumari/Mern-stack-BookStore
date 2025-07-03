import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Abouts() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen ">
        <About/>
      </div>
      <Footer/>
    </div>
  )
}

export default Abouts
