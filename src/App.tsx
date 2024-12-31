import React from 'react'
import './components/css/main.css'
import Navbar from './components/Navbar'
import Sections from './components/Sections'
import Footer from './components/Footer'
import Cv from './components/Cv'
import ContextProvider from './context/Context'

const App = () => {
  return (
    <div className='App'>
      <ContextProvider>
        <Navbar />
        <Sections />
        <Cv />
        <Footer />
      </ContextProvider>
    </div>
  )
}

export default App
