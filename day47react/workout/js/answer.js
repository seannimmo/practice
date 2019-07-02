class Answer 
{
    constructor(text, name){
        this.text = text;
        this.name = name;
    }

    render(){
        const element = document.createElement('div');
        element.className = 'answer';
        element.innerHTML = `
            <div class="body">${this.text}</div>
            <div class="name">${this.name}</div>
        `;

        return element;
    }

    mount(parent){
        this.element = this.render();
        parent.appendChild(this.element);
    }
}