import React from 'react'

const Chapter = (props) => {
    const boxStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        backgroundColor: props.done ? 'green' : '#3E9BD1',
        height: '100px',
        width: '100px',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: ''
    }
    return (
        <div style={{
            display: 'flex',
            margin: '1rem',
            backgroundColor: 'white'
        }}>
            <div
                style={boxStyle}
                onClick={() => {
                    props.handleClick(props.indexNumber)
                }}
            >
                <span>{props.day}</span>
                <p>{props.date}</p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px'
            }}>
                <h4>{props.title}</h4>
                <p>{props.summary}</p>
            </div>
        </div>
    )
}

export default Chapter
