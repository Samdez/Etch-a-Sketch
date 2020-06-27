const container = document.getElementById('container');
let square = document.createElement('div'); 
const btn = document.getElementById('btn');




function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(){
    let rows = prompt('Which size do you want?');
    let squaresize = 480 / rows;
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < rows; j++){
        square = document.createElement('div');
        square.classList.add('colored_square');
        square.style.width = squaresize + 'px';
        square.style.height = squaresize + 'px';  
        container.appendChild(square);
        container.appendChild(document.createElement('br'));
        
        let squareColor = getRandomColor();
        square.addEventListener('mouseenter', function(e){
            e.target.style.backgroundColor = squareColor;
        });
        square.addEventListener('mouseleave', function(e){
            e.target.style.backgroundColor = squareColor;
        });
        }
    }
}

createGrid();

btn.addEventListener('click', function(){
    container.innerHTML = '';
    createGrid();
}
)




