import React, { Component } from 'react'
import 'tachyons'
import './App.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

// 0 = ぐー
// 1 = ちょき
// 2 = ぱー

const getRival = () => {
  const result = getRandomInt(3)
  if (result === 0) {
    return 'ぐー'
  }
  if (result === 1) {
    return 'ちょき'
  }
  if (result === 2) {
    return 'ぱー'
  }
}

class App extends Component {
  state = {
    win: 0,
    lose: 0,
    me: '?',
    rival: '?',
    result: '?'
  }

  buttonClickGoo = () => {
    this.setState({
      me: 'ぐー'
    })
    const rival = getRival()
    this.setState({ rival: rival })

    if (rival === 'ちょき') {
      this.setState({
        win: this.state.win + 1,
        result: '勝ち😀'
      })
    }
    if (rival === 'ぱー') {
      this.setState({
        lose: this.state.lose + 1,
        result: '負け😭'
      })
    }
    if (rival === 'ぐー') {
      this.setState({
        result: 'あいこ🙄'
      })
    }
  }

  buttonClickChoki = () => {
    this.setState({
      me: 'ちょき'
    })
    const rival = getRival()
    this.setState({ rival: rival })

    if (rival === 'ぱー') {
      this.setState({
        win: this.state.win + 1,
        result: '勝ち😀'
      })
    }
    if (rival === 'ぐー') {
      this.setState({
        lose: this.state.lose + 1,
        result: '負け😭'
      })
    }
    if (rival === 'ちょき') {
      this.setState({
        result: 'あいこ🙄'
      })
    }
  }

  buttonClickPa = () => {
    this.setState({
      me: 'ぱー'
    })
    const rival = getRival()
    this.setState({ rival: rival })

    if (rival === 'ぐー') {
      this.setState({
        win: this.state.win + 1,
        result: '勝ち😀'
      })
    }
    if (rival === 'ちょき') {
      this.setState({
        lose: this.state.lose + 1,
        result: '負け😭'
      })
    }
    if (rival === 'ぱー') {
      this.setState({
        result: 'あいこ🙄'
      })
    }
  }

  buttonClickReset = () => {
    this.setState({
      win: 0,
      lose: 0,
      me: '?',
      rival: '?',
      result: '?'
    })
  }

  render() {
    return (
      <div className="avenir tc pt5">
        <div className="mb2 f3">相手 {this.state.rival}</div>
        <div
          className="mb2
         f3"
        >
          自分 {this.state.me}
        </div>
        <div className="mb4 f3">結果 {this.state.result}</div>
        <div>
          <button
            onClick={this.buttonClickGoo}
            className="link dim br1 ba ph3 pv2 mb2 dib dark-pink b--dark-pink"
          >
            ぐー
          </button>{' '}
          <button
            onClick={this.buttonClickChoki}
            className="link dim br1 ba ph3 pv2 mb2 dib dark-pink b--dark-pink"
          >
            ちょき
          </button>{' '}
          <button
            onClick={this.buttonClickPa}
            className="link dim br1 ba ph3 pv2 mb2 dib dark-pink b--dark-pink"
          >
            ぱー
          </button>
        </div>
        <div className="mt4 mb4 f3">
          {this.state.win}勝{this.state.lose}敗
        </div>
        <button
          onClick={this.buttonClickReset}
          className="link dim br1 ba ph3 pv2 mb2 dib dark-pink b--dark-pink"
        >
          やり直す
        </button>
      </div>
    )
  }
}

export default App
