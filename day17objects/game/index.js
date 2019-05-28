class Game {
    constructor(score, chips){
        this.score = score;
        this.chips = chips;
    }
}

class Chip {
    constructor(value, color, x, y){
        this.value = value;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    renderChip () {
        const gameField = document.querySelector('body');
        const newChip = document.createElement('div');
        newChip.className = `chip ${this.color}`;
        newChip.innerHTML = `<div>${this.value}</div>`
        gameField.appendChild('newChip');
    }
}