import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <News/>
            </div>
            <div className="col-md-4">
              <News/>
            </div>
            <div className="col-md-4">
              <News/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
