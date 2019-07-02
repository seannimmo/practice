import React from 'react';
import './Question.scss'
import Button from '../Button/Button.jsx'

const Question = (props) => {
    let noSelected = '';
    return (
        <div className='question-container'>
            <div className='question-text-wrapper'>
                <h3 className='question-number'>{props.number}</h3>
                <h3 className='question-text'>{props.children}</h3>
            </div>
            <div className='question-answers'>
                <Button 
                    handleAnswerClick = {props.handleAnswerClick}
                >Yes </Button>
                <Button 
                    handleAnswerClick = {props.handleAnswerClick}
                >No </Button>
            </div>
        </div>
    )
}

export default Question;
