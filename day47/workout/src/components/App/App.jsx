import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Question from '../Question/Question.jsx'
import './App.scss'

class App extends React.Component
{
    constructor(props) {
        super(props)

        this.state= {
            questions: [
                {
                    text: "Did Albert Einstein fail every subject in school that wasn't math or science?",
                    answers: undefined,

                },
                {
                    text: "Tea has more caffeine than soda or coffee",
                    answers: undefined,

                }
            ]
        }
    }
    handleAnswerClick = (e) =>
    {
        console.log("I'm answering the question")
    }
    
    render() {
        const questions = this.state.questions.map((question, index) => {
            return (
                <>
                <Question number ={index + 1} answer = {question.answer}>
                    {question.text}
                </Question>
                </>
            )
        })
        return questions;
        
    }
}

export default App
