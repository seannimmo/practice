import React, { Component } from 'react'

class App extends Component {
    state = {
        character: {},
        films: [],
        characterNames: [],
    }

    loadCharacter = (characterNumber) => {
        fetch(`https://swapi.co/api/people/${characterNumber}`)
        .then(res => res.json())
        .then(data => {
            this.setState(prevState => {
                const newCharacterNames = prevState.characterNames.concat(data.name)
                console.log(data)
                return {
                    characterNames: newCharacterNames,
                }
            })
        })
    }
    //finish loadFilms
    loadFilms = (characterName) => {
        this.state.character.films.map((film, index) => {
            fetch(film)
            .then(res => res.json())
            .then(data => {
                this.setState(prevState => {
                    const films = prevState.films.concat(data)
                    return {
                        films
                    }
                })
            })
        })
    }

    componentDidMount() {
        for(let i = 1; i <= 25; i++) {
            this.loadCharacter(i)
        }
    }

    render() {
        const namesList = this.state.characterNames.map((name, index) => {
            return (
                <div onClick={() => {this.loadFilms(name)}} key={`name-${index}`}>
                    <h2>{name}</h2>
                </div>
            )
        })
        return (
            <div>
             <h1>Star Wars!</h1>
             <div>{namesList}</div>
            </div>
        )
    }
}

export default App
