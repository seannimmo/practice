import React from "react"
import Input from "./Input.jsx"
import Return from "./Return.jsx"
import "../index.html"
import "../index.js"

const recalcs = {
  m: 1,
  km: 1000,
  mi: 1609.344,
  cm: 0.01,
  ft: 0.3048,
  yd: 0.9144
}

export default class App extends React.Component {
  state = {
    number: "",
    resultValue: 0,
    resultUnit: "",
    m: 0,
    km: 0,
    cm: 0,
    mi: 0,
    ft: 0,
    yd: 0
  }
  handleChange = e => {
    this.setState(
      {
        number: e.target.value
      },
      () => {
        console.log(this.state.number)
      }
    )

    this.findValueandUnit()
  }

  findValueandUnit = () => {
    const valuePattern = /(\d+) ([a-z]+)/
    let result1 = valuePattern.exec(this.state.number)
    if (result1) {
      this.setState({
        resultValue: result1[1],
        resultUnit: result1[2]
      })
      this.recalculate()
    }
  }

  recalculate = () => {
    this.state.resultUnit
    this.setState({
      km: this.state.resultValue / recalcs.m / recalcs.km,
      mi: this.state.resultValue / recalcs.m / recalcs.mi,
      cm: this.state.resultValue / recalcs.m / recalcs.cm,
      ft: this.state.resultValue / recalcs.m / recalcs.ft,
      yd: this.state.resultValue / recalcs.m / recalcs.yd
    })
  }

  render() {
    return (
      <div id="page">
        <h1>The Recalculator</h1>
        <Input handleChange={this.handleChange} />
        <Return
          km={this.state.km}
          mi={this.state.mi}
          cm={this.state.cm}
          ft={this.state.ft}
          yd={this.state.yd}
        />
      </div>
    )
  }
}
