import React from "react"
import Quote from "../Quote/Quote.jsx"

const Wall = ({ quoteList, setNewQuote }) => (
  <>
    {quoteList.map(({ key, user, text, commentsCount, likesCount }) => (
      <Quote
        key={`quote_${key}`}
        user={user}
        text={text}
        commentsCount={commentsCount}
        likesCount={likesCount}
        setNewQuote={setNewQuote}
      />
    ))}
  </>
)

export default Wall
