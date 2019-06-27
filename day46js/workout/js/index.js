

document.addEventListener('DOMContentLoaded', () => {
    const question = new Question('My question', 'nice sexy body', 0);
    const app = document.querySelector('#app');
    question.mount(app);
});