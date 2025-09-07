// Initial Call
const container = document.querySelector('.container');
let row = 16;
let col = 16;
generateGrid()

// Functions
function generateGrid() {for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        const squareDiv = document.createElement('div');
        squareDiv.className = 'square';
        container.appendChild(squareDiv);
        squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.backgroundColor = 'black';
    })
}}}

const root = document.querySelector(':root');
const containerSize = parseInt(getComputedStyle(root).getPropertyValue('--max-size'));
const button = document.querySelector('button');
button.addEventListener('click', () => {
    container.textContent = '';
    const sideLength = +prompt('How many squares should the sides of the grid be?');
    [row, col] = [sideLength, sideLength];
    let boxSize = containerSize/sideLength;
    boxSize = boxSize+'px';
    root.style.setProperty('--box-size', boxSize);
    generateGrid();
})