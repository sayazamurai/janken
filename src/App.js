import React, { Component } from 'react'
import 'tachyons'
import './App.css'

class App extends Component {
  render() {
    const number = 5
    return <div className="avenir dark-gray lh-copy tc pt5">{number}</div>
  }
}

export default App
