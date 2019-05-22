import React, { Component } from 'react'

class DiceRoller extends Component {
  state = {
    randomNum: 0,
    pastResults: []
  }
  rollDice = () => {
    console.log(this.state.randomNum)
    const newNum = Math.ceil(Math.random() * 6 + 1)
    this.setState({
      randomNum: newNum,
      pastResults: this.state.pastResults.concat(this.state.randomNum)
    })
  }

  render() {
    return (
      <>
        <section className="dice-container">
          <h1 className="dice-display">{this.state.randomNum}</h1>
          <button onClick={this.rollDice}>Press Button</button>
          <uL>
            {this.state.pastResults.map(roll => {
              return <li>{roll}</li>
            })}
          </uL>
        </section>
      </>
    )
  }
}

export default DiceRoller
