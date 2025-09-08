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
        squareDiv.transparency = 0;
        squareDiv.addEventListener('mouseover', () => {
            if (squareDiv.transparency < 1) {
                squareDiv.transparency += .1;
            }
            const newColor = `rgb(0,0,0,${squareDiv.transparency})`
            squareDiv.style.setProperty('background-color', newColor);
    })
}}}

const root = document.querySelector(':root');
const containerSize = parseInt(getComputedStyle(root).getPropertyValue('--max-size'));
const button = document.querySelector('button');
button.addEventListener('click', () => {
    container.textContent = '';
    let sideLength = +prompt('How many squares should the sides of the grid be?');
    while (sideLength > 100) {
        sideLength = +prompt('How many squares should the sides of the grid be? \n *note: it can be at max 100');
    }
    [row, col] = [sideLength, sideLength];
    let boxSize = containerSize/sideLength;
    boxSize = boxSize+'px';
    root.style.setProperty('--box-size', boxSize);
    generateGrid();
})