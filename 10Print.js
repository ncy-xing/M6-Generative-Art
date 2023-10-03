var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var step = 20;
var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
ctx.scale(dpr, dpr);


// Make a blue rectangle!
ctx.fillStyle = "blue";
ctx.fillRect(15, 20, 50, 200);

// Draw a randomized pattern on the screen
ctx.lineCap = 'square';
ctx.lineWidth = 2;


function draw(x, y, width, height) {
    var leftToRight = Math.random() >= 0.5;

    if (leftToRight) {
        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y + height);
    } else {
        ctx.moveTo(x + width, y);
        ctx.lineTo(x, y + height);
    }
    
    ctx.stroke(); 
}

for (var x = 0; x < size; x += step) {
    console.log("drawing on x = " + x);
    for (var y = 0; y < size; y += step) {
        draw(x, y, step, step);
    }
}  