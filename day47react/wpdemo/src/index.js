import Answer from './answer/answer.js';
import Question from './question/Question.js';
import './main.css';
import './index.html';

const question = {
    title: 'If Einstain was so smart, why did he die?',
    body: 'If Einstein was so smart, why didn\'t he focus on becoming an immortal so he could spend his never-ending life discovering the theory of everything?',
    answers: [
      {
        user: 'Vilash Deshmukh',
        text: 'Because he was smart enough to understand that it was foolish of him to be thinking that he would ever become immortal in the Body that he was in.'
      },
      {
        user: 'Jung Hoon Lee',
        text: 'He was a physicist and not a biologist. Even if he were, he like us was limited by the technology of the times he lived in'
      },
      {
        user: 'Kris Lim',
        text: 'Because humanity better find several other planets that can sustain humans before finding the secret of immortality.'
      },
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const q = new Question(question.title, question.body, 0);
    const app = document.querySelector('#app');
    q.mount(app);
    
    const field = document.querySelector('.answers')
    question.answers.map(answer => new Answer(answer.text, answer.user).mount(field))
});