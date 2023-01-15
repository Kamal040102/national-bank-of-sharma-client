import React from 'react'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Navbar from './Components/Navbar/Navbar.component'
import ATM from './Components/ATM/ATM.component'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <ATM />
    </div>
  )
}

export default App