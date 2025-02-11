import React from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'

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
