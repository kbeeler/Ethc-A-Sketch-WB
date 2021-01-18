//selet element on the page. 
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 40; //true const 
//set up drawing

// const width = canvas.width;
// const height = canvas.height;
const { width, height} = canvas;


let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
//create random X and Y starting points

console.log(width, height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); //start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//write a draw function 
function draw({key}) {
    // console.log(key);
    //start the path
    hue += 5;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch(key) {
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x = x + MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y = y + MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x = x - MOVE_AMOUNT;
            break;
        default: 
            break ;
    }
    // x = x - MOVE_AMOUNT;
    // y = y - MOVE_AMOUNT;
    ctx.lineTo(x, y);
    ctx.stroke();
;
}

//write a handler for the keys 
function handleKey(e) {
    if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key});

    }
}

//clear/ shake funtion  

function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function() 
    {
        console.log('done the shake!')
        canvas.classList.remove('shake');
    }, {once: true}
    );
}


//listen for the arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);