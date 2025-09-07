const container = document.querySelector('.container');
let row = 16;
let col = 16;

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        const squareDiv = document.createElement('div');
        squareDiv.className = 'square';
        container.appendChild(squareDiv);
    }
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    })
});