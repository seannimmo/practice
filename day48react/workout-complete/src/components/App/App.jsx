import React, { Component } from 'react'

import Chapter from '../Chapter/Chapter.jsx'
class App extends Component {
    state= {
        chapter: []
    }
    //react is asynchronous
    componentDidMount() {
        this.setState({
            isLoading: true,
        })
        //make an api call to some end point
        //update state with that data
        //fetch
        //this.setState(NewData)
        fetch('http://bootcamp.podlomar.org/api/courses')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                chapter: data,
                isLoading: false
            })
        })
    }

    handleClick = (indexNumber) => {
        this.setState(prevState => {
            const newState = { ...prevState }
            newState.chapters[indexNumber].done = !prevState.chapters[indexNumber].done
            return newState
        })
    }
    render() {
        
        const chapters = this.state.chapter.map((chapter, index) => {
            return (
                <Chapter
                    key={`chapter-${index}`}
                    date={chapter.date}
                    day={chapter.day}
                    summary={chapter.summary}
                    title={chapter.title}
                    indexNumber={chapter.index}
                >
                </Chapter>
            )
        })
        return (
            <div style={{
                backgroundColor: 'lightgray',
                padding: '2rem',
            }}>
            {chapters}
            </div>
        )
    }
}

export default App
