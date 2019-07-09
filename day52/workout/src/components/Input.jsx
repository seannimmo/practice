import React, { Component } from "react"

export function Input(props) {
  return <input type="text" onChange={props.handleChange} />
}

export default Input
