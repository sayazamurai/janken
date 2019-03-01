import React, { Component } from 'react'
import 'tachyons'
import './App.css'
import Twemoji from './Twemoji'

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

const textToEmoji = text => {
  if (text === 'ぐー') {
    return <Twemoji emoji="✊" />
  } else if (text === 'ちょき') {
    return <Twemoji emoji="✌️" />
  } else if (text === 'ぱー') {
    return <Twemoji emoji="🖐" />
  }
}

class App extends Component {
  state = {
    win: 0,
    lose: 0,
    me: '',
    rival: '',
    result: ''
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
        result: (
          <>
            勝ち
            <Twemoji emoji="😀" />
          </>
        )
      })
    }
    if (rival === 'ぱー') {
      this.setState({
        lose: this.state.lose + 1,
        result: (
          <>
            負け
            <Twemoji emoji="😭" />
          </>
        )
      })
    }
    if (rival === 'ぐー') {
      this.setState({
        result: (
          <>
            あいこ
            <Twemoji emoji="🙄" />
          </>
        )
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
        result: (
          <>
            勝ち
            <Twemoji emoji="😀" />
          </>
        )
      })
    }
    if (rival === 'ぐー') {
      this.setState({
        lose: this.state.lose + 1,
        result: (
          <>
            負け
            <Twemoji emoji="😭" />
          </>
        )
      })
    }
    if (rival === 'ちょき') {
      this.setState({
        result: (
          <>
            あいこ
            <Twemoji emoji="🙄" />
          </>
        )
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
        result: (
          <>
            勝ち
            <Twemoji emoji="😀" />
          </>
        )
      })
    }
    if (rival === 'ちょき') {
      this.setState({
        lose: this.state.lose + 1,
        result: (
          <>
            負け
            <Twemoji emoji="😭" />
          </>
        )
      })
    }
    if (rival === 'ぱー') {
      this.setState({
        result: (
          <>
            あいこ
            <Twemoji emoji="🙄" />
          </>
        )
      })
    }
  }

  buttonClickReset = () => {
    this.setState({
      win: 0,
      lose: 0,
      me: '',
      rival: '',
      result: ''
    })
  }

  render() {
    return (
      <div className="avenir tc pt5">
        <div className="mb2 f3">
          相手 <span className="f1">{textToEmoji(this.state.rival)}</span>
        </div>
        <div
          className="mb4
         f3"
        >
          自分 <span className="f1">{textToEmoji(this.state.me)}</span>
        </div>
        <div className="mb4 f3">結果 {this.state.result}</div>
        <div>
          <button
            onClick={this.buttonClickGoo}
            className="f2 link dim br1 ba ph3 pv2 mb2 dib dark-pink b--dark-pink"
          >
            <Twemoji emoji="✊" />
          </button>{' '}
          <button
            onClick={this.buttonClickChoki}
            className="f2 link dim br1 ba ph3 pv2 mb2 dib dark-pink b--dark-pink"
          >
            <Twemoji emoji="✌️" />
          </button>{' '}
          <button
            onClick={this.buttonClickPa}
            className="f2 link dim br1 ba ph3 pv2 mb2 dib dark-pink b--dark-pink"
          >
            <Twemoji emoji="🖐" />
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
