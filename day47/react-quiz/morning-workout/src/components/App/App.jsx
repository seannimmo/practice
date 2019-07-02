import React, { Component } from 'react';
import Question from '../Question/Question.jsx';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {
                    text: "Albert Einstein failed every subject in school that wasn't math or physics.",
                    answer: undefined,
                    correctAnswer: false,
                    isCorrect: undefined,
                },
                {
                    text: "Franklin Roosevelt's face can be seen on Mount Rushmore",
                    answer: undefined,
                    correctAnswer: false,
                    isCorrect: undefined,

                },
                {
                    text: "Tea has more caffeine than soda and coffee",
                    answer: undefined,
                    correctAnswer: true,
                    isCorrect: undefined,

                },
            ]
        }
    }

    handleAnswerClick = (questionNumber, answer) => {
        console.log(`I'm trying to answer the question ${questionNumber}`)
        this.setState(prevState => {
            questions: prevState.questions.map((question, index) => {
                if(index === questionNumber - 1) {
                    question.answer = answer;
                    return question
                }
                return question
            })
        })
    }

    render() {
        //map -> current value, index, array map is called upon
        const questionComponents = this.state.questions.map((question, index) => {
            const questionNumber = index + 1
            return (
                <Question 
                    key={`question-${questionNumber}`}
                    number={questionNumber} 
                    answer={question.answer}
                    //pass function to child through props
                    handleAnswerClick={this.handleAnswerClick}
                    correctAnswer = {question.correctAnswer}
                >
                    {question.text}
                </Question>
            )
        })
        return (
            <>
                {questionComponents}
            </>
        )
    }
}

export default App;
