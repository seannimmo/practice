import React, { Component } from "react"
import "./App.scss"

import Results from "../Results/Results.jsx"
import Search from "../Search/Search.jsx"

const searchUrl =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch="
const randomUrl =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=random"

class App extends Component {
  state = {
    searchInput: "",
    randomArticle: undefined,
    searchResults: []
  }
  // const searchUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch="
  // const randomUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=random"

  //fired by event onChange. target is where you hit the key (input box).
  //react always handles inputs like this.
  handleTyping = e => {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleSearchClick = () => {
    fetch(searchUrl + this.state.searchInput)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => {
          const newSearchResults = prevState.searchResults.concat(data)
          console.log(data.query.search)
          return {
            searchResults: data.query.search
          }
        })
      })
  }

  componentDidMount() {
    fetch(randomUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data.query.random[0])
        this.setState(prevState => {
          randomArticle: data.query.random[0]
        })
      })
  }

  render() {
    return (
      <div className="app-container">
        <h1>Wikipedia Search</h1>
        <Search
          handleTyping={this.handleTyping}
          inputValue={this.state.searchInput}
          handleSearchClick={this.handleSearchClick}
        />
        <Results articles={this.state.searchResults} />
      </div>
    )
  }
}

export default App
