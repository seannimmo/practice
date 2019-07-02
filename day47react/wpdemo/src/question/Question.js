import './question.css';
export default class Question {
    constructor(title, body, score) {
        this.title = title;
        this.body = body;
        this.score = score;
    }

    scoreUp()
    {
        this.score++;
        this.update();
    }

    scoreDown()
    {
        this.score--;
        this.update();
    }
    
  

    render()
    {
        const element = document.createElement('div');
        element.className = 'question';
        element.innerHTML = `
            <div class="title">${this.title}</div>
            <div class="body">${this.body}</div>
            <div class="vote"><button id='up'>+</button>
            <button id="down">-</button> <div id='score'>${this.score}</div></div>
        `;

        const scoreField = element.querySelector('#score');
        
        const btnPlus = element.querySelector('.vote > #up');
        btnPlus.addEventListener('click', this.scoreUp.bind(this)); //binds this to the button

        const btnMinus = element.querySelector('#down');
        btnMinus.addEventListener('click', () => {this.scoreDown() }); //must use arrow function

        return element;

    }

    mount(parent)
    {
        this.element = this.render();
        parent.appendChild(this.element);
    }

    update()
    {
        const counter = this.element.querySelector('#score');
        counter.textContent = this.score;
    }

}