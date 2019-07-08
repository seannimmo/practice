import React from 'react'
import './Chapter.scss'


const Chapter = (props) => {
        return (
            <div onClick={() => {
                props.handleClick(props.indexNumber)
            }}
                className="chapter">
                <div className="chapter__date">
                    <div className="day">{props.day}</div>
                    <div className="date">{props.date}</div>
                </div>
                <div className="chapter__info">
                    <div className="title">{props.title}</div>
                    <div className="summary">{props.summary}</div>
                </div>
            </div>

        )
    }
export default Chapter


