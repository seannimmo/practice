import React from 'react'
import ReactDOM from 'react-dom'
import './Question.scss'

export default class Question extends React.Component {
    
    render()
    {
        const { text } = this.props;
        return (
            <div className='question_container'>
                <h3 className='question_number'>{ this.props.number }</h3>
                <h3 className='question_text'>{ this.props.children } </h3>
                <button>Yes</button>
                <button>No</button>
            </div>
        )
    }
}