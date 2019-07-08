import React from "react"

const newQuote = {
  user: "mister_testing",
  text: "Testing your ability to survive...",
  commentsCount: 0,
  likesCount: 0
}

const Quote = ({ setNewQuote, text, user, commentsCount, likesCount }) => {
  return (
    <div className="quote">
      <div className="text">{text}</div>
      <div className="user">---{user}</div>
      <div className="comments">{commentsCount}</div>
      <div className="likes">{likesCount}</div>
      <input onClick={() => setNewQuote(newQuote)} type="submit" value="save" />
    </div>
  )
}

export default Quote
