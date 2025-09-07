import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/Herosection/Herosection'
import Aboutme from './Components/Aboutme/Aboutme'
import Aboutcihs from './Components/Aboutcihs/Aboutcihs'
import Footer from './Components/footer/Footer'
import Collab from './Components/Collab/Collab'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Aboutme/>
      <Aboutcihs/>
      <Collab/>
      <Footer/>
    </div>
  )
}

export default App
