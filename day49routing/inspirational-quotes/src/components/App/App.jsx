import React, { useState, useEffect } from "react"
import "./App.scss"

import Wall from "../Wall/Wall.jsx"
const quoteInfo = {
  user: "mister_testing",
  text: "Testing your ability to survive...",
  commentsCount: 0,
  likesCount: 0
}

const quotes = [
  {
    key: "0",
    user: "rmaughan0",
    text: "Be the reason why a friend gets laid today.",
    commentsCount: 0,
    likesCount: 15
  },
  {
    key: "1",
    user: "fsalvati1",
    text:
      "The two things you need in order to obtain mainstream recognition is a bomb and solitude.",
    commentsCount: 0,
    likesCount: 4
  },
  {
    key: "2",
    user: "badenot3",
    text:
      "Make it so that the truth becomes your cat, and your cat becomes everything.",
    commentsCount: 0,
    likesCount: 3
  },
  {
    key: "3",
    user: "badjoee7",
    text: "You can make it so the a colleague calls the police.",
    commentsCount: 0,
    likesCount: 0
  },
  {
    key: "4",
    user: "orangas1",
    text:
      "If you are confronting you consciousness you are probably not soulless.",
    commentsCount: 0,
    likesCount: 0
  }
]

const App = () => {
  const [quotes, setQuotes] = useState([])
  const [newQuote, setNewQuote] = useState(quoteInfo)

  //didMount
  useEffect(() => {
    fetch("http://quotes.podlomar.org/api/quotes")
      .then(resp => resp.json())
      .then(data => {
        setQuotes(data)
      })
  }, [])

  //didupdate
  useEffect(() => {
    // fetch("http://quotes.podlomar.org/api/quotes", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   mimeType: "application/json",
    //   body: JSON.stringify(newQuote)
    // });
    quotes.push(newQuote)
  }, [newQuote])

  return <Wall quoteList={quotes} setNewQuote={setNewQuote} />
}

export default App
