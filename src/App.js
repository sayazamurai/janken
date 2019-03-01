/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { Component } from 'react'
import 'modern-normalize'
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
      <div
        css={css`
          font-family: avenir;
          text-align: center;
          padding-top: 50px;
        `}
      >
        <div
          css={css`
            margin-bottom: 20px;
            font-size: 30px;
          `}
        >
          相手{' '}
          <span
            css={css`
              font-size: 40px;
            `}
          >
            {textToEmoji(this.state.rival)}
          </span>
        </div>
        <div
          css={css`
            margin-bottom: 20px;
            font-size: 30px;
          `}
        >
          自分{' '}
          <span
            css={css`
              font-size: 40px;
            `}
          >
            {textToEmoji(this.state.me)}
          </span>
        </div>
        <div
          css={css`
            margin-bottom: 20px;
            font-size: 30px;
          `}
        >
          結果 {this.state.result}
        </div>
        <div>
          <button
            onClick={this.buttonClickGoo}
            css={css`
              font-size: 30px;
              border-radius: 5px;
              border: 2px solid #cf7dac;
              padding: 10px 20px;
              margin-bottom: 20px;
            `}
          >
            <Twemoji emoji="✊" />
          </button>{' '}
          <button
            onClick={this.buttonClickChoki}
            css={css`
              font-size: 30px;
              border-radius: 5px;
              border: 2px solid #cf7dac;
              padding: 10px 20px;
              margin-bottom: 20px;
            `}
          >
            <Twemoji emoji="✌️" />
          </button>{' '}
          <button
            onClick={this.buttonClickPa}
            css={css`
              font-size: 30px;
              border-radius: 5px;
              border: 2px solid #cf7dac;
              padding: 10px 20px;
              margin-bottom: 20px;
            `}
          >
            <Twemoji emoji="🖐" />
          </button>
        </div>
        <div
          css={css`
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 20px;
          `}
        >
          {this.state.win}勝{this.state.lose}敗
        </div>
        <button
          onClick={this.buttonClickReset}
          css={css`
            border-radius: 5px;
            border: 2px solid #cf7dac;
            padding: 10px 20px;
            margin-bottom: 20px;
          `}
        >
          やり直す
        </button>
      </div>
    )
  }
}

export default App
