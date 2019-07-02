import React from 'react';

export default class Message extends React.Component {
    render(){
        return (
            <div className="message">
                <div className="title">{ this.props.title} </div>
                <div className="body">{this.props.body }</div>
            </div>
        );
    }
}

