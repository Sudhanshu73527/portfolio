import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/Herosection/Herosection'
import Aboutme from './Components/Aboutme/Aboutme'
import Aboutcihs from './Components/Aboutcihs/Aboutcihs'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Aboutme/>
      <Aboutcihs/>
      <Footer/>
    </div>
  )
}

export default App
