import React, { Component } from 'react'
import "../CounterButton/CounterButton.jsx"
import "../CounterDisplay/CounterDisplay.jsx"



export default class App extends Component {
    constructor() {
        super(props)
        this.state = {
            counter: 0,
        }
    }
    //Pass a function into setState. 
    // The first argument of the function passed into setState is a snapshot of the previous state.
    //in the function, return the changed state, which is an object. 
    //counterButton and CounterDisplay cannot directly communicate. They must communicate between their parent.
    //So, the click and updating of the number must be handled in the App. 
    handleClick = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1,
            }
        })
    }


    render() {
        return (
            <>
            <h1>I'm a counter</h1>
            <CounterDisplay count={this.state.count} />
            <CounterButton handleClick={this.handleClick}/>
            </>
        )
    }
}