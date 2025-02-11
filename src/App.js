import React from 'react'
import NavBar from './Components/NavBar'
export default function App() {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <News/>
      </div>
    </div>
  )
}
