import React, { Component } from 'react'
import 'tachyons'
import './App.css'

class App extends Component {
  state = {
    number: 0
  }

  buttonClickPlus = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  buttonClickMinus = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div className="avenir tc pt5">
        <div className="mb4 f2">{this.state.number}</div>
        <button
          onClick={this.buttonClickPlus}
          className="f3 link dim br1 ba ph3 pv1 mb2 dib dark-pink b--dark-pink"
        >
          +
        </button>{' '}
        <button
          onClick={this.buttonClickMinus}
          className="f3 link dim br1 ba ph3 pv1 mb2 dib dark-pink b--dark-pink"
        >
          —
        </button>
      </div>
    )
  }
}

export default App
