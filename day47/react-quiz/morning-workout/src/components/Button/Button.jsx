import React from 'react'

export default const Button = (props) => {
    return (
        <button 
                className={yesSelected ? 'question-selected' : '' }
                onClick={() => props.handleAnswerClick(props.number, true)}
        >{props.children}
        </button>
    )
}