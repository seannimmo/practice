import React from 'react';
import './question.scss';

export default class Question extends React.Component{
    

    // scoreUp()
    // {
    //     this.score++;
    //     this.update();
    // }

    // scoreDown()
    // {
    //     this.score--;
    //     this.update();
    // }
    
  

    render()
    {
       return (
        <>
            <div className="container">
                <div className="question">
                    <div className="title">{this.props.title }</div>
                    <div className="body">{this.props.body}</div>
                </div>
            </div>
             {/* <div class="vote"><button id='up'>+</button>
            <button id="down">-</button> <div id='score'>${this.score}</div></div> */}
        </> 
       );

        // const scoreField = element.querySelector('#score');
        
        // const btnPlus = element.querySelector('.vote > #up');
        // btnPlus.addEventListener('click', this.scoreUp.bind(this)); //binds this to the button

        // const btnMinus = element.querySelector('#down');
        // btnMinus.addEventListener('click', () => {this.scoreDown() }); //must use arrow function

        // return element;

    }


    // update()
    // {
    //     const counter = this.element.querySelector('#score');
    //     counter.textContent = this.score;
    // }

}

