import React from 'react';
import './answer.scss';

export default class Answer extends React.Component
{
    render(){
        const {answers} = this.props;

        
            return (
                answers.map(answer => {
                    <div className="answers">
                        <div class="body">{ answer.body}</div>
                        <div class="name">{ answer.name}</div>
                    </div>
            
                    })
            );
        
    }
}